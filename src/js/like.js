let likes = document.getElementsByClassName('btn-like');
let icons = document.getElementsByClassName('fa-heart');

for(let i = 0; i < likes.length; i++)
{
    likes[i].addEventListener('click', () => 
    {
        icons[i].classList.toggle('fas');
    });
}