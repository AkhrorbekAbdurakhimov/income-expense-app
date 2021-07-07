const tbody = document.querySelector('#tbody')
const incomeInput = document.querySelector('#incomeInput')
const amountInput = document.querySelector('#amountInput')
const addForm = document.querySelector('form')
const title = document.querySelector('.title')

;(async () => {
    let response = await fetch('/incomes')
    let incomes = await response.json()
    incomesRenderer(incomes)
})()

function incomesRenderer(incomes) {
    let string = ""
    incomes.map((income) => {
        string += `
            <tr data-id=${income.id}>
                <td>${income.id}</td>
                <td>${income.reason}</td>
                <td>${income.amount}</td>
                <td>${income.date}</td>
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
            let response = await request(`/income`, 'DELETE', {id})
            if (response) {
                title.textContent = response.message
                window.location = '/income'
                setTimeout(() => {
                    title.textContent = 'My Incomes' 
                }, 1000)
            }
        })
    })
    editBtns.forEach(editBtn => {
        let parentElement = editBtn.parentElement.parentElement
        let id = parentElement.dataset.id
        editBtn.addEventListener('click', () => {
            parentElement.childNodes[3].innerHTML = `<input type="text" class="form-control" id="editIncomeInput" value=${parentElement.childNodes[3].textContent} required>`
            parentElement.childNodes[5].innerHTML = `<input type="number" class="form-control" id="editAmountInput" value=${parentElement.childNodes[5].textContent} required>`
            parentElement.childNodes[9].innerHTML = `<button type="submit" class="btn btn-primary">Update</button>`
            let updateBtn = parentElement.childNodes[9].childNodes[0]
            updateBtn.addEventListener('click', async () => {
                let response = await request('/income', 'PUT', {
                    id,
                    reason: editIncomeInput.value,
                    amount: editAmountInput.value
                })
                if (response) {
                    title.textContent = response.message
                    window.location = '/income'
                    setTimeout(() => {
                        title.textContent = 'My Incomes' 
                    }, 1000)
                }
            })
        })
    })
}

addForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let newIncome = {
        reason: incomeInput.value,
        amount: Number(amountInput.value)
    }
    let response = await request('/income', 'POST', newIncome)
    if (response.body) {
        title.textContent = response.message
        window.location = '/income'
        setTimeout(() => {
            title.textContent = 'My Incomes' 
        }, 1000)
    }
})