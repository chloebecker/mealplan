//pre: n/a (user has pressed the calculate button)
//post: calls calculateBudget to do calculations
function inputValidate() { 
                
    // Clear the message area
    document.getElementById("mealMsg").innerHTML = "";
    document.getElementById("vacayMsg").innerHTML = "";            
                
    var current = document.getElementById('currentPlan').value; 
    var currentCheck = null;            
    if (current == null || current <= 0 || current > 3000) { 
        document.getElementById("mealMsg").innerHTML = "You must enter a number greater than 0 and less than 3000."
            +" Integers only, no punctuation.";
        return; 
    } 
    
    var vacay = document.getElementById('minusDays').value;
    var vacayCheck = null; 
    if (vacay == null || vacay < 0 || vacay > 100) { 
        document.getElementById("vacayMsg").innerHTML = "Accepted numbers are 0-99, inclusive. Integers only."; 
        return; 
    }

    //if everything checks out up there:
    calculateBudget();

    
}   

//pre: current and vacay have accepted values
//post: sets budgetMsg to display the calculation
function calculateBudget() {

    //temp value until dates are used to calculate how many days
    var days = 100-vacay;
    var budget = String(current/days); //does this even work? check
    document.getElementById("budgetMsg").innerHTML = "You have $",budget+"to spend per day from an original amount of $",current
        +"over the course of"+days+"days";

 }
