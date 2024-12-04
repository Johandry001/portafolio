// Funcion para cargar animacion de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:'#f9a101',
            scaleLength:0,
            lineWidth:15,
            tackColor:'#525151',
            lineCap:'circle',
            animate:2000
        })
    })
}
cargarAnimaciones();