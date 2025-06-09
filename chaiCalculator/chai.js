const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(3);

const calculateChaiIngredients = (numberOfCups) => {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const tea = 1 * numberOfCups;
  const sugar = 2 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${tea} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
};

calculateChaiIngredients(numberOfCups);
