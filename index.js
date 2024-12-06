//Question 2: Simulating Private Variables with Closures
const createBankAccount = () => {
  let balance = 0; // Private variable for the balance
  let transactionHistory = []; // Private variable for storing transaction history

  // Deposit function to add money to the account
  const deposit = (amount) => {
    balance += amount;
    transactionHistory.push({ type: "Deposit", amount: amount });
    console.log(`Deposited: ${amount}`);
  };

  // Withdraw function to take money out of the account
  const withdraw = (amount) => {
    if (balance >= amount) {
      balance -= amount;
      transactionHistory.push({ type: "Withdrawal", amount: amount });
      console.log(`Withdrawn: ${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  };

  // Function to check the balance (without exposing it directly)
  const checkBalance = () => {
    console.log(`Current balance: ${balance}`);
  };

  // Function to get the transaction history
  const getTransactionHistory = () => {
    console.log("Transaction History:", transactionHistory);
  };

  // Return the methods that interact with the private balance and transaction history
  return {
    deposit,
    withdraw,
    checkBalance,
    getTransactionHistory,
  };
};

// Usage:

const account = createBankAccount();
account.deposit(500);    // Output: Deposited: 500
account.withdraw(200);   // Output: Withdrawn: 200
account.withdraw(400);   // Output: Insufficient balance
account.checkBalance();  // Output: Current balance: 300
account.getTransactionHistory(); // Output: Transaction History: [{ type: "Deposit", amount: 500 }, { type: "Withdrawal", amount: 200 }]
