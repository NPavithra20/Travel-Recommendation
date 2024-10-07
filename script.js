// Array to simulate search suggestions
const destinations = ["Bali", "Paris", "Maldives", "Tokyo", "New York", "Iceland", "Sydney", "Dubai", "London", "Rome","Beach","Temple","Country"];

// Function to show search suggestions
function showSuggestions(value) {
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = ""; // Clear previous suggestions
    if (value.length > 0) {
        let filteredDestinations = destinations.filter(destination =>
            destination.toLowerCase().startsWith(value.toLowerCase())
        );
        filteredDestinations.forEach(destination => {
            let suggestionItem = document.createElement("div");
            suggestionItem.textContent = destination;
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.onclick = function () {
                document.getElementById("search-bar").value = destination;
                suggestionsDiv.innerHTML = ""; // Clear suggestions after selection
            };
            suggestionsDiv.appendChild(suggestionItem);
        });
    }
}

// Function to handle search
function search() {
    // Get the value from the search bar
    const input = document.getElementById('search-bar').value.toLowerCase().trim();

    // Hide all sections initially
    document.getElementById('templeSection').style.display = 'none';
    document.getElementById('beachSection').style.display = 'none';
    document.getElementById('countrySection').style.display = 'none';
    document.getElementById('result').innerHTML = '';

    // Check for specific keywords or possible misspellings
    if (input.includes('temple') || input.includes('trmple')) {
        // Show temple section
        document.getElementById('templeSection').style.display = 'block';
        document.getElementById('result').innerHTML = 'Showing results for "temple"';
    } else if (input.includes('beach')) {
        // Show beach section
        document.getElementById('beachSection').style.display = 'block';
        document.getElementById('result').innerHTML = 'Showing results for "beach"';
    } else if (input.includes('country')) {
        // Show country section
        document.getElementById('countrySection').style.display = 'block';
        document.getElementById('result').innerHTML = 'Showing results for "country"';
    } else {
        // If no match found
        document.getElementById('result').innerHTML = 'No matching results found. Please try again.';
    }
}

function bookNow() {
    alert("Redirecting to booking page...");
}
