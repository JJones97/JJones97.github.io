document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.search-box');
    const input = form.querySelector('input[type="search"]');
    const resultsContainer = document.querySelector('.results');
    const resultsCounter = document.getElementById('results-count');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = input.value;
        if (searchTerm) {
            searchWikipedia(searchTerm);
        }
    });

    function searchWikipedia(searchTerm) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*&srlimit=500`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data.query.search);
            })
            .catch(error => alert('Error: ' + error));
    }

    function displayResults(results) {
        if (resultsContainer) {
            resultsContainer.innerHTML = '';
        } else {
            console.error('resultsContainer not found!');
        }

        if (resultsCounter) {
            resultsCounter.textContent = `Results Count: ${results.length}`;
        }

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.snippet}</p>
                <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
            `;
            if (resultsContainer) {
                resultsContainer.appendChild(resultElement);
            } else {
                console.error('resultsContainer not found to append result!');
            }
        });
    }
});