document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('home-btn');
    const newMissionBtn = document.getElementById('new-mission-btn');
    const missionBtn = document.getElementById('mission-btn');
    const addPhaseBtn = document.getElementById('add-phase');

    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (newMissionBtn) {
        newMissionBtn.addEventListener('click', function() {
            window.location.href = 'newmission.html';
        });
    }

    if (missionBtn) {
        missionBtn.addEventListener('click', function() {
            window.location.href = 'mission.html';
        });
    }

    if (addPhaseBtn) {
        addPhaseBtn.addEventListener('click', function() {
            window.location.href = 'newphase.html';
        });
    }
});