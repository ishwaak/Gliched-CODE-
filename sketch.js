var cycle , cyc;


function preload()
{
    Cyc_Ani = loadAnimation("ima/11.png" , "ima/22.png" , "ima/33.png", "ima/44.png");
    road = loadImage("ima/road.png")
    cyc = loadImage("ima/11.png")


}


function setup ()
{
    createCanvas(1500,500)
    background("black")

    cycle = createSprite(300,400)
    //cycle.addImage("asda",cyc);
   // cycle.scale = 0.5;

    //`roadSP = createSprite()


}


function draw ()
{
        background("black")

        if(keyDown === "W" )
        {
            cycle.addAnimation("Lmao" , Cyc_Ani);
            console.log("hi")
        }

        drawSprites();

}