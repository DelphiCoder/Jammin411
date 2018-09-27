$(document).ready(function () {
    AddHighlightToNav();
});

function AddHighlightToNav() {
    //remove the active state from all navigation links so we can highlight the right one
    $(".nav-item").removeClass("active");
    $(".nav-link").removeClass("text-primary").addClass("text-info");

    var url = document.URL.toLowerCase();

    if (url.indexOf("resume") > -1) {
        $("#linkResume").removeClass("text-info").addClass("text-secondary");

        return;
    } //end if

    if (url.indexOf("favorite") > -1) {
        $("#linkFavorites").removeClass("text-info").addClass("text-secondary");

        return;
    } //end if

    if (url.indexOf("contact") > -1) {
        $("#linkContact").removeClass("text-info").addClass("text-secondary");

        return;
    } //end if

    if (url.indexOf("example") > -1) {
        $("#linkExamples").removeClass("text-info").addClass("text-secondary");

        return;
    } //end if

    $("#linkHome").removeClass("text-info").addClass("text-secondary");
} //end AddHighlightToNav