const bgHeader = () => {
    const header = document.getElementById("header");
    // Add a class if the bottom offset is greater than 1 of the viewport
    this.scrollY >= 1
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);