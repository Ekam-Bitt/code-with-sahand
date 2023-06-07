const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");
const dobEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

function calcAge() {
  const name = nameEl.value;
  const dob = new Date(dobEl.value);
  const today = new Date();
  const ageInYears = today.getFullYear() - dob.getFullYear();
  resultEl.innerHTML = `Hey <b><i>${name}</i></b>, your age is <b>${ageInYears}</b> years!!!`;
}

btnEl.addEventListener("click", calcAge);
