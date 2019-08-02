// Sync Checkboxes
let checkboxes = document.body.querySelectorAll('.checkbox')

// This function looks through each checkbox and sets its checked property equal to the box just clicked.
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      checkboxes.forEach(checkbox => {
        checkbox.checked = true
      })
    } else {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false
      })
    }
  })
})

// Timer

// This function calculates the time remaining between the start date (current time) and the specified enddate
function countdown (endDate) {
  let days, hours, minutes, seconds
  const timer = document.body.querySelector('.countdown-timer')
  endDate = new Date(endDate).getTime()
  if (isNaN(endDate)) {
    return
  }

  setInterval(calculate, 1000)
  function calculate () {
    let startDate = new Date()
    startDate = startDate.getTime()
    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400)
      timeRemaining = (timeRemaining % 86400)
      hours = parseInt(timeRemaining / 3600)
      timeRemaining = (timeRemaining % 3600)
      minutes = parseInt(timeRemaining / 60)
      timeRemaining = (timeRemaining % 60)
      seconds = parseInt(timeRemaining)
      timer.innerHTML = `${days} Days ${hours} Hours ${minutes}:${seconds} Minutes`
    } else {
      return
    }
  }
}

// end date is passed when calling the function
(function () {
  countdown('08/07/2019 12:00:00 AM')
}())

// Register Buttons
let registerButtons = document.body.querySelectorAll('.register-button')

// This function first checks if the checkboxes are selected
registerButtons.forEach(button => {
  button.addEventListener('click', function () {
    let isChecked
    checkboxes.forEach(checkbox => {
      isChecked = checkbox.checked
    })

    // If they are not checked, send an alert to user. If they are run api call to endpoint and return ok response.
    if (!isChecked) {
      alert('Please check the checkbox before proceeding')
    } else {
      fetch('https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/')
        .then(function (response) {
          return response.json()
        })
        .then(function (myJson) {
          const data = JSON.parse(myJson.body)
          const callToAction = document.querySelectorAll('.calltoaction-info')

          callToAction.forEach(call => {
            const paragraph = document.createElement('P')
            paragraph.classList.add('button-response')
            const res = document.createTextNode(data.submitok)
            paragraph.appendChild(res)

            call.appendChild(paragraph)
          })
        })
    }
  })
})
