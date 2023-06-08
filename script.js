const toggle = () => {
    const nav = document.getElementById("navbar");
    const header  = document.getElementById("headerToggle");
    nav.className === "navbar" ? nav.className += " responsive" : nav.className = "navbar";
    header.className === "headerToggle" ? header.className += " responsive" : header.className = "headerToggle";

    console.log("done")
};
