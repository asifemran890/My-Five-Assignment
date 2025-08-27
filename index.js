let coinCount = 100;
const coinDisplay = document.getElementById("coinCount");
const copyCountDisplay = document.getElementById("copyCount");
const callHistoryContainer = document.getElementById("callHistoryContainer");

// Heart button to increase coins
document.getElementById("heartBtn").addEventListener("click", () => {
  coinCount += 1;
  coinDisplay.textContent = coinCount;
});

// Global Copy Button
document.getElementById("globalCopyBtn").addEventListener("click", () => {
  const textToCopy = "This is a sample emergency info.";
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Copied to clipboard!");
    copyCountDisplay.textContent = parseInt(copyCountDisplay.textContent) + 1;
  });
});

// Function to handle Call Button
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;
    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return;
    }
    // Deduct coins
    coinCount -= 20;
    document.getElementById("coinCount").textContent = coinCount;

    // Show alert
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Add to history with timestamp
    const now = new Date();
    const timeStr = now.toLocaleString();
    addToHistory(serviceName, serviceNumber, timeStr);
  });
});

// Function to add call to history
function addToHistory(name, number, timeStr) {
  const div = document.createElement("div");
  div.className = "border-b py-2 flex justify-between items-center";
  div.innerHTML = `
        <div>
          <p class="font-semibold">${name}</p>
          <small class="text-gray-500">${number}</small>
        </div>
        <div class="text-sm text-gray-600">${timeStr}</div>
      `;
  callHistoryContainer.appendChild(div);
}

// Clear history
document.getElementById("clearHistory").addEventListener("click", () => {
  callHistoryContainer.innerHTML = "";
});

// Copy hotline number buttons
document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.dataset.copyText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Number copied: " + text);
      // Increase copy count
      copyCountDisplay.textContent = parseInt(copyCountDisplay.textContent) + 1;
    });
  });
});
