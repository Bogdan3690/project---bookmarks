const container = document.querySelector("#bookmarkApp")
const input = document.querySelector("#bookmarkInput")
const linkList = document.querySelector("#bookmarkList")
console.log(input);


  const inputValue = input.value;
container.addEventListener("submit", onSubmitForm);

function onSubmitForm(ev) {
  ev.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
  container.reset();
  localStorage.removeItem(inputValue);
}






function populateData() {
  const data = localStorage.getItem(inputValue);
  if (data) {
    const parseData = JSON.parse(data);
    textarea.value = parseData.message;
    input.value = parseData.name;
  }
}
