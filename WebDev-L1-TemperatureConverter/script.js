const temperatureForm = document.getElementById("temperatureForm");

const temperatureInput = document.getElementById("temperature");
const unitInput = document.getElementById("unit");

const message = document.getElementById("message");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


temperatureForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const value = parseFloat(temperatureInput.value);
    const unit = unitInput.value;


    // Validate empty or non-numeric input
    if (temperatureInput.value.trim() === "" || Number.isNaN(value)) {

        showError("Please enter a valid numeric temperature.");

        results.classList.add("hidden");

        return;
    }


    // Convert input into Celsius first
    let celsius;


    if (unit === "celsius") {

        celsius = value;

    } else if (unit === "fahrenheit") {

        celsius = (value - 32) * 5 / 9;

    } else if (unit === "kelvin") {

        celsius = value - 273.15;
    }


    // Absolute zero validation
    if (celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15°C)."
        );

        results.classList.add("hidden");

        return;
    }


    // Convert Celsius to other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;


    // Display results
    celsiusResult.textContent = `${formatNumber(celsius)} °C`;
    fahrenheitResult.textContent = `${formatNumber(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatNumber(kelvin)} K`;


    message.textContent = "Conversion completed successfully.";
    message.className = "message success";

    results.classList.remove("hidden");
});


function formatNumber(number) {

    return Number(number.toFixed(2));
}


function showError(text) {

    message.textContent = text;
    message.className = "message error";
}