// navigation/CustomDrawerLayout.js
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

import TabNavigator from './TabNavigator';
import BookmarkedNewsScreen from '../screens/BookmarkedNewsScreen';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.7;

function CustomDrawerLayout({ navigation }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDrawerScreen, setActiveDrawerScreen] = useState('tabs'); // 'tabs' | 'bookmarks'
  const [translateX] = useState(new Animated.Value(-DRAWER_WIDTH));

  // open the drawer by sliding it in from the left //
  function openDrawer() {
    setIsDrawerOpen(true);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  // close the drawer by sliding it back out of view //
  function closeDrawer() {
    Animated.timing(translateX, {
      toValue: -DRAWER_WIDTH,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  }

  // switch between the two drawer destinations and close the drawer afterward //
  function selectDrawerItem(screenKey) {
    setActiveDrawerScreen(screenKey);
    closeDrawer();
  }

  // header bar with a menu button that triggers the drawer //
  function Header() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>

        {/* dynamically show the title based on which drawer screen is active */}
        <Text style={styles.headerTitle}>
          {activeDrawerScreen === 'tabs' ? 'News' : 'Bookmarked News'}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      {/* always show the header at the top */}
      <Header />

      {/* render either the tab navigator or the bookmarked news screen */}
      <View style={styles.content}>
        {activeDrawerScreen === 'tabs' ? (
          <TabNavigator />
        ) : (
          <BookmarkedNewsScreen />
        )}
      </View>

      {/* dimmed backdrop that closes the drawer when tapped */}
      {isDrawerOpen && (
        <TouchableOpacity style={styles.backdrop} onPress={closeDrawer} activeOpacity={1} />
      )}

      {/* animated drawer sliding in from the left */}
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Text style={styles.drawerTitle}>Menu</Text>

        {/* drawer item: main news tabs */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => selectDrawerItem('tabs')}
        >
          <Text style={styles.drawerItemText}>News</Text>
        </TouchableOpacity>

        {/* drawer item: bookmarked news */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => selectDrawerItem('bookmarks')}
        >
          <Text style={styles.drawerItemText}>Bookmarked News</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
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