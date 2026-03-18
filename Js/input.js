let GetUrl = new URLSearchParams(window.location.search)
function msg(){
    let name = GetUrl.get("Name")
    let pass = GetUrl.get("Pass")
    let email = GetUrl.get("email")
    let num = GetUrl.get("Num")
    let chck = GetUrl.get("Check")
    let opt = GetUrl.get("Opt")
    let range = GetUrl.get("Range")
    let msg
    msg = `Hola ${name}! \n`
    if(pass == 1540){
        msg += `Tu email es correcto....Creo....Si es ${email},verdad?\n`
        msg += `${num} años eh?.....`
        if(num< 18){
            msg += "Aun estas joven niño, disfruta!. \n"
        }else if(num > 18 && num<32){
            msg += "Aun la armas, aprovecha ahora que aun tienes tiempo. \n"
        }else{
            msg += "No ya de plano contigo ni que hacerle, estas con un pie mas alla que aca. \n"
        }
        if(chck == "on"){
            msg += "Enserio?...Me alegro \n"
        }else{
            msg += "No eres feliz, eh?...Quieres hablar? \n"
        }
        if(opt.toString() == "Que te importa chismoso"){
            msg += "A verdad, tonto yo por andar preguntando \n"
        }else{
            msg += "Esta bien! \n"
        }
        if(chck != "on" && range > 60){
            msg += "Es algo...Contradictorio, no lo crees? \n"
        }
    }else{
        msg += "Pagame tacaño!!"
    }
    document.getElementById("Msg").innerHTML = msg
    document.getElementById("Msg").textContent = msg
    document.getElementById("Msg").value = msg
}
document.addEventListener("DOMContentLoaded",()=>{
    try {
        msg()
    } catch (error) {
        
    }
})