const originalTransations = [
  { transactionId: 't100', type: 'debit', amount: 107.15, description: 'Amazon Purchase', date: '09/01/2020' },
  { transactionId: 't101', type: 'debit', amount: 15.05, description: 'QuikTrip', date: '09/01/2020' },
  { transactionId: 't102', type: 'debit', amount: 9.67, description: 'Chipotle', date: '09/02/2020' },
  { transactionId: 't103', type: 'debit', amount: 350, description: 'A1 Air Conditioning', date: '09/03/2020' },
  { transactionId: 't104', type: 'debit', amount: 12.30, description: 'Chick Fil A', date: '09/03/2020' },
  { transactionId: 't105', type: 'credit', amount: 500, description: 'Deposit', date: '09/05/2020' },
  { transactionId: 't106', type: 'debit', amount: 25, description: 'DPS Service Fee', date: '09/06/2020' },
  { transactionId: 't107', type: 'debit', amount: 212.31, description: 'Sprouts', date: '09/06/2020' },
  { transactionId: 't107', type: 'credit', amount: 20.90, description: 'Sprouts', date: '09/06/2020' },
  { transactionId: 't108', type: 'debit', amount: 11.50, description: 'Half Price Books', date: '09/07/2020' }
];

originalTransations.filter((transaction) => {
    if(transaction.amount <= 20 ){
        console.log(transaction);
    }
});
originalTransations.filter((transactions) => {
    if(Number.isInteger(transactions.amount)){
        console.log(transactions);
    }
})
originalTransations.filter((transactions) => {
    if(transactions.type === 'credit' || transactions.date === '09/03/2020'){
        console.log(transactions);
    }
})

