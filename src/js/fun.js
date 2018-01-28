const arena = document.getElementById('arena').getContext('2d');

arena.fillStyle = 'black';
arena.fillRect(0, 0, 640, 480);

let greenX = 2;
let greenY = 2; 
let greenXDirection = 1; 
let greenYDirection = 0; 

let redX = 636;
let redY = 476;
let redXDirection = -1; 
let redYDirection = 0; 


setInterval(() => {
  //arena.clearRect(0, 0, 640, 480);
  
  arena.fillStyle = 'lime';
  arena.fillRect(greenX, greenY, 2, 2);
  greenX = greenX + greenXDirection;
  greenY = greenY + greenYDirection; 
  
  arena.fillStyle = 'red';
  arena.fillRect(redX, redY, 2, 2);
  redX = redX + redXDirection;
  redY = redY + redYDirection;
}, 25);

document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 37: // left
      if (redYDirection === 0) break; 
      redXDirection = -1;
      redYDirection = 0; 
      break;
    case 38: // up
      if (redXDirection === 0) break;
      redXDirection = 0;
      redYDirection = -1; 
      break;
    case 39: //right
      if (redYDirection === 0) break;
      redXDirection = 1;
      redYDirection = 0; 
      break;
    case 40: //down
      if (redXDirection === 0) break;  
      redXDirection = 0;
      redYDirection = 1; 
      break;
    
    case 65: // left
      if (greenYDirection === 0) break;
      greenXDirection = -1;
      greenYDirection = 0; 
      break;
    case 87: // up
      if (greenXDirection === 0) break;
      greenXDirection = 0;
      greenYDirection = -1; 
      break;
    case 68: //right
      if (greenYDirection === 0) break;
      greenXDirection = 1;
      greenYDirection = 0; 
      break;
    case 83: //down
      if (greenXDirection === 0) break;
      greenXDirection = 0;
      greenYDirection = 1; 
      break;
    default: 
      console.log(event.keyCode);
  }  
};
  
  
  // arena.fillStyle = 'rgba(0, 0, 200, 0.5)';
  // arena.fillRect(30, 30, 50, 50);