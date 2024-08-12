function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();

  let time = hh + ":" + mm;

  document.getElementById("clock-text-div").innerText = time;
  document.getElementById("day-text-div").innerText = day;
  document.getElementById("month-text-div").innerText = convertMonth(month);
  let t = setTimeout(function () {
    currentTime();
  }, (60 - ss) * 1000);
}

currentTime();

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
