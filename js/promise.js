"use strict";

function getCommits (username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'Bearer ' + GITHUB_TOKEN
        }
    }).then(r => r.json())
        .then(data => {
            console.log(data)
            let commitDate = data[0].created_at.split("T");
            console.log(commitDate[0])
        })
        .catch(error => console.log(error))
}
getCommits('JaylenJHarris22')