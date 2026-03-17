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

  localStorage.setItem(inputValue, inputValue);

  input.value = ""
}






  linkList.addEventListener("click", onLinkList);

  function onLinkList(ev) {
    if (ev.target.nodeName !== "BUTTON") {
      // its not a button
      return;
    }
    const activeBtn = document.querySelector('.bookmarkList.item')
    if (activeBtn) {
    activeBtn.classList.remove('active')
    }
    let selectColor = ev.target.dataset.color
    text.textContent = `Selected color: - ${selectColor}`
    text.style.color = selectColor
    ev.target.classList.add('active')
  }


  function populateData() {
    const data = localStorage.getItem(inputValue);
    if (data) {
      const parseData = JSON.parse(data);
      input.value = parseData.name;
    }
  }

  populateData()
