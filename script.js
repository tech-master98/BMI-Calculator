const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");
const bodyfattxt =  document.getElementById('body-fat');
const bmiHistoryList = document.getElementById("bmi-history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");




form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  bodyfattxt.textContent = 0;
  descText.textContent = "N/A";

}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0  || isNaN(age) || age <= 0 ) {
    alert("Please enter a valid weight , height and age");
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;


    // Calculate Body Fat Percentage
    let bodyFat = 0;
    if (gender === 'male') {
        bodyFat = (1.20 * bmi + 0.23 * age - 16.2).toFixed(2);
    } else if (gender === 'female') {
        bodyFat = (1.20 * bmi + 0.23 * age - 5.4).toFixed(2);
    }

    document.getElementById('body-fat').textContent = bodyFat + '%';

    function addBMIToHistory(bmi) {
      const historyItem = document.createElement("li");
      historyItem.textContent = `BMI: ${bmi.toFixed(2)}` +  ` | ` + `BodyFat: ${bodyFat} %` + ` | ` +  `Weight: ${weight} Kg` + ` | ` + `Height: ${height} cm` + ` | ` + `Age: ${age}` +` | ` + `Gender: ${gender}` ;
      bmiHistoryList.appendChild(historyItem);
    }
    
    // Clear history button functionality
    clearHistoryBtn.addEventListener("click", function() {
      bmiHistoryList.innerHTML = ''; // Clear all history
    });
    

    
    addBMIToHistory(bmi); 
   
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}





