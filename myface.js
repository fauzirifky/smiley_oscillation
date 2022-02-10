class myFace{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    show(){
    var diam = 120
        // Face
      fill(255, 255, 0);
      stroke(0);
      strokeWeight(2);
      ellipse(x, y, diam, diam);
      
      // Smile
      var startAng = .1*PI
      var endAng = .9*PI
      var smileDiam = .6*diam;
      arc(x, y, smileDiam, smileDiam, startAng, endAng);
      
      // Eyes
      var offset = .2*diam;
      var eyeDiam = .1*diam;
      fill(0);
      ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
      ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
    }
}