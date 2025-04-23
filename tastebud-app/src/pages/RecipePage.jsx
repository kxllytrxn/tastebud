import React from 'react';
import { useParams } from 'react-router-dom';
import SideBarUser from '@/components/SideBarUser/SideBarUser.jsx';
import { getAllUsers, getAllPosts } from '@/services/localStorage';
import defaultRecipes from "@/data/fakeRecipe.jsx"
import '@/main.css';
import './styles/RecipePage.css'

const RecipePage = () => {
    const { id } = useParams();
    const users = getAllUsers();
    // console.log(users)
    const recipes = getAllPosts(); // this uses the UUIDs
    console.log("default recipes: ", defaultRecipes)
    console.log(recipes)
    const recipe = recipes.find(r => r.id == (id));
    console.log("RECIPE: ", recipe)
  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="indv-recipe-page">
      <SideBarUser 
        name={"Kelly Tran"}
        followers={40}
        following={23}
        lastMealDate="Yesterday"
      />

      <div className="recipe-block">
        <div className="recipe-header-bar"></div>

        <div className="recipe-header">
          <h1>{recipe.title}</h1>
          <p className="recipe-meta">
            By {recipe.user?.name} | ❤️ {recipe.initialLikes} likes | 💬 2 comments
          </p>
          <p className="recipe-caption">
            Made some salmon + rice for dinner :) — With <span className="mention">@Jane Doe</span>
          </p>
        </div>

        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        )}

        {recipe.ingredients && (
          <div className="recipe-section">
            <h2 className="section-heading orange">Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="ingredient-item">
                  <span className="bullet" /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recipe.instructions && (
          <div className="recipe-section">
            <h2 className="section-heading green">Directions</h2>
            <ol className="instructions">
              {recipe.instructions.map((step, index) => (
                <li key={index}>
                  <span className="step-number">Step {index + 1}</span><br />
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* insert comment component lauren made in here */}
        <div className="recipe-section">
          <h2 className="section-heading orange">Comments</h2>
          {recipe.comments ? (
            recipe.comments.map((comment) => (
              <div className="comment">
                <strong>James Doe</strong><br />
                Lorem ipsum dolor amet, consectetur adipiscing elit.
              </div>

            ))
          ) : (
            <div className="comment"> No comments found :( </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default RecipePage;