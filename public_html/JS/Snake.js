var snake;
var snakeLenght;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameLoop();

function gameInitialize() {
  var canvas = document.getElementById("game-screen");
  context = canvas.getContext("2d");
  
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  
  canvas.width = screenWidth;
  canvas.height = screenHeight;
}

function gameLoop() {
    snakeDraw();
    snakeUpdate();
    snakeDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(39,196,162)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
}

function snakeInitialize() {
    snake = [];
    snakeLenght = 15;
    snakeSize = 20;
    
    for(var index = snakeLenght - 1; index >= 0; index--) {
        snake.push ({
            x: index,
            y: 0,
        });
    }
}

function snakeDraw() {
    for(var index = 0; index < snake.lenght; index++) {
        context.fillStyle = "orange";
        context.fillRect (snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    snakeHeadX++;
    
    snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}