document.querySelector(".search-form-btn-open").addEventListener("click", function() {
    document.querySelector(".search-form").classList.add("form__active");
    this.classList.add("active");
})
document.querySelector(".search-form-close").addEventListener("click", function() {
    let form = document.querySelector(".search-form");
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".search-form-btn-open").classList.remove("active")
});

document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".search-form-container")) {
        form.classList.remove("form__active");
        form.querySelector("input").value = "";
        document.querySelector(".search-form-btn-open").classList.remove("active")
    }
})