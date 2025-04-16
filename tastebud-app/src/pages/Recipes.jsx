import React from 'react';
import RecipeCard from '@/components/RecipeCard/RecipeCard.jsx';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import '@/main.css';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const fakeRecipes = [
        {
          id: 0,
          title: 'Vegan Chili',
          description: 'A delicious and hearty chili made with black beans and sweet potatoes.',
          image: 'https://frommybowl.com/wp-content/uploads/2019/01/Easy_Vegan_Chili_OilFree_FromMyBowl-4.jpg',
        },
        {
            id: 1,
            title: 'Pesto Pasta',
            description: 'Creamy basil pesto tossed with fettuccine and cherry tomatoes.',
            image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/04/vegan-pesto-pasta-bowl-1000x1500.jpg',
          },
        {
            id: 2,
            title: 'Salmon + Rice',
            description: 'Miso flavored salmon, air-fried paired with white rice.',
            image: 'https://assets.epicurious.com/photos/5f32b611f1722a2c13407e4e/1:1/w_2560%2Cc_limit/miso-glazed-salmon-recipe-BA-081120.jpg',
            instructions: [
              "Cook the rice.",
              "Pat the salmon fillets dry and season with garlic powder, paprika, salt, and pepper.",
              "Heat olive oil in a pan over medium heat.",
              "Place salmon skin-side down and cook for 3–4 minutes until crispy.",
              "Flip, add butter and lemon slices, and cook for another 3–4 minutes until the salmon is opaque."
            ],
        },        
        {
            id: 3,
            title: 'Avocado Toast',
            description: 'Toasted sourdough topped with mashed avocado and a sprinkle of chili flakes.',
            image: 'https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg',
          },
        {
          id: 4,
          title: 'Bibimbap Bowl',
          description: 'Korean rice bowl with sautéed veggies, fried egg, and gochujang sauce.',
          image: 'https://iheartumami.com/wp-content/uploads/2021/04/Keto-Korean-Bibimbap-Recipe-Vegetarian-I-Heart-Umami.jpg',
        },
        {
          id: 5,
          title: 'Shakshuka',
          description: 'Poached eggs simmered in a spicy tomato and pepper sauce.',
          image: 'https://source.unsplash.com/featured/?shakshuka',
        },
        {
          id: 6,
          title: 'Grilled Cheese & Tomato Soup',
          description: 'Classic melty sandwich paired with creamy tomato soup.',
          image: 'https://source.unsplash.com/featured/?grilled,cheese,soup',
        },
        {
          id: 7,
          title: 'Fruit & Yogurt Parfait',
          description: 'Layers of granola, vanilla yogurt, and seasonal berries.',
          image: 'https://source.unsplash.com/featured/?parfait,yogurt,berries',
        },
        {
          id: 8,
          title: 'Tofu Stir Fry',
          description: 'Pan-fried tofu with bell peppers, broccoli, and soy garlic glaze.',
          image: 'https://source.unsplash.com/featured/?tofu,stirfry',
        },
        {
          id: 9,
          title: 'Matcha Pancakes',
          description: 'Fluffy green tea pancakes served with whipped cream and maple syrup.',
          image: 'https://source.unsplash.com/featured/?matcha,pancakes',
        },
      ];
      
    
    return (
        <div className='recipe-page'>
                <SideBarUser 
                    name="John Doe"
                    followers={40}
                    following={23}
                    lastMealDate="April 10, 2025"
                />
            <div className="recipe-container">

                {fakeRecipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                    <RecipeCard 
                        key={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.image}
                        instructions={recipe.instructions}
                    />                
                </Link>
                ))}
                
             </div>
        </div>
        
     
    )
  }
  
  export default Recipes;