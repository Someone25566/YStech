document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300);
        });
    });
});

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function handleLoginClick() {
    window.location.href = 'hhh.html';
}

function handleCartClick() {
    alert('Cart button clicked');
}

function handleProfileClick() {
    alert('Profile button clicked');
}

function handleLogoutClick() {
    alert('Logout button clicked');
}