// script.js
function matchAndDisplay() {
    const file1Input = document.getElementById('file1');
    const file2Input = document.getElementById('file2');

    // Check if files are selected
    if (!file1Input.files[0] || !file2Input.files[0]) {
        alert('Please select both JSON files');
        return;
    }

    const file1Reader = new FileReader();
    const file2Reader = new FileReader();

    // Read file 1
    file1Reader.onload = function (e) {
        const file1Data = JSON.parse(e.target.result);

        // Read file 2
        file2Reader.onload = function (e) {
            const file2Data = JSON.parse(e.target.result);

            // Perform matching logic
            matchAndDisplay(file1Data, file2Data);
        };

        file2Reader.readAsText(file2Input.files[0]);
    };

    file1Reader.readAsText(file1Input.files[0]);
}
