import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBugtCcIElznEhmCZiPLOzKsO6akYNXiuE",
    authDomain: "missionimposible-a4a03.firebaseapp.com",
    projectId: "missionimposible-a4a03",
    storageBucket: "missionimposible-a4a03.firebasestorage.app",
    messagingSenderId: "415833627058",
    appId: "1:415833627058:web:9184d66b3792dd24fdacab",
    measurementId: "G-E3JYHN4N5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('home-btn');
    const newMissionBtn = document.getElementById('new-mission-btn');
    const missionBtn = document.getElementById('mission-btn');
    const addPhaseBtn = document.getElementById('add-phase');
    const generateNameBtn = document.getElementById('generate-name-btn');
    const phaseNameInput = document.getElementById('phase-name');
    const addObjectivBtn = document.getElementById('add-objectiv-btn');
    const objectivNameInput = document.getElementById('objectiv-name');
    const objectivNewDiv = document.getElementById('objectiv-new');

    const nazivi = [
        "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet",
        "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango",
        "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu", "Memphis", "Tennessee", "Alaska",
        "Dakota", "Scorpion", "Viper", "Falcon", "Thunder", "Lightning", "Eagle", "Raven", "Hawk",
        "Phantom", "Shadow", "Mirage", "Saber", "Maverick", "Ranger", "Centurion", "Guardian", "Spartan",
        "Titan", "Zephyr", "Mammoth", "Avalanche", "Blizzard", "Cyclone", "Dragon", "Enigma", "Fury",
        "Gladiator", "Havoc", "Inferno", "Juggernaut", "Kraken", "Leviathan",
        "Nemesis", "Odyssey", "Paladin", "Quake", "Rampage", "Sentinel",
        "Tempest", "Umbra", "Vortex", "Wraith", "Xeno", "Zenith", "Apex",
        "Borealis", "Catalyst", "Dominion", "Eclipse", "Frontier", "Genesis",
        "Horizon", "Ignite", "Javelin", "Karma", "Luminary", "Monarch",
        "Nebula", "Oracle", "Prism", "Quantum", "Radiant", "Solstice",
        "Thunderbolt", "Umbriel", "Vanguard", "Wildfire", "Raptor", "Yonder",
        "Zodiac"
    ];

    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (newMissionBtn) {
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

    if (generateNameBtn) {
        generateNameBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const randomIndex = Math.floor(Math.random() * nazivi.length);
            phaseNameInput.value = nazivi[randomIndex];
        });
    }

    if (addObjectivBtn) {
        addObjectivBtn.addEventListener('click', function() {
            const objectivValue = objectivNameInput.value;
            if (objectivValue) {
                const newObjectiv = document.createElement('div');
                newObjectiv.textContent = objectivValue;
                newObjectiv.className = 'objective-item';
                newObjectiv.style.display = 'flex';
                newObjectiv.style.justifyContent = 'space-between';
                newObjectiv.style.alignItems = 'center';
                newObjectiv.style.fontFamily = "'Staatliches', sans-serif";
                newObjectiv.style.color = '#ff6b35';
                newObjectiv.style.fontSize = '15px';
                newObjectiv.style.marginBottom = '10px';
                newObjectiv.style.backgroundColor = '#2d3325';
                // newObjectiv.style.boxShadow = '0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent';
                newObjectiv.style.borderRadius = '20px';
                newObjectiv.style.height = '35px';
                newObjectiv.style.marginLeft = '30px'; // Add margin-left
                newObjectiv.style.marginRight = '10px'; 

                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'delete-btn';
                deleteBtn.addEventListener('click', function() {
                    newObjectiv.remove();
                });

                newObjectiv.appendChild(deleteBtn);

                objectivNewDiv.appendChild(newObjectiv);
                objectivNewDiv.style.display = 'block';
                objectivNameInput.value = '';

                // Increase the height of the display div
                const displayDiv = document.getElementById('display');
                displayDiv.style.height = displayDiv.scrollHeight + 'px';
            }
        });
    }
});