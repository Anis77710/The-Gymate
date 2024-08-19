function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightInFeet = parseFloat(document.getElementById('height').value);

    // Validate input values
    if (isNaN(weight) || isNaN(heightInFeet) || weight <= 0 || heightInFeet <= 0) {
        // Clear the output if input is invalid
        document.getElementById('bmi-result').textContent = "";
        document.getElementById('weight-category').textContent = "";
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    // Convert height from feet to meters (1 foot = 0.3048 meters)
    const heightInMeters = heightInFeet * 0.3048;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine weight category based on BMI
    let weightCategory = '';
    if (bmi < 18.5) {
        weightCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightCategory = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        weightCategory = 'Overweight';
    } else {
        weightCategory = 'Obese';
    }

    // Display the BMI and weight category in the output
    document.getElementById('bmi-result').textContent = ' ' + bmi.toFixed(2);
    document.getElementById('weight-category').textContent = ' ' + weightCategory;
}
