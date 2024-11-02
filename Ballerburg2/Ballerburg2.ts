// Canvas Setup
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

interface cannonData {
    player: number,
    cannonX: number,
    cannonY: number,
}

let Cannon: cannonData[] = [];

function createCannons(): void{
    Cannon.push({
        player: 1,
        cannonX: Math.floor(Math.random() * (canvas.width/3)) + 10,
        cannonY: Math.floor(Math.random() * (canvas.height - canvas.height/3) + canvas.height/3) - 10,
    })
    Cannon.push({
        player: 2,
        cannonX: Math.floor(Math.random() * (canvas.width - (canvas.width - canvas.width/3)) + (canvas.width -canvas.width/3)) - 10,
        cannonY: Math.floor(Math.random() * (canvas.height - canvas.height/3) + canvas.height/3) - 10,
    })
}

function drawCannons(): void {
    for(let i: number = 0; i < Cannon.length; i++){
        let pathBox = new Path2D();
        pathBox.rect(Cannon[i].cannonX, Cannon[i].cannonY, 10, 10);
        ctx.fillStyle = "black";
        ctx.fill(pathBox);
    }
}

interface bulletData {
    player: number,
    bulletX: number,
    bulletY: number,
    isFlying: boolean,
    vX: number,
    vY: number,
}

let Bullet: bulletData[] = [];

const g = 9.81;
const deltaT = 0.016;
const toRadians = (degrees: number) => degrees * (Math.PI / 180);

let angleP2: number = 45;
let speedP2: number = 50;


function createBullet(): void{
    Bullet.push({
        player: 1,
        bulletX: Cannon[0].cannonX,
        bulletY: Cannon[0].cannonY,
        isFlying: false,
        vX: 0,
        vY:0,
    })
    Bullet.push({
        player: 2,
        bulletX: Cannon[1].cannonX,
        bulletY: Cannon[1].cannonY,
        isFlying: false,
        vX: 0,
        vY:0,
    })
}


function shootBulletP2(): void {
    if (Bullet[1].isFlying = false) {
        Bullet[1].vX = speedP2 * Math.cos(toRadians(angleP2));
        Bullet[1].vY = -speedP2 * Math.sin(toRadians(angleP2));
        Bullet[1].isFlying = true;
    }
}


function animationUpdate(): void{

}

function drawBullet(): void{

}


// document.getElementById('shoot')!.addEventListener('click', shootBulletP2);

// document.getElementById('angle')!.addEventListener('input', (event) => {
//     angelP2 = parseFloat((event.target as HTMLInputElement).value);
//   });

// document.getElementById('speed')!.addEventListener('input', (event) => {
//   speedP2 = parseFloat((event.target as HTMLInputElement).value);
// });




createCannons();
createBullet();
drawCannons();
