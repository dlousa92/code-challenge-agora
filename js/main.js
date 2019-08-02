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
