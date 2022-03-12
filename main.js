var mouseevent="empty"
var radius=10
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="blue"
widthofline=1

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{widthofline=document.getElementById("width").value
    color=document.getElementById("color").value

radius=document.getElementById("radius").value
mouseevent="mousedown"
}



 
canvas.addEventListener("mousemove",mousemove)
function mousemove(e){

if (mouseevent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
    currentpositionx=e.clientX-canvas.offsetLeft
    currentpositiony=e.clientY-canvas.offsetTop
     ctx.arc(currentpositionx,currentpositiony,radius,0,2*Math.PI)
     

     
    
     console.log(currentpositionx,currentpositiony)
     ctx.stroke()
}


}
 function ClearArea() {
     ctx.clearRect(0,0,800,600)     
 }
 canvas.addEventListener("mouseup",mouseup)
 function mouseup(e){
     mouseevent="mouseup"
    
 }
 canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
    mouseevent="mouseleave"
}


