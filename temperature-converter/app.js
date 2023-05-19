// Get DOM elements
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

// Add event listener to the convert button
convertButton.addEventListener('click', convertTemperature);

// Temperature conversion function
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;
  
  if (isNaN(temperature)) {
    resultElement.textContent = 'Please enter a valid temperature';
    return;
  }
  
  let convertedTemperature;
  let convertedUnit;
  
  if (unit === 'celsius') {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedUnit = 'Fahrenheit';
  } else if (unit === 'fahrenheit') {
    convertedTemperature = (temperature - 32) * 5/9;
    convertedUnit = 'Celsius';
  }
  
  resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
