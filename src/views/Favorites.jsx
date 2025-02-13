import { useState, useEffect } from 'react';
import styles from '../styles/Favorites.module.css';
import { Heart } from "lucide-react";

export default function Favorites() {
    const [recipes, setRecipes] = useState(() => {
        const storedRecipes = localStorage.getItem("recipes");
        return storedRecipes ? JSON.parse(storedRecipes) : [];
    });
    const [currentRecipe, setCurrentRecipe] = useState({ name: '', time: '', difficulty: '', servings: '', category: '', isFavorite: false });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null); 

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let updatedRecipes;
        
        if (isEditing) {
            updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setIsEditing(false);
            setEditIndex(null);
        } else {
            updatedRecipes = [...recipes, currentRecipe];
        }
        
        setRecipes(updatedRecipes);
        setCurrentRecipe({ name: '', time: '', difficulty: '', servings: '', category: '' });
    }

    function handleDelete(index) {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    function handleFavorite(index) {
        const updatedRecipes = recipes.map((recipe, i) =>
            i === index ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
        );
        setRecipes(updatedRecipes);
    }

    return (
        <div className={styles.container}>
            <h1>Add Recipes</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={currentRecipe.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Cooking Time:</label>
                    <input
                        type="text"
                        name="time"
                        value={currentRecipe.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input
                        type="text"
                        name="difficulty"
                        value={currentRecipe.difficulty}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Servings:</label>
                    <input
                        type="text"
                        name="servings"
                        value={currentRecipe.servings}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label>Choose a category:</label>
                <select 
                    id="category" 
                    name="category"
                    value={currentRecipe.category}
                    onChange={handleChange}
                    required
                    >
                    <option value="Appetizer">Appetizer</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Side Dish">Side Dish</option>
                    <option value="Dessert">Dessert</option>
                </select>
            <button type="submit">{isEditing ? 'Update' : 'Create'} Recipe</button>
            </form>
            <h2>My Recipes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <div style={{display: 'flex', gap: '20px', alignItems: "baseline"}}>
                            <h3>{recipe.name}</h3>
                            <Heart 
                                onClick={() => handleFavorite(index)}
                                color={recipes[index].isFavorite ? "coral" : "gray"}
                                fill={recipes[index].isFavorite ? "coral" : "none"}
                                size={24}
                            />
                        </div>
                        <div className={styles.smallText}>
                            <div>
                                <p>Category: <i>{recipe.category}</i></p>
                                <p>Cooking time: {recipe.time}</p>
                            </div>
                            <div>
                                <p>Servings: {recipe.servings}</p>
                                <p>Difficulty: <b>{recipe.difficulty}</b></p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}