function DrawWord(x,y){
  this.x = x;
  this.y = y;
  this.canvas = document.getElementById('myCanvas');
  this.context = this.canvas.getContext('2d');
}

DrawWord.prototype.refresh = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.now = new Date();
}

DrawWord.prototype.print = function() {
  this.refresh();
  this.context.fillStyle = 'black';
  this.context.font = "35px arial";
  this.context.textBaseline = "top";
  var t = this.now;
  this.pos_x = this.x;
  //this & var ?
  var timeline = [t.getHours(), ':', t.getMinutes(), ':', t.getSeconds()];
  
  for(var i in timeline)
  {
    this.context.fillText(timeline[i],this.pos_x,this.y);
    this.pos_x += charspace/2;
    if (i % 2 == 0) this.pos_x += charspace/2;
  }
}

var clock = new DrawWord(10,10);
var charcolor = 'black';
var font = '35px arial';
var charspace = 50; //px

setInterval("clock.print()", 1000);