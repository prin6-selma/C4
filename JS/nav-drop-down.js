function toggleHiddenOnSubNav(event) {
    event.target
}

document.addEventListener('DOMContentLoaded', () => {
    const dropDownTrigers = document.querySelectorAll('.mainNav li');
    dropDownTrigers.forEach(element => {
        element.addEventListener('click', (event) => {
            const displayEl = document.getElementById(`${event.target.getAttribute('data-content')}Page`);
            displayEl.classList.toggle('activeSubNav');
        });
    });
});