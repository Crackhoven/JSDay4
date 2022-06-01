let printf = (e) => {
    console.log(e.target.value);
    let fname = e.target.value;

    if (fname.length < 5) {
        document.getElementById("fname")
            .style.color = "red";

    } else {
        document.getElementById("fname")
            .style.color = "green";
    }
};

let printl = (e) => {
    console.log(e.target.value);
    let lname = e.target.value;

    if (lname.length < 5) {
        document.getElementById("lname")
            .style.color = "red";

    } else {
        document.getElementById("lname")
            .style.color = "green";
    }
};

let printage = (e) => {
    console.log(e.target.value);
    let age = e.target.value;

    if (age < 19) {
        document.getElementById("age")
            .style.color = "red";

    } else {
        document.getElementById("age")
            .style.color = "green";
    }
};



function print() {
    let age = document.getElementById("age").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    document.getElementsByClassName("nameList")[0].innerHTML = `<li>${fname}</li><li>${lname}</li><li>${age}</li>`;
}

document.getElementById("age").addEventListener("input", printage);
document.getElementById("fname").addEventListener("input", printf);
document.getElementById("lname").addEventListener("input", printl);
document.getElementById("btn").addEventListener("click", print);


// let printbg = (e) => {
//     console.log(e.target.value);
//     let age = e.target.value;

//     if (info == it) {
//         document.getElementById("it")
//             .style.backgroundColor = "purple";

//     } else if (info == hos) {
//         document.getElementById("hos")
//             .style.color = "yallow";
//     }
// };
// document.getElementsByClassName("info").addEventListener("change", printbg);