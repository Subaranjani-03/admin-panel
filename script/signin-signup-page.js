// signup function
let regList = []
      let signupForm = () => {
        // debugger
        //getting input value
        let uname = document.getElementById("uname")
        let email = document.getElementById("email")
        let phnum = document.getElementById("phnum")
        let password = document.getElementById("password")
        let cnfrmpass = document.getElementById("cnfrmpass")
  

        //getting span id
        let unameErr = document.getElementById("unameErr");
        let emailErr = document.getElementById("emailErr");
        let phnumErr = document.getElementById("phnumErr");
        let passwordErr = document.getElementById("passwordErr");
        let cnfrmpassErr = document.getElementById("cnfrmpassErr");

        
        //error validations
        let isCheck = true

        if (uname.value === "") {
          unameErr.innerText = "Must Fill This Field !";
          document.getElementById("uname").style.border = '2px solid red'
          isCheck = false
        } else {
          unameErr.innerText = "";
          document.getElementById("uname").style.border = ''
        }

        if (email.value === "") {
          emailErr.innerText = "Must Fill This Field !";
          document.getElementById("email").style.border = '2px solid red'
          isCheck = false
        } else {
          emailErr.innerText = "";
          document.getElementById("email").style.border = ''
        }

        if (phnum.value === "") {
          phnumErr.innerText = "Must Fill This Field !";
          document.getElementById("phnum").style.border = '2px solid red'
          isCheck = false
        } else if(phnum.value.length < 10 || phnum.value.length > 10){
          phnumErr.innerText = "Must Be 10 Digits !";
          document.getElementById("phnum").style.border = '2px solid red'
          isCheck = false
        } else if (phnum.value < 0) {
          phnumErr.innerText = "Invalid Phone Number !";
          document.getElementById("phnum").style.border = '2px solid red'
          isCheck = false 
        } else {
          phnumErr.innerText = "";
          document.getElementById("phnum").style.border = ''
        }

        if (password.value === "") {
          passwordErr.innerText = "Must Fill This Field !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false 
        } else if(password.value.length < 8){
          passwordErr.innerText = "Minimum 8 Characters !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false
        } else if(password.value !== cnfrmpass.value){
          passwordErr.innerText = "Mismatched Password !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false 
        } else {
          passwordErr.innerText = "";
          document.getElementById("password").style.border = ''
        }

        if (cnfrmpass.value === "") {
          cnfrmpassErr.innerText = "Must Fill This Field !";
          document.getElementById("cnfrmpass").style.border = '2px solid red'
          isCheck = false 
        } else if(cnfrmpass.value.length < 8){
          cnfrmpassErr.innerText = "Minimum 8 Characters !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false
        } else if(cnfrmpass.value !== password.value){
          cnfrmpassErr.innerText = "Mismatched Password !";
          passwordErr.innerText = "Mismatched Password !";
          document.getElementById("cnfrmpass").style.border = '2px solid red'
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false 
        } else {
          cnfrmpassErr.innerText = "";
          document.getElementById("cnfrmpass").style.border = ''
        }

        if (isCheck){
          alert('Registered Successfully!')
        }

        // object
        let regData = {
          uname,
          email,
          phnum,
          password,
          cnfrmpass
        }
        regList.push(regData)
        localStorage.setItem('regList',JSON.stringify(regList))

        loadData()
      }
      
      

// signin function
      let loginForm = () => {
        // debugger
        //getting input value
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        

        //getting span id
        let emailErr = document.getElementById("emailErr");
        let passwordErr = document.getElementById("passwordErr");
      

        //error validations
        let isCheck = true

        if (email.value === "") {
          emailErr.innerText = "Must Fill This Field !";
          document.getElementById("email").style.border = '2px solid red'
          isCheck = false
        } else {
          emailErr.innerText = "";
          document.getElementById("email").style.border = ''
        }

        if (password.value === "") {
          passwordErr.innerText = "Must Fill This Field !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false
        } else if(password.value.length > 8){
          passwordErr.innerText = "Maximum 8 Characters !";
          document.getElementById("password").style.border = '2px solid red'
          isCheck = false
        } else {
          passwordErr.innerText = "";
          document.getElementById("password").style.border = ''
        }

        if (isCheck){
          alert('Logged In Successfully!')
        }
      };