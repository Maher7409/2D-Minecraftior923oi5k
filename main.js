var fabriccanvas= new fabric.Canvas('myCanvas')
player_x = 10;
player_y = 10;
widthofmyblock= 30;
heightofmyblock= 30;
player_object = " ";
block_object = " ";
function howareyou(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y, left: player_x
        });
        fabriccanvas.add(player_object)
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(widthofmyblock);
        block_object.scaleToHeight(heightofmyblock);
        block_object.set({
            top: player_y, left: player_x
        });
        fabriccanvas.add(block_object)
    });
}

window.addEventListener("keydown", kp);

function kp(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        console.log("P and Shift have been clicked together")
        widthofmyblock = widthofmyblock + 10;
        heightofmyblock = heightofmyblock + 10;
        document.getElementById("spanofwidth").innerHTML= widthofmyblock;
        document.getElementById("spanofheight").innerHTML= heightofmyblock;
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("M and Shift have been clicked together")
        widthofmyblock = widthofmyblock - 10;
        heightofmyblock = heightofmyblock - 10;
        document.getElementById("spanofwidth").innerHTML= widthofmyblock;
        document.getElementById("spanofheight").innerHTML= heightofmyblock;
    }
    if(keypressed == '87'){
        Up();
        console.log("W Pressed: Operation Up")
    }
    if(keypressed == '65'){
        Left();
        console.log("A Pressed: Operation Left")
    }
    if(keypressed == '83'){
        Down();
        console.log("S Pressed: Operation Down")
    }
    if(keypressed == '68'){
        Right();
        console.log("D Pressed: Operation Right")
    }
    if(keypressed == '67'){
        new_image("cloud.jpg");
        console.log("C");
    }
    if(keypressed == '70'){
        new_image("dark_green.png");
        console.log("F");
    }
    if(keypressed == '71'){
        new_image("ground.png");
        console.log("G");
    }
    if(keypressed == '76'){
        new_image("light_green.png");
        console.log("L");
    }
    if(keypressed == '82'){
        new_image("roof.jpg");
        console.log("R");
    }
    if(keypressed == '84'){
        new_image("trunk.jpg");
        console.log("T");
    }
    if(keypressed == '85'){
        new_image("unique.png");
        console.log("U");
    }
    if(keypressed == '90'){
        new_image("wall.jpg");
        console.log("Z");
    }
    if(keypressed == '89'){
        new_image("yellow_wall.png");
        console.log("Y");
    }
}

function Up(){
    if(player_y >= 0){
        player_y = player_y - heightofmyblock;
        console.log("player y = " + player_y + ", player x = " + player_x);
        console.log("Height of block =" + heightofmyblock + ", Width of block = " + widthofmyblock);
        fabriccanvas.remove(player_object);
        howareyou();
    }
}

function Down(){
    if(player_y <= 660){
        player_y = player_y + heightofmyblock;
        console.log("player y = " + player_y + ", player x = " + player_x);
        console.log("Height of block =" + heightofmyblock + ", Width of block = " + widthofmyblock);
        fabriccanvas.remove(player_object);
        howareyou();
    }
}

function Left(){
    if(player_x >= 0){
        player_x = player_x - widthofmyblock;
        console.log("player y = " + player_y + ", player x = " + player_x);
        console.log("Height of block =" + heightofmyblock + ", Width of block = " + widthofmyblock);
        fabriccanvas.remove(player_object);
        howareyou();
    }
}

function Right(){
    if(player_x <= 850){
        player_x = player_x + widthofmyblock;
        console.log("player y = " + player_y + ", player x = " + player_x);
        console.log("Height of block = " + heightofmyblock + ", Width of block = " + widthofmyblock);
        fabriccanvas.remove(player_object);
        howareyou();
    }
}