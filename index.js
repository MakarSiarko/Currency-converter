const rates = {};

const elementUSD = document.querySelector('[data-value = "USD"]');
const elementEUR = document.querySelector('[data-value = "EUR"]');
const elementPLN = document.querySelector('[data-value = "PLN"]');

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

fetch("https://www.nbrb.by/api/exrates/rates?ondate&periodicity=0")
  .then(response => response.json())
  .then( function(data) {

    console.log(data);
    
    rates.USD = data[7].Cur_OfficialRate;
    rates.EUR = data[9].Cur_OfficialRate;
    rates.PLN = data[10].Cur_OfficialRate / 10 ;

    elementUSD.textContent = rates.USD.toFixed(2);
    elementEUR.textContent = rates.EUR.toFixed(2);
    elementPLN.textContent = (rates.PLN).toFixed(2);

    })

function convert () {
  result.value = (input.value / rates[select.value]).toFixed(2) ;
}

input.oninput = convert;
select.oninput = convert;
  


