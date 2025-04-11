import React from 'react';
import RecipeCard from '@/components/RecipeCard/RecipeCard.jsx';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import '@/main.css';


const Recipes = () => {
    const fakeRecipes = [
        {
          id: 0,
          title: 'Vegan Chili',
          description: 'A delicious and hearty chili made with black beans and sweet potatoes.',
          image: 'https://source.unsplash.com/featured/?chili',
        },
        {
          id: 1,
          title: 'Pesto Pasta',
          description: 'Creamy basil pesto tossed with fettuccine and cherry tomatoes.',
          image: 'https://source.unsplash.com/featured/?pesto,pasta',
        },
        {
          id: 2,
          title: 'Salmon + Rice',
          description: 'Miso flavored salmon, air-fried paired with white rice.',
          image: 'https://source.unsplash.com/featured/?salmon,rice',
        },
        {
          id: 3,
          title: 'Avocado Toast',
          description: 'Toasted sourdough topped with mashed avocado and a sprinkle of chili flakes.',
          image: 'https://source.unsplash.com/featured/?avocado,toast',
        },
        {
          id: 4,
          title: 'Bibimbap Bowl',
          description: 'Korean rice bowl with sautéed veggies, fried egg, and gochujang sauce.',
          image: 'https://source.unsplash.com/featured/?bibimbap',
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
                    <RecipeCard 
                    key={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    imageUrl={recipe.image}
                    />
                ))}
            </div>
        </div>
        
     
    )
  }
  
  export default Recipes;