console.log("Сайт кафедри завантажено успішно!");

// Бургер-меню: кнопка відкриває/закриває головне меню (клас "show")
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu");
    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
});
