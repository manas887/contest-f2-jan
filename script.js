let username = document.getElementById("name").value;
let profession = document.getElementById("profession").value;
let age = document.getElementById("age").value;
document.getElementById("addUser").addEventListener("click", userAdd);

let employeesList = [];
let id = 0;

function userAdd() {
    if ( username && profession && age ) {
        let user = { id: ++id, name: username, profession: profession, age: age };
        employeesList.push(user);
        document.getElementById("newUserSection").reset();
        document.getElementById("red").innerHTML = "";
        document.getElementById("green").innerHTML = " Success : Employee Added! ";
    }else{
        document.getElementById("red").innerHTML = " Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("green").innerHTML = "";
    }
}

