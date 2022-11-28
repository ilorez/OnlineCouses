const multiSteps = document.querySelector("[data-multi-step]")
const steps = [...multiSteps.querySelectorAll("[data-step]")]


//gives the index of the step that have active class 
let activeStep = steps.findIndex(step => {
    return step.classList.contains("active")
})
const prevButton = document.querySelector("[data-prev]")
multiSteps.addEventListener('click', e => {
    let clickedhere
    if (e.target.matches('[data-next]')) {
        clickedhere = 1
    } else if (e.target == prevButton) {
        clickedhere = -1
    }
    if (clickedhere == null) {
        return
    }
    const allInputs = [...steps[activeStep].querySelectorAll("input")]
    const allValid = allInputs.every(inn => inn.reportValidity())

    if (allValid) {
        if (activeStep == 0) {
            const userEmail = document.querySelector("#email").value
            const putUserEmail = document.querySelector("#email-of-user").textContent= userEmail;
            
        }
        if (activeStep == 1) {
            const userName = document.querySelector("#last-name").value
            const putUserName = document.querySelector("#username").value= userName;
            
        }
        activeStep += clickedhere
        
        showStep()
    }


})

//funtion for show step
function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === activeStep)
    })
}
