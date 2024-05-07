const companyInput = document.getElementById('exampleInputCompany');
const suggestionsList = document.getElementById('companySuggestions');

// Sample data for demonstration (replace with your own)
const companies = [
    { name: "Microsoft", logo: "assets/img/logo/microsoft.svg" },
    { name: "Apple", logo: "assets/img/logo/apple 14.svg" },
    { name: "Google", logo: "assets/img/logo/Google-logoicon.svg" },
    { name: "Amazon", logo: "assets/img/logo/Amazon logo.jpeg" },
    { name: "Netflix", logo: "assets/img/logo/netflix.jpeg" }
];

// Function to render company suggestions
function renderCompanySuggestions(suggestions) {
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
        const img = document.createElement('img');
        img.src = suggestion.logo;
        img.alt = suggestion.name;
        img.style.width = '20px'; // Adjust size as needed
        img.style.marginRight = '10px'; // Adjust margin as needed
        const textNode = document.createTextNode(suggestion.name);
        listItem.appendChild(img);
        listItem.appendChild(textNode);
        suggestionsList.appendChild(listItem);
    });
}

// Event listener for input focus
companyInput.addEventListener('focus', function() {
    const userInput = companyInput.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions(filteredSuggestions);
});

// Event listener for input change
companyInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    const filteredSuggestions = companies.filter(company =>
        company.name.toLowerCase().includes(userInput)
    );
    renderCompanySuggestions(filteredSuggestions);
});

// Event listener for suggestion click
suggestionsList.addEventListener('click', function(e) {
    if (e.target && e.target.matches('li.list-group-item')) {
        companyInput.value = e.target.innerText.trim();
        suggestionsList.innerHTML = ''; // Clear suggestions after selection
        // You can perform any action here on suggestion selection
    }
});

// Event listener to close suggestions when clicking outside
document.addEventListener('click', function(event) {
    const target = event.target;
    // Check if the click target is not the input field or the suggestions list
    if (target !== companyInput && !companyInput.contains(target) && target !== suggestionsList && !suggestionsList.contains(target)) {
        // Clear the suggestion list
        suggestionsList.innerHTML = '';
    }
});