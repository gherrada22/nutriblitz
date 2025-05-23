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
      name: "Tropical Smoothie",
      description: " ",
      ingredients: [
        "1 tablespoon Nutriblitz powder",
        "1/2 cup frozen mango chunks",
        "1/4 cup coconut milk",
        "1 tsp chia seeds",
        "Honey to taste (optional)"
      ],
      steps: [
        "Blend Nutriblitz powder, frozen mango chunks and coconut milk until creamy.",
        "Serve in a glass, drizzle with honey and sprinkle with chia seeds.",
        "Boost a slice of pineapple on the rim for a tropical touch."
      ],
      image: "/img/tropical-smoothie.png",
      color: "yellow-500"
    },
    {
      id: 2,
      name: "CHOCO-BERRY BLISS ",
      description: " ",
      ingredients: [
        "1 tablespoon Nutriblitz powder.",
        "150 ml milk (or almond milk)",
        "½ cup frozen strawberries",
        "1 tablespoon of chia seeds"
      ],
      steps: [
        "Blend the nutriblitz powder, milk and frozen strawberries in a blender until smooth.",
        "Add the chia seeds and blend for 10 seconds to preserve the texture.",
        "Pour into a glass, top with chocolate chips or a drizzle of honey"
      ],
      image: "/img/berry.png",
      color: "brown-600"
    },
    {
      id: 3,
      name: "PROTEIN POWER BOWL",
      description: " ",
      ingredients: [
        "2 tablespoons NUTRIBLITZ powder.",
        "200 ml oat milk.",
        "¼ cup frozen blueberries.",
        "1 tablespoon of peanut butter.",
        "Toppings: banana slices, hemp seeds, honey."
      ],
      steps: [
        "Blend the nutriblitz powder, oat milk and blueberries until smooth.",
        "Add the peanut butter and mix lightly for a marbled effect.",
        "Place in a bowl, arrange the banana slices and sprinkle with the hemp seeds."
      ],
      image: "/img/power.png",
      color: "green-500"
    },
    {
      id: 4,
      name: "CARAMEL APPLE CRUNCH",
      description: " ",
      ingredients: [
        "1 tablespoon Nutriblitz powder",
        "½ cup apple chunks",
        "½ cup vanilla Greek yogurt",
        "¼ cup oats",
        "Toppings: Apple slices, caramel drizzle, crushed walnuts."
      ],
      steps: [
        "Blend nutriblitz powder, apple chunks, yogurt and oatmeal until thick.",
        "In a glass, alternate the smoothie and apple slices.",
        "Top with caramel, add walnuts and sprinkle with cinnamon."
      ],
      image: "/img/apple.png",
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