const transactions=[];

function renderTransactions(){
    const tableBody=document.getElementById('fraud-report-table');
    tableBody.innerHTML= ' ';

    transactions.forEach((transaction,index)=>{
        const row=document.createElement('tr');

        row.iinerHTML='
        <td>${transaction.id}</td>
        <td>${transaction.status}</td>
        <td>
            <button class="button" onclick="validateTransaction(${index})">Validate</button>
        </td>
        ';

        tableBody.appendChild(row);
    });
}
function addSampleData(){
    transactions.push({id:TXN${transactions.length+1}`,status:'Pending`});
    renderTransactions();
}
function validateTransation(index){
    transations[index].status='Validated';
    renderTransactions();
}

renderTransactions();
