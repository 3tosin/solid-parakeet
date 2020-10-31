const salaryRate = 1000;
const overTimerate = 200;

function salaryCalc(){
    let hoursWorked = parseInt(document.getElementById('hours-worked').value);
    let extraHours = parseInt(document.getElementById('extra-hours-worked').value);
    if (hoursWorked) {
        if (!extraHours) {
            extraHours = 0;
        }
        let fullSalary = salaryCalculator(hoursWorked, extraHours);
        console.log(fullSalary)
        document.getElementById('work-class').innerHTML = "Your base work hour is "+hoursWorked+"hour(s), your extra work hour is "+extraHours+"hour(s). Your salary is broken down bellow.";
        document.getElementById('result-class').innerHTML = "Your base work hour salary is <span class='text-info'>"+fullSalary[0]+"</span>.<br>Your extra work hour salary is <span class='text-info'>"+fullSalary[1]+".</span><br>Your total salary is <span class='text-info'>"+fullSalary[2]+"</span>";
        document.getElementById('hours-worked').value = '';
        document.getElementById('extra-hours-worked').value = '';
    }
    else {
        document.getElementById('work-class').innerHTML = "<span class='text-danger'> You have to provide hours worked and/or extra hours worked </span>";
    }
}


function salaryCalculator(hoursWorked, extraHours){
    let baseSalary = hoursWorked * salaryRate;
    let extraTip = extraHours * overTimerate;
    let salary = baseSalary + extraTip;
    return [baseSalary, extraTip, salary];
}