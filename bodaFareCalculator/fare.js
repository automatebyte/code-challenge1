// Prompt the user to input the distance in kilometers
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

// Convert the user's input to a number (floating point)
const distanceInKm = Number(userInput);

// Define the fare calculation function using an arrow function
const calculateBodaFare = (distanceInKm) => {
  // Validate the input: make sure it's a number and positive
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter a valid number of kilometers.");
    return; // Stop execution if input is invalid
  }

  // Base fare that's always charged regardless of distance
  const baseFare = 50;

  // Cost per kilometer
  const chargePerKm = 15;

  // Calculate the cost for distance travelled
  const distanceCharge = distanceInKm * chargePerKm;

  // Total fare is the sum of the base fare and distance charge
  const totalFare = baseFare + distanceCharge;

  // Display the fare breakdown in a friendly format
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
};

// Call the function with the converted user input
calculateBodaFare(distanceInKm);


