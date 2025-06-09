const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(userInput);

const estimateTransactionFee = (amountToSend) => {
  const rawFee = amountToSend * 0.015;
  const fee = Math.max(10, Math.min(rawFee, 70));
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("\nSend Money Securely!");
};

estimateTransactionFee(amountToSend);