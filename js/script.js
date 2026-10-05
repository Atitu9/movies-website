// Filter the existing HTML cards. The catalog also works without JavaScript.
const searchInput = document.querySelector("#movie-search");
const genreSelect = document.querySelector("#genre-filter");

if (searchInput && genreSelect) {
    const cards = document.querySelectorAll(".movie-card");
    const resultCount = document.querySelector("#result-count");
    const emptyMessage = document.querySelector("#empty-message");

    function filterMovies() {
        const query = searchInput.value.trim().toLowerCase();
        const genre = genreSelect.value;
        let count = 0;

        cards.forEach(function (card) {
            const matchesTitle = card.dataset.title.includes(query);
            const matchesGenre = genre === "All" || card.dataset.genre === genre;
            card.hidden = !(matchesTitle && matchesGenre);
            if (!card.hidden) count++;
        });

        resultCount.textContent = count + (count === 1 ? " movie found" : " movies found");
        emptyMessage.hidden = count !== 0;
    }

    searchInput.addEventListener("input", filterMovies);
    genreSelect.addEventListener("change", filterMovies);
}

// This static project previews a message locally. Nothing is sent or saved.
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const result = document.querySelector("#form-result");
    document.querySelector("#preview-button").disabled = false;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !message) {
            result.hidden = false;
            result.textContent = "Please enter a name and a message, not just spaces.";
            return;
        }

        result.hidden = false;
        result.textContent = "Preview for " + name + ": “" + message + "” — This message has not been sent. To reach us, use the GitHub contact link.";
    });

    contactForm.addEventListener("reset", function () {
        result.hidden = true;
        result.textContent = "";
    });
}
