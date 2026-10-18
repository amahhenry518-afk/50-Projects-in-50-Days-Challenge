const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const bmiValueSpan = document.getElementById('bmi-value');
const bmiCategoryP = document.getElementById('bmi-category');

calculateBtn.addEventListener('click', () => {
  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    bmiValueSpan.textContent = '--';
    bmiCategoryP.textContent = 'Please enter valid height and weight values.';
    bmiCategoryP.style.color = 'red';
    return;
  }

  
  const heightM = heightCm / 100;
  
  
  const bmi = weightKg / (heightM * heightM);
  const roundedBmi = bmi.toFixed(1);

  bmiValueSpan.textContent = roundedBmi;

  let category = '';
  let color = '#333';

  if (bmi < 18.5) {
    category = 'Underweight';
    color = '#ffc107';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal Weight';
    color = '#28a745';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    color = '#fd7e14';
  } else {
    category = 'Obese';
    color = '#dc3545';
  }

  bmiCategoryP.textContent = `Status: ${category}`;
  bmiCategoryP.style.color = color;
});
