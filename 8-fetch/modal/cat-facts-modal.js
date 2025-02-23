window.addEventListener("load", (event) => {
    const Infos = document.getElementsByClassName("more-info")

    for (let i = 0; i < Infos.length; i++) {
        Infos[i].addEventListener("click", (event) => {
            Modal();
        })
    }
})

function Modal() {
    const Modal = document.getElementsByClassName("modal")[0];
    Modal.style.display = "inline-block"
}
function CloseModal() {
    const Modal = document.getElementsByClassName("modal")[0];
    Modal.style.display = "none";
}