function DrawBoard(x,y) {
  this.x = x;
  this.y = y;
  this.canvas = document.getElementById('myCanvas');
  this.context = this.canvas.getContext('2d');
  this.board =[
    ['열','한','다','세','네'],
    ['두','여','섯','일','곱'],
    ['여','덟','아','홉','시'],
    ['자','정','이','삼','십'],
    ['사','오','십','오','분']
  ];
}

DrawBoard.prototype.testeregg = function() {
  if (!this.accel) {
    this.accel = true;
  }
  else {
    this.accel = false;
    this.ho = 0;
    this.mi = 0;
  }
};

DrawBoard.prototype.TimeParse = function() {
  var now, h, m;
  
  if (!this.accel) {
    now = new Date();
  
    h = (now.getHours()-1)%12+1;
    m = now.getMinutes();
  }
  else {
    this.mi++;
    if (this.mi >= 60) { this.ho++; }
    if (this.ho >= 24) { this.ho=0; }
    this.ho = (this.ho-1)%12+1;
    
    h = this.ho;
    m = this.mi;
  }
  
  var mid = h%12===0;
  var oclock = (m>=0&&m<5);
  
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  this.circuit = [
    [h>=10||(mid&&!oclock),h%10===1,h===5,h===3,h===4],
    [h%10===2||(mid&&!oclock),h===6,h===5||h===6,h===7,h===7],
    [h===8,h===8,h===9,h===9,!mid||!oclock],
    [h===0&&oclock,mid&&oclock,m>=20&&m<30,m>=30&&m<40,(m>=10&&m<20)||(m>=30&&m<40)],
    [m>=40&&m<50,h==12&&oclock||m>=50,(m>=20&&m<30)||m>=40,m%10>=5,m>=5]
  ];
  
  this.FrameDraw();
};

DrawBoard.prototype.FrameDraw = function() {
  this.context.drawImage(this.backimg,0,0,300,300);

  for(var i = 0 ; i < 5 ; i++) {
    for(var j = 0 ; j < 5 ; j++) {     
     
      this.context.strokeStyle = '#A17E5E';
      this.context.strokeText(this.board[i][j],this.x+charspace*j, this.y+charspace*i);
      
      this.context.shadowBlur = 5;
      this.context.shadowColor = 'black';
      this.context.shadowOffsetX = 0;
      this.context.shadowOffsetY = 0;
      //this.context.strokeStyle = "black";
      //this.context.strokeText(this.circuit[i][j]? this.board[i][j] : " " ,this.x+charspace*j, this.y+charspace*i);
      
      this.context.fillStyle = 'white';
      this.context.fillText(this.circuit[i][j]? this.board[i][j] : "" ,this.x+charspace*j, this.y+charspace*i);

    }
  }
};

DrawBoard.prototype.init = function(style,font,space) {
  this.context.fillStyle = style;
  this.context.font = font;
  this.backimg = new Image();
  this.backimg.src = 'http://www.copperventhoods.com/images/lightbrown_800.jpg';
  this.context.textBaseline = "top";
};

var timeboard = new DrawBoard(30,30);
var charstyle = 'white';
var font = 'bold 36px Nanum Myeongjo';
var charspace = 50; //px

timeboard.init(charstyle,font,charspace);
timeboard.accel=false;
setInterval("timeboard.TimeParse();",1000);