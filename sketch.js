const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground  
 var div1 , div2 , div3, div4 , div5
var divisionHeight = 300;


function preload() {
  
}

var particles = []
var plinkos=[]
var divisions = []


function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (100 , 780 , 800 , 20)

    div1 = new Division(100 , 620 , 10,300 )
    div2 = new Division(200 , 620 , 10,300 )
    div3 = new Division(300 , 620 , 10,300 )
    div4 = new Division(400 , 620 , 10,300 )

    for (var j = 40; j <= width; j = j+50)
    {

        plinkos.push(new Plinko(j ,75));
    }

    for (var j = 15; j <= width-10; j = j+50)
    {

     plinkos.push(new Plinko(j,175))
    }
  
    for (var j = 40; j <= width; j = j+50)
    {

        plinkos.push(new Plinko (j ,275));
    }

    for (var j = 15; j <= width-10; j = j+50)
    {

     plinkos.push(new Plinko(j,375))
    }


}
 
function draw(){
    background(0)
    Engine.update(engine);
     
    
    for (var j = 0 ; j < plinkos.length; j++){
        plinkos[j].display();
    }

    if(frameCount%90===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }
    for (var j = 0 ; j < particles.length; j++){
        particles[j].display();
    }
ground.display()
div1.display()
div2.display()
div3.display()
div4.display()

}
