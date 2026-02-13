let logOut = () =>{
    let confirmation = confirm('Are you sure you want to logout?')
    if(confirmation){
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 2000);
    }
}