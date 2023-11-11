let addSection = document.querySelector('.add_section')
let outerAddSection = document.querySelector('.add-section-outer')

let innerAddTask = document.querySelector('.add-section_inner')

let middleImage = document.querySelector('.middle-img')

let cancelButton = document.querySelector('.cancel-button')
let cancelTaskButton = document.querySelector('.cancel_task_button')

let inputTaskName = document.querySelector('#name')
let addTaskButton = document.querySelector('.add_task_right')

// edit task 
let editSection = document.querySelector('.edit-task')



// after add section


let afterAddSection = document.querySelector('.after_add-section')

// submit section

const sectionForm = document.querySelector('form')









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
    outerAddSection.style.display = 'none'
    middleImage.style.display = 'flex'
    addSection.style.opacity = "1"
})



// add task 
addTaskButton.addEventListener('click', function (e) {
    addTaskButton.style.opacity = '0'
    innerAddTask.style.opacity = '1'
})

cancelTaskButton.addEventListener('click', (e) => {
    innerAddTask.style.opacity = '0'
    addTaskButton.style.opacity = '1'
})

const toggleFunction = () => {
    let editInner = document.querySelector('.inner_edit_section')
    let contain = editInner.classList.contains("none")
    if (contain) {
        editInner.classList.add("flex")
        editInner.classList.remove('none')
    }
    else {
        editInner.classList.add("none")
        editInner.classList.remove('flex')
    }
    console.log(contain);
}


sectionForm.addEventListener('submit', (e) => {
    // alert('submit')

    let nameSection = e.target.sectionName.value;
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    sectionData.push({
        'nameSection': nameSection
    })

    localStorage.setItem('sectionDetails', JSON.stringify(sectionData))
    e.target.reset()
    displayData();



    // console.log(sectionData);

    // console.log(nameSection);
    e.preventDefault();


})



let displayData = () => {
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    let finalData = '';

    sectionData.forEach((element, i) => {
        console.log(i);

        finalData += `
        <div class = "whole_inner_edit_section">
            <div class="inner_after_add_section">
                    <h3>${element.nameSection}</h3>
                    <div onclick="removeSection(${i})" class="edit-task">
                        <img src="../assets/more.svg" alt="" />
                    </div>

                  
                   </div>
                    <div class="add_task_right">
                        <img src="../assets/add_icon_three.svg" alt="">
                        <p>Add task</p>
                    </div>

                    </div>

        `
    });


    afterAddSection.innerHTML = finalData;

    // console.log(finalData);
    // console.log(sectionData);
}

const removeSection = (index) => {
    // alert(index)
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    console.log(sectionData);
    sectionData.splice(index, 1);

    localStorage.setItem('sectionDetails', JSON.stringify(sectionData))
    displayData();
}

displayData()

// edit section


// editSection.addEventListener('click', (e) => {
//     editInner.style.opacity = '1'
//     alert('hi')
// })
//
// editSection.addEventListener('dblclick', (e) => {
//     editInner.style.opacity = '0'
// })


// delete task

// const wholeSection = document.querySelector('.whole_inner_edit_section')

// const taskDelete = document.querySelector('.delete_section')
// 
// taskDelete.addEventListener('click', (e) => {
//     // afterAddSection.remove()
//     // addSection.removeChild(afterAddSection)
//     // afterAddSection.removeChild(wholeSection)
//     // console.log(e);
// 
//     // localStorage.removeItem(sectionData)
// 
// 
// 
// 
// })