let symmetry = 6; 
let clearButton;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0); 
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
}


function clearCanvas()
{
  background(0);
}


function draw() {

  translate(width/2,height/2);
  
  let mx = mouseX - width/2;
  let my = mouseY - height/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - height/2;
  
  if(mouseIsPressed){
    stroke(255, 100);
   let angle = 360/symmetry;
    for(let i =0; i < symmetry; i++){
      
   
      rotate(angle);
      let d = dist(mx, my, pmx, pmy);
      let sw= map(d, 0,8,8,1);
      strokeWeight(sw);
      
      line(mx,my,pmx,pmy);
     push();
      scale(-1,1);
     
      line(mx, my, pmx, pmy);
      pop();
     
    }
  }
}
