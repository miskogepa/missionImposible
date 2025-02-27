document.getElementById('add-objectiv-btn').addEventListener('click', function() {
    const objectiveName = document.getElementById('objectiv-name').value;
    if (objectiveName) {
        const newObjective = document.createElement('div');
        newObjective.textContent = objectiveName;
        newObjective.className = 'objective-item';

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            newObjective.remove();
        });

        newObjective.appendChild(deleteBtn);

        const objectivNewDiv = document.getElementById('objectiv-new');
        objectivNewDiv.appendChild(newObjective);
        objectivNewDiv.style.display = 'block';
        document.getElementById('objectiv-name').value = '';

        // Increase the height of the display div
        const displayDiv = document.getElementById('display');
        displayDiv.style.height = displayDiv.scrollHeight + 'px';

        // Adjust the position of the add-objectiv-btn
        const addObjectivBtn = document.getElementById('add-objectiv-btn');
        addObjectivBtn.style.marginTop = '10px';
    }
});
