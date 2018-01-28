const arena = document.getElementById('arena').getContext('2d');

arena.fillStyle = 'black';
arena.fillRect(0, 0, 640, 480);

const lazers = [
  {
    color: 'lime',
    x: 2,
    y: 2,
    xDirection: 1,
    yDirection: 0,
    keyUp: 38,
    keyDown: 40,
    keyLeft: 37,
    keyRight: 39,  
  },
  {
    color: 'red',
    x: 636,
    y: 476,
    xDirection: -1,
    yDirection: 0,
    keyUp: 87,
    keyDown: 83,
    keyLeft: 65,
    keyRight: 68,  
  },
]

function changeDirection(lazer, keyPressed) {
  switch(keyPressed) {
    case lazer.keyUp: // up
      if (lazer.xDirection === 0) break;
      lazer.xDirection = 0;
      lazer.yDirection = -1; 
      break;
    case lazer.keyDown: //down
      if (lazer.xDirection === 0) break;
      lazer.xDirection = 0;
      lazer.yDirection = 1; 
      break;
    case lazer.keyLeft: // left
      if (lazer.yDirection === 0) break;
      lazer.xDirection = -1;
      lazer.yDirection = 0; 
      break;
    case lazer.keyRight: //right
      if (lazer.yDirection === 0) break;
      lazer.xDirection = 1;
      lazer.yDirection = 0; 
      break;
  }
}

setInterval(() => {
  lazers.forEach((lazer) => {
    arena.fillStyle = lazer.color;
    arena.fillRect(lazer.x, lazer.y, 2, 2);
    lazer.x = lazer.x + lazer.xDirection;
    lazer.y = lazer.y + lazer.yDirection; 
  });
}, 25);

document.onkeydown = (event) => {
  event.preventDefault();
  lazers.forEach( lazer => {
    changeDirection(lazer, event.keyCode);
  });
};

//arena.clearRect(0, 0, 640, 480);
