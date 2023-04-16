
const bill_amount = document.querySelector("#bill-amount")
let total_bill = 0;   ///////////
const bill_value = () => {
    total_bill = bill_amount.value;
    console.log(total_bill)
    calculatTipPerPerson();

}


const people_num = document.querySelector("#people_num")

let total_people = 0;///////////////////
const total_person = () => {
    total_people = people_num.value;
    console.log(total_people)
    calculatTipPerPerson();

}




let tip_value = 0;/////////////////////
const btns = document.querySelectorAll(".percent button")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tip_value = btn.value
        removeSelectedclass();
        btn.classList.add("selected");
        calculatTipPerPerson();

    })
})
//removing selected class of btns when either of conditio satisfy
const removeSelectedclass = () => {
    btns.forEach((btn) => {
        btn.classList.remove("selected");

    })
}
const input = document.querySelector(".percent input")

input.addEventListener("input", () => {
    tip_value = parseInt(input.value);
    removeSelectedclass();

    calculatTipPerPerson();
})
///////////////////////////////////////////////////////////////////////////////////
//calculating per person bill

let tip_per_person = 0;
let Per_Person_bill_after_tip = 0;
const calculatTipPerPerson = () => {
    if (total_bill && total_people && tip_value) {
        let bill_per_person = (total_bill / total_people).toFixed(2);
        tip_per_person = ((tip_value / 100) * bill_per_person).toFixed(2);
        Per_Person_bill_after_tip = (parseFloat(bill_per_person) + parseFloat(tip_per_person)).toFixed(2);

        console.log(bill_per_person)
        console.log(tip_per_person + "tip .per .pweson")
        console.log(Per_Person_bill_after_tip)
    }

    changeOutputSection(tip_per_person, Per_Person_bill_after_tip);


}

const TipPerPerson = document.getElementById("tip_person")
const totalPerPerson = document.getElementById("total_person")

const changeOutputSection = (a, b) => {

    TipPerPerson.innerText = a;
    totalPerPerson.innerText = b;
    console.log("change value")
}

const reset = () => {
    TipPerPerson.innerText = 0;
    totalPerPerson.innerText = 0;
    removeSelectedclass();
    bill_amount.value = 0;
    people_num.value = 0;
    input.value = 0;

}