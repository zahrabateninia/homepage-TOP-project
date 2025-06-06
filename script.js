let menu = document.querySelector("#menu-bars");
let header = document.querySelector('header');

menu.onclick = ()=>{
    menu.classList.toggle("fa-times")
    header.classList.toggle('active')
}

window.onscroll = ()=>{
    menu.classList.remove("fa-times")
    header.classList.remove('active')
}


let cursor1 =  document.querySelector(".cursor-1")
let cursor2 =  document.querySelector(".cursor-2")

window.onmousemove = (e)=>{
    cursor1.style.top= e.pageY + 'px'
    cursor1.style.left= e.pageX + 'px'
    cursor2.style.top= e.pageY + 'px'
    cursor2.style.left= e.pageX + 'px'
}


document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = ()=>{
        cursor1.classList.add('active')
        cursor2.classList.add('active')
    }

    links.onmouseleave = ()=>{
        cursor1.classList.remove('active')
        cursor2.classList.remove('active')
    }
})

// Form validation:
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission
  
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
  
    // Trim values
    const nameVal = name.value.trim();
    const numberVal = number.value.trim();
    const emailVal = email.value.trim();
    const messageVal = message.value.trim();
  
    // Clear previous styles/messages
    formMessage.textContent = "";
    formMessage.style.color = "red";
    formMessage.style.zIndex = 100000;
  
    // Validation rules
    if (!nameVal || !numberVal || !emailVal || !messageVal) {
      formMessage.textContent = "⚠️ All fields are required.";
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(emailVal)) {
      formMessage.textContent = "⚠️ Please enter a valid email address.";
      email.focus();
      return;
    }
  
    if (!/^\d{7,15}$/.test(numberVal)) {
      formMessage.textContent = "⚠️ Enter a valid phone number (7–15 digits).";
      number.focus();
      return;
    }
  
    // Passed validation
    formMessage.style.color = "green";
    formMessage.textContent = "✅ All inputs are valid. Sending...";
  
    // You can now call the sendEmail() function
    sendEmail(nameVal, numberVal, emailVal, messageVal);
  });
  
