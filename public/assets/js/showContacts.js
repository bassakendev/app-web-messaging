
let el = document.querySelector('.show-contacts');
let el2 = document.querySelector('#chat-box #body #messaging .messaging-body');
// alert('ok')
let isShow = false;

el.addEventListener('click', () => {
    let contacts = document.getElementById('contacts');

    if (isShow) {
        contacts.style.zIndex = '0';
        el.style.rotate = '0deg';

    } else {
        el.style.rotate = '90deg';
        contacts.style.zIndex = '5';
    }

    isShow = !isShow;

})

el2.addEventListener('click', () => {
    let contacts = document.getElementById('contacts');

    contacts.style.zIndex = '0';
    el.style.rotate = '0deg';

    isShow = false;

})