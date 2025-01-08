const add_btn = document.querySelector("#add_btn") as HTMLButtonElement;
const subtract_btn = document.querySelector("#subtract_btn") as HTMLButtonElement;
const counter = document.querySelector("#counter") as HTMLElement;

let count = 0

if (add_btn && subtract_btn && counter) {
    add_btn.addEventListener("click", () => {
        count++
        counter.textContent = count.toString()
    })
    subtract_btn.addEventListener("click", () => {
        if (count > 0) {
            count--   
        }
        counter.textContent = count.toString()
    })
}