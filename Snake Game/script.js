//get the canvas
var canvas = document.getElementById("myCanvas");

//get canvas context
var ctx = canvas.getContext("2d");

//snake properties
var xPosition = 0;
var yPosition = 0;
var snakeSize = 10;
var xDirection = 10;
var yDirection = 0;
var snake = [{ x: 0, y: 0 }];
var i = 0;

var fruit = new Fruit(1, ctx, canvas);

var interval = setInterval(playGame, 200);

function clearBoard() {
  //  Select the colour to fill the drawing
  ctx.fillStyle = "#285050";
  //  Select the colour for the border of the canvas
  ctx.strokestyle = "#bdc3c7";
  // Draw a "filled" rectangle to cover the entire canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw a "border" around the entire canvas
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function playGame() {
  checkBounds();
  clearBoard();
  updateSnake();
  drawSnake();
  fruit.drawFruit();
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}
function drawSnakePart(snakePart) {
  //Draw the body of a snake..
  ctx.fillStyle = "#85C1E9";
  ctx.strokestyle = "#285050";
  ctx.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
  ctx.strokeRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
}
function updateSnake() {
  const head = { x: snake[0].x + xDirection, y: snake[0].y + yDirection };
  snake.unshift(head);

  if (snake[0].x === fruit.getXFruit() && snake[0].y === fruit.getYFruit()) {
    fruit.newLocation();
  } else {
    snake.pop();
  }
}
function checkBounds() {
  //Snake cannot go past edges
  if (
    snake[0].x > canvas.width - 10 ||
    snake[0].x < 0 ||
    snake[0].y > canvas.height - 10 ||
    snake[0].y < 0
  ) {
    clearInterval(interval);
    alert("Snake is out of bounds. Game over");
    //Snake out of bounds.
  } else {
    for (var j = 4; j < snake.length; j++) {
      if (snake[0].x == snake[j].x && snake[0].y == snake[j].y) {
        clearInterval(interval);
        alert("Snake is out of bounds. Game over");
      }
    }
  }
}
document.addEventListener("keydown", function (event) {
  //left: 37, up: 38, right:39, down:40

  if (event.keyCode == 37) {
    //move left
    xDirection = -10;
    yDirection = 0;
  } else if (event.keyCode == 38) {
    //move up
    xDirection = 0;
    yDirection = -10;
  } else if (event.keyCode == 39) {
    //move right
    xDirection = 10;
    yDirection = 0;
  } else if (event.keyCode == 40) {
    //move down
    xDirection = 0;
    yDirection = 10;
  }
});

function Fruit(scale, ctx, canvas) {
  var xFruit = 10;
  var yFruit = 10;
  var good = false;

  this.getXFruit = () => {
    return xFruit;
  };
  this.getYFruit = () => {
    return yFruit;
  };

  this.drawFruit = () => {
    ctx.fillStyle = "#CB4335";
    ctx.fillRect(xFruit, yFruit, snakeSize, snakeSize);
  };

  this.newLocation = () => {
    //generate location for new fruit (not on the snake)
    xFruit = Math.floor((Math.random() * (canvas.width - 10)) / 10) * 10;
    yFruit = Math.floor((Math.random() * (canvas.height - 10)) / 10) * 10;
  };
}
