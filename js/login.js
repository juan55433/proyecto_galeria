
const checkout = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
var l = localStorage;
 first_name.addEventListener("focusout", function() {
    l.setItem("fn", first_name.value);
  })

  last_name.addEventListener("focusout", function() {
    l.setItem("ln", last_name.value);
  })

  email.addEventListener("focusout", function() {
    l.setItem("em", email.value);
  })

  profile.addEventListener("focusout", function() {
    l.setItem("pr", profile.value);
  })