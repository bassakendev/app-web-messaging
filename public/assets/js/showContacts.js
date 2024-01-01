
let el = document.querySelector('.show-contacts');
// alert('ok')
let isShow = false;

el.addEventListener('click', () => {
    let contacts = document.getElementById('contacts');

    if (isShow) {
        // contacts.style.transition = 'all ease 900ms';
        // contacts.style.width = '0px';
        contacts.style.zIndex = '0';
        // contacts.style.display = 'none';
        el.style.rotate = '0deg';

    } else {
        el.style.rotate = '90deg';
        // contacts.style.transition = 'all ease 900ms';
        // contacts.style.display = 'inherit';
        // contacts.style.width = '60%';
        contacts.style.zIndex = '5';
    }

    isShow = !isShow;

})