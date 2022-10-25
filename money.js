let money = [
    /* { date: '2022-10-22', income: 0, expenditure: 20000 } */
];

const input = document.querySelectorAll('form li input');
const select = document.querySelector('form li select');
const btn = document.querySelector('form button');
btn.addEventListener('click', submit);

function submit() {
    event.preventDefault();
    if (select.value == '수입') {
        money.push(
            { date: `${input[0].value}`, income: `${Number(input[1].value)}`, expenditure: 0 }
        )
    }
    else {
        money.push(
            { date: `${input[0].value}`, income: 0, expenditure: `${Number(input[1].value)}` }
        )
    }
    

    const tr = document.querySelectorAll('table .write');
    let str;
    let totalIncome = 0;
    let totalExpenditure = 0;
    let total = 0;
    money.forEach(function (value, index) {
        str = '';
        str += `<td>${value.date}</td>
        <td>${value.income}</td>
        <td>${value.expenditure}</td>
        <td>${value.income - value.expenditure}</td>`;
        tr[index].innerHTML = `${str}`;

        totalIncome += Number(value.income);
        totalExpenditure += Number(value.expenditure);
        total = totalIncome - totalExpenditure;
    });

    const elIncome = document.querySelector('table .totalincome');
    const elExpenditure = document.querySelector('table .totalexpenditure');
    const elTotal = document.querySelector('table .total');

    elIncome.innerHTML = `${totalIncome}`;
    elExpenditure.innerHTML = `${totalExpenditure}`;
    let result = totalIncome - totalExpenditure;
    if (result > 0) {
        elTotal.style = `color: blue;`;
    }
    else if (result < 0) {
        elTotal.style = 'color: red;';
    }
    else {
        elTotal.style = 'color: black;';
    }
    elTotal.innerHTML = `${result}`;

    let date = money.length;
    const textarea = document.querySelectorAll('.textarea p');
    let dailyAvgIncome = (totalIncome / date).toFixed(2);
    let dailyAvgExp = (totalExpenditure / date).toFixed(2);
    textarea[0].innerHTML = `${dailyAvgIncome}원`;
    textarea[1].innerHTML = `${dailyAvgExp}원`;
    const text = document.querySelector('.textarea li:nth-of-type(3)');
    if (dailyAvgIncome >= dailyAvgExp) {
        text.innerHTML = "well done";
        text.style = 'color: blue;';
    }
    else {
        text.innerHTML = "not good";
        text.style = 'color: red;';
    }

}