const loveCounter = document.getElementById("loveCounter");
const coinCounter = document.getElementById("coinCounter");
const copyCounter = document.getElementById("copyCounter");
const signalLove = document.querySelectorAll("#signalLove");
const serviceName = document.querySelectorAll("#service-name");
const serviceNumber = document.querySelectorAll("#service-number");
const callButton = document.querySelectorAll("#callButton");
const callHistory = document.getElementById("callHistory");
const clearHistory = document.getElementById("clearHistory");
const copyButtons = document.querySelectorAll("#copyButton");


for (let i = 0; i < signalLove.length; i++) {
  signalLove[i].addEventListener("click", (e) => {
    e.preventDefault();
    loveCounter.innerText = parseInt(loveCounter.innerText) + 1;
  });
}

for (let i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener("click", (e) => {
    e.preventDefault();
    const phoneNumber = serviceNumber[i].innerText;
    const sName = serviceName[i].innerText;
    if (parseInt(coinCounter.innerText) < 20) {
      window.alert("You don't have enough coins. You need at least 20 coins to make a call.....");
      return;
    }
      window.alert(`Calling ${sName} ${phoneNumber}...`);
      coinCounter.innerText = parseInt(coinCounter.innerText) - 20;
      const callItem = document.createElement("li");
      callItem.classList.add("call-entry");
      callItem.innerHTML = `<div>
                <div class="service-name">${sName}</div>
                <div class="service-number">${phoneNumber}</div>
              </div>
              <div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
    callHistory.appendChild(callItem);
  });
}

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", (e) => {
    e.preventDefault();
    const phoneNumber = serviceNumber[i].innerText;
    navigator.clipboard.writeText(phoneNumber).then(() => {
      copyCounter.innerText = parseInt(copyCounter.innerText) + 1;
      window.alert(`Number copied. ${phoneNumber}`);
    });
  });
}

clearHistory.addEventListener("click", (e) => {
  e.preventDefault();
  callHistory.innerHTML = "";
});