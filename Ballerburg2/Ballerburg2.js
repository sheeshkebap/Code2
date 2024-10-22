"use strict";
// Canvas Setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let Cannon = [];
function createCannons() {
    Cannon.push({
        player: 1,
        cannonX: Math.floor(Math.random() * (canvas.width / 3)) + 10,
        cannonY: Math.floor(Math.random() * (canvas.height - canvas.height / 3) + canvas.height / 3) - 10,
    });
    Cannon.push({
        player: 2,
        cannonX: Math.floor(Math.random() * (canvas.width - (canvas.width - canvas.width / 3)) + (canvas.width - canvas.width / 3)) - 10,
        cannonY: Math.floor(Math.random() * (canvas.height - canvas.height / 3) + canvas.height / 3) - 10,
    });
}
function drawCannons() {
    for (let i = 0; i < Cannon.length; i++) {
        let pathBox = new Path2D();
        pathBox.rect(Cannon[i].cannonX, Cannon[i].cannonY, 10, 10);
        ctx.fillStyle = "black";
        ctx.fill(pathBox);
    }
}
createCannons();
drawCannons();
