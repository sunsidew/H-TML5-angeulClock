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

DrawBoard.prototype.TimeParse = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  var now = new Date();
  //var h = (now.getHours()-1)%12+1;
  //var m = now.getMinutes();
 
  this.mm++;
  if(this.mm == 60)
  {
    this.hh++;
  }
  
  this.mm %= 60;
  this.hh %= 24;
  
  console.log(this.mm);
  var h = this.hh;
  var m = this.mm;
  
  this.circuit = [
    [h>=10,h%10===1,h===5,h===3,h===4],
    [h%10===2,h===6,h===5||h===6,h===7,h===7],
    [h==8,h===8,h===9,h===9,h!==0],
    [h===0,h===0,m>=20&&m<30,m>=30&&m<40,(m>=10&&m<20)||(m>=30&&m<40)],
    [m>=40&&m<50,m>=50,(m>=20&&m<30)||m>=40,m%10>=5,m>=5]
  ];
  
  this.DrawCircuit();
};

DrawBoard.prototype.DrawCircuit = function() {
  for(var i = 0 ; i < 5 ; i++) {
    for(var j = 0 ; j < 5 ; j++) {     
     
      this.context.strokeStyle = '#A17E5E';
      this.context.strokeText(this.board[i][j],this.x+charspace*j, this.y+charspace*i);
      
      this.context.shadowBlur = 2;
      this.context.shadowColor = 'black';
      this.context.shadowOffsetX = 1;
      this.context.shadowOffsetY = 0;
      //this.context.strokeStyle = "black";
      //this.context.strokeText(this.circuit[i][j]? this.board[i][j] : " " ,this.x+charspace*j, this.y+charspace*i);
      
      this.context.fillStyle = 'white';
      this.context.fillText(this.circuit[i][j]? this.board[i][j] : " " ,this.x+charspace*j, this.y+charspace*i);

    }
  }
};

DrawBoard.prototype.init = function(style,font,space) {
  this.context.fillStyle = style;
  this.context.font = font;
  this.context.textBaseline = "top";
};

var timeboard = new DrawBoard(30,30);
var charstyle = 'white';
var font = 'bold 36px Nanum Myeongjo';
var charspace = 50; //px

timeboard.init(charstyle,font,charspace);
timeboard.hh=0;
timeboard.mm=0;
setInterval("timeboard.TimeParse();",100);
//setInterval("timeboard.TimeParse();",1000);