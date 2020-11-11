let calculateButton = document.getElementById("button_calc")
let areaText = document.getElementById("area")
let circunferenciaText = document.getElementById("circunferencia")

calculateButton.onclick = function(e){
    let radius = parseFloat(document.getElementById("raio").value)
    let area = Math.PI * radius * radius
    let circuferencia = Math.PI * 2 * radius
    areaText.value = area
    circunferenciaText.value = circuferencia
}