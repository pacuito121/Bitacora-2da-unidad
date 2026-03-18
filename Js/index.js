function selec(a){
    switch(a){
        case 1:
            document.getElementById("photo").setAttribute("src","Img/Display.jpg")
            break
        case 2:
            document.getElementById("photo").setAttribute("src","Img/position.png")
            break
        case 3:
            document.getElementById("photo").setAttribute("src","Img/referencias.jpeg")
            break
        case 4:
            document.getElementById("photo").setAttribute("src","Img/form.png")
            break
        case 5:
            document.getElementById("photo").setAttribute("src","Img/input.webp")
            break
        case 6:
            document.getElementById("photo").setAttribute("src","Img/tablas.jpg")
            break
        case 7:
            document.getElementById("photo").setAttribute("src","Img/Extra.png")
            break
        default:
            document.getElementById("photo").setAttribute("src","Img/dance.gif")
            break
    }
}