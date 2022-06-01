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
document.getElementById("age").addEventListener("input", printage);
document.getElementById("fname").addEventListener("input", printf);
document.getElementById("lname").addEventListener("input", printl);