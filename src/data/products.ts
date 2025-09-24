import { Product } from '../types';

export const products: Product[] = [
  {
    id: '2',
    name: 'ABC Malt',
    price: 390,
    weight: '200g',
    image: '/abc malt.jpg',
    description: 'Apple, Beetroot, Carrot blend for natural energy and wellness support.',
    benefits: [
      'Natural energy enhancement',
      'Stamina building support',
      'Rich in antioxidants',
      'Improved blood circulation'
    ],
    ingredients: [
      'Apple Powder', 'Beetroot Powder', 'Carrot Powder', 'Cashew', 
      'Country Sugar', 'Cardamom', 'Almonds'
    ],
    usage: 'Mix 2 tablespoons in 200ml warm water or milk. Best consumed in morning.',
    category: 'malt'
  },
  {
    id: '1',
    name: 'Special Nutri Meal',
    price: 399,
    weight: '200g',
    image: '/Special Nutri Meal.jpg',
    description: 'Complete family nutrition with 33 natural ingredients for optimal health and energy.',
    benefits: [
      'Energy boost for active lifestyle',
      'Digestive health improvement',
      'Immunity system support',
      'Complete balanced nutrition'
    ],
    ingredients: [
      'Wheat', 'Ragi', 'Kambu', 'Oats', 'Almonds', 'Walnuts', 'Cashews', 'Dates',
      'Fenugreek', 'Cardamom', 'Cinnamon', 'Turmeric', 'Ginger', 'Black Pepper'
    ],
    usage: 'Add 2 tablespoons to 200ml hot water or milk. Stir well and enjoy daily.',
    category: 'nutrition'
  },
  {
    id: '3',
    name: 'Weight Loss Nutri Lite',
    price: 390,
    weight: '200g',
    image: '/Weight Loss Nutri Lite.jpg',
    description: '21-ingredient low-calorie formula designed for healthy weight management.',
    benefits: [
      'Healthy weight management',
      'Metabolism boost support',
      'Appetite control assistance',
      'Energy without excess calories'
    ],
    ingredients: [
      'Green Gram', 'Horse Gram', 'Finger Millet', 'Pearl Millet', 'Barley',
      'Flax Seeds', 'Chia Seeds', 'Fenugreek', 'Cumin', 'Coriander'
    ],
    usage: '1 tablespoon in 100ml hot water, add salt. Serve with fresh salads.',
    category: 'nutrition'
  },
  {
    id: '4',
    name: 'Mapplai Dosa Mix',
    price: 350,
    weight: '500g',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional strength-building dosa mix for grooms and fitness enthusiasts.',
    benefits: [
      'Traditional strength building',
      'High protein content',
      'Energy enhancement',
      'Muscle building support'
    ],
    ingredients: [
      'Black Gram', 'Rice', 'Fenugreek', 'Almonds', 'Cashews', 
      'Dates', 'Dry Ginger', 'Cardamom'
    ],
    usage: 'Soak mix for 4 hours, grind to batter consistency, ferment overnight.',
    category: 'dosa'
  },
  {
    id: '5',
    name: 'Millet Dosa Mix',
    price: 320,
    weight: '500g',
    image: '/Millet Dosa Mix.jpg',
    description: 'Diabetic-friendly, fiber-rich millet blend for healthy breakfast options.',
    benefits: [
      'Diabetic-friendly nutrition',
      'High fiber content',
      'Blood sugar regulation',
      'Digestive health support'
    ],
    ingredients: [
      'Finger Millet', 'Pearl Millet', 'Foxtail Millet', 'Little Millet',
      'Barnyard Millet', 'Black Gram', 'Fenugreek'
    ],
    usage: 'Prepare batter, ferment for 6-8 hours. Make crispy dosas on medium heat.',
    category: 'dosa'
  },
  {
    id: '6',
    name: 'Moringa Dosa Mix',
    price: 380,
    weight: '500g',
    image: '/Moringa Dosa Mix.jpg',
    description: 'Immunity-boosting superfood blend with nutrient-rich moringa leaves.',
    benefits: [
      'Immunity system boost',
      'Superfood nutrition',
      'Vitamin and mineral rich',
      'Anti-inflammatory properties'
    ],
    ingredients: [
      'Moringa Leaves', 'Rice', 'Black Gram', 'Green Gram', 
      'Fenugreek', 'Curry Leaves', 'Coriander'
    ],
    usage: 'Ferment batter for 8 hours. Cook on low heat for best nutrition retention.',
    category: 'dosa'
  }
];