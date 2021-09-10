const switcher = document.getElementById('switcher');
const myWrapper= document.getElementById('main-wrapper');
switcher.addEventListener('change', function () {
    if (this.checked) {
        myWrapper.classList.add('dark');
    } else {
        myWrapper.classList.remove('dark');
    }
})
