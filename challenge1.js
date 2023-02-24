console.log('hello JS world')

let isClickedMarkAllRead = true
let bgColorIs = false

let checkBoxEl = document.getElementById('checkboxInput')
let countEl = document.getElementById('countButton') 
let count = parseInt(countEl.textContent)
let notificationsAll = document.querySelectorAll('.notification-container')

Array.from(notificationsAll).forEach((each => {
    //  console.log(each.textContent)
    // console.log(each.getAttribute('class')=='notification-container bgcolor')

     each.addEventListener('click',function(e){
        if (each.getAttribute('class')=='notification-container bgcolor'){
            each.classList.remove('bgcolor')
            if (count > 0) {
                count = count - 1
                countEl.textContent = count
            }
        }else {
            each.classList.add('bgcolor')
            if (count > -1 ) {
                count = count + 1
                countEl.textContent = count
            }
        }
     })
}))


checkBoxEl.addEventListener('click',function(e){

    console.log(isClickedMarkAllRead)

    if (isClickedMarkAllRead) {

        Array.from(notificationsAll).forEach((each => {

            if (each.getAttribute('class') == 'notification-container bgcolor') {
                each.classList.remove('bgcolor')
                count = 0
                countEl.textContent = 0
            }
        }))

    }
    isClickedMarkAllRead = !isClickedMarkAllRead
})

console.log(count)