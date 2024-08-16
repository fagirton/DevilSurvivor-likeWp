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
        document.querySelector("#panel-top").style.visibility = "visible";
        document.querySelector("#gray-cont").style.visibility = "visible";
        document.querySelector("#vines").classList.add("panel-overflow");
      }
    }
    if (properties.vinesposition) {
      let val = properties.vinesposition.value;
      switch (val) {
        case "n":
          console.log(val);
          document.querySelector("#vines").style.visibility = "hidden";
          break;
        case "l":
          console.log(val);
          document.querySelector("#vines").style.visibility = "visible";
          document.querySelector("#vines").classList.add("dl-corner-svg");
          document.querySelector("#vines").classList.remove("dr-corner-svg");
          document.querySelector("#vines").classList.add("mirror-svg");
          break;
        case "r":
          console.log(val);
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
  },
};
