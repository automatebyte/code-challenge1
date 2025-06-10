// Prompt the user to enter how many cups of chai they want to make
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

// Convert the string input to a number (base 10)
const numberOfCups = Number(userInput);

// Define the calculator function using an arrow function
const calculateChaiIngredients = (numberOfCups) => {
  // Validate the input: it must be a number greater than 0
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    return; // Exit early if invalid
  }

  // Define the standard ingredient amounts for one cup
  const water = 200;      // in ml
  const milk = 50;        // in ml
  const teaLeaves = 1;    // in tablespoons
  const sugar = 2;        // in teaspoons

  // Multiply each ingredient by the number of cups requested
  const totalWater = water * numberOfCups;
  const totalMilk = milk * numberOfCups;
  const totalTeaLeaves = teaLeaves * numberOfCups;
  const totalSugar = sugar * numberOfCups;

  // Output the result to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
};

// Call the function and pass in the converted number from the prompt
calculateChaiIngredients(numberOfCups);
