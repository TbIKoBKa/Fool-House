let toggle = document.getElementsByClassName('toggle')[0];
let filler = document.getElementsByClassName('nav-filler')[0];
let container = document.getElementById('header');

toggle.addEventListener('click', () =>
{
    nav.classList.toggle('active');
    toggle.classList.toggle('active');

    if(toggle.classList.contains('active'))
    {
        dark_bg.style.display = 'block';
        document.body.style.overflow = 'hidden'
    }
    else
    {
        dark_bg.style.display = 'none';
        document.body.style.overflow = 'scroll';
    }
});