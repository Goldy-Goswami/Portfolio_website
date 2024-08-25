document.getElementById('E_classSelect').addEventListener('change', function() {
    var selectedValue = this.value;
    var percentage;

    if (selectedValue === '12th') {
        percentage = '56.6%';
    } else if (selectedValue === '10th') {
        percentage = '61.8%';
    }

    var infoDiv = document.getElementById('percentageInfo');
    infoDiv.innerHTML = 'Percentage: ' + percentage;
    infoDiv.style.display = 'block'; // Show the info div
}
);

 
 // New JavaScript code for page transitions
document.querySelectorAll('.n_content').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 1000); // Match the transition duration in CSS
    });
});
  
  
 




 

 
 

 
