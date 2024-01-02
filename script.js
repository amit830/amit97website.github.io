document.querySelectorAll('.showDetailsBtn').forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var targetDetails = document.getElementById(targetId);

        if (targetDetails.style.display === 'none') {
            targetDetails.style.display = 'block';
        } else {
            targetDetails.style.display = 'none';
        }
    });
}); 