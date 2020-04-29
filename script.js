const currEleOne = document.getElementById('currency-one')
const amountEleOne = document.getElementById('amount-one')
const currEleTwo = document.getElementById('currency-two')
const amountEleTwo = document.getElementById('amount-two')

const rateEle = document.getElementById('rate')
const swap = document.getElementById('swap')

// fetch exchange rates and update the DOM 
function calculate(){
    // get the values of currency amount
    const currOne = currEleOne.value
    const currTwo = currEleTwo.value

    // console.log(currOne, currTwo)

    fetch(`https://prime.exchangerate-api.com/v5/2f82497b5082924633aea2d2/latest/${currOne}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            const rate = data.conversion_rates[currTwo]
            // console.log(rate)
            rateEle.innerText = `1 ${currOne} = ${rate} ${currTwo}`
            amountEleTwo.value = (amountEleOne.value * rate).toFixed(2)
            console.log(amountEleTwo.value)
        })
}

// Event Listeners 

currEleOne.addEventListener('change', calculate);
amountEleOne.addEventListener('input', calculate);
currEleTwo.addEventListener('change', calculate);
amountEleTwo.addEventListener('input', calculate);
swap.addEventListener('click', () =>{
    const temp = currEleOne.value
    currEleOne.value = currEleTwo.value
    currEleTwo.value = temp 
    calculate()
})

calculate()