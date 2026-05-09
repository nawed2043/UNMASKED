const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself or that you are a failure?",
    "Trouble concentrating on things, such as reading or TV?",
    "Moving/Speaking so slowly others noticed? Or the opposite (fidgety)?",
    "Thoughts that you would be better off dead, or hurting yourself?"
];

let currentStep = 0;
let totalScore = 0;

function nextQuestion(value) {
    totalScore += value;
    currentStep++;

    if (currentStep < questions.length) {
        updateUI();
    } else {
        showResults();
    }
}

function updateUI() {
    document.getElementById('question-text').innerText = `STEP_${currentStep + 1}: ${questions[currentStep]}`;
    const progress = (currentStep / questions.length) * 100;
    document.getElementById('progress').style.width = progress + "%";
}

function showResults() {
    document.getElementById('quiz-box').style.display = 'none';
    const resultBox = document.getElementById('result-box');
    const label = document.getElementById('status-label');
    const desc = document.getElementById('status-desc');
    const actions = document.getElementById('status-actions');
    resultBox.style.display = 'block';

    if (totalScore <= 5) {
        label.innerText = "STATUS: MINOR_DISTURBANCE";
        desc.innerText = "Systems stable, but interference detected. Low stress levels indicated.";
        actions.innerHTML = '<button class="btn-gold-sm" onclick="window.location.href=\'audio.html\'">ACCESS SONIC_BATCAVE</button>';
    } else if (totalScore <= 12) {
        label.innerText = "STATUS: ALERT";
        desc.innerText = "Significant anomalies detected in mental heat-map. Tactical intervention advised.";
        actions.innerHTML = '<button class="btn-gold-sm" onclick="window.location.href=\'index.html\'">ENTER ANXIETY_DISTRICT</button>';
    } else {
        label.innerText = "STATUS: CRITICAL";
        desc.innerText = "EMERGENCY PROTOCOLS INITIATED. Professional support is the only strategic option.";
        actions.innerHTML = `
            <a href="https://988lifeline.org/" target="_blank" class="btn-gold" style="display:block; text-align:center; text-decoration:none; margin-top:10px;">988_EMERGENCY_LINE</a>
            <button class="btn-gold-sm" onclick="window.location.href='index.html'" style="width:100%">DEPRESSION_HEIGHTS_DATA</button>
        `;
    }
}

updateUI();