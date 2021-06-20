var canvas=document.getElementById('myCanvas');
var width_block=30;
var height_block=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_image="";
function player_update(){
fabric.Image.fromURL("https://i1.wp.com/bhamnow.com/wp-content/uploads/2019/10/Iron-Man-action-pose-e1570573664862.jpg?fit=450%2C695&ssl=1"),function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_y,
left:player_x
});
}
  }
  function new_image(get_image){
    fabric.Image.fromURL(get_image),function(Img){
    block_image=Img;
    block_image.scaleToWidth(width_block);
    block_image.scaleToHeight(height_block);
    block_image.set({
    top:player_y,
    left:player_x
});
}
  }
  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
    if(keypressed=="80"&&e.shiftKey==true){
    console.log("Shift+P Has Been Pressed!!!")
    width_block=width_block+10;
    height_block=height_block+10;
    document.getElementById("current_width").innerHTML=width_block;
    document.getElementById("current_height").innerHTML=height_block;
  }
   if(keypressed=="77"&&e.shiftKey==true){
    console.log("Shift+M Has Been Pressed!!!")
    width_block=width_block-10;
    height_block=height_block-10;
    document.getElementById("current_width").innerHTML=width_block;
    document.getElementById("current_height").innerHTML=height_block;
}
if(keypressed=="70"){
  new_image('Hulk_facce.png');
  console.log("f");
}
if(keypressed=="66"){
  new_image('ironman_body.png');
  console.log("f");
}
if(keypressed=="76"){
  new_image('spiderman_legs.png');
  console.log("l");
}
if(keypressed=="82"){
  new_image('ironman_right_hand.png');
  console.log("r");
}
if(keypressed=="72"){
  new_image('thor_left_hand.png');
  console.log("h");
}
if(keypressed=="38"){
  up()
  console.log("up");
}
if(keypressed=="40"){
  down()
  console.log("down");
}
if(keypressed=="37"){
  left()
  console.log("left");
}
if(keypressed=="39"){
  right()
  console.log("right");
}
  }
  function up(){
    if(player_y=0){
      player_y=player_y-width_block;
      console.log("When up arrow is pressed, X coordinate of player= "+player_x+" and Y coordinate of player= "+player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
  function down(){
    if(player_y=700){
      player_y=player_y+width_block;
      console.log("When down arrow is pressed, X coordinate of player= "+player_x+" and Y coordinate of player= "+player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
  function left(){
    if(player_y=900){
      player_y=player_y+width_block;
      console.log("When left arrow is pressed, X coordinate of player= "+player_x+" and Y coordinate of player= "+player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
  function right(){
    if(player_y=0){
      player_y=player_y-width_block;
      console.log("When right arrow is pressed, X coordinate of player= "+player_x+" and Y coordinate of player= "+player_y);
      canvas.remove(player_object);
      player_update();
    }
  }
