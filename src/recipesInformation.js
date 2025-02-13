import guacamole from './assets/images/guacamole.png';
import chicken from './assets/images/chcken.jpg';
import carbonara from './assets/images/carbonara.avif';
import potatoes from './assets/images/potatoes.webp';
import lavacake from './assets/images/lavacake.jpg';

export const recipes = [
    {
        id: 1,
        name: "Guacamole",
        category: "Appetizer",
        image: guacamole,
        ingredients: [
            "3 ripe avocados",
            "1 small onion, chopped",
            "1 small tomato, diced",
            "1 jalapeño, minced (optional)",
            "2 tablespoons lime juice",
            "Salt and pepper to taste",
            "Fresh cilantro (optional)"
        ],
        time: "10 minutes",
        servings: "4-6",
        difficulty: "Easy",
        instructions: [
            "Cut the avocados in half, remove the pit, and scoop the flesh into a bowl.",
            "Mash the avocado with a fork, leaving it as chunky or smooth as you prefer.",
            "Add the onion, tomato, jalapeño (if using), lime juice, salt, and pepper.",
            "Stir to combine and adjust seasoning as necessary.",
            "Garnish with cilantro (optional) and serve with tortilla chips or as a topping for tacos."
        ]
    },
    {
        id: 2,
        name: "Lemon Herb Grilled Chicken",
        category: "Main Course",
        image: chicken,
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "2 tablespoons olive oil",
            "Juice and zest of 1 lemon",
            "2 garlic cloves, minced",
            "1 teaspoon dried oregano",
            "1 teaspoon dried thyme",
            "Salt and pepper to taste"
        ],
        time: "15-20 minutes",
        servings: "4",
        difficulty: "Medium",
        instructions: [
            "In a bowl, mix olive oil, lemon juice, lemon zest, garlic, oregano, thyme, salt, and pepper.",
            "Place the chicken breasts in a resealable bag or shallow dish and pour the marinade over the chicken.",
            "Seal the bag and refrigerate for at least 30 minutes (up to 2 hours).",
            "Preheat the grill to medium-high heat.",
            "Grill the chicken for 6-7 minutes on each side, or until fully cooked and the internal temperature reaches 165°F (74°C)",
            "Let the chicken rest for 5 minutes before slicing and serving."
        ]
    },
    {
        id: 3,
        name: "Spaghetti Carbonara",
        category: "Main Course",
        image: carbonara,
        ingredients: [
            "12 oz spaghetti",
            "2 large eggs",
            "1 cup grated Parmesan cheese",
            "1/2 cup pancetta or bacon, diced",
            "2 garlic cloves, minced",
            "Salt and pepper to taste",
            "Fresh parsley for garnish (optional)"
        ],
        time: "20 minutes",
        servings: "4",
        difficulty: "Medium",
        instructions: [
            "Cook the spaghetti according to package instructions, reserving 1/2 cup of pasta water.",
            "While the pasta cooks, heat a skillet over medium heat and cook pancetta (or bacon) until crispy, about 5 minutes.",
            "In a bowl, whisk the eggs and Parmesan cheese together. Add a pinch of salt and pepper.",
            "Drain the pasta and add it to the skillet with the pancetta. Toss to combine.",
            "Remove from heat and quickly stir in the egg mixture, adding reserved pasta water a little at a time to create a creamy sauce.",
            "Garnish with parsley and serve immediately."
        ]
    },
    {
        id: 4,
        name: "Garlic Parmesan Potatoes",
        category: "Side Dish",
        image: potatoes,
        ingredients: [
            "1.5 lbs baby potatoes, halved",
            "3 tablespoons olive oil",
            "4 garlic cloves, minced",
            "1 teaspoon dried rosemary",
            "1/2 cup grated Parmesan cheese",
            "Salt and pepper to taste"
        ],
        time: "35-40 minutes",
        servings: "4",
        difficulty: "Easy",
        instructions: [
            "Preheat the oven to 400°F (200°C).",
            "Toss the halved potatoes with olive oil, garlic, rosemary, salt, and pepper.",
            "Arrange the potatoes on a baking sheet in a single layer.",
            "Roast for 25-30 minutes, flipping once, until golden brown and tender.",
            "Remove from the oven and sprinkle with Parmesan cheese while still hot.",
            "Serve immediately as a delicious side dish."
        ]
    },
    {
        id: 5,
        name: "Lava Cake",
        category: "Dessert",
        image: lavacake,
        ingredients: [
            "1/2 cup unsalted butter",
            "4 oz semisweet chocolate, chopped",
            "1/2 cup powdered sugar",
            "2 large eggs",
            "2 large egg yolks",
            "1 teaspoon vanilla extract",
            "1/4 cup all-purpose flour",
            "Pinch of salt"
        ],
        time: "20-25 minutes",
        servings: "4",
        difficulty: "Medium",
        instructions: [
            "Preheat the oven to 425°F (220°C). Grease and flour 4 ramekins.",
            "Melt the butter and chocolate together in a heatproof bowl over simmering water or in the microwave.",
            "Stir in the powdered sugar until smooth.",
            "Whisk in the eggs, egg yolks, and vanilla extract until well combined.",
            "Gently fold in the flour and salt until just combined.",
            "Divide the batter evenly among the prepared ramekins.",
            "Bake for 12-14 minutes until the edges are firm but the center is soft.",
            "Let the cakes cool for 1-2 minutes, then run a knife around the edges to loosen.",
            "Invert onto plates and serve immediately, optionally with vanilla ice cream."
        ]
    }
];