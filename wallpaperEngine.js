timer_update_mode = 'second'

window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.enabletopbar) {
      let val = properties.enabletopbar.value;
      if (!val) {
        document.querySelector("#top-panel").style.visibility = "hidden";
        document.querySelector("#gray-cont").style.visibility = "hidden";
        document.querySelector("#vines").classList.remove("panel-overflow");
      } else {
        document.querySelector("#top-panel").style.visibility = "visible";
        document.querySelector("#gray-cont").style.visibility = "visible";
        document.querySelector("#vines").classList.add("panel-overflow");
      }
    }
    if (properties.vinesposition) {
      let val = properties.vinesposition.value;
      switch (val) {
        case "n":
          document.querySelector("#vines").style.visibility = "hidden";
          break;
        case "l":
          document.querySelector("#vines").style.visibility = "visible";
          document.querySelector("#vines").classList.add("dl-corner-svg");
          document.querySelector("#vines").classList.remove("dr-corner-svg");
          document.querySelector("#vines").classList.add("mirror-svg");
          break;
        case "r":
          document.querySelector("#vines").style.visibility = "visible";
          document.querySelector("#vines").classList.add("dr-corner-svg");
          document.querySelector("#vines").classList.remove("dl-corner-svg");
          document.querySelector("#vines").classList.remove("mirror-svg");
          break;
      }
    }
    if (properties.menugridposition) {
      let val = properties.menugridposition.value;
      switch (val) {
        case "n":
          document.querySelector("#shelf").style.visibility = "hidden";
          break;
        case "l":
          document.querySelector("#shelf").style.visibility = "visible";
          document.querySelector("#shelf").classList.add("shelf-left");
          document.querySelector("#shelf").classList.remove("shelf-right");
          break;
        case "r":
          document.querySelector("#shelf").style.visibility = "visible";
          document.querySelector("#shelf").classList.add("shelf-right");
          document.querySelector("#shelf").classList.remove("shelf-left");
          break;
      }
    }
    if (properties.citymirror) {
      let val = properties.citymirror.value;
      switch (val) {
        case "n":
          document.querySelector("#city").style.visibility = "hidden";
          break;
        case "nm":
          document.querySelector("#city").style.visibility = "visible";
          document.querySelector("#city").classList.add("mirror-svg");
          break;
        case "m":
          document.querySelector("#city").style.visibility = "visible";
          document.querySelector("#city").classList.remove("mirror-svg");
          break;
      }
    }
    if (properties.heroliningposition) {
      let val = properties.heroliningposition.value;
      switch (val) {
        case "n":
          document.querySelector("#hero").style.visibility = "hidden";
          break;
        case "l":
          document.querySelector("#hero").style.visibility = "visible";
          document.querySelector("#hero").classList.add("left-align-svg");
          document.querySelector("#hero").classList.remove("right-align-svg");
          document.querySelector("#hero").classList.add("mirror-svg");
          break;
        case "r":
          document.querySelector("#hero").style.visibility = "visible";
          document.querySelector("#hero").classList.remove("left-align-svg");
          document.querySelector("#hero").classList.add("right-align-svg");
          document.querySelector("#hero").classList.remove("mirror-svg");
          break;
      }
    }
    if (properties.logoposition) {
      let val = properties.logoposition.value;
      switch (val) {
        case "l":
          document.querySelector("#logo").classList.add("left-logo");
          document.querySelector("#logo").classList.remove("right-logo");
          break;
        case "r":
          document.querySelector("#logo").classList.remove("left-logo");
          document.querySelector("#logo").classList.add("right-logo");
          break;
      }
    }
    if (properties.logostyle) {
      let val = properties.logostyle.value;
      switch (val) {
        case "d":
          document.querySelector("#logo").style.visibility = "hidden";
          break;
        case "n":
          document.querySelector("#logo").style.visibility = "visible";
          document.querySelector("#logo").src = "./assets/Devil_Survivor_logo.webp";
          break;
        case "o":
          document.querySelector("#logo").style.visibility = "visible";
          document.querySelector("#logo").src = "./assets/Devil_Survivor_Overclocked_logo.webp";
          break;
      }
    }
  },
};
