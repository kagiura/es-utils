import $ from "jquery";
import tippy, { createSingleton } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "../scss/style.scss";
import "normalize.css";
import Parallax from "parallax-js";
const feather = require("feather-icons");

$(() => {
    $(".frame__topleft").click(() => {
        $("body").toggleClass("fine");
    });

    var parallaxInstance = new Parallax($(".background").get(0), {
        frictionX: 1,
        frictionY: 1
    });
    console.log(parallaxInstance);
});
