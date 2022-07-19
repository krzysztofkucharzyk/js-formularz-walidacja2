let btn = document.querySelector('input[type=button]');

btn.onclick = function () {
    let phone = document.getElementById('tel').value;

    if (phone === "") {
        alert('Wpisz numer telefonu');
    } else if (phone.length < 9 || phone.length > 9) {
        alert('Wprowadzono nieprawidłowy numer');
    } else {
        phone
    }
}
