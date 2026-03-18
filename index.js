const container = document.querySelector("#bookmarkApp");
const input = document.querySelector("#bookmarkInput");
const btn = document.querySelector("#addBookmarkBtn");
const linkList = document.querySelector("#bookmarkList");



btn.addEventListener("click", onClick);

function onClick(ev) {
  ev.preventDefault();

  const inputValue = input.value;
  console.log(inputValue);

  if (inputValue === "") return

  const item = document.createElement("li")
  item.textContent = inputValue;

  const closeBtn = document.createElement("button")
  closeBtn.textContent = "X"

  
  closeBtn.addEventListener('click', onCloseBtn)

  function onCloseBtn() {
    item.remove()
    localStorage.removeItem(inputValue)
  }

  item.appendChild(closeBtn)
  linkList.appendChild(item)

  input.value = ""
  localStorage.removeItem(inputValue);
}

input.addEventListener("input", () => {
  localStorage.setItem("inputValue", input.value);
});

function populateData() {
  linkList.innerHTML = "";

  input.value = localStorage.getItem("inputValue")

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
  if (key !== "inputValue") {

    const item = document.createElement("li");
    item.textContent = key;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";

    closeBtn.onclick = () => {
      item.remove();
      localStorage.removeItem(key);
    };

    item.appendChild(closeBtn);
    linkList.appendChild(item);
  }
}
}
  populateData()
