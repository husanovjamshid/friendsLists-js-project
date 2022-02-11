window.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('#name'),
        lname = document.querySelector('#lname'),
        youth = document.querySelector('#youth'),
        phone = document.querySelector('#phone'),
        friendLists = document.querySelector('#friends-list'),
        listsOpen = document.querySelector('.listsOpen'),
        listsClose = document.querySelector('.listsClose'),
        alertForm = document.querySelector('.alert'),
        friendsListsClose = document.querySelector('.friendsListsClose'),
        friendsListsOpen = document.querySelector('.friendsLists'),
        listsOpenTwo = document.querySelector('.listsOpenTwo')


    listsOpen.addEventListener('click' ,function (event) {
        event.preventDefault()

        if (name.value == '' && lname.value == '' && youth.value == '' && phone.value == '') {
            alertForm.style.display = 'block'

            setTimeout(function () {
                alertForm.style.display = 'none'
            },2000)
        }else{
            listsOpenTwo.style.display = 'block'
            friendsListsOpen.style.display = 'none'
            friendsListsClose.style.display = 'block'

            const newRow = document.createElement('tr')

            // New Name
            const newName = document.createElement('td')
            newName.innerHTML = name.value
            newRow.appendChild(newName)

            // New Last Name
            const newLname = document.createElement('td')
            newLname.innerHTML = lname.value
            newRow.appendChild(newLname)

            // New Youth
            const newYouth = document.createElement('td')
            newYouth.innerHTML = youth.value
            newRow.appendChild(newYouth)

            // New Phone
            const newPhone = document.createElement('td')
            newPhone.innerHTML = phone.value
            newRow.appendChild(newPhone)

            friendLists.appendChild(newRow)

            name.value = ''
            lname.value = ''
            youth.value = ''
            phone.value = ''
        }
    })

    listsClose.addEventListener('click', function (event) {
        event.preventDefault()
        friendsListsOpen.style.display = 'block'
        friendsListsClose.style.display = 'none'
    })

    listsOpenTwo.addEventListener('click', function (event) {
        event.preventDefault()
        friendsListsOpen.style.display = 'none'
        friendsListsClose.style.display = 'block'
    })
})