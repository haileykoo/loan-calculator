let button = document.getElementById('btn');

function getLoan ()
{
  let loanAmount = parseInt(document.getElementById("amount").value);
  let yearNumber = parseInt(document.getElementById("years").value);
  let loanMonth = yearNumber*12;
  let monthlyInterest = 0.05/12;
  let calMonthlyInterest = 1+monthlyInterest;
  let raise = Math.pow(calMonthlyInterest,-loanMonth);
  let calRaise = 1-raise;
  let interestinstall = loanAmount*monthlyInterest;
  let montlyinstall = interestinstall/calRaise;

  let calAmount = document.getElementById('loanamount');
  calAmount.innerHTML=`${loanAmount}`;

  let calInterest = document.getElementById('interestrates');
  calInterest.innerHTML=`5%`;

  let calYears = document.getElementById('numofyears');
  calYears.innerHTML=`${yearNumber}`;

  let calMonthly = document.getElementById('montlypayments');
  calMonthly.innerHTML=`${montlyinstall}`;
}

button.addEventListener('click',getLoan);