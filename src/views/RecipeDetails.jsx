import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "../recipesInformation";
import styles from '../styles/RecipeDetails.module.css';
import { Link } from "react-router-dom";

export default function RecipeDetails() {
    const {recipeId} = useParams();
    const navigate = useNavigate();
    const recipe = recipes.find(r => r.id === Number(recipeId));

    if (!recipe) {
        navigate ("*");
        return null;
    }

    const ingredients = recipe.ingredients;
    const instructions = recipe.instructions;

    return (
        <div className={styles.details}>
            <h1>{recipe.name}</h1>
            <div className={styles.smallText}>
                <h5>Cooking time: <b>{recipe.time}</b></h5>
                <h5>Servings: <b>{recipe.servings}</b></h5>
                <h5>Difficulty Level: <b style={{color: "coral"}}>{recipe.difficulty}</b></h5>
            </div>
            <img src={recipe.image} alt={recipe.name} />
            <div className={styles.ingredientsContainer}>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <p>{ingredient}</p>
                    </li>
                ))}
            </ul>
            </div>
            <div className={styles.instructionsContainer}>
            <h3>Instructions</h3>
            <ul>
                {instructions.map((instruction, index) => (
                    <li key={index}>
                        <h4>Step {index+1}</h4>
                        <p>{instruction}</p>
                    </li>
                ))}
            </ul>
            </div>
            <h3>You are <i>all done</i>!</h3>
            <h4>Poftă bună!</h4>
            <h6>(this means <i>"Have a nice meal!"</i> in Romanian)</h6>
            <Link to="/recipes"><i>Back To Recipes</i></Link>
        </div>
    )
}