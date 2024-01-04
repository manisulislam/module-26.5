const LoadUser = () => {
    fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(json => DisplayUser(json))
}

const DisplayUser = (data) => {
    console.log(data);
    const container = document.getElementById('all_user_container');
    data.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">User name : ${element.username}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"> Full Name : ${element.name.firstname} ${element.name.lastname}</h6>
        <h6>Email: ${element.email}</h6>
        <h6>Password: ${element.password}</h6>
        <h6>Address: ${element.address.city} ${element.address.street} ${element.address.number} ${element.address.zipcode}</h6>
        <h6>Phone Number : ${element.phone}</h6>
        <a href="single_user.html?id=${element.id}"><button type="button")
        data-bs-toggle="modal" data-bs-target="#exampleModal"
         class="btn btn-outline-primary">Single User</button></a>
        </div>
        </div>
        `
        container.appendChild(div);
        
    });


}

const SingleUser=()=>{
    const single= new URLSearchParams(window.location.search).get('id');
    fetch(`https://fakestoreapi.com/users/${single}`)
            .then(res=>res.json())
            .then(json=>DisplaySingleUser(json))
}

const DisplaySingleUser = (element) => {

    const container=document.getElementById('single_user_container');
    const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">User name : ${element.username}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary"> Full Name : ${element.name.firstname} ${element.name.lastname}</h6>
        <h6>Email: ${element.email}</h6>
        <h6>Password: ${element.password}</h6>
        <h6>Address: ${element.address.city} ${element.address.street} ${element.address.number} ${element.address.zipcode}</h6>
        <h6>Phone Number : ${element.phone}</h6>
        
        </div>
        </div>
        `
        container.appendChild(div);
}


// log in javascript below
const HandleLogIn=(event)=>{
    event.preventDefault();
    const user_name=document.getElementById('user_input').value;
    const password=document.getElementById('password_input').value;
    console.log(user_name,password);
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "user_name",
                password: "password"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


}
// add new user js below
const AddNewUser=(event)=>{
    event.preventDefault();
    const email=document.getElementById('email_input').value;
    const user_name=document.getElementById('user_input').value;
    const first_name=document.getElementById('first_name_input').value;
    const last_name=document.getElementById('last_name_input').value;
    const password=document.getElementById('password_input').value;
    const city=document.getElementById('city_input').value;
    const street=document.getElementById('street_input').value;
    const address_number=document.getElementById('address_number_input').value;
    const zip_code=document.getElementById('zip_code_input').value;
    const phone_number=document.getElementById('phone_number_input').value;
    console.log({email,user_name,first_name,last_name,password,city,street,address_number,zip_code,phone_number});
    fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email: email,
                    username:user_name,
                    password:password,
                    name:{
                        firstname:first_name,
                        lastname:last_name
                    },
                    address:{
                        city:city,
                        street:street,
                        number:address_number,
                        zipcode:zip_code,
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:phone_number
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    

}
    
SingleUser()
LoadUser()
DisplaySingleUser()
