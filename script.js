//Function  to calculate grade based on score
function calculateGrade(score){
let grade

//Switch statement to assign letter grade
switch(true){
    case score > 100:
        grade = "Not a valid grade"
        break;
    case score >= 90:
        grade = "A"
        break;
    case score >= 80:
        grade = "B"
        break;
    case score >= 70:
        grade = "C"
        break;
    case score >= 60:
        grade = "D"
        break;
    default:
        grade = "F"
}
return grade

}

//Main Function to get user input and display grade
function gradeCalculator(){
    //Get user input for the score
    let score = parseInt(prompt("Enter the student's score:"))
    //Calculate grade
    let grade = calculateGrade(score)
    //Display the grade to the user
    alert("The student's grade is: " + grade)
    
}

//Run the grade calculator function
gradeCalculator()