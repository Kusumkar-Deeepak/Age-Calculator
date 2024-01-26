const currDateElement = document.getElementById("currDate");
const dateOfBirthElement = document.querySelector("#DOB");
const calcAgeButton = document.getElementById("CalcAge");
const ageElement = document.getElementById("age");

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
const indianDateFormat = today.toLocaleDateString('en-IN', options);
currDateElement.innerText = `Today's Date is: ${indianDateFormat}`;

calcAgeButton.addEventListener("click", () => {
    const birthDate = new Date(dateOfBirthElement.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthsDifference = today.getMonth() - birthDate.getMonth();

    if (monthsDifference < 0 || (monthsDifference === 0 && today.getDate() < birthDate.getDate())) {
        ageElement.innerText = `You are ${age - 1} years old.`;
    } else {
        ageElement.innerText = `You are ${age} years old.`;
    }
});
