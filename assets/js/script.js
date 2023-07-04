function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:anynhamedola@gmail' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    window.location.href = mailtoLink;
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }