function calculateGrade() {
    const maths = parseFloat(document.getElementById('maths').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);
    const history = parseFloat(document.getElementById('history').value);
    
    const resultBox = document.getElementById('result');


    if (isNaN(maths) || isNaN(science) || isNaN(english) || isNaN(history)) {
        resultBox.innerHTML = "<p style='color: #e63946; font-weight: bold;'>Please enter marks for all subjects.</p>";
        resultBox.classList.remove('hidden');
        return;
    }

    
    if (maths < 0 || maths > 100 || science < 0 || science > 100 || 
        english < 0 || english > 100 || history < 0 || history > 100) {
        resultBox.innerHTML = "<p style='color: #e63946; font-weight: bold;'>Marks must be between 0 and 100.</p>";
        resultBox.classList.remove('hidden');
        return;
    }
    const totalMarks = maths + science + english + history;
    const totalPossible = 400;
    const percentage = (totalMarks / totalPossible) * 100;
    
    let grade = "";
    let status = "";
    let statusClass = "";


    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (percentage >= 60) {
        status = "Passed";
        statusClass = "pass";
    } else {
        status = "Failed";
        statusClass = "fail";
    }
    resultBox.innerHTML = `
        <p>Total Marks: <strong>${totalMarks} / ${totalPossible}</strong></p>
        <p>Percentage: <strong>${percentage.toFixed(2)}%</strong></p>
        <p>Assigned Grade: <strong>${grade}</strong></p>
        <p>Status: <span class="${statusClass}">${status}</span></p>
    `;

    resultBox.classList.remove('hidden');
}
