// s=window.localStorage.getItem('isloggedin')
// uname=JSON.parse(window.localStorage.getItem('uname'))
// if(s==true){
//     navname=document.getElementById('navname')
//     navname.innerText=uname
    
// }

// var signout=document.getElementById('signout')
// signout.addEventListener('click',(e)=>{
//     e.preventDefault()
//     window.localStorage.removeItem('isloggedin')

// })


document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isloggedin'));

    if (isLoggedIn) {
        const uname = JSON.parse(localStorage.getItem('uname'));
        const navName = document.getElementById('navname');
        
        if (navName) {
            navName.innerText ='👤'+uname;
        }
    // } else {
    //     const currentPage = window.location.pathname;
    //     if (currentPage !== '/signin.html') {
    //         // Redirect to sign-in page if not logged in and not already on the sign-in page
    //         window.location.href = 'signin.html';
    //     }
    }
    

    // Sign-out functionality
    const signOutButton = document.getElementById('signout');
    
    if (signOutButton) {
        signOutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('isloggedin');
            localStorage.removeItem('uname');
            window.location.href = 'signin.html';
        });
    }
});





