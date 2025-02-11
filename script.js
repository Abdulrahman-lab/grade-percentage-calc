document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get input values
    const input1 = parseFloat(document.getElementById('input1').value) || 0;
    const input2 = parseFloat(document.getElementById('input2').value) || 0;
    const input3 = parseFloat(document.getElementById('input3').value) || 0;
    const input4 = parseFloat(document.getElementById('input4').value) || 0;
    const input5 = parseFloat(document.getElementById('input5').value) || 0;
    const input6 = parseFloat(document.getElementById('input6').value) || 0;
    const input7 = parseFloat(document.getElementById('input7').value) || 0;

    // Define special numbers
    const specialNumbers = [3, 4, 3, 2, 2, 3, 3];

    // Calculate weighted sum
    const weightedSum = (input1 * specialNumbers[0]) +
                        (input2 * specialNumbers[1]) +
                        (input3 * specialNumbers[2]) +
                        (input4 * specialNumbers[3]) +
                        (input5 * specialNumbers[4]) +
                        (input6 * specialNumbers[5]) +
                        (input7 * specialNumbers[6]);

    // Calculate final result
    const result = weightedSum / 20;

    // Display result
    document.getElementById('result').innerText = `Final Result: ${result.toFixed(2)}%`;
});