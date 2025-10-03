 function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    result.innerHTML = "Please enter valid weight and height.";
    result.style.color = "red";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const roundedBMI = bmi.toFixed(1);

  let message = "";

  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    message = "Overweight";
  } else {
    message = "Obesity";
  }

  result.innerHTML = `Your BMI is <strong>${roundedBMI}</strong> (${message})`;
  result.style.color = "#333";
}