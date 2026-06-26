
alert("javascript connected!");
 function saveExpenser(){
    let amount=document.getElementById("amount").value;
    let category=document.getElementById("category").value;
    let date=document.getElementById("date").value;
    let description=document.getElementById("description").value;
    let expense={
        amount:amount,
        category:category,
        date:date,
        description:description,
    
    };

    let expenses=[];
        if(localStorage.getItem("expenses")){
             expenses=
        JSON.parse(localStorage.getItem("expenses"));
            }
        expenses.push(expense);
        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)

        );
        console.log(localStorage.getItem("expenses"));
        alert("expense saved successfully!");
}
    function displayExpenser(){
        let expenses=
        JSON.parse(localStorage.getItem("expenses")) || [];
        let output= "";
        expenses.forEach(function(expense){
            output +=`
            <div>
               <p>amount:${expense.amount}</p>
               <p>categoryt:${expense.category}</p>
               <p>date:${expense.date}</p>
               <p>description:${expense.description}</p>
               <hr>
               </div>
               `;
            
            });
            document.getElementById("expenseList").innerHTML=output;
     }   
     function login(event){
        event.preventDefault();
        alert("login successful!");
     }               