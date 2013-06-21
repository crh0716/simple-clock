window.addEventListener('load', function() {
  var dateText = document.getElementById('dateText');
  var timeText = document.getElementById('timeText');

  var update = function () {
    var now = new Date(Date.now());
    dateText.textContent =
      now.getFullYear() + ' ' +
      padding(2, (now.getMonth() + 1)) + ' ' +
      (now.getDate());
    timeText.textContent =
      now.getHours() + ':' +
      padding(2, now.getMinutes()) + ':' +
      padding(2, now.getSeconds());
  };

  var padding = function (count, str) {
    var str = str.toString();
    return "00000000000".substr(0, Math.max(0, count - str.length)).concat(str);
  };
  
  setInterval(update, 1000);
});