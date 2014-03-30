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

DrawBoard.prototype.DrawGrid = function() {
  for(var i = 0 ; i < 5 ; i++) {
    for(var j = 0 ; j < 5 ; j++) {
        this.context.fillText(this.board[i][j] ,this.x+charspace*j, this.y+charspace*i);
    }
  }
};

DrawBoard.prototype.print = function(style,font,space) {
  this.context.fillStyle = style;
  this.context.font = font;
  this.context.textBaseline = "top";
  this.DrawGrid();
};

var timeboard = new DrawBoard(10,10);
var charstyle = 'black';
var font = '35px 궁서체';
var charspace = 50; //px

timeboard.print(charstyle,font,charspace);
