// const loader = document.querySelector('.loader-main')
// setTimeout()

const getPin = document.getElementById("enter_Pin")

const signUpBtn = document.querySelector('.signup_btn')

const confirmPin = document.getElementById('confirm_Pin')

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (getPin.value != confirmPin.value) {
        alert('PIN not matched :(')
    }
    if (getPin.value.length != 4 && confirmPin.value.length != 4) {
       return alert("Enter your 4 digits PIN")
    }
    

    localStorage.setItem('pin', getPin.value)
    window.location.href = "../login"

})

