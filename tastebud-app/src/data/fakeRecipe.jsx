import { v4 as uuidv4 } from 'uuid';

const defaultUser = {
  name: "James Smith",
  avatar: "https://images.squarespace-cdn.com/content/v1/598a797af5e23155afc4d592/1597998089824-UHZER996H8NB5EYYDFIW/AVI.JPG?format=2500w"
};

const fakeUser2 = {
  name: "Björn Hartmann",
  avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Fullsize/hartmann.jpg"

};

const defaultRecipes = [
  {
    "id": 0,
    "user": "defaultUser",
    "title": "Vegan Chili",
    "description": "A delicious and hearty chili made with black beans and sweet potatoes.",
    "caption": "test",
    "timestamp": "March 8, 2025, 4:35 PM",
    "image": "https://frommybowl.com/wp-content/uploads/2019/01/Easy_Vegan_Chili_OilFree_FromMyBowl-4.jpg",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 1,
    "user": "fakeUser2",
    "title": "Pesto Pasta",
    "description": "Creamy basil pesto tossed with fettuccine and cherry tomatoes.",
    "caption": "",
    "timestamp": "March 10, 2025, 2:40 PM",
    "image": "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/04/vegan-pesto-pasta-bowl-1000x1500.jpg",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 2,
    "user": "defaultUser",
    "title": "Salmon + Rice",
    "description": "Miso flavored salmon, air-fried paired with white rice.",
    "caption": "",
    "timestamp": "March 10, 2025, 2:40 PM",
    "image": "https://assets.epicurious.com/photos/5f32b611f1722a2c13407e4e/1:1/w_2560%2Cc_limit/miso-glazed-salmon-recipe-BA-081120.jpg",
    "instructions": [
      "Cook the rice.",
      "Pat the salmon fillets dry and season with garlic powder, paprika, salt, and pepper.",
      "Heat olive oil in a pan over medium heat.",
      "Place salmon skin-side down and cook for 3–4 minutes until crispy.",
      "Flip, add butter and lemon slices, and cook for another 3–4 minutes until the salmon is opaque."
    ],
    "ingredients": ["salmon", "rice", "mushroom"],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 3,
    "user": "defaultUser",
    "title": "Avocado Toast",
    "description": "Toasted sourdough topped with mashed avocado and a sprinkle of chili flakes.",
    "caption": "",
    "timestamp": "March 19, 2025, 2:20 PM",
    "image": "https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 4,
    "user": "defaultUser",
    "title": "Bibimbap Bowl",
    "description": "Korean rice bowl with sautéed veggies, fried egg, and gochujang sauce.",
    "caption": "",
    "timestamp": "April 8, 2025, 10:20 AM",
    "image": "https://iheartumami.com/wp-content/uploads/2021/04/Keto-Korean-Bibimbap-Recipe-Vegetarian-I-Heart-Umami.jpg",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 5,
    "user": "defaultUser",
    "title": "Shakshuka",
    "description": "Poached eggs simmered in a spicy tomato and pepper sauce.",
    "caption": "",
    "timestamp": "March 8, 2025, 10:10 PM",
    "image": "",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 6,
    "user": "defaultUser",
    "title": "Grilled Cheese & Tomato Soup",
    "description": "Classic melty sandwich paired with creamy tomato soup.",
    "caption": "",
    "timestamp": "February 8, 2025, 3:15 PM",
    "image": "",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 7,
    "user": "defaultUser",
    "title": "Fruit & Yogurt Parfait",
    "description": "Layers of granola, vanilla yogurt, and seasonal berries.",
    "caption": "",
    "timestamp": "March 8, 2025, 8:12 AM",
    "image": "",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 8,
    "user": "defaultUser",
    "title": "Tofu Stir Fry",
    "description": "Pan-fried tofu with bell peppers, broccoli, and soy garlic glaze.",
    "caption": "",
    "timestamp": "March 8, 2025, 7:20 PM",
    "image": "https://source.unsplash.com/featured/?tofu,stirfry",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  },
  {
    "id": 9,
    "user": "defaultUser",
    "title": "Matcha Pancakes",
    "description": "Fluffy green tea pancakes served with whipped cream and maple syrup.",
    "caption": "",
    "timestamp": "March 8, 2025, 12:49 PM",
    "image": "https://www.allrecipes.com/thmb/n5_f3Acw48WLllb28u09xFXlyaM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4557800-matcha-pancakes-Aiya-America-4x3-1-85cceed4c4e54fab828ea6729640bf59.jpg",
    "instructions": [],
    "ingredients": [],
    "comments": [],
    "initialLikes": 0
  }
];

export default defaultRecipes;
