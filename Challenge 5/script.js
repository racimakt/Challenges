const exchangeRates = {
  DZD: 1,
  USD: 135,
  EUR: 145,
};

const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const resultDisplay = document.getElementById("result");

function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultDisplay.textContent = "Veuillez entrer un montant valide.";
    return;
  }

  const convertedAmount =
    (amount * exchangeRates[fromCurrency]) / exchangeRates[toCurrency];
  resultDisplay.textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
}

function resetFields() {
  amountInput.value = "";
  fromCurrencySelect.value = "DZD";
  toCurrencySelect.value = "DZD";
  resultDisplay.textContent = "";
}

convertBtn.addEventListener("click", convertCurrency);
resetBtn.addEventListener("click", resetFields);
