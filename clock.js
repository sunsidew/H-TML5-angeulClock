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

DrawWord.prototype.loop = function() {
  var t = this.now; // this.now?
  var timeline = [t.getHours(), ':', t.getMinutes(), ':', t.getSeconds()];
  
  for(var i in timeline)
  {
    this.context.fillText(timeline[i],this.pos_x,this.y);
    this.pos_x += charspace/2;
    if (i % 2 == 0) this.pos_x += charspace/2;
  }
}

DrawWord.prototype.print = function(style,font,space) {
  this.refresh();
  this.context.fillStyle = style;
  this.context.font = font;
  this.context.textBaseline = "top";
  this.pos_x = this.x;
  //var t = this.now;
  //this & var ?
  this.loop();
}

var clock = new DrawWord(10,10);
var charstyle = 'black';
var font = '35px arial';
var charspace = 50; //px

setInterval("clock.print(charstyle,font,charspace)", 1000);
