document.getElementById('add-objectiv-btn').addEventListener('click', function() {
    const objectiveName = document.getElementById('objectiv-name').value;
    if (objectiveName) {
        const newObjective = document.createElement('div');
        newObjective.textContent = objectiveName;
        newObjective.className = 'objective-item';
        const objectivNewDiv = document.getElementById('objectiv-new');
        objectivNewDiv.appendChild(newObjective);
        objectivNewDiv.style.display = 'block';
        document.getElementById('objectiv-name').value = '';

        // Increase the height of the display div
        const displayDiv = document.getElementById('display');
        displayDiv.style.height = displayDiv.scrollHeight + 'px';
    }
});
