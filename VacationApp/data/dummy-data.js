import Country from '../models/countries';
import Destination from '../models/destinations';

export const COUNTRIES = [
  new Country('c1', 'Japan', '#FFB7C5'),
  new Country('c2', 'Italy', '#F7D488'),
  new Country('c3', 'Brazil', '#8FD694'),
  new Country('c4', 'Canada', '#A0C4FF'),
  new Country('c5', 'Australia', '#FFD6A5'),
  new Country('c6', 'Egypt', '#E4C1F9'),
  new Country('c7', 'France', '#BDE0FE'),
  new Country('c8', 'Thailand', '#C8E7FF'),
  new Country('c9', 'Greece', '#D0F4DE'),
  new Country('c10', 'South Africa', '#F9C6C9'),
];

export const DESTINATIONS = [
  // JAPAN
  new Destination(
    'd1',
    'Tokyo',
    1800,
    1603,
    4.8,
    'A bustling metropolis blending tradition with cutting-edge modernity.',
    'https://awayandfar.com/wp-content/uploads/2019/01/Tokyo.jpg',
    'c1'
  ),
  new Destination(
    'd2',
    'Kyoto',
    1500,
    794,
    4.9,
    'Historic temples, peaceful gardens, and the cultural heart of Japan.',
    'https://tse3.mm.bing.net/th/id/OIP.mUJtOEAaKAY_S7SNO9fFXgHaE8?pid=ImgDet&w=195&h=130&c=7&o=7&rm=3',
    'c1'
  ),

  // ITALY
  new Destination(
    'd3',
    'Rome',
    1700,
    -753,
    4.7,
    'Ancient ruins, world-famous cuisine, and timeless architecture.',
    'https://images.daytrip.com/6191.jpg?w=640&q=30',
    'c2'
  ),
  new Destination(
    'd4',
    'Venice',
    1900,
    421,
    4.6,
    'A romantic city built on canals with iconic gondola rides.',
    'https://tse4.mm.bing.net/th/id/OIP.36yILYWSC1J1VWArfb7pvwAAAA?pid=ImgDet&w=195&h=129&c=7&o=7&rm=3',
    'c2'
  ),

  // BRAZIL
  new Destination(
    'd5',
    'Rio de Janeiro',
    1600,
    1565,
    4.7,
    'Famous for beaches, Carnival, and the Christ the Redeemer statue.',
    'https://dynamic-media.tacdn.com/media/photo-o/2f/19/6b/a4/caption.jpg?w=700&h=500&s=1',
    'c3'
  ),
  new Destination(
    'd6',
    'São Paulo',
    1400,
    1554,
    4.5,
    'A vibrant cultural and financial hub with world-class dining.',
    'https://dynamic-media.tacdn.com/media/photo-o/2f/15/dd/88/caption.jpg?w=700&h=500&s=1',
    'c3'
  ),

  // CANADA
  new Destination(
    'd7',
    'Vancouver',
    1700,
    1886,
    4.8,
    'A scenic coastal city surrounded by mountains and nature.',
    'https://www.civitatis.com/blog/wp-content/uploads/2020/12/vista-panoramica-vancouver.jpg',
    'c4'
  ),
  new Destination(
    'd8',
    'Toronto',
    1600,
    1793,
    4.6,
    'A diverse metropolis with iconic landmarks and cultural attractions.',
    'https://th.bing.com/th/id/R.88d192a91fb84fd788a85abb112b06e9?rik=wIwsvpt%2bPV673Q&riu=http%3a%2f%2fd3e1m60ptf1oym.cloudfront.net%2f9c5b732e-34f9-42aa-a188-0bb238cca5be%2f15-01-13-429_wqxga.jpg&ehk=FZX1v3Y7t%2fQGg65dXiCNA0wQvN%2f6tPWgkDE%2f2fTJDRs%3d&risl=&pid=ImgRaw&r=0',
    'c4'
  ),

  // AUSTRALIA
  new Destination(
    'd9',
    'Sydney',
    2000,
    1788,
    4.8,
    'Home to the Sydney Opera House and stunning coastal beaches.',
    'https://tse4.mm.bing.net/th/id/OIP.xE1UftCIS5xSlN6t359CFwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'c5'
  ),
  new Destination(
    'd10',
    'Melbourne',
    1800,
    1835,
    4.7,
    'A cultural capital known for art, coffee, and sports.',
    'https://dynamic-media.tacdn.com/media/photo-o/2f/f8/66/68/caption.jpg?w=700&h=500&s=1',
    'c5'
  ),

  // EGYPT
  new Destination(
    'd11',
    'Cairo',
    1500,
    -2000,
    4.6,
    'A historic city near the Great Pyramids and ancient wonders.',
    'https://dynamic-media.tacdn.com/media/photo-o/2e/d3/89/f7/caption.jpg?w=700&h=500&s=1',
    'c6'
  ),
  new Destination(
    'd12',
    'Luxor',
    1400,
    -1500,
    4.7,
    'Known for temples, tombs, and the Valley of the Kings.',
    'https://dynamic-media.tacdn.com/media/photo-o/2e/f1/f4/61/caption.jpg?w=700&h=500&s=1',
    'c6'
  ),

  // FRANCE
  new Destination(
    'd13',
    'Paris',
    2100,
    -300,
    4.9,
    'The City of Light, famous for art, fashion, and iconic landmarks.',
    'https://as1.ftcdn.net/jpg/02/14/73/90/1000_F_214739074_Oa9dcrTKllh1KIwuC3PECMWnbfjKSePg.jpg',
    'c7'
  ),
  new Destination(
    'd14',
    'Nice',
    1700,
    350,
    4.7,
    'A beautiful coastal city on the French Riviera.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nice_from_Castle_Hill_01.jpg/1280px-Nice_from_Castle_Hill_01.jpg',
    'c7'
  ),

  // THAILAND
  new Destination(
    'd15',
    'Bangkok',
    1300,
    1782,
    4.6,
    'A lively city with temples, markets, and incredible street food.',
    'https://dynamic-media.tacdn.com/media/photo-o/2e/c9/64/49/caption.jpg?w=1400&h=1000&s=1',
    'c8'
  ),
  new Destination(
    'd16',
    'Phuket',
    1600,
    1785,
    4.8,
    'A tropical paradise with beaches and vibrant nightlife.',
    'https://a.cdn-hotels.com/gdcs/production50/d1244/7fdb2e89-256f-4ad5-9e60-802a71fda986.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    'c8'
  ),

  // GREECE
  new Destination(
    'd17',
    'Athens',
    1500,
    -3000,
    4.7,
    'The birthplace of democracy with ancient ruins and rich history.',
    'https://dynamic-media.tacdn.com/media/photo-o/2e/af/e1/c9/caption.jpg?w=700&h=500&s=1',
    'c9'
  ),
  new Destination(
    'd18',
    'Santorini',
    2000,
    -2000,
    4.9,
    'A stunning island known for sunsets, white buildings, and blue domes.',
    'https://dynamic-media.tacdn.com/media/photo-o/2f/24/3f/d1/caption.jpg?w=700&h=500&s=1',
    'c9'
  ),

  // SOUTH AFRICA
  new Destination(
    'd19',
    'Cape Town',
    1800,
    1652,
    4.8,
    'A coastal city with Table Mountain and diverse culture.',
    'https://a.cdn-hotels.com/gdcs/production37/d996/ca2a82aa-2617-4fac-8e5d-94afa4324d5d.jpg',
    'c10'
  ),
  new Destination(
    'd20',
    'Johannesburg',
    1400,
    1886,
    4.5,
    'A major city with rich history and vibrant urban life.',
    'https://skyticket.com/guide/wp-content/uploads/2017/12/iStock-813195980.jpg',
    'c10'
  ),
];