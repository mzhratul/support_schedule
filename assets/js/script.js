var calendar = document.getElementById("calendar");
window.setInterval("reloadIFrame();", 30000);
function reloadIFrame() {
  calendar.src = calendar.src;
}
