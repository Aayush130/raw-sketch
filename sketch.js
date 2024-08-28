function setup() {
  createCanvas(600, 400);
  noLoop(); // To only draw once
}

function draw() {
  background(220);
  strokeWeight(2);
  
  let numLines = 50;
  for (let i = 0; i < numLines; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = mouseX;
    let y2 = mouseY;
    line(x1, y1, x2, y2);
  }
}

