document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);

function calculateBMI() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Input validation
    if (!age || !gender || !height || !weight) {
        alert('Please fill in all fields');
        return;
    }

    if (age <= 0 || height <= 0 || weight <= 0) {
        alert('Please enter positive values for age, height, and weight');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    document.getElementById('bmi-value').textContent = `Your BMI is ${bmi}`;

    let category = '';
    if (bmi < 18.5) {
        category = 'underweight';
    } else if (bmi < 24.9) {
        category = 'normal';
    } else if (bmi < 29.9) {
        category = 'overweight';
    } else {
        category = 'obesity';
    }

    document.getElementById('bmi-category').textContent = getCategoryText(category);
    document.getElementById('bmi-category').className = category;
}

function getCategoryText(category) {
    switch (category) {
        case 'underweight':
            return "You're underweight. It's recommended to gain weight for a healthier BMI.";
        case 'normal':
            return "You have a normal weight. Keep up the good work!";
        case 'overweight':
            return "You're overweight. It's recommended to lose weight for a healthier BMI.";
        case 'obesity':
            return "You're in the obesity range. It’s important to consult with a healthcare provider for guidance.";
    }
}
