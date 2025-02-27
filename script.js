const convertButton = document.getElementsByClassName("convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")
   
   const dolarToday = 5.07 
   const euroToday = 5.47
   const libraToday = 6.4
   const bitToday = 317.100
    
   if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style : "currency" , 
    currency: "USD"        
    }).format(inputCurrencyValue/dolarToday)
   }
   if(currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
        style:"currency" , 
        currency:"EUR"
    }).format(inputCurrencyValue/euroToday)
   }

if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-IN", {
        style:"currency" , 
        currency:"GBP"
        
    }).format(inputCurrencyValue/libraToday)
}

if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
        style:"currency" , 
        currency:"BTC"
        
    }).format(inputCurrencyValue/bitToday)
}

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency:"BRL"
   }).format(inputCurrencyValue)


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")




    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)



}



