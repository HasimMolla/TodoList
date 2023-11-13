const getPin = document.getElementById('enter_Pin')

const loginBtn = document.getElementById('login_btn')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(getPin.value);
    console.log(JSON.stringify(getPin.value));
    console.log(JSON.stringify(getPin.value).length - 2);

    if ((JSON.stringify(getPin.value).length - 2) != 4) {
        return alert('Enter a valid PIN ')
    }

    const localStgPin = localStorage.getItem('pin')
    console.log(localStgPin);

    if (localStgPin != getPin.value) {
        return alert('Enter a valid PIN')
    }
    localStorage.setItem('loginValidation', true)
    window.location.href = "/Home_page"
})