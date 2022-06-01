const nameInput = document.querySelector(".name-item");

const btnAdd = document.querySelector(".add-name");

const nameListContainer = document.querySelector(".nameList");

const nameList = [];

const printItems = () => {
    nameListContainer.innerHTML = "";
    nameList.forEach((item) => {
        nameListContainer.innerHTML += `<li class="list-group-item">${item}</li>`;
    });
};

printItems();

const addItem = () => {
    console.log(nameInput.value);
    nameList.push(nameInput.value);
    nameInput.value = "";
    printItems();
};

btnAdd.addEventListener("click", addItem);

const coloredInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 5) {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "green";
    }
};

nameInput.addEventListener("input", coloredInput);