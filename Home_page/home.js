let addSection = document.querySelector('.add_section')
let outerAddSection = document.querySelector('.add-section-outer')
let middleImage = document.querySelector('.middle-img')
let cancelButton = document.querySelector('.cancel-button')

addSection.addEventListener('click', function (e) {
    // console.log(e.target);
    addSection.style.opacity = "0"
    outerAddSection.style.opacity = '1'
    middleImage.style.display = 'none'
})

cancelButton.addEventListener('click', function (e) {
    outerAddSection.style.opacity = '0'
    middleImage.style.display = 'flex'
    addSection.style.opacity = '1'
})

