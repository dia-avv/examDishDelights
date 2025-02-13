import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Afghsjjhbkdk</h1>
            <h4 style={{marginTop: "0"}}><i>Dish Delights</i> - your go-to destination for discovering and sharing delicious recipes from around the world!</h4>
            <p>We believe that cooking is more than just preparing food—it’s an <i>experience</i>, a way to connect with loved ones, and an opportunity to explore different cultures through flavors and ingredients. Whether you’re a seasoned chef or a kitchen newbie, our platform is designed to inspire your <i>culinary journey</i>.</p>
            <Link to="examDishDelights/recipes"><button>Explore Recipes</button></Link>
            <h3>What We Offer</h3>
            <div className={styles.offersContainer}>
                <div className={styles.offer}>
                    <h4>A Collection of Unique Recipes</h4>
                    <p>Browse through a diverse range of dishes, from comforting classics to innovative new creations.</p>
                </div>
                <div className={styles.offer}>
                    <h4>Community-Driven Cooking</h4>
                    <p>Have a family recipe you love? Share it with others! Our platform allows food enthusiasts like you to contribute your favorite dishes and cooking tips.</p>
                </div>
                <div className={styles.offer}>
                    <h4>Global Flavors</h4>
                    <p>Expand your palate with recipes from different cuisines, and bring international tastes into your home kitchen.</p>
                </div>
            </div>
            <h3>Join the Dish Delights Community!</h3>
            <p>We’re more than just a recipe website—we’re a <i>community</i> of food lovers who enjoy experimenting in the kitchen and sharing our passion for great meals. So, <i>start exploring</i>, <i>get cooking</i>, and don’t forget to <i>add your own</i> delightful dishes to inspire others!</p>
            <Link to="examDishDelights/favorites"><button>Create A Recipe</button></Link>
            <h4 style={{marginTop: "40px", color: "coral"}}>Happy Cooking!</h4>
        </div>
    )
}