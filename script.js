let input_field = document.getElementById("input_field");
let from_currency = document.getElementById("from_currency");
let to_currency = document.getElementById("to_currency");
let exchange_text = document.getElementById("exchange_text");
let exchange_btn = document.getElementById("exchange_btn");
let result_text = document.getElementById("result_text");
let convert_btn = document.getElementById("convert_btn");
exchange_btn.addEventListener("click", () => {
  [from_currency.value, to_currency.value] = [
    to_currency.value,
    from_currency.value,
  ];
  calculate();
});
async function calculate() {
  let from_value = from_currency.value;
  let to_value = to_currency.value;
  let curr_value = input_field.value;
  let response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${from_value}`
  );
  let result = await response.json();
  let rate = result.rates[to_value];
  exchange_text.innerHTML = `Exchange Rate : ${rate}`;
  let total = (rate * curr_value).toFixed(3);
  result_text.innerHTML = `${curr_value} ${from_value}
  converted to
  ${total} ${to_value}`;
}
convert_btn.addEventListener("click", calculate);
