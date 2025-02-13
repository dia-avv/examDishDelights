import { Link } from "react-router-dom";
import food from '../assets/images/food.png';

export default function Home() {
    return(
        <>
        <h1 style={{marginBottom: "40px"}}>Welcome to <i>Dish Delights Recipes</i>!</h1>
        <h4>Where you can find <i>new recipes</i>, create and save your own and mark your <i>favorite</i> ones to always know where to find them!</h4>
        <img src={food} alt="Image of Ingredients" className="photo"/>
        <div className="buttons">
            <Link to="recipes"><button>Explore New Recipes</button></Link>
            <Link to="favorites"><button>Create A Recipe</button></Link>
        </div>
        </>
    )
}