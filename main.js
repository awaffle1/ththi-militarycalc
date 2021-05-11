function calcMilitary(population) {
    var populationCalc = population * 0.62 * 0.12;
    if (populationCalc <= 999e6) {
        var militarySize = populationCalc * 0.40;
    } else if (populationCalc <= 2.99e6) {
        var militarySize = populationCalc * 0.33;
    } else if (populationCalc >= 3e6) {
        var militarySize = populationCalc * 0.25;
    }
    return militarySize
}

var inputPop = Number(prompt("Please enter your NationStates nation's population. Please enter it as a full number (ex. 5000000) and not as the simplified form (ex. 5 million)."));

var militarySize = calcMilitary(inputPop);

document.getElementById("display").innerHTML = "Your nation's military size is... drumroll...<br>" + militarySize + "!!";