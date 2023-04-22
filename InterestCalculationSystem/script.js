function creditCalculation(){
    let takenToBeCredit,numberOfTerms,installmentMonthly, amountToBePaid;
    takenToBeCredit = document.getElementsByClassName("creditTotal").value;
    let listOfTerm = document.getElementById("listTerm");
    numberOfTerms = listOfTerm.options[listOfTerm.selectedIndex].value;
    amountToBePaid = takenToBeCredit * 1.1;
    installmentMonthly = amountToBePaid / numberOfTerms;
    document.querySelector(".result").innerHTML = "Amount to be refunded: "
    +amountToBePaid + "<br>" + "Monthly installment amount: " + installmentMonthly;
}
