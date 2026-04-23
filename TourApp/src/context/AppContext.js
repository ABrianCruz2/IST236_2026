import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [selectedTour, setSelectedTour] = useState(null);

  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    date: '',
    });

    const availableDates = [
    '04/25/2026',
    '04/26/2026',
    '04/27/2026',
    '04/28/2026',
    '04/29/2026',
    '04/30/2026',
    '05/01/2026',
    '05/02/2026',
    '05/03/2026',
    '05/04/2026',
    ];

    const [bookings, setBookings] = useState([]);

    const tours = [
    { 
        id: 1, 
        name: 'Pecan Trail', 
        image: 'https://visitflo.com/wp-content/uploads/2026/03/Follow-the-SC-Pecan-Trail-Website.png',
        description: 'A relaxing countryside journey exploring pecan orchards, mills, and tastings.',
        flyer: 'https://picsum.photos/seed/flyer1/600' // placeholder
    },
    { 
        id: 2, 
        name: 'Southern Coastal', 
        image: 'https://static.wixstatic.com/media/505947_71249cec9b09462b8a324deda8967d8d~mv2.png/v1/fit/w_2500,h_1330,al_c/505947_71249cec9b09462b8a324deda8967d8d~mv2.png',
        description: 'Experience the beauty of the southern coastline with markets, views, and shops.',
        flyer: 'https://picsum.photos/seed/flyer2/600'
    },
    { 
        id: 3, 
        name: 'Foodie', 
        image: 'https://static.wixstatic.com/media/16f75b_2fca7161b77c4baeb261670bf2bb51cd~mv2.png/v1/fill/w_275,h_275,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/16f75b_2fca7161b77c4baeb261670bf2bb51cd~mv2.png',
        description: 'Savor the South one bite at a time—indulge in iconic flavors, hidden gems, and local favorites on a deliciously guided foodie tour full of charm!',
        flyer: 'https://resource.designwiz.com/designwiz/compressed/vibrant-culinary-adventure-food-tour-event-flyer-template-pw64ks9536102a.jpg'
    },
    { 
        id: 4, 
        name: 'Charming Wine', 
        image: 'https://guide.txwinelover.com/logos/profile/limage-1262.jpg',
        description: "Start your day with a breakfast buffet while you design and paint your own wine glass. We will be visiting 4 local wineries for tastings and you'll collect a unique wine charm at each stop!",
        flyer: 'https://picsum.photos/seed/flyer4/600'
    },
    { 
        id: 5, 
        name: 'Craft Crawl', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCfi1eaG1tT66P38led6wZTe4wCxhXs1hTA&s',
        description: 'Create, sip and explore - hop on this day tour for creative craft projects and craft cocktails - blending creativity, flavor and fun into one unforgettable craft crawl experience!',
        flyer: 'https://picsum.photos/seed/flyer5/600'
    },
    ];

  const stopsByTour = {
    1: [
      { id: 1, name: 'Pecan Orchard', description: 'Learn about local pecan farming.', image: 'https://picsum.photos/seed/orchard/200' },
      { id: 2, name: 'Pecan Tasting Room', description: 'Sample fresh pecans and treats.' },
      { id: 3, name: 'Historic Mill', description: 'Explore the old mill and its history.' },
    ],
    2: [
      { id: 1, name: 'Coastal Lookout', description: 'Beautiful ocean views.' },
      { id: 2, name: 'Seafood Market', description: 'Fresh catches and local vendors.' },
      { id: 3, name: 'Boardwalk Shops', description: 'Local crafts and souvenirs.' },
    ],
    3: [
    { 
        id: 1, 
        name: '9am Beachfront Kitchen & Bar – Breakfast & Biscuits and Gravy Class', 
        description: 'Learn to make Biscuits and Gravy with a Sandy Mary (our take on a Bloody Mary).',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    { 
        id: 2, 
        name: '11am Local on the Water – Charcuterie Board Class', 
        description: 'Charcuterie Board Class with Waterway Coconut Drink.',
        image: 'https://static.spotapps.co/website_images/ab_websites/119233_website/logo_new.png'
    },
    { 
        id: 3, 
        name: "2pm Original Benjamin's – Hushpuppy Lesson", 
        description: 'Learn to make hushpuppies with Lowcountry Punch.',
        image: 'https://www.originalbenjamins.com/wp-content/uploads/LogoRGB-1.png'
    },
    { 
        id: 4, 
        name: '4pm Uptwn Bistro – Pecan Pie Lesson', 
        description: 'Learn to make pecan pie with a Grilled Peach Smash drink.',
        image: 'https://bloximages.newyork1.vip.townnews.com/myhorrynews.com/content/tncms/assets/v3/editorial/9/da/9da2db98-e3fd-11ef-aa78-8f1313223377/67a3c6db65e80.image.jpg?resize=1396%2C785'
    },
    { 
        id: 5, 
        name: '6pm Drop Off – Beachfront Kitchen & Bar', 
        description: '',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    ],
    4: [
    { 
        id: 1, 
        name: '9am Beachfront Kitchen & Bar – Breakfast Buffet & Wine Glass Painting', 
        description: 'Breakfast buffet while you design and paint your own wine glass.',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    { 
        id: 2, 
        name: '12pm Silver Coast Winery – Ocean Isle, NC', 
        description: '',
        image: 'https://ncwine.org/wp-content/uploads/Silver-Coast-Winery_Ocean-Isle-Beach.jpg'
    },
    { 
        id: 3, 
        name: '1:30pm Grapefull Sisters Winery – Tabor City, NC', 
        description: '',
        image: 'https://static.wixstatic.com/media/be8f18_ccd6a0a964554cbaa5c492bfce5af692~mv2.jpeg/v1/fill/w_280,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tezza-0305.jpeg'
    },
    { 
        id: 4, 
        name: '3pm Barn View Winery – Loris, SC', 
        description: '',
        image: 'https://bloximages.newyork1.vip.townnews.com/myhorrynews.com/content/tncms/assets/v3/editorial/4/36/43618d2c-a5ce-11ef-a51b-f7442bcde841/673b74c058b78.image.jpg?resize=750%2C500'
    },
    { 
        id: 5, 
        name: '5pm Duplin Winery – North Myrtle Beach, SC', 
        description: '',
        image: 'https://vacationrentalsofnmb.com/wp-content/uploads/2025/02/dublin-winery-north-myrtle-beach.jpg'
    },
    { 
        id: 6, 
        name: '6:30pm Drop Off – Beachfront Kitchen & Bar', 
        description: '',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    ],
    5: [
    { 
        id: 1, 
        name: '8:30am Beachfront Kitchen & Bar – Breakfast Buffet & Oyster Shell Magnet', 
        description: 'Breakfast buffet with Bloody Mary and decorate an Oyster Shell Magnet.',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    { 
        id: 2, 
        name: '11am 2 Broke Teachers – Charcuterie Board & Bow Design', 
        description: '',
        image: 'https://s3.commentsold.com/2broketeachers/store_images/c430ddd9-6ee2-46c7-8733-8f584240e4aa'
    },
    { 
        id: 3, 
        name: '1:30pm Local on the Water – Craft Cocktail Class & Wood Ornament', 
        description: '',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2d/02/56/getlstd-property-photo.jpg?w=900&h=-1&s=1'
    },
    { 
        id: 4, 
        name: '4pm Uptwn Prime – Dessert & Canvas Painting', 
        description: '',
        image: 'https://uptwnprime.com/wp-content/uploads/2026/03/4-800x800-1.png'
    },
    { 
        id: 5, 
        name: '6pm Drop Off – Beachfront Kitchen & Bar', 
        description: '',
        image: 'https://beachfrontkitchenandbar.com/wp-content/uploads/bb-plugin/cache/Amslee-Agency-Portfolio-Logos-1-square-6d2777a228ad94af1430b1e46a9d11e0-x2cai9f6lhuk.png'
    },
    ],
  };

  return (
    <AppContext.Provider
      value={{
        selectedTour,
        setSelectedTour,
        bookingData,
        setBookingData,
        tours,
        stopsByTour,
        availableDates,
        bookings,
        setBookings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}