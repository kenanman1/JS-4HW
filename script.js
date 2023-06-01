function update() {
    let all = document.querySelectorAll("input[type=checkbox]");
    for (let a of all) {
        a.addEventListener("click", function () {
            const k = this.previousElementSibling;
            if (this.checked) {
                k.style.textDecoration = "line-through";
            } else {
                k.style.textDecoration = "none";
            }
        });
    }
}
function updateDelete(){
    let deleteBtn = document.querySelectorAll("#delete");
    for(let dlt of deleteBtn){
        dlt.addEventListener("click",function(){
            const l = this.parentElement;
            l.remove();
        })
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    const div = document.createElement("div");
    const nav = document.querySelector("nav");
    const check = document.createElement("input");
    const deleteBtn = document.createElement("input");
    const span = document.createElement("span");
    deleteBtn.type = "button";
    deleteBtn.value = "delete";
    deleteBtn.classList = "deleteBtn"
    deleteBtn.id = "delete";
    check.type = "checkbox";
    const text = document.querySelector("#inp");
    span.textContent = text.value;
    text.value = "";
    div.appendChild(span);
    div.appendChild(check);
    div.appendChild(deleteBtn);
    nav.appendChild(div);
    update();
    updateDelete();
});

