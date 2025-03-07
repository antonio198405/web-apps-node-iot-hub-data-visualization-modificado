const serverUrl = "https://ArduinoAzurebotones.azurewebsites.net";
        
function togglePin(pin, state) {
    fetch(`${serverUrl}/set`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin, state })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error:", error));
}
