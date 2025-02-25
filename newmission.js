document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('home-btn');
    const missionBtn = document.getElementById('mission-btn');

    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (missionBtn) {
        missionBtn.addEventListener('click', function() {
            window.location.href = 'mission.html';
        });
    }
});
