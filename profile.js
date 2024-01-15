document.getElementById('id_profile').addEventListener('change', changeVisibility);
var isChangeEventListener = false;
function changeVisibility(){
    isChangeEventListener = true;
}

document.getElementById('editIcon').addEventListener('click', edit);
function edit(){
    document.getElementById('save').style.display = 'flex';
    document.getElementById('cancel').style.display = 'flex';
    document.getElementById("profile-picture-label").style.display = 'flex';
    var ele = document.getElementsByClassName('profile-edit');
    for(let i=0; i<ele.length; i++){
        ele[i].setAttribute('contenteditable', 'true');
        ele[i].focus();
    }
}


document.getElementById('save').addEventListener('click', save);
function save(){
    const form = document.getElementById('form');
    if (isChangeEventListener == true){
        form.submit();
    }
    var firstName = document.getElementById('first-name').innerHTML;
    var lastName = document.getElementById('last-name').innerHTML;
    var email = document.getElementById('email').innerHTML;
    var contact = document.getElementById('contact-number').innerHTML;
    console.log(firstName, lastName, email, contact)
    var data = {
        'first-name': firstName,
        'last-name': lastName,
        'email': email,
        'contact-number': contact};
    console.log("working");
    console.log(JSON.stringify(data));
    var csrftoken = getCookie('csrftoken');
    url = 'http://127.0.0.1:8000/TaskManager/update';
    fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-CSRFToken': csrftoken
    },
    body: JSON.stringify(data)
    })
    .then(response => {
        location.reload()
    })
    .catch(error => console.log(error));

    // Function to retrieve a cookie value
    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === name + '=') {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
}
}