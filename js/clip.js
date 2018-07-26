document.writeln(
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>'
);
var button = document.createElement("button");
button.setAttribute("id", "btn_asdfasdf_dafsdf_deaagd_de");
// button.style.visibility = "hidden";
// button.style.position = "fixed";
// button.style.top = "-100px";
button.innerHTML = "点我复制";

console.log(6, button);
var scr = document.getElementsByTagName("script")[0];
document.body.insertBefore(button, scr);

document.body.onload = function() {
  console.log(this);
  var clipboard = new ClipboardJS("#btn_asdfasdf_dafsdf_deaagd_de", {
    text: function() {
      return "to be or not to be2";
    }
  });

  clipboard.on("success", function(e) {
    console.log(e);
  });

  clipboard.on("error", function(e) {
    console.log(e);
  });
  document.getElementById("btn_asdfasdf_dafsdf_deaagd_de").click();
};
