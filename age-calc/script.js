const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");
const dobEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

function calcAge() {
  const name = nameEl.value;
  const dob = new Date(dobEl.value);
  const today = new Date();

  const ageInMilliseconds = today - dob;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  resultEl.innerHTML = `Hey <b><i>${name}</i></b>, your age is <b>${ageInYears}</b> years!!!`;
}

btnEl.addEventListener("click", calcAge);
