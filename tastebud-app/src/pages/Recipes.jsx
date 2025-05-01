import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '@/components/RecipeCard/RecipeCard.jsx';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import '@/main.css';
import { getAllPosts, setAllPosts } from '@/services/localStorage';
import { printLocalStorage } from '../utils/auth';
import defaultRecipes from "@/data/fakeRecipe.jsx"

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const storedPosts = getAllPosts();
        console.log("POSTS: ", storedPosts)
        if (storedPosts.length === 0) {
          setRecipes(defaultRecipes);
        } else {
            const recipes = storedPosts.filter(post => post.instructions.length > 0)
          setRecipes(recipes);
        }
    }, []);
    
    printLocalStorage()
    return (
        <div className='recipe-page'>
                <SideBarUser 
                    name="John Doe"
                    followers={40}
                    following={23}
                    lastMealDate="April 10, 2025"
                />
            <div className="recipe-container">
                {recipes.map((recipe) => (
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