//this handler makes the add user button work
document.querySelector("#add-user").onclick = function (e) {
  //we add this line to prevent the form to be submitted in the old fashion way
  e.preventDefault();

  //here we craft the payload object that will be sent to be BE
  let payload = {
    name: document.querySelector("input[name=name]").value,
    password: document.querySelector("input[name=password]").value,
    nationality: document.querySelector("input[name=nationality]").value
  }

  //here we send via POST using axios the crafted payload to the users endpoint
  axios.post("http://localhost:3000/users", payload).then(APIPayload => {
    console.log(APIPayload)
  })
}