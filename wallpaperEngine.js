window.wallpaperPropertyListener = {
  applyUserProperties: function (properties) {
    if (properties.enabletopbar) {
      let val = properties.enabletopbar.value;
      if (!val) {
        for (const obj in document.getElementsByClassName("panel-top")) {
          obj.style.display = "none";
        }
        for (const obj in document.getElementsByClassName("gray-cont")) {
          obj.style.display = "none";
        }
      } else {
        for (const obj in document.getElementsByClassName("panel-top")) {
          obj.style.display = "flex";
        }
        for (const obj in document.getElementsByClassName("gray-cont")) {
          obj.style.display = "block";
        }
      }
    }
  },
};
