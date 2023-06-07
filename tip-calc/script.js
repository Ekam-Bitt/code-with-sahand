const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const calculateBtn = document.getElementById('btn');
const resultLabel = document.getElementById('result');
calculateBtn.addEventListener('click', calculateTotal);

function calculateTotal() 
{
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;

    resultLabel.textContent = `Total: $${totalBill.toFixed(2)}`;
}