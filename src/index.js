import './style.css'

const toggleDiv = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

function toggle () {
    toggleDiv.classList.toggle('active')
    navigation.classList.toggle('active')
}

toggleDiv.addEventListener('click', function() {
    toggle ()
})