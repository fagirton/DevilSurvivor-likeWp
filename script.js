var timer_update_mode = "minute"; // Sets time interval to update time.
// Use 'second' for Wallpaper Engine, bc it pauses any timeouts (probably whole JS thread) when wallpaper not visible
// If you have HTML wrapper for wallpapers where it doesnt stop JS thread, you can use 'minute'
// Probably it should have 100 ms mode too (prevents visual popins on clock)

var ticks;

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();

  let time = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm);

  document.getElementById("clock-text-div").innerText = time;
  document.getElementById("day-text-div").innerText = day;
  document.getElementById("month-text-div").innerText = convertMonth(month);

  setTimerMode(ss);

  let t = setTimeout(function () {
    currentTime();
  }, ticks);
}

currentTime();

function setTimerMode(ss) {
  switch (timer_update_mode) {
    case "minute":
      ticks = (60 - ss) * 1000;
      break;
    case "second":
      ticks = 1000;
      break;
    default:
      ticks = "100";
      break;
  }
}

function convertMonth(month) {
  switch (month) {
    case 0:
      return "JANUAR";
    case 1:
      return "FEBRUA";
    case 2:
      return "MARCH";
    case 3:
      return "APRIL";
    case 4:
      return "MAY";
    case 5:
      return "JUNE";
    case 6:
      return "JULY";
    case 7:
      return "AUGUST";
    case 8:
      return "SEPTEM";
    case 9:
      return "OCTOBR";
    case 10:
      return "NOVEMB";

    case 11:
      return "DECEMB";
      break;
    default:
      break;
  }
}
