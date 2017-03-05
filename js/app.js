// C = (F-32)*5/9
// F = (9/5*c)+32

function convertir(num) {
    var x;
    if (num == "Celsius") {
        x = document.getElementById("celsius").value * 9 / 5 + 32;
        document.getElementById("fahrenheit").value = x.toFixed(1);
    } else {
        x = (document.getElementById("fahrenheit").value -32) * 5 / 9;
        document.getElementById("celsius").value = x.toFixed(1);
    }
}
