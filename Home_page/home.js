let addSection = document.querySelector('.add_section')
let outerAddSection = document.querySelector('.add-section-outer')
let middleImage = document.querySelector('.middle-img')
let cancelButton = document.querySelector('.cancel-button')
let inputTaskName = document.querySelector('#name')
let addTaskButton = document.querySelector('.add_task_right')
let innerAddTask = document.querySelector('.add-section_inner')

inputTaskName.addEventListener('click', (e) => {
    inputTaskName.style.border = "0.5px solid #80808041";
})

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


addTaskButton.addEventListener('click', function (e) {
    addTaskButton.style.opacity = '0'
    innerAddTask.style.opacity = '1'
})
