import React from 'react';
import { useParams } from 'react-router-dom';
import '@/main.css';

const RecipePage = () => {
    const { id } = useParams();
  const recipe = fakeRecipes.find(r => r.id === parseInt(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full my-4 rounded-2xl" />
      <p className="text-lg text-gray-700">{recipe.description}</p>
      {/* Add more details here as needed */}
    </div>
  );

};

export default RecipePage;