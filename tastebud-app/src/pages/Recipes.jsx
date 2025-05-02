import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '@/components/RecipeCard/RecipeCard.jsx';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import { getAllPosts } from '@/services/localStorage';
import { printLocalStorage } from '../utils/auth';
import defaultRecipes from "@/data/fakeRecipe.jsx"
import { getLoggedInUser } from '@/services/localStorage';
import { getFormattedDate } from '@/utils/PostUtils';
import '@/main.css';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const loggedInUser = getLoggedInUser();

    useEffect(() => {
        const storedPosts = getAllPosts();
        if (storedPosts.length === 0) {
          setRecipes(defaultRecipes);
        } else {
            const recipes = storedPosts.filter(post => post.instructions.length > 0)
          setRecipes(recipes);
        }
    }, []);
    
    return (
        <div className='recipe-page'>
            <SideBarUser 
                name={loggedInUser.display_name}
                followers={loggedInUser.followers}
                following={loggedInUser.following}
                signUpDate={getFormattedDate(loggedInUser)}
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