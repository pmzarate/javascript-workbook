'use strict'

document.getElementById('user').addEventListener('click',getUser)

function getUser() {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((user) => {
            console.log(user)
            let output = '<h2> List of People</h2>'
            user.results.forEach(function() {
                output += `
                <ul>
                    <li>${['picture.thumbnail']}</li>
                    <li> Name: ${'name.last'}, ${'name.first'}</li>
                    <li> Location: ${'location.city'}, ${'location.state'}</li>
                </ul>`
                ;
            })
            document.getElementById("user").innerHTML = output;
        })
    }
    
    
