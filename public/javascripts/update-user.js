var URL = `http://localhost:3000/users/list/${userId}`

//here we obtain the information from the user we are about to render (and edit!)
axios.get(URL).then((userPayload) => {
  //here all the info from the user is already in the userPayload variable

  //here with these querySelectors we are injecting the right values in the right components
  //in the form
  document.querySelector("input[name=name]").value = userPayload.data.name
  document.querySelector("input[name=password]").value = userPayload.data.password
  document.querySelector("input[name=nationality]").value = userPayload.data.nationality
})

//update button event handler  
document.querySelector("#update-user").onclick = function (e) {
  e.preventDefault();

  //payload crafting
  let payload = {
    name: document.querySelector("input[name=name]").value,
    password: document.querySelector("input[name=password]").value,
    nationality: document.querySelector("input[name=nationality]").value
  }

  //user update via PUT concatenating the userID with the URL plus we send the crafted payload
  axios.put("http://localhost:3000/users/" + userId, payload).then(APIPayload => {
    //after requesting the server side to update the user, now we refresh the page
    //there are better ways to do this, by simply refreshing the contents via AJAX purely
    location.href = "http://localhost:3000/list-users"
  })
}