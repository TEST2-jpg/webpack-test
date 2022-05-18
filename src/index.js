import { contact, main, menu } from "./load"

main()
function changeTab() {
    const home = document.querySelector('#home')
    const food = document.querySelector('#food')
    const contacts = document.querySelector('#contacts')

    food.addEventListener('click', menu)
    home.addEventListener('click', main)
    contacts.addEventListener('click', contact)
}
changeTab()