
/*function validateSignupName(name){
    if(name === null || name.length < 3){
        return false;
    }
    return true;
}

function validateSignupEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email === null || email.length === 0 || !re.test(email)){
        return false;
    }
    return true;
}

function validateSignupPassword(password){
    if(password === null || password.length < 8){
        return false;
    }
    return true;
}

function locallyStoreUser(res) {
    console.log(res);
    if('email' in res){
        window.localStorage.setItem('EMAIL', res.email);
    }
    if('name' in res){
        window.localStorage.setItem('NAME', res.name);
    }
    if('gender' in res){
        window.localStorage.setItem('GENDER', res.gender);
    }
    if('profile' in res){
        window.localStorage.setItem('PROFILE_URL', res.profile);
    }
    if('location' in res){
        window.localStorage.setItem('LOCATION', res.location);
    }
    if('caption' in res){
        window.localStorage.setItem('CAPTION', res.caption);
    }
    if('created_at' in res){
        window.localStorage.setItem('CREATED_AT', res.created_at);
    }
}

monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
]

function signupInputHandler(){
    nameBox = document.getElementById('signup-name');
    emailBox = document.getElementById('signup-email');
    passwordBox = document.getElementById('signup-password');
    confirmPasswordBox = document.getElementById('signup-confirm-password');
    const todayDate = new Date();
    let month = String(monthNames[todayDate.getMonth()]);
    let day = String(todayDate.getDate());
    if(day.length === 1){
        day = "0" + day
    }
    let year = String(todayDate.getUTCFullYear());
    let createdAt = month + ' ' + day + ', ' + year;
    console.log(createdAt);

    console.log(nameBox.value, emailBox.value, passwordBox.value, confirmPasswordBox.value);
    if(!validateSignupName(nameBox.value)){
        alert('Enter Full Name of atleast 3 characters.');
        return;
    }
    if(!validateSignupEmail(emailBox.value)){
        alert('Enter valid email.');
        return;
    }
    if(!validateSignupPassword(passwordBox.value)){
        alert('Enter passowrd containing atleast 8 characters.');
        return;
    }
    if(passwordBox.value !== confirmPasswordBox.value){
        alert('Password and Confirm Password should match.');
        return;
    }
    data = { "name": nameBox.value, "email": emailBox.value, "password": passwordBox.value, "created_at": createdAt}
    console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/createUser',
        data: JSON.stringify(data),
        success: function(res) {
            console.log(res);
            var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
            document.cookie = "FOOD_LOVERS_LOGIN=" + res["email"] + "; expires=" + expires + ";path=/;";
            locallyStoreUser(res);
            window.location.href = 'home.html';
        },
        error: function(err){
            console.log(JSON.stringify(err));
        }
    })
}*/
function signupInputHandler() {
    // Get user input values
    var fullName = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;

    // Validate input
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Create user object
    var user = {
        fullName: fullName,
        email: email,
        password: password
    };

    // Store user object in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Show the success message
    document.getElementById("signup-success-message").classList.remove("hidden");

    // Assuming you have obtained user details from the signup form
    const userDetails = {
        fullName: fullName,
        email: email,
        // Add other fields as needed
    };

    // Store user details in localStorage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Optionally, you can redirect to the home page after a delay
    setTimeout(function () {
        // Redirect to home.html after 2 seconds
        window.location.href = 'home.html';
    }, 2000); 
}
