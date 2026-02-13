// signin function
      let loginForm = () => {
        // debugger
        //getting input value
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        

        //getting span id
        let emailErr = document.getElementById("emailErr");
        let passwordErr = document.getElementById("passwordErr");
      

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        //error validations
        let isCheck = true

        if (email.value === "") {
          emailErr.innerText = "Must Fill This Field !";
          email.style.border = '2px solid red'
          isCheck = false
        } 
        else if(!emailPattern.test(email.value)){
          emailErr.innerText = "Enter a valid email address!";
          email.style.border = "2px solid red";
          isCheck = false;
        }else {
          emailErr.innerText = "";
          email.style.border = ''
        }

        if (password.value === "") {
          passwordErr.innerText = "Must Fill This Field !";
          password.style.border = '2px solid red'
          isCheck = false
        } else if(password.value.length < 8){
          passwordErr.innerText = "Maximum 8 Characters !";
          password.style.border = '2px solid red'
          isCheck = false
        } else {
          passwordErr.innerText = "";
          password.style.border = ''
        }

        if (isCheck){
          alert('Logged In Successfully!')
          window.location.href = 'index.html'
        }

        //preventDefault()        
        let submit_btn = document.querySelector('form')

              submit_btn.addEventListener('submit',(e) =>{
                e.preventDefault()
              })

      };
