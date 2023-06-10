let input = document.querySelector(".content__input"),
  lists = document.querySelector(".output__lists");

input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    const li = document.createElement("li"),
      p = document.createElement("p"),
      deleteBtn = document.createElement("button");

    li.className = "output__list";
    p.className = "output__text";
    p.innerText = input.value;
    input.value = "";
    deleteBtn.className = "output__btn-delete";
    deleteBtn.innerHTML = `<img src="../img/delete.svg" alt="delete">`;
    lists.appendChild(li);
    li.appendChild(p);
    li.appendChild(deleteBtn);

    p.addEventListener("click", () => {
      if (!p.classList.contains("output__text-done")) {
        p.classList.add("output__text-done");
      } else {
        p.classList.remove("output__text-done");
      }
    });
    deleteBtn.addEventListener("click", () => {
      console.log("delete");
      lists.removeChild(li);
    });
  }
});
