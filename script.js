const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

// console.log(ctx)

canvas.width = window.innerWidth
canvas.height = window.innerHeight


// window.addEventListener("resize", function(){
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
//     // ctx.fillStyle = "white"
//     // ctx.fillRect(10, 10, 500, 300)
// })

ctx.fillStyle = "white"
ctx.fillRect(10, 10, 500, 300)

ctx.fillStyle = "red"
ctx.strokeStyle = "blue"
ctx.lineWidth = 5
ctx.beginPath()
ctx.arc(100, 100, 50, 0, 2 * Math.PI)
ctx.fill()
ctx.stroke()

console.log(ctx)