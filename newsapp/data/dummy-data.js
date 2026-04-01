// dummy data for the news app //
// each item references the News model //


import News from '../models/news';

export const NEWS_ITEMS = [
  new News(
    'n1',
    'Congress Debates New Infrastructure Bill',
    '2026-03-15',
    'Jane Doe',
    'CNN',
    'Lawmakers in Washington continue negotiations on a sweeping infrastructure package aimed at modernizing transportation, broadband, and energy systems across the United States.',
    'https://media.npr.org/assets/img/2023/01/03/gettyimages-12459642161_custom-8d15dbc1956d7d3c276979c17daf2a7586693279-s1100-c50.jpg', // US Capitol //
    'us'
  ),

  new News(
    'n2',
    'Major Storm System Sweeps Across Midwest',
    '2026-03-18',
    'Michael Smith',
    'Fox News',
    'A powerful storm system brought heavy snow and strong winds to the Midwest, causing travel delays and widespread power outages.',
    'https://snowbrains.com/wp-content/uploads/2017/08/02-groundhog-day-blizzard-2011-min.jpg', // Blizzard //
    'us'
  ),

  new News(
    'n3',
    'Tech Giants Announce Joint AI Safety Initiative',
    '2026-03-20',
    'Laura Chen',
    'The Verge',
    'Several major technology companies announced a collaborative effort to establish shared standards for AI safety, transparency, and responsible development.',
    'https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg', // AI graphic //
    'tech'
  ),

  new News(
    'n4',
    'Breakthrough in Quantum Computing Achieved',
    '2026-03-22',
    'Raj Patel',
    'Wired',
    'Researchers revealed a new quantum architecture that significantly reduces error rates, marking a major step toward practical quantum computing.',
    'https://www.shutterstock.com/image-photo/concept-motherboard-picture-brain-technology-600w-2422220481.jpg', // Quantum computer //
    'tech'
  ),

  new News(
    'n5',
    'Global Leaders Meet to Discuss Climate Targets',
    '2026-03-10',
    'Amira Hassan',
    'BBC',
    'World leaders gathered for a climate summit focused on accelerating emissions reductions and strengthening global environmental commitments.',
    'https://d.newsweek.com/en/full/2063913/g7-leaders-meeting-brussels.jpg', // UN Assembly //
    'world'
  ),

  new News(
    'n6',
    'Historic Peace Agreement Signed in Region',
    '2026-03-05',
    'Carlos Alvarez',
    'Al Jazeera',
    'After years of negotiations, opposing factions signed a landmark peace agreement expected to bring long-term stability to the region.',
    'https://i.ytimg.com/vi/YTxrUBvws-Q/hqdefault.jpg', // handshake //
    'world'
  ),

  new News(
    'n7',
    'US Job Market Shows Strong Growth',
    '2026-03-12',
    'Emily Johnson',
    'Bloomberg',
    'New labor statistics show stronger-than-expected job growth across multiple sectors, easing concerns about a potential economic slowdown.',
    'https://cepr.net/wp-content/uploads/2025/10/ETH_Jobs_Report-768x550.png', // economic chart //
    'us'
  ),

  new News(
    'n8',
    'New Smartphone Sets Performance Record',
    '2026-03-25',
    'Tom Nguyen',
    'CNET',
    'A major smartphone manufacturer released a flagship device that set new performance benchmarks and introduced advanced camera technology.',
    'https://cdn.mos.cms.futurecdn.net/M4nigVN3vvA5EEnNX9atxY.jpg', // smartphone //
    'tech'
  ),

  new News(
    'n9',
    'International Space Mission Launches Successfully',
    '2026-03-08',
    'Sofia Rossi',
    'Reuters',
    'An international crew successfully launched toward the International Space Station, marking a new milestone in global space cooperation.',
    'https://scitechdaily.com/images/Final-Space-Shuttle-Liftoff-scaled.jpg', // rocket launch //
    'world'
  ),

  new News(
    'n10',
    'US Cities Experiment with Car-Free Zones',
    '2026-03-02',
    'David Green',
    'NBC News',
    'Several major US cities are testing car-free downtown zones to reduce congestion and improve air quality.',
    'https://c8.alamy.com/comp/2Y17390/car-free-zone-concept-sign-indicating-a-car-free-area-with-bicycles-against-an-urban-park-backdrop-eco-friendly-transportation-promotion-vector-illustration-2Y17390.jpg', // car-free zone //
    'us'
  ),
];