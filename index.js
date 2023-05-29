function celsiusToFahrenheit(celsius) {
    let toFahrenheit = (celsius * 9) / 5 + 32
    document.write(celsius + "C" + " " + "is" + " " + toFahrenheit +"F")
}

function fahrenheitToCelsius(fahrenheit) {
    let toCelsius = ((fahrenheit - 32)*5) /9
    document.write(fahrenheit +"F"+ " " + "is"+ " " + toCelsius + "C")
}

let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt("Choose the conversion type: (F To Fahrenheit or C To Celsius)");

if (conversionType === "F") {
    fahrenheitToCelsius(temperature)
  } else if (conversionType === "C") {
    celsiusToFahrenheit(temperature)
  } else {
    alert("Invalid conversion type.");
  }