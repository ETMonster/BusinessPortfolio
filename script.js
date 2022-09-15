var aboutPageButton = document.getElementById('about');
var workPageButton;
var contactPageButton;

aboutPageButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    document.location.href = 'about.html'
});