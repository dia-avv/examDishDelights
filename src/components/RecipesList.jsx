import { Link } from 'react-router-dom';
import style from '../styles/Recipes.module.css';

export default function RecipesList({recipes}) {
    return (
        <div className={style.recipesList}>
            {recipes.map((recipe) => (
                <div key={recipe.id} className={style.recipeContainer}>
                    <img src={recipe.image} alt={recipe.name} />
                    <div className={style.recipeText}>
                        <h3 style={{marginBottom: "10px", textAlign: "left"}}>{recipe.name}</h3>
                        <p>Category: <b>{recipe.category}</b></p>
                        <p>Cooking Time: <b>{recipe.time}</b></p>
                        <p>Difficulty Level: <b style={{color: "coral"}}>{recipe.difficulty}</b></p>
                        <Link to={`recipe/${recipe.id}`}><button style={{marginTop: "20px"}}>Read Recipe</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}