const SMALL_RECIPES = {
  1: {
    id: 1,
    name: "Cereal Ice Cream Cups",
    description:
      "Win the ice cream social with these customizable ice cream cups! Use with your favorite chocolate, cereal, or hard candy for an extra satisfying treat. You’ll never want to go back to plain cones again!",
    thumbnail_url:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/279364.jpg",
  },
  2: {
    id: 2,
    name: "Chicken & Veggie Stir-Fry",
    description:
      "Getting take-out is a crave-worthy indulgence. And with our easy chicken veggie stir fry recipe, you can recreate the magic of a Chinese takeout right in your very own kitchen. Feel free to mix up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what.",
    thumbnail_url:
      "https://img.buzzfeed.com/video-api-prod/assets/cf779f07644e43d988e37652a4987d7f/BFV12730_ChickenBroccoliandMushroomStirFry-ThumbTextless1080.jpg",
  },
};

const FULL_RECIPES = {
  1: {
    ...SMALL_RECIPES[1],
    total_time_tier: {
      display_tier: "15 minutes",
    },
    sections: [
      {
        name: "Cotton Candy",
        position: 1,
        components: [
          {
            ingredient: {
              name: "pink hard candies",
            },
            id: 1,
            measurements: [
              {
                quantity: "½",
                unit: {
                  name: "cup",
                },
              },
            ],
          },
          {
            ingredient: {
              name: "blue hard candies",
            },
            id: 2,
            measurements: [
              {
                quantity: "½",
                unit: {
                  name: "cup",
                },
              },
            ],
          },
        ],
      },
    ],
    instructions: [
      {
        display_text:
          "Lightly grease a 6-cup nonstick muffin tin with nonstick spray.",
        id: 1,
      },
      {
        display_text:
          "In a large pot, melt the butter over medium heat. Add the marshmallows and stir until completely melted and combined with the butter. Stir in the cereal until well coated.",
        id: 2,
      },
      {
        display_text:
          "Divide the cereal mixture into 6 equal portions and roll into balls. Flatten each ball into a disc, then gently press each disc into a cup of the prepared muffin tin. Press the bottom of a small glass into each cup to pack the mixture slightly against the bottom and up the sides of the molds. Let cool to room temperature, about 20 minutes.",
        id: 3,
      },
      {
        display_text:
          "When ready to serve, remove the cereal cups from the muffin tin and scoop the ice cream into the cups.",
        id: 4,
      },
      {
        display_text: "Enjoy!",
        id: 5,
      },
    ],
    yields: "6 servings",
  },
  2: {
    ...SMALL_RECIPES[2],
    sections: [
      {
        name: "Cotton Candy",
        position: 1,
        components: [
          {
            ingredient: {
              name: "pink hard candies",
            },
            id: 1,
            measurements: [
              {
                quantity: "½",
                unit: {
                  name: "cup",
                },
              },
            ],
          },
          {
            ingredient: {
              name: "blue hard candies",
            },
            id: 2,
            measurements: [
              {
                quantity: "½",
                unit: {
                  name: "cup",
                },
              },
            ],
          },
        ],
      },
    ],
    instructions: [
      {
        display_text:
          "Lightly grease a 6-cup nonstick muffin tin with nonstick spray.",
        id: 1,
      },
      {
        display_text:
          "In a large pot, melt the butter over medium heat. Add the marshmallows and stir until completely melted and combined with the butter. Stir in the cereal until well coated.",
        id: 2,
      },
      {
        display_text:
          "Divide the cereal mixture into 6 equal portions and roll into balls. Flatten each ball into a disc, then gently press each disc into a cup of the prepared muffin tin. Press the bottom of a small glass into each cup to pack the mixture slightly against the bottom and up the sides of the molds. Let cool to room temperature, about 20 minutes.",
        id: 3,
      },
      {
        display_text:
          "When ready to serve, remove the cereal cups from the muffin tin and scoop the ice cream into the cups.",
        id: 4,
      },
      {
        display_text: "Enjoy!",
        id: 5,
      },
    ],
    yields: "6 servings",
  },
};

export { SMALL_RECIPES, FULL_RECIPES };
