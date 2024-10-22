// Canvas Setup
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

let cannonX: number = 0;
let cannonY: number = 0;

//Position der Kannone
function positionCannon(): {x: number, y: number} {
    cannonX = Math.floor(Math.random() * (canvas.width/3)) + 5;
    cannonY = Math.floor(Math.random() * canvas.height) - 10;
    return {x: cannonX, y: cannonY};
}

function drawCannon(): void {
    let pathBox = new Path2D();
    pathBox.rect(cannonX, cannonY, 10, 10);
    ctx.fillStyle = "black";
    ctx.fill(pathBox);

}

positionCannon();
drawCannon();

// Kugelkonstanten und physikalische Parameter
const g = 9.81; // Schwerkraft in m/s²
let angle = 45; // Abschusswinkel (in Grad)
let speed = 50; // Anfangsgeschwindigkeit (in m/s)

// Position und Geschwindigkeit der Kugel
let x = cannonX;  // Startposition x (bei Kannone)
let y = cannonY;  // Startposition y (bei Kannone)
let vx: number; // Horizontale Geschwindigkeit
let vy: number; // Vertikale Geschwindigkeit

// Delta Zeit zwischen den Berechnungen
const deltaT = 0.016; // Etwa 60 fps

// Umrechnung von Grad in Bogenmaß
const toRadians = (degrees: number) => degrees * (Math.PI / 180);

// Kugel abfeuern
function shootCannon() {
  // Setze die Anfangswerte für die Position und Geschwindigkeit
  x = cannonX;
  y = cannonY; // Start unten
  vx = speed * Math.cos(toRadians(angle)); // Anfangsgeschwindigkeit in x-Richtung
  vy = -speed * Math.sin(toRadians(angle)); // Anfangsgeschwindigkeit in y-Richtung (nach oben gerichtet)

  // Starte die Animation
  requestAnimationFrame(update);
}

// Aktualisiere die Position der Kugel
function update() {
  // Lösche das Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Zeichne die Kanone
  drawCannon();

  // Berechne die neue Position
  x += vx * deltaT;
  vy += g * deltaT; // Schwerkraft wirkt auf vy
  y += vy * deltaT;

  // Zeichne die Kugel
  drawBall(x, y);

  // Stoppe, wenn die Kugel den Boden erreicht
  if (y < canvas.height) {
    requestAnimationFrame(update);
  }
}

// Zeichne die Kugel
function drawBall(x: number, y: number) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

// Eventlistener für den Abschuss
document.getElementById('shoot')!.addEventListener('click', shootCannon);

// Eventlistener für die Winkelanpassung
document.getElementById('angle')!.addEventListener('input', (event) => {
  angle = parseFloat((event.target as HTMLInputElement).value);
});

// Eventlistener für die Geschwindigkeitseinstellung
document.getElementById('speed')!.addEventListener('input', (event) => {
  speed = parseFloat((event.target as HTMLInputElement).value);
});