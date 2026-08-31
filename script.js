// JAVASCRIPT FOR DII'S SITE

const messagesSequence = [
    { text: "YOU...", type: 'single' },
    { text: "ARE...", type: 'single' },
    { text: "MY...", type: 'single' },
    { text: "FAVOURITE...", type: 'single' },
    { text: "DIDI❤️", type: 'single' },
    { 
        text: "Didi aap, \nhumare liye, \nsabse pyare ho!\n\nHum khush hain ki \naap humari dii hain. 🥰",
        type: 'long'
    }
];

let currentMessageIndex = 0;
const messageDelay = 1500; // Time in ms per word/line
const longMessageDelay = 8000; // Extra time for the last long message

const welcomeLayer = document.getElementById('welcome-layer');
const mainContentLayers = document.getElementById('main-content-layers');
const teddyLayer = document.getElementById('teddy-layer');
const messageLayer = document.getElementById('message-layer');
const autoMessageText = document.getElementById('auto-message');
const openBtn = document.getElementById('open-btn');

// --- Functions ---

function showLayer(layerToShow, otherLayersToHide = []) {
    otherLayersToHide.forEach(layer => layer.classList.add('hidden'));
    layerToShow.classList.remove('hidden');
}

function typeNextMessage() {
    if (currentMessageIndex < messagesSequence.length) {
        const messageData = messagesSequence[currentMessageIndex];
        autoMessageText.innerText = messageData.text; // Display the message text

        let delay;
        if (messageData.type === 'single') {
            delay = messageDelay;
        } else {
            // For the long paragraph, give her extra time
            autoMessageText.style.fontSize = "2.2rem"; // Make text smaller
            delay = longMessageDelay;
        }

        currentMessageIndex++;

        // Call the same function after the delay to show the next message
        setTimeout(typeNextMessage, delay);

    } else {
        // All messages done, optionally end here.
        console.log("Sequence Finished");
    }
}


// --- Event Listeners ---

openBtn.addEventListener('click', () => {
    // 1. Hide Welcome Screen
    showLayer(mainContentLayers, [welcomeLayer]);

    // 2. Show Teddy Screen, then start sequence
    setTimeout(() => {
        // After showing Teddy for a moment, switch to Message Screen
        showLayer(messageLayer, [teddyLayer]);
        
        // 3. Start the Automatic Messaging
        typeNextMessage();
    }, 2500); // Wait 2.5s for the Teddy screen first
});

