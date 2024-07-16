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
//New JavaScript code for contact button
  document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('cont').addEventListener('click', function() {
                console.log("Button clicked"); 

                const contactInfo = document.getElementById('contact-info');
                const infoBox = document.getElementById('info-box');
                
                if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
                    contactInfo.style.display = 'block';
                    infoBox.style.height = '600px';  
                } else {
                    contactInfo.style.display = 'none';
                    infoBox.style.height = '300px'; 
                }
            });
        });
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
