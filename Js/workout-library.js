// Workout Plan Data
const plans = {
    "bro-split": {
        title: "5-Day Plan: Bro Split",
        details: `
            <ul>
                <li>Day 1: Chest</li>
                <li>Day 2: Back</li>
                <li>Day 3: Shoulders</li>
                <li>Day 4: Arms</li>
                <li>Day 5: Legs</li>
                <li>Rest on Day 6 and Day 7</li>
            </ul>
        `
    },
    "ppl": {
        title: "3-Day Plan: Push-Pull-Legs",
        details: `
            <ul>
                <li>Day 1: Push (Chest, Shoulders, Triceps)</li>
                <li>Day 2: Pull (Back, Biceps)</li>
                <li>Day 3: Legs (Quads, Hamstrings, Calves)</li>
                <li>Rest on alternate days</li>
            </ul>
        `
    },
    "upper-lower": {
        title: "2-Day Plan: Upper-Lower",
        details: `
            <ul>
                <li>Day 1: Upper Body (Chest, Back, Shoulders, Arms)</li>
                <li>Day 2: Lower Body (Legs and Core)</li>
                <li>Rest on alternate days</li>
            </ul>
        `
    }

};

// Handle clicks on workout boxes
document.querySelectorAll('.workout-box').forEach(box => {
    box.addEventListener('click', () => {
        const planKey = box.getAttribute('data-plan');
        const plan = plans[planKey];

        document.getElementById('workout-details').innerHTML = `
            <h2>${plan.title}</h2>
            ${plan.details}
        `;

        document.querySelector('.workout-plans').classList.add('hidden');
        document.getElementById('workout-content').classList.remove('hidden');
    });
});

// Handle back button
document.getElementById('back-button').addEventListener('click', () => {
    document.querySelector('.workout-plans').classList.remove('hidden');
    document.getElementById('workout-content').classList.add('hidden');
});
