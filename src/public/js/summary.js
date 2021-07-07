const totalIncome = document.querySelector('#totalIncome')
const totalExpense = document.querySelector('#totalExpense')
const total = document.querySelector('#total')
let totalAmountIncome = 0
let totalAmountExpense = 0

;(async () => {
    let response1 = await request('/summaries?table=incomes')
    let response2 = await request('/summaries?table=expenses')
    totalIncome.innerText = response1[0].sum
    totalExpense.innerText = response2[0].sum
    total.innerText = response1[0].sum - response2[0].sum
})()
