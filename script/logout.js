let logOut = () => {

  // sweetalert
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out of your account!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
    cancelButtonText: "Cancel"
  }).then((result) => {
    
    if (result.isConfirmed) {
      setTimeout(() => {
            window.location.href = 'signin.html'
        }, 2000);
    }
  });
};




// let logOut = () =>{
//     let confirmation = confirm('Are you sure you want to logout?')
//     if(confirmation){
//         setTimeout(() => {
//             window.location.href = 'signin.html'
//         }, 2000);
//     }
// }
