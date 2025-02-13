import { useState } from 'react';
import RecipesList from '../components/RecipesList';
import { recipes } from '../recipesInformation';

export default function Recipes() {
    const categories = [
        "Appetizer",
        "Main Course",
        "Side Dish",
        "Dessert"
    ]

    const [selectedCategory, setSelectedCategory] = useState("");

    function handleCategoryChange() {
        setSelectedCategory(event.target.value);
    }

    const filteredRecipes = selectedCategory ? recipes.filter(recipe => recipe.category === selectedCategory) : recipes;

    return (
        <>
        <h1><i>Dish Delights</i> Recipes</h1>
        <h4 style={{marginBottom: "40px"}}>Explore our <i>recipes!</i></h4>
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">All</option>
                {categories.map((category, index) => (
                <option key={index} value={category}>
                {category}
                </option>
                ))}
            </select>
            <RecipesList recipes={filteredRecipes} selectedCategory={selectedCategory} />
        </div>
        </>
    )
}