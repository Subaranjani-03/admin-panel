// product html page
let prodList = JSON.parse(localStorage.getItem("prodList")) || [];
      let regForm = () => {
        // debugger
        //getting input value
        let imgUrl = document.getElementById("img-url")
        let prodName = document.getElementById("prod-name")
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

        if (prodName.value === "") {
          prodError.innerText = "Must Fill This Field !";
          document.getElementById("prod-name").style.border = '2px solid red'
          isCheck = false
        } else {
          prodError.innerText = "";
          document.getElementById("prod-name").style.border = ''
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
          // alert('Form Submitted Successfully!')
          // Swal.fire("Product Added!");

          


          // object
        let regData = {
          productId: Date.now(),
          imgUrl : imgUrl.value,
          prodName : prodName.value,
          category : category.value,
          price : price.value,
          stock : stock.value,
          offer : offer.value,
        }
        //push object to array
        prodList.push(regData)

        //store array to local storage
        localStorage.setItem('prodList',JSON.stringify(prodList))
        Swal.fire({
              icon: "success",
              title: "Product Added!",
              text: "New product has been created.",
              timer: 1500,
              showConfirmButton: false
        });

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
        if (prodList != null) {
        prodList.forEach((ele,index) =>{
          tr += `<tr>
                    <td>${index+1}</td>
                    <td>${ele.productId}</td>
                    <td><img src="${ele.imgUrl}" alt=${ele.prodName} width="50px" height="50px" />  </td> 
                    <td>${ele.prodName}</td>   
                    <td>${ele.category}</td>   
                    <td>${ele.price}</td>   
                    <td>${ele.stock}</td>   
                    <td>${ele.offer}</td>   
                    <td>
                    <button type="button" class = "update-btn" onclick="updatePro(${ele.productId})">update</button>
                    <button type="button" class = "delete-btn" onclick="deletePro(${ele.productId})">delete</button>    
                    </td>
                </tr>`
        })
      }else{
        tr += `<tr><td colspan="9" align="center">No Record Found</td></tr>`;
      }
        
        // console.log(tr)

        tbody.innerHTML = tr
        
      }
      loadData()


      //update product

      let updatePro = (productId) => {
            // console.log(productId);
            let productList = JSON.parse(localStorage.getItem("prodList"))
            // console.log(productList)

            let fpl = productList.filter((ele) => {
                if (ele.productId == productId) {
                    return ele;
                }
            })

            // console.log(fpl);
            let [singleProduct] = fpl;

            // console.log(singleProduct)

            document.getElementById("productId").value = singleProduct.productId;
            document.getElementById("img-url").value = singleProduct.imgUrl;
            document.getElementById("prod-name").value = singleProduct.prodName;
            document.getElementById("category").value = singleProduct.category;
            document.getElementById("price").value = singleProduct.price;
            document.getElementById("stock").value = singleProduct.stock;
            document.getElementById("offer").value = singleProduct.offer;

            document.querySelector("#updatebtn").style.display = "block"
            document.querySelector("#submitbtn").style.display = "none"

        }



        let updateData = () => {
            let pid = document.getElementById("productId").value;
            let pimage = document.getElementById("img-url").value;
            let pname = document.getElementById("prod-name").value;
            let category = document.getElementById("category").value;
            let price = document.getElementById("price").value;
            let stock = document.getElementById("stock").value;
            let offer = document.getElementById("offer").value;

            let pl = JSON.parse(localStorage.getItem("prodList"))
            // alert("update")
            // console.log(pl)

            let productData = {
                productId: Number(pid),
                imgUrl: pimage,
                prodName: pname,
                category,
                price,
                stock,
                offer
            };

            let upl = pl.map((ele) => {
                if (ele.productId == pid) {
                    return productData;
                } else {
                    return ele;
                }
            })

            localStorage.setItem("prodList", JSON.stringify(upl))
                // alert("updated Successfully")

                Swal.fire({
                    icon: "success",
                    title: "Updated!",
                    text: "Product updated successfully.",
                    timer: 1500,
                    showConfirmButton: false
                  });

                loadData()
        }


      //delete product
      let deletePro = (productId) => {
            // console.log("delete" + productId)

            let con = confirm("Do you want to Delete this Product Id?")

            // console.log(con)

            if (con) {
                let productList = JSON.parse(localStorage.getItem("prodList"))

                let fpl = productList.filter((ele) => {
                    // console.log(ele)
                    if (ele.productId != productId) {
                        // console.log("same" , ele.productId)
                        return ele;
                    }
                })

                localStorage.setItem("prodList", JSON.stringify(fpl))

                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Product Deleted successfully.",
                    timer: 1500,
                    showConfirmButton: false
                  });
                loadData()
            } else {
                alert('your product is safe')
            }
        }