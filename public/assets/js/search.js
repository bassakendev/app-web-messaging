document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('searchs');
    const contacts = document.querySelectorAll('.contact');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        contacts.forEach(contact => {
            const name = contact.querySelector('.name').textContent.toLowerCase();
            const shouldShow = name.includes(searchTerm);
            contact.classList.toggle('mask', !shouldShow);
        });
    });
});