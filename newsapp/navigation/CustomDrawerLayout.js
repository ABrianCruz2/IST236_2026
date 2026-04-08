// navigation/CustomDrawerLayout.js
import { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TabNavigator from './TabNavigator';
import BookmarkedNewsScreen from '../screens/BookmarkedNewsScreen';
import { BookmarksContext } from '../store/context/bookmarks-context';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.7;

function CustomDrawerLayout({ navigation }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDrawerScreen, setActiveDrawerScreen] = useState('tabs');
  const [translateX] = useState(new Animated.Value(-DRAWER_WIDTH));

  // subscribe to bookmarks context so this layout re-renders when bookmarks change //
  const bookmarksCtx = useContext(BookmarksContext);
  // we don't need to use bookmarksCtx directly here, just reading it is enough //

  function openDrawer() {
    setIsDrawerOpen(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  function closeDrawer() {
    Animated.timing(translateX, {
      toValue: -DRAWER_WIDTH,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  }

  function selectDrawerItem(screenKey) {
    setActiveDrawerScreen(screenKey);
    closeDrawer();
  }

  function Header() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {activeDrawerScreen === 'tabs' ? 'News' : 'Bookmarked News'}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <Header />

      <View style={styles.content}>
        {activeDrawerScreen === 'tabs' ? (
          <TabNavigator />
        ) : (
          // pass navigation down so bookmarked screen (and its list) can navigate //
          <BookmarkedNewsScreen navigation={navigation} />
        )}
      </View>

      {isDrawerOpen && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={closeDrawer}
          activeOpacity={1}
        />
      )}

      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Text style={styles.drawerTitle}>Menu</Text>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => selectDrawerItem('tabs')}
        >
          <Text style={styles.drawerItemText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => selectDrawerItem('bookmarks')}
        >
          <Text style={styles.drawerItemText}>Bookmarked News</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

export default CustomDrawerLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#222',
  },
  menuButton: {
    padding: 8,
    marginRight: 12,
  },
  menuText: {
    color: '#fff',
    fontSize: 22,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 2, height: 0 },
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  drawerItem: {
    paddingVertical: 12,
  },
  drawerItemText: {
    fontSize: 16,
  },
});