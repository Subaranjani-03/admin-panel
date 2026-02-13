// product html page
let prodList = JSON.parse(localStorage.getItem("prodList")) || [];
      let regForm = () => {
        // debugger
        //getting input value
        let imgUrl = document.getElementById("img-url")
        let prodImg = document.getElementById("prod-img")
        let category = document.getElementById("category")
        let price = document.getElementById("price")
        let stock = document.getElementById("stock")
        let offer = document.getElementById("offer") 

        //getting span id
        let urlError = document.getElementById("urlError");
        let prodError = document.getElementById("prodError");
        let categoryError = document.getElementById("categoryError");
        let priceError = document.getElementById("priceError");
        let stockError = document.getElementById("stockError");
        let offerError = document.getElementById("offerError");

        
        //error validations
        let isCheck = true

        if (imgUrl.value === "") {
          urlError.innerText = "Must Fill This Field !";
          document.getElementById("img-url").style.border = '2px solid red'
          isCheck = false
        } else {
          urlError.innerText = "";
          document.getElementById("img-url").style.border = ''
        }

        if (prodImg.value === "") {
          prodError.innerText = "Must Fill This Field !";
          document.getElementById("prod-img").style.border = '2px solid red'
          isCheck = false
        } else {
          prodError.innerText = "";
          document.getElementById("prod-img").style.border = ''
        }

        if (category.value === "") {
          categoryError.innerText = "Must Fill This Field !";
          category.style.border = '2px solid red'
          isCheck = false
        } else {
          categoryError.innerText = "";
          category.style.border = ''
        }

        if (price.value === "") {
          priceError.innerText = "Must Fill This Field !";
          price.style.border = '2px solid red'
          isCheck = false
        } else if (price.value < 0) {
          priceError.innerText = "Invalid Price !";
          price.style.border = '2px solid red'
          isCheck = false  
        } else {
          priceError.innerText = "";
          price.style.border = ''
        }

        if (stock.value === "") {
          stockError.innerText = "Must Fill This Field !"
          stock.style.border = '2px solid red'
          isCheck = false
        } else if (stock.value < 0) {
          stockError.innerText = "Invalid Stock !";
          stock.style.border = '2px solid red'
          isCheck = false
        } else {
          stockError.innerText = "";
          stock.style.border = ''
        }

        if (offer.value === "") {
          offerError.innerText = "Must Fill This Field !"
          offer.style.border = '2px solid red'
          isCheck = false
        } else if (offer.value < 0) {
          offerError.innerText = "Invalid Offer !";
          offer.style.border = '2px solid red'
          isCheck = false
        } else {
          offerError.innerText = "";
          offer.style.border = ''
        }

        if (isCheck){
          alert('Form Submitted Successfully!')

          // object
        let regData = {
          imgUrl : imgUrl.value,
          prodImg : prodImg.value,
          category : category.value,
          price : price.value,
          stock : stock.value,
          offer : offer.value,
        }
        //push object to array
        prodList.push(regData)

        //store array to local storage
        localStorage.setItem('prodList',JSON.stringify(prodList))

        loadData()
      }
        

        //preventDefault()
         let submit_btn = document.querySelector('form')

              submit_btn.addEventListener('submit',(e) =>{
                e.preventDefault()
              })
            
      };

      let loadData = () =>{
        //get tbody id
        let tbody = document.getElementById('prodTable')

        //get array from local storage
        let prodList = JSON.parse(localStorage.getItem('prodList'))

        // console.log(prodList)

        let tr = ''

        //using forEach()
        prodList.forEach((ele,index) =>{
          tr += `<tr>
                    <td>${index+1}</td>
                    <td>${ele.imgUrl}</td>   
                    <td>${ele.prodImg}</td>   
                    <td>${ele.category}</td>   
                    <td>${ele.price}</td>   
                    <td>${ele.stock}</td>   
                    <td>${ele.offer}</td>   
                </tr>`
        })
        
        // console.log(tr)

        tbody.innerHTML = tr
        
      }
      loadData()