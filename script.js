const toggle = () => {
    const nav = document.getElementById("navbar");
    const header = document.getElementById("header-toggle");

    if (nav.className === "navbar") {
        $(nav).addClass("responsive")
    } else {
        $(nav).removeClass("responsive")
    }

    if (header.className === "header-toggle") {
        $(header).addClass("responsive")
    } else {
        $(header).removeClass("responsive")
    }
};
