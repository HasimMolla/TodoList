let addSection = document.querySelector('.add_section')
let outerAddSection = document.querySelector('.add-section-outer')

let innerAddTask = document.querySelector('.add_section_inner')

let middleImage = document.querySelector('.middle-img')

let cancelButton = document.querySelector('.cancel-button')
let cancelTaskButton = document.querySelector('.cancel_task_button')

let afterAddTask = document.querySelector(".add_task_inner");

let inputTaskName = document.querySelector('#name')
// let addTaskButton = document.querySelector('.add_task_right')


// edit task 
let editSection = document.querySelector('.edit-task')


// after add section
let afterAddSection = document.querySelector('.after_add-section')


// submit section
const sectionForm = document.querySelector('form')


// Form Validation
if (!localStorage.getItem('loginValidation')) {
    window.location.href = '/Login'
}


// edit section

const funEdit = (e) => {
    let promptEdit = prompt("Please edit your section name:") 
    let promtEditObj = {
        "nameSection" : promptEdit
    }
   
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    
    sectionData.splice(e, 1, promtEditObj)
    console.log(sectionData);
    localStorage.setItem('sectionDetails', JSON.stringify(sectionData))
    displayData();

}

// edit section ends here

// add task

const addtask = (e) => {
    console.log(e);
    innerAddTask.style.display = 'flex'
    middleImage.style.display = 'none'
    // addTaskButton.style.display = 'none'
}

// input task click 

inputTaskName.addEventListener('click', (e) => {
    inputTaskName.style.border = "0.5px solid #80808041";
})

// add section 

addSection.addEventListener('click', function (e) {
    // console.log(e.target);
    addSection.style.display = 'none'
     
    outerAddSection.style.display = 'flex'
    middleImage.style.display = 'none'
})

// cancel section 
cancelButton.addEventListener('click', function (e) {
    outerAddSection.style.display = 'none'
    middleImage.style.display = 'flex'
    addSection.style.display = "flex"
})



// add task 
// addTaskButton.addEventListener('click', function (e) {
//     addTaskButton.style.display = 'none'
//     innerAddTask.style.display = 'flex'
//     middleImage.style.display = 'none'
//     console.log('hi');
// })



// cancel task 
cancelTaskButton.addEventListener('click', (e) => {
    innerAddTask.style.display = 'none'
    // addTaskButton.style.display = 'flex'
    middleImage.style.display='flex'
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

// Local Storage save 

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

// display section  

let displayData = () => {
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    let finalData = '';

    sectionData.forEach((element, i) => {
        console.log(i);

        finalData += `
        <div class = "whole_inner_edit_section">
            <div class="inner_after_add_section">
                    <h3>${element.nameSection}</h3>
                    <div class="edit-task">
                       <img onclick="removeSection(${i})" src="../assets/delete_sec.svg" alt="" />
                         <img onclick="funEdit(${i})" src="../assets/edit_sec.svg" alt="" />
                    </div>

                  
                   </div>
                    <div onclick="addtask(${i})" class="add_task_right">
                        <img src="../assets/add_icon_three.svg" alt="">
                        <p>Add task</p>
                    </div>
                  
                    
                    

                    </div>

                    

        `;
    });


    afterAddSection.innerHTML = finalData;

    // console.log(finalData);
    // console.log(sectionData);
}


// delete section 
const removeSection = (index) => {
    // alert(index)
    let sectionData = JSON.parse(localStorage.getItem('sectionDetails')) ?? [];
    let TaskData = JSON.parse(localStorage.getItem("taskDetails")) ?? [];
    console.log(sectionData);
    sectionData.splice(index, 1);
    TaskData.splice(index,9)

    localStorage.setItem('sectionDetails', JSON.stringify(sectionData))
    localStorage.setItem("taskDetails", JSON.stringify(TaskData));
   
    displayData();
     displayTask();
}

displayData()




innerAddTask.addEventListener("submit", (e) => {
  //   alert('submit')

  let nameTask = e.target.Task_name.value;
  let TaskData = JSON.parse(localStorage.getItem("taskDetails")) ?? [];
  TaskData.push({
    nameTask: nameTask,
  });

  localStorage.setItem("taskDetails", JSON.stringify(TaskData));
  e.target.reset();
  displayTask();

  // console.log(sectionData);

  // console.log(nameSection);
  e.preventDefault();
});

let displayTask = () => {
  let TaskData = JSON.parse(localStorage.getItem("taskDetails")) ?? [];
  let TaskfinalData = "";

  TaskData.forEach((element, i) => {
    console.log(i);

    TaskfinalData += `
                    <div class="after-add-task">
                    <div class="complete_task"></div>
                    <h4>${element.nameTask}</h4>
                    </div>
    
        `;
  });

  afterAddTask.innerHTML = TaskfinalData;

  // console.log(finalData);
  // console.log(sectionData);
};

displayTask();


