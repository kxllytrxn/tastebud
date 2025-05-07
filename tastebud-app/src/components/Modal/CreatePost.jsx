import React, { useState, useEffect, useRef } from 'react';
import './CreatePost.css'; 
import picIcon from './modal-icons/pic.png';
import utencilIcon from './modal-icons/utencil.png';
import plusIcon from './modal-icons/plus.png';
import { savePostToDB, getLoggedInUser, editPost } from '@/services/localStorage';
import { v4 as uuidv4 } from 'uuid';
import aiIcon from '@/assets/icons/ai-wand.png'
import loadingIcon from '@/assets/icons/loading-orange.gif'


export const CreatePost = ({ visible, onClose, postToEdit = null }) => {
  const [postTitle, setPostTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeDescription, setRecipeDescription] = useState('');
  const [ingredients, setIngredients] = useState(['', '']);
  const [instructions, setInstructions] = useState(['', '', '']);
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState(null);
  const [errors, setErrors] = useState({});
  const [loadingAI, setLoadingAI] = useState(false);
  
  // Add ref for recipe section
  const recipeRef = useRef(null);

  // Load post data if editing
  useEffect(() => {
    if (postToEdit) {
      setPostTitle(postToEdit.title || '');
      setCaption(postToEdit.caption || '');
      setSelectedImage(postToEdit.image || null);
      setRecipeDescription(postToEdit.recipeDescription || '');
      
      // Set ingredients
      if (postToEdit.ingredients && postToEdit.ingredients.length > 0) {
        setIngredients(postToEdit.ingredients);
        setShowRecipe(true);
      }
      
      // Set instructions
      if (postToEdit.instructions && postToEdit.instructions.length > 0) {
        setInstructions(postToEdit.instructions);
        setShowRecipe(true);
      }
      
      setIsEditing(true);
      setPostId(postToEdit.id);
    } else {
      clearModal();
    }
  }, [postToEdit]);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      // Clear any existing image error when an image is selected
      if (errors.image) {
        setErrors({ ...errors, image: null });
      }
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
    setIsEditing(false);
    setPostId(null);
    setErrors({});
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!postTitle.trim()) {
      newErrors.title = "Post title is required";
    }
    
    if (!caption.trim()) {
      newErrors.caption = "Caption is required";
    }
    
    if (!selectedImage) {
      newErrors.image = "Please upload a photo";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    // Validate the form before saving
    if (!validateForm()) {
      return; // Stop if validation fails
    }
    
    const loggedInUser = getLoggedInUser();
    const timestamp = isEditing ? 
      postToEdit.timestamp : 
      new Date().toLocaleString('en-US', {
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
      id: isEditing ? postId : uuidv4(),
      user: isEditing ? postToEdit.user : curr_user,
      title: postTitle,
      caption: caption,
      timestamp: timestamp,
      image: selectedImage,
      recipeDescription: recipeDescription,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      comments: isEditing ? postToEdit.comments : [],
      initialLikes: isEditing ? postToEdit.initialLikes : 0,
      likes: isEditing ? postToEdit.likes : 0,
      liked: isEditing ? postToEdit.liked : false
    };  

    if (isEditing) {
      editPost(newPost);
      console.log('Post updated', newPost);
    } else {
      savePostToDB(newPost);
      console.log('Post saved', newPost);
    }
    
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
  
  const handleAIIngredients = async () => {
    if (!postTitle || !selectedImage) {
      alert("Please provide both a title and an image.");
      return;
    }

    setLoadingAI(true);

    try {
      // import fetch from 'node-fetch'; // for node.js
      const response = await fetch(
        'https://noggin.rea.gent/horrible-quelea-9698',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer rg_v1_h67cqo3db4qxqfxwljl1dmv3yjaxh0ty356g_ngk',
          },
          body: JSON.stringify({
            // fill variables here.
            "title": postTitle,
            "image": selectedImage,
          }),
        }
      ).then(response => response.text());
      console.log("AI Response (raw text):", response);
      const ingredients = JSON.parse(response)
      setIngredients(ingredients);
      setShowRecipe(true);
    } catch (error) {
      console.error("Failed to generate ingredients:", error);
    }
    finally {
      setLoadingAI(false);
    }
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
    const newShowRecipe = !showRecipe;
    setShowRecipe(newShowRecipe);
    if (newShowRecipe) {
      setTimeout(() => {
        recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close">
          <button onClick={onClose} className="modal-close-button">×</button>
        </div>
        
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Post' : 'New Post'}</h2>
        </div>
        
        <div className="modal-scrollable-content">
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Post Title<span className="required">*</span></div>
              <div className="field-subtitle">Give your meal a title</div>
            </div>
            <div className="field-right">
              <input 
                type="text" 
                placeholder="e.g. Salmon and Rice" 
                value={postTitle}
                onChange={(e) => {
                  setPostTitle(e.target.value);
                  if (errors.title && e.target.value.trim()) {
                    setErrors({ ...errors, title: null });
                  }
                }}
                className={`input ${errors.title ? 'input-error' : ''}`}
              />
              {errors.title && <div className="error-message">{errors.title}</div>}
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Caption<span className="required">*</span></div>
              <div className="field-subtitle">Give a behind-the-scenes or tag your friends</div>
            </div>
            <div className="field-right">
              <textarea 
                placeholder="e.g. Made some salmon + rice for dinner :) — With @Jane Doe"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                  if (errors.caption && e.target.value.trim()) {
                    setErrors({ ...errors, caption: null });
                  }
                }}
                className={`input caption-input ${errors.caption ? 'input-error' : ''}`}
              ></textarea>
              {errors.caption && <div className="error-message">{errors.caption}</div>}
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="field-container">
            <div className="field-left">
              <div className="field-label">Photo<span className="required">*</span></div>
              <div className="field-subtitle">Show off your creation</div>
            </div>
            <div className="field-right">
              {selectedImage ? (
                <div className="photo-preview">
                  <img src={selectedImage} alt="Preview" className="preview-image" />
                  <button className="remove-image" onClick={() => {
                    setSelectedImage(null);
                    setErrors({ ...errors, image: "Please upload a photo" });
                  }}>Remove</button>
                </div>
              ) : (
                <div className={`image-selector ${errors.image ? 'image-selector-error' : ''}`}>
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
              {errors.image && <div className="error-message">{errors.image}</div>}
            </div>
          </div>

          {showRecipe && (
            <>
              <div className="recipe-header" ref={recipeRef}>
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
            <button className="icon-button" onClick={handleAIIngredients}>
              <img src={aiIcon} alt="Add" className="modal-icon" />
            </button>
            {loadingAI && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                <img src={loadingIcon} alt="Loading..." style={{ width: "24px", height: "24px" }} />
                <span style={{ fontSize: "14px" }}>AI is generating ingredients...</span>
              </div>
            )}
          </div>
          <div className="footer-right">
            <button className="draft-button" onClick={handleSaveAsDraft}>Save as draft</button>
            <button className="save-button" onClick={handleSave}>Post</button>
          </div>
          
          {lastSaved && (
            <div className="timestamp">draft last saved at {formatTime(lastSaved)}</div>
          )}
          
          {Object.keys(errors).length > 0 && (
            <div className="form-error-summary">Please fill out all required fields marked with *</div>
          )}
        </div>
      </div>
    </div>
  );
}; 