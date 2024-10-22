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

createCannons();
drawCannons();

interface bulletData {
    player: number,
    bulletX: number,
    bulletY: number,
    isFlying: boolean,
}
