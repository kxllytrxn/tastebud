import React, { useState } from 'react';
import './CreatePost.css'; 
import picIcon from './modal-icons/pic.png';
import utencilIcon from './modal-icons/utencil.png';
import plusIcon from './modal-icons/plus.png';
import { savePostToDB, getLoggedInUser } from '@/services/localStorage';
import { v4 as uuidv4 } from 'uuid';


export const CreatePost = ({ visible, onClose }) => {
  const [postTitle, setPostTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeDescription, setRecipeDescription] = useState('');
  const [ingredients, setIngredients] = useState(['', '']);
  const [instructions, setInstructions] = useState(['', '', '']);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const clearModal = () => {
    setPostTitle('');
    setCaption('');
    setSelectedImage(null);
    setLastSaved(null);
    setShowRecipe(false);
    setRecipeDescription('');
    setIngredients(['', '']);
    setInstructions(['', '', '']);
  }

  const handleSaveAsDraft = () => {
    const currentTime = new Date();
    setLastSaved(currentTime);
    console.log('Post saved as draft', { 
      postTitle, 
      caption, 
      selectedImage, 
      recipeDescription,
      ingredients, 
      instructions 
    });
  };

  const handleSave = () => {
    const loggedInUser = getLoggedInUser();
    const timestamp = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    console.log(loggedInUser)
    const curr_user = {
      user_id: loggedInUser.id,
      name: loggedInUser.display_name,
      avatar: loggedInUser.profile_photo_url, 
    };
    
    // Filter out empty ingredients and instructions
    const filteredIngredients = ingredients.filter(item => item.trim() !== '');
    const filteredInstructions = instructions.filter(item => item.trim() !== '');
    
    const newPost = {
      id: uuidv4(),
      user: curr_user,
      title: postTitle,
      caption: caption,
      timestamp: timestamp,
      image: selectedImage,
      recipeDescription: recipeDescription,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      comments: [],
      initialLikes: 0
    };

    savePostToDB(newPost);
    console.log('Post saved', newPost);
    onClose();
    clearModal();
  };

  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddStep = () => {
    setInstructions([...instructions, '']);
  };

  const handleStepChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleRemoveStep = (index) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={onClose} className="modal-close-button">×</button>
        </div>
        
        <div className="modal-header">
          <h2>New Post</h2>
        </div>
        
        <div className="modal-scrollable-content">
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Post Title</div>
              <div className="field-subtitle">Give your meal a title</div>
            </div>
            <div className="field-right">
              <input 
                type="text" 
                placeholder="e.g. Salmon and Rice" 
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="input"
              />
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Caption</div>
              <div className="field-subtitle">Give a behind-the-scenes or tag your friends</div>
            </div>
            <div className="field-right">
              <textarea 
                placeholder="e.g. Made some salmon + rice for dinner :) — With @Jane Doe"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="input caption-input"
              ></textarea>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Photo</div>
              <div className="field-subtitle">Show off your creation</div>
            </div>
            <div className="field-right">
              {selectedImage ? (
                <div className="photo-preview">
                  <img src={selectedImage} alt="Preview" className="preview-image" />
                  <button className="remove-image" onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              ) : (
                <div className="image-selector">
                  <div className="image-placeholder">
                    <span className="icon">📷</span>
                    <p>Drag photos here or</p>
                    <label className="select-button">
                      Select from computer
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSelectImage}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {showRecipe && (
            <>
              <div className="recipe-header">
                <h2>New Recipe</h2>
              </div>
              
              <div className="divider"></div>
              
              <div className="field-container">
                <div className="field-left">
                  <div className="field-label description-label">Description</div>
                  <div className="field-subtitle description-subtitle">Share what makes this recipe special to you</div>
                </div>
                <div className="field-right">
                  <textarea 
                    placeholder="e.g. My go-to meal whenever I'm in a slump"
                    className="input caption-input"
                    value={recipeDescription}
                    onChange={(e) => setRecipeDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="field-container">
                <div className="field-left">
                  <div className="field-label ingredients-label">Ingredients</div>
                  <div className="field-subtitle ingredients-subtitle">Add one ingredient per line, including quantity and any other preparation needed</div>
                </div>
                <div className="field-right">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-input-container">
                      <input
                        type="text"
                        placeholder={`e.g. ${index === 0 ? '1 fillet of salmon' : '2 cups of white rice'}`}
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                        className="input ingredient-input"
                      />
                      <button 
                        className="remove-ingredient"
                        onClick={() => handleRemoveIngredient(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={handleAddIngredient}
                    className="add-ingredient-button"
                  >
                    Add ingredient
                  </button>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="field-container">
                <div className="field-left">
                  <div className="field-label directions-label">Directions</div>
                  <div className="field-subtitle directions-subtitle">Explain how to make your recipe, including ingredients, measurements, oven temperatures, etc.</div>
                </div>
                <div className="field-right">
                  {instructions.map((step, index) => (
                    <div key={index} className="step-container">
                      <div className="step-header recipe-step">Step {index + 1}</div>
                      <div className="step-input-container">
                        <input
                          type="text"
                          placeholder={`e.g. ${index === 0 ? 'Defrost salmon' : index === 1 ? 'Preheat oven' : 'Cook rice'}`}
                          value={step}
                          onChange={(e) => handleStepChange(index, e.target.value)}
                          className="input step-input"
                        />
                        <button 
                          className="remove-step"
                          onClick={() => handleRemoveStep(index)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={handleAddStep}
                    className="add-step-button"
                  >
                    Add step
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="footer">
          <div className="footer-left">
            <button className="icon-button">
              <img src={picIcon} alt="Picture" className="modal-icon" />
            </button>
            <button className="icon-button" onClick={toggleRecipe}>
              <img src={utencilIcon} alt="Utensil" className="modal-icon" />
            </button>
            <button className="icon-button">
              <img src={plusIcon} alt="Add" className="modal-icon" />
            </button>
          </div>
          <div className="footer-right">
            <button className="draft-button" onClick={handleSaveAsDraft}>Save as draft</button>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
          
          {lastSaved && (
            <div className="timestamp">draft last saved at {formatTime(lastSaved)}</div>
          )}
        </div>
      </div>
    </div>
  );
}; 