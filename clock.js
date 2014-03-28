function DrawWord(x,y,word){
  this.x = x;
  this.y = y;
  this.word = word;
  this.canvas = document.getElementById('myCanvas');
  this.context = this.canvas.getContext('2d');
}

DrawWord.prototype.refresh = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.word = new Date().getSeconds();
}

DrawWord.prototype.draw = function() {
  this.refresh();
  this.context.fillStyle = 'black';
  this.context.font = "35px arial";
  this.context.textBaseline = "top";
  this.context.fillText(this.word, this.x, this.y);
}

var time = new Date();
var obj1 = new DrawWord(10,10,time.getHours());
var obj2 = new DrawWord(50,10,time.getMinutes());
var obj3 = new DrawWord(90,10,time.getSeconds());

obj1.draw();
obj2.draw();
setInterval("obj3.draw()", 1000);

