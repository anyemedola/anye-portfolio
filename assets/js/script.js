var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  Email.send({
    SecureToken: "c594caec-61b5-4a3c-8158-35cc210f4c28",
    To: 'anynhamedola@gmail.com',
    From: "anynhamedola@gmail.com",
    Subject: subject,
    Body: "My name is" + name + "<br/>" + email + "<br/>" + message
  }).then(
    message => alert(message)
  );
})

const swiper = new Swiper('.swiper', {
  sliderPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}