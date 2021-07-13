let dark_bg = document.getElementById('dark_bg');
let log = document.getElementsByClassName('log');
let nav = document.getElementsByTagName('nav')[0];

let login_btn = document.getElementById('login');
let logout_btn = document.getElementById('logout');
let cross = document.getElementsByClassName('cross');
let toReg = document.getElementById('toReg');
let toLog = document.getElementById('toLog');
let toClose = document.getElementById('toClose');
let toLeave = document.getElementById('toLeave');

let toLogin = document.getElementById('toLogin');
let toRegister = document.getElementById('toRegister');
let toLogout = document.getElementById('toLogout');


login_btn.addEventListener('click', () =>
{
    log[0].style.display = 'block';
    dark_bg.style.display = 'block';
});

logout_btn.addEventListener('click', () =>
{
    log[1].style.display = 'block';
    dark_bg.style.display = 'block';
});

toReg.addEventListener('click', () =>
{
    log[0].style.display = 'none';
    log[2].style.display = 'block';
});

toLog.addEventListener('click', () =>
{
    log[0].style.display = 'block';
    log[2].style.display = 'none';
});

for(let i = 0; i < cross.length; i++)
{
    cross[i].addEventListener('click', () => 
    {
        log[i].style.display = 'none';
        dark_bg.style.display = 'none';
    });
}

toLogin.addEventListener('submit', (event) => 
{
    event.preventDefault();
    nav.classList.toggle('logged');
    nav.classList.toggle('notlogged');
    log[0].style.display = 'none';
    dark_bg.style.display = 'none';
});

toRegister.addEventListener('submit', (event) =>
{
    event.preventDefault();
    log[2].style.display = 'none';
    dark_bg.style.display = 'none';
    nav.classList.toggle('logged');
    nav.classList.toggle('notlogged');
});

toLeave.addEventListener('click', () =>
{
    log[1].style.display = 'none';
    dark_bg.style.display = 'none';
    nav.classList.toggle('logged');
    nav.classList.toggle('notlogged');
});

toClose.addEventListener('click', () =>
{
    log[1].style.display = 'none';
    dark_bg.style.display = 'none';
})