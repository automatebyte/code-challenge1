// Prompt the user to enter the amount they want to send
const userInput = prompt("Unatuma Ngapi? (KES):");

// Convert the input from a string to a number
const amountToSend = Number(userInput);

// Define the fee estimator function using an arrow function
const estimateTransactionFee = (amountToSend) => {
  // Validate that the input is a valid, positive number
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter a valid amount.");
    return; // Stop if the input is invalid
  }

  // Step 1: Calculate 1.5% of the amount
  const rawFee = amountToSend * 0.015;

  // Step 2: Apply minimum and maximum fee rules
  // If calculated fee < 10 → use 10
  // If calculated fee > 70 → use 70
  // Else → use the calculated fee
  const fee = Math.max(10, Math.min(rawFee, 70));

  // Step 3: Calculate total amount to be debited (amount + fee)
  const total = amountToSend + fee;

  // Step 4: Output all results in a user-friendly format
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("\nSend Money Securely!");
};

// Call the function with the user input
estimateTransactionFee(amountToSend);
