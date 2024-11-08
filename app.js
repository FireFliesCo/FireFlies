//scroll when loaded
window.scrollTo({ top: 0, behavior: 'smooth' });

//navigation buttons
document.getElementById('navButtonAboutUs').addEventListener('click', function(){
    window.scrollTo({ top: 20, behavior: 'smooth' });
});

document.getElementById('navButtonOurWork').addEventListener('click', function(){
    window.scrollTo({ top: 600, behavior: 'smooth' });
});

document.getElementById('navButtonContactUs').addEventListener('click', function(){
    window.scrollTo({ top: 2000, behavior: 'smooth' });
});

// scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));