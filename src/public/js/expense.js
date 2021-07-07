const tbody = document.querySelector('#tbody')
const expenseInput = document.querySelector('#expenseInput')
const amountInput = document.querySelector('#amountInput')
const addForm = document.querySelector('form')
const title = document.querySelector('.title')

;(async () => {
    let response = await fetch('/expenses')
    let expenses = await response.json()
    expensesRenderer(expenses)
})()

function expensesRenderer (expenses) {
    let string = ""
    expenses.map((expense) => {
        string += `
            <tr data-id=${expense.id}>
                <td>${expense.id}</td>
                <td>${expense.reason}</td>
                <td>${expense.amount}</td>
                <td>${expense.date}</td>
                <td>
                    <span class="fas fa-trash-alt"></span>
                    <span class="fas fa-pencil-alt"></span>
                </td>
            </tr>
        `
    })
    tbody.innerHTML = string
    let deleteBtns = document.querySelectorAll('.fa-trash-alt')
    let editBtns = document.querySelectorAll('.fa-pencil-alt')
    deleteBtns.forEach(deleteBtn => {
        let id = deleteBtn.parentElement.parentElement.dataset.id
        deleteBtn.addEventListener('click', async () => {
            let response = await request(`/expense`, 'DELETE', {id})
            if (response) {
                title.textContent = response.message
                window.location = '/expense'
                setTimeout(() => {
                    title.textContent = 'My Expenses' 
                }, 1000)
            }
        })
    })
    editBtns.forEach(editBtn => {
        let parentElement = editBtn.parentElement.parentElement
        let id = parentElement.dataset.id
        editBtn.addEventListener('click', () => {
            parentElement.childNodes[3].innerHTML = `<input type="text" class="form-control" id="editExpenseInput" value=${parentElement.childNodes[3].textContent} required>`
            parentElement.childNodes[5].innerHTML = `<input type="number" class="form-control" id="editAmountInput" value=${parentElement.childNodes[5].textContent} required>`
            parentElement.childNodes[9].innerHTML = `<button type="submit" class="btn btn-primary">Update</button>`
            let updateBtn = parentElement.childNodes[9].childNodes[0]
            updateBtn.addEventListener('click', async () => {
                let response = await request('/expense', 'PUT', {
                    id,
                    reason: editExpenseInput.value,
                    amount: editAmountInput.value
                })
                if (response) {
                    title.textContent = response.message
                    window.location = '/expense'
                    setTimeout(() => {
                        title.textContent = 'My Expenses' 
                    }, 1000)
                }
            })
        })
    })
}

addForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let newExpense = {
        reason: expenseInput.value,
        amount: Number(amountInput.value)
    }
    let response = await request('/expense', 'POST', newExpense)
    if (response.body) {
        title.textContent = response.message
        window.location = '/expense'
        setTimeout(() => {
            title.textContent = 'My Expenses' 
        }, 1000)
    }
})