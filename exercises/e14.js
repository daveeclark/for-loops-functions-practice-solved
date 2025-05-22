// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalances = []; // new list of each wrong balance

  // checks each bank account
  for (let i = 0; i < array.length; i++) {
    // comparative variables
    let deposits = array[i].deposits || [];
    let depositSum = 0;
    // iterates through each deposit, assigning the total to depositSum
    for (let j = 0; j < deposits.length; j++) {
      depositSum += deposits[j];
    }

    // comparative variables
    let withdrawals = array[i].withdrawals || [];
    let withdrawalSum = 0;
    // iterates through each withdrawal, assigning the total to withdrawalSum
    for (let k = 0; k < withdrawals.length; k++) {
      withdrawalSum += withdrawals[k];
    }

    let checkedBalance = depositSum - withdrawalSum;

    // balance check
    if (array[i].balance !== checkedBalance) {
      wrongBalances.push(array[i]);
    }
  }
  return wrongBalances;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
