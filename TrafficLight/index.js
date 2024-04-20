let redLight = document.getElementById("redLight");
let yellowLight = document.getElementById("yellowLight");
let greenLight = document.getElementById("greenLight");
let seconds = document.getElementById("seconds");

let form = document.getElementById("myForm");

console.log("file is runnig");
let s = 0;

const clc = () => {
  s++;
  seconds.innerText = s;
};

let signalNumber = 1;
redLight.style.background = "red";

let intervelId;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!intervelId) {
    intervelId = setInterval(clc, 1000);
  }

  //   getting values for hold
  let redLightSeconds = parseInt(
    document.getElementById("redLightSeconds").value
  );
  let yellowLightSecounds = parseInt(
    document.getElementById("yellowLightSeconds").value
  );
  let greenLightSecounds = parseInt(
    document.getElementById("greenLightSeconds").value
  );

  console.log(redLightSeconds, yellowLightSecounds, greenLightSecounds);

  //   calling function to flash the lights
  flashLight(redLightSeconds, yellowLightSecounds, greenLightSecounds);
});

const flashLight = (
  redLightSeconds,
  yellowLightSecounds,
  greenLightSecounds
) => {
  const traficSignals = {
    1: { color: "red", waitTime: redLightSeconds },
    2: { color: "yellow", waitTime: yellowLightSecounds },
    3: { color: "green", waitTime: greenLightSecounds },
  };

  console.log(traficSignals);

  setTimeout(() => {
    signalNumber++;
    if (signalNumber > 3) stopSignal();
    if (signalNumber === 1) {
      redLight.style.background = "red";
      greenLight.style.background = "gray";
      yellowLight.style.background = "gray";
    }
    if (signalNumber === 2) {
      redLight.style.background = "gray";
      yellowLight.style.background = "yellow";
      greenLight.style.background = "gray";
    }
    if (signalNumber === 3) {
      redLight.style.background = "gray";
      yellowLight.style.background = "gray";
      greenLight.style.background = "green";
    }

    flashLight(redLightSeconds, yellowLightSecounds, greenLightSecounds);
  }, traficSignals[signalNumber].waitTime * 1000);

  //   //   it will turn on the yellow light
  //   setTimeout(() => {
  //     redLight.style.backgroundColor = "white";
  //     yellowLight.style.backgroundColor = "yellow";

  //     setTimeout(() => {
  //       yellowLight.style.backgroundColor = "white";
  //       greenLight.style.backgroundColor = "green";
  //     }, 2000);

  //     setTimeout(() => {
  //       greenLight.style.backgroundColor = "white";
  //       red.style.backgroundColor = "red";
  //     }, 6000);
  //   }, 4000);
};

const stopSignal = () => {
  location.reload();
};
