var aboutPageButton = document.getElementById('about');
var notesPageButton = document.getElementById('notes');

aboutPageButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    document.location.href = 'about.html';
});
notesPageButton.addEventListener('click', (e)=>{
    e.stopPropagation();
    document.location.href = 'notes.html';
});