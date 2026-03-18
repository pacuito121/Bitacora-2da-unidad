function dis(a){
    let tit = document.getElementById("title")
    let cu = document.getElementById("cube")
    switch(a){
        case 1:
            tit.innerHTML = "Static"
            cu.style.position = "static"
            break;
        case 2:
            tit.innerHTML = "Relative"
            cu.style.position = "relative"
            break;
        case 3:
            tit.innerHTML = "Absolute"
            cu.style.position = "absolute"
            break
        case 4:
            tit.innerHTML = "Fixed"
            cu.style.position = "fixed"
            break
        case 5:
            tit.innerHTML = "Sticky"
            cu.style.position = "sticky"
            break
    }
}
function XY(){
    let x = document.getElementById("x")
    let y = document.getElementById("y")
    let cube = document.getElementById("cube")
    cube.style.top = y.value+"%"
    cube.style.right = x.value+"%"
}