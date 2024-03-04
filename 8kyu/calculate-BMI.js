// Description:

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// SOLUTION:
function bmi(weight, height) {
    const bmiValue = weight / height ** 2;
    const answer =  
          bmiValue <= 18.5 ? "Underweight"
          : bmiValue <= 25 ? "Normal"
            : bmiValue <= 30 ? "Overweight"
              : "Obese";
    return answer  
  }
