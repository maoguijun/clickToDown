var clipboard = new ClipboardJS("body", {
  text: function() {
    return "FCXLbt86lp";
  }
});

clipboard.on("success", function(e) {
  console.log(e);
});

clipboard.on("error", function(e) {
  console.log(e);
});
// console.log(document.querySelector(".btn"));
// document.querySelector(".btn").click();
