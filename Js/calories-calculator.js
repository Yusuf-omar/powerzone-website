document.getElementById('calculate-calories').addEventListener('click', function() {
    // Get input values
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activity-level').value;

    // Validate inputs
    if (age < 1 || height < 1 || weight < 1) {
        alert("Please enter positive values for age, height, and weight.");
        return;
    }

    // Calculate BMR (Basal Metabolic Rate) using the Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseInt(age) + 5;
    } else {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseInt(age) - 161;
    }

    // Calculate Total Daily Energy Expenditure (TDEE) based on activity level
    let tdee;
    switch (activityLevel) {
        case "sedentary":
            tdee = bmr * 1.2;
            break;
        case "lightly-active":
            tdee = bmr * 1.375;
            break;
        case "moderately-active":
            tdee = bmr * 1.55;
            break;
        case "very-active":
            tdee = bmr * 1.725;
            break;
        case "extra-active":
            tdee = bmr * 1.9;
            break;
    }

    // Calculate macronutrients breakdown (Assuming 40% carbs, 30% protein, 30% fat)
    const carbs = (tdee * 0.4) / 4;
    const protein = (tdee * 0.3) / 4;
    const fat = (tdee * 0.3) / 9;

    // Display results
    document.getElementById('calories-value').innerText = `Daily Caloric Needs: ${Math.round(tdee)} calories`;
    document.getElementById('macronutrients-breakdown').innerText = `Carbs: ${Math.round(carbs)}g, Protein: ${Math.round(protein)}g, Fat: ${Math.round(fat)}g`;
});
