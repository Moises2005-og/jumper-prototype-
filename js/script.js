const objecto = document.getElementById("object")
const player = document.getElementById("player")

const checkCollision = () => {
    const playerRec = player.getBoundingClientRect()
    const objectoRec = objecto.getBoundingClientRect() 
    
    return !(
        playerRec.top > objectoRec.bottom ||
        playerRec.bottom < objectoRec.top ||
        playerRec.right < objectoRec.left ||
        playerRec.left > objectoRec.right
    );
}

window.document.addEventListener("keydown", function(event) {
   const tecla = event.key
    if(tecla == " ") {
        player.classList.add("jump")
    }

    setTimeout(()=> {

        player.classList.remove("jump")

    }, 2000)
})

setInterval(() => {
    if(checkCollision()) {
       objecto.classList.remove("andar")
       console.log("Fim de jogo!") 
    }
}, 100)