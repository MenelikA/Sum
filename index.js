let earning = [];
let expense = [];
let totalrevenue = 0;

function sum(a){
  let sum =0;
  a.forEach(element => {
     sum += +element.value;
  });
  // console.log("sum" , sum)
  return sum;
}


function displayAll(){
  if(document.querySelector("#tablebody")){
    document.querySelector("#tablebody").innerHTML = "";
  }
  var result=earning.concat(expense);

  result.map((data, i) => {
    // console.log(data);
    $("#tablebody").append(
      '<tr id="tableerow3"> <td>' +
        (i+1) +
        "</td>" +
        "<td>" +
        data.description +
        "</td> <td>" +
        data.value +
        "</td><td>" +
        data.date +
        "</td></tr>"
    );
  });
}



function totrev(ear,exp){

  let expsum = sum(expense)
  let earsum = sum(earning)
  totalrevenue = earsum-expsum;
  displayChart(earsum , expsum)
  // console.log(totalrevenue)
  let dat =document.querySelector('#month-budget').innerHTML = '$' + totalrevenue;
}


//add earning
const addItem = () => {
  let type = document.querySelector("#form-select-type").value;
  // console.log(type)
  const desc = document.querySelector(".input-expense-description").value;
  const valuei = document.querySelector(".input-expense-value").value;
  const datei = new Date().toLocaleDateString();
  if (type === "Earning") {
    earning.push({
      description: desc,
      value: valuei,
      date: datei,
    });

    // console.log(tablebody);
    // displayEarning();

  } else if (type === "Expenses") {
    expense.push({
      description: desc,
      value: valuei,
      date: datei,
    });

  }
    totrev(earning , expense)
    displayAll();
};

const displayExpenses = () => {

  if(document.querySelector("#extablebody")){
    document.querySelector("#extablebody").innerHTML = "";
  }

  expense.map((data, i) => {
    $("#extablebody").append(
      '<tr id="tableerow2"> <td>' +
        (i+1)+
        "</td>" +
        "<td>" +
        data.description +
        "</td> <td>" +
        data.value +
        "</td><td>" +
        data.date +
        "</td></tr>"
    );

})};


const displayEarning = ()=>{

  if(document.querySelector("#tablebodyy")){
    console.log("innn")
    document.querySelector("#tablebodyy").innerHTML = "";
  }


    earning.map((data, i) => {
      $("#tablebodyy").append(
        '<tr id="tableerow"> <td>' +
          (i+1)+
          "</td>" +
          "<td>" +
          data.description +
          "</td> <td>" +
          data.value +
          "</td><td>" +
          data.date +
          "</td></tr>"
      );
    });
}

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  if (tabName == "Earnings") {
    // document.getElementById("earningvalue").innerHTML = earning;
    if (expense.length >= 0) {
      displayEarning()}
  }
  if (tabName == "Expense") {
    // document.getElementById("expensevalue").innerHTML = expense;
    if (expense.length >= 0) {
      displayExpenses();
    }
  }

}

let dat =document.querySelector('#month-budget').innerHTML = '$' + totalrevenue;


let HTMLStrings = {

  expenseChart: "#expense-chart",
  monthBudget: "#month-budget",
};

function displayChart(earning = 0, expenses = 0) {
  let ctx = document.querySelector(HTMLStrings.expenseChart);
  let expenseChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Earning", "Expenses"],
      datasets: [
        {
          data: [earning, expenses],
          backgroundColor: ["rgba(32, 137, 56, 1)", "rgba(255, 84, 98, 1)"],
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
        },
      },
    },
  });
}



function search(){
  let val =document.querySelector('#searchh').value;
 console.log(val)
 var result=earning.concat(expense);

 let ans=result.filter(data=>{
   return data.date == val;
 })
console.log(ans)
}

















