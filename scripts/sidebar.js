function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('open');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('open');
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    
    // Check if sidebar is open
    if (sidebar.classList.contains('open')) {
        // Check if click is outside sidebar and not on the menu button
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            hideSidebar();
        }
    }
});
