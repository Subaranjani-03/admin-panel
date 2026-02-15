let catList = JSON.parse(localStorage.getItem("catList")) || [];
let categoryTable = () =>{
    //getting input value
    let category = document.getElementById("category")

    //getting span id
    let categoryError = document.getElementById("categoryError");

    //error validations
        let isCheck = true

        if (category.value === "") {
          categoryError.innerText = "Must Fill This Field !";
          category.style.border = '2px solid red'
          isCheck = false
        } else {
          categoryError.innerText = "";
          category.style.border = ''
        }

         if (isCheck){
          // alert('Category Submitted!')

          //sweetalert
          // Swal.fire("Category Added!");

          Swal.fire({
              icon: "success",
              title: "Category Added!",
              text: "New category has been created."
          });


        // object
        let regData = {
          category : category.value,
        }
        //push object to array
        catList.push(regData)

        //store array to local storage
        localStorage.setItem('catList',JSON.stringify(catList))

        loadData()
      }

      //preventDefault()
        let submit_btn = document.querySelector('form')

              submit_btn.addEventListener('submit',(e) =>{
                e.preventDefault()
              })
      }
      
      let loadData = () =>{
        //get tbody id
        let tbody = document.getElementById('catTable')

        //get array from local storage
        let catList = JSON.parse(localStorage.getItem('catList'))

        // console.log(catList)

        let tr = ''

        //using forEach()
        catList.forEach((ele,index) =>{
          tr += `<tr>
                    <td>${index+1}</td>
                    <td>${ele.category}</td>   
                </tr>`
        })
        
        // console.log(tr)

        tbody.innerHTML = tr
        
      }
      loadData()


        