function exibeSubtitulos(id) {
    if(!document.querySelector("#sub-theme-por").classList.contains("hidden")) {
        document.querySelector("#sub-theme-por").classList.toggle("hidden");
    }
    if(!document.querySelector("#sub-theme-mat").classList.contains("hidden")) {
        document.querySelector("#sub-theme-mat").classList.toggle("hidden");
    }

    document.querySelector(id).classList.toggle("hidden");
}