function transactionsFor(transactionID, transactionList) {
  return transactionList.filter((inventory) => inventory.id === transactionID);
}

function isItemAvailable(inventoryID, inventoryList) {
  let inventoryLookUp = transactionsFor(inventoryID, inventoryList);
  let incoming = 0;
  let outgoing = 0;
  let finalQuantity = 0;

  for (let idx = 0; idx < inventoryLookUp.length; idx++) {
    if (inventoryLookUp[idx].movement === "in") {
      incoming += inventoryLookUp[idx].quantity;
    } else {
      outgoing += inventoryLookUp[idx].quantity;
    }
  }
  finalQuantity = incoming - outgoing;
  return calculateQuantity(finalQuantity);
}

function calculateQuantity(quantity) {
  return quantity <= 0 ? false : true;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
