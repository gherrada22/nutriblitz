import React, { useState } from 'react';

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  image: string;
  color: string;
}

const Recipes: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number>(1);

  const recipes: Recipe[] = [
    {
      id: 1,
      name: "Morning Boost Shake",
      description: "Start your day with this energizing, nutrient-packed shake that will keep you full and focused all morning.",
      ingredients: [
        "1 scoop Maca Boost powder",
        "1 frozen banana",
        "1 cup almond milk",
        "1 tbsp almond butter",
        "1/2 tsp cinnamon",
        "1 tsp honey (optional)"
      ],
      steps: [
        "Add all ingredients to a blender",
        "Blend on high for 45-60 seconds until smooth",
        "Pour into your favorite glass and enjoy immediately"
      ],
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "yellow-500"
    },
    {
      id: 2,
      name: "Chocolate Protein Delight",
      description: "A delicious, protein-rich chocolate shake that's perfect for post-workout recovery or as a satisfying snack.",
      ingredients: [
        "1 scoop Cacao Power powder",
        "1 cup oat milk",
        "1/2 frozen avocado",
        "1 tbsp maple syrup",
        "1 scoop plant protein",
        "Ice cubes (optional)"
      ],
      steps: [
        "Combine all ingredients in a high-speed blender",
        "Blend until creamy and smooth (about 1 minute)",
        "Add more liquid if needed to reach desired consistency"
      ],
      image: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "brown-600"
    },
    {
      id: 3,
      name: "Tropical Green Smoothie",
      description: "A refreshing, tropical smoothie loaded with vitamins and antioxidants for a perfect afternoon pick-me-up.",
      ingredients: [
        "1 scoop Banana Fuel powder",
        "1 cup coconut water",
        "1 cup spinach",
        "1/2 cup frozen pineapple",
        "1/2 cup frozen mango",
        "Juice of 1/2 lime"
      ],
      steps: [
        "Place spinach and liquid in blender first",
        "Add remaining ingredients and blend on high speed",
        "Blend until smooth and bright green"
      ],
      image: "https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "green-500"
    },
    {
      id: 4,
      name: "Overnight Breakfast Jar",
      description: "Prepare this the night before for a quick, filling breakfast that's ready when you are.",
      ingredients: [
        "1 scoop Oat Foundation powder",
        "1/2 cup rolled oats",
        "3/4 cup yogurt of choice",
        "1 tbsp chia seeds",
        "1/2 cup berries",
        "1 tbsp honey or maple syrup"
      ],
      steps: [
        "Mix all ingredients except berries in a jar",
        "Cover and refrigerate overnight",
        "Top with fresh berries before serving"
      ],
      image: "https://images.pexels.com/photos/8504675/pexels-photo-8504675.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "amber-600"
    }
  ];

  const recipe = recipes.find(r => r.id === selectedRecipe) || recipes[0];
  
  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="text-green-600 font-medium">EASY RECIPES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 text-center mt-2">
            Delicious Ways to Enjoy NutriBlitz
          </h2>
          <div className="w-16 h-1 bg-green-500 rounded mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          <div className="lg:col-span-1">
            <div className="bg-green-50 rounded-xl p-4 sticky top-24">
              <h3 className="text-lg font-bold text-brown-800 mb-4">Recipe Collection</h3>
              <ul className="space-y-2">
                {recipes.map((r) => (
                  <li key={r.id}>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedRecipe === r.id 
                          ? `bg-${r.color} text-white` 
                          : 'bg-white text-brown-700 hover:bg-green-100'
                      }`}
                      onClick={() => setSelectedRecipe(r.id)}
                    >
                      <span className="font-medium">{r.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-auto md:aspect-auto overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className={`inline-block px-3 py-1 rounded-full bg-${recipe.color} bg-opacity-20 text-${recipe.color} text-sm font-medium mb-4`}>
                    {recipe.name}
                  </div>
                  <p className="text-brown-600 mb-6">{recipe.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-brown-800 mb-3">Ingredients</h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="ml-3 text-brown-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-brown-800 mb-3">Instructions</h4>
                    <ol className="space-y-2">
                      {recipe.steps.map((step, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                            {i + 1}
                          </div>
                          <span className="ml-3 text-brown-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="mt-8 flex justify-between items-center">
                    <div>
                      <span className="block text-brown-600 text-sm">Prep time</span>
                      <span className="block text-lg font-bold text-brown-800">5 min</span>
                    </div>
                    <div>
                      <span className="block text-brown-600 text-sm">Calories</span>
                      <span className="block text-lg font-bold text-brown-800">250 kcal</span>
                    </div>
                    <div>
                      <span className="block text-brown-600 text-sm">Protein</span>
                      <span className="block text-lg font-bold text-brown-800">15g</span>
                    </div>
                  </div>
                  
                  <button className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                    Print Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-brown-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-800 mb-4">Create Your Own Recipes</h3>
          <p className="text-brown-600 max-w-2xl mx-auto mb-8">
            Get creative with NutriBlitz! Share your recipes on social media using #NutriBlitzCreations for a chance to be featured on our page and win exciting prizes!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Recipe Book
            </button>
            <button className="border-2 border-brown-700 text-brown-800 hover:bg-brown-700 hover:text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;