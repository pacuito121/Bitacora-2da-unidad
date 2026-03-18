let ref = document.getElementById("mains")
let names=document.getElementById("set")
function dis(a){
    switch(a){
        case 1:
            ref.style.display = 'inline'
            names.innerHTML = "Inline"
            break
        case 2:
            ref.style.display = 'block'
            names.innerHTML = "Block"
            break
        case 3:
            ref.style.display = 'inline-block'
            names.innerHTML = "Inline-Block"
            break
        case 4:
            ref.style.display = 'flex'
            names.innerHTML = "Flex"
            break
        case 5:
            ref.style.display = 'inline-flex'
            names.innerHTML = "Inline-Flex"
            break
        case 6:
            ref.style.display = 'grid'
            names.innerHTML = "Grid"
            break
        case 7:
            ref.style.display = 'inline-grid'
            names.innerHTML = "Inline-Grid"
            break
        case 8:
            ref.style.display = 'list-item'
            names.innerHTML = "List-Item"
            break
        case 9:
            ref.style.display = "table"
            names.innerHTML = "Table"
            break
        case 10:
            ref.style.display = 'table-cell'
            names.innerHTML = "Table-Cell"
            break
        case 11:
            ref.style.display = 'table-row'
            names.innerHTML = "Table-Row"
            break
        case 12:
            ref.style.display = 'contents'
            names.innerHTML = "Contents"
            break
        case 13:
            ref.style.display = 'none'
            names.innerHTML = "None"
            break
        default:
            break
    }
}