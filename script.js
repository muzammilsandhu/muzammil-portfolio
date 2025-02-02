document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#menu a');

    for (const link of menuLinks) {
        link.addEventListener('click', function() {
            document.getElementById('menu-icon').checked = false;
        });
    }
});