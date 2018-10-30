// const canvas = document.getElementById('snake');
// const context =  canvas.getContext('2d');
//
// context.fillStyle='#00FF66'
// context.fillRect(0,0,canvas.width,canvas.height);

function setup(){
  createCanvas(500,500);
  s = new snake();
}
function draw()
{
  background(50);
  //s.update();
  s.show();
  s.update();
  s.bondouaryTrans();
  s.keyControl();

}
function snake()
{
  this.foodx = 30;
  this.foody = 30;
  fill(color('#3400FF'));
  this.x = 100;
  this.y = 0;
  this.xspeed=0;
  this.yspeed=0;
  this.update = function(){
    this.x = this.x+this.xspeed;
    this.y = this.y+this.yspeed;
  }

  this.show = function(){
    fill(color('#AC0000'));
    //fill(olor(204, 102, 0));
    rect(this.x,this.y,10,10);
    if(doOverlap(this.x, this.y , this.foodx, this.foody))
    {
      this.foodx = Math.floor((Math.random() * 490) + 1);
      this.foody = Math.floor((Math.random() * 490) + 1);
      fill(color('#'+Math.floor((Math.random() * 999999) + 100000)));
    }
    function doOverlap(l1, r1, l2, r2)
    {
      if( ((l1>=l2 && l1-l2<=9)&&(r1>=r2 && r1-r2<=9))||((l1<=l2 && l2-l1<=9)&&(r1<=r2 && r2-r1<=9)))
      return true;
      else
        return false;
    }
    rect(this.foodx,this.foody,10,10);
  }

  this.xbound = 500;
  this.ybound = 500;
  this.bondouaryTrans= function(){
    if(this.x == this.xbound)
    {
      this.x=-10;
    }
    if(this.y == this.ybound)
    {
      this.y=-10;
    }
    if(this.y <= -10 && this.yspeed<0)
    {
      this.y=500;
    }
    if(this.x <= -10 && this.xspeed<0)
    {
      this.x=500;
    }
  }

  this.keyControl = function() {
  if (keyCode === UP_ARROW) {
    this.yspeed = -1;
    this.xspeed = 0;
  } else if (keyCode === DOWN_ARROW) {
   this.yspeed = 1;
   this.xspeed = 0;
  }
  if (keyCode === LEFT_ARROW) {
    this.yspeed = 0;
    this.xspeed = -1;
  } else if (keyCode === RIGHT_ARROW) {
    this.yspeed = 0;
    this.xspeed = 1;
  }
}
}
