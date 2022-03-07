var test = document.createElement("div");
test.className = "hidden d-none";

document.head.appendChild(test);
var cssLoaded = window.getComputedStyle(test).display === "none";
document.head.removeChild(test);

if (!cssLoaded) {
  var link = document.createElement("link");
  var link2 = document.createElement("link");

  link.type = link2.type = "text/css";
  link.rel = link2.type = "stylesheet";
  link.href = "/assets/bootstrap-5.1.3-dist/css/bootstrap.min.css";
  link2.href = "/assets/css/style.css";

  document.head.appendChild(link);
  document.head.appendChild(link2);

  document.write(
    '<script src="/assets/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>'
  );
}

// Still figuring things out to js fallback
// Bootstrap v5 checking method turns out not the same as v3-v4

// if (typeof document.querySelectorAll(".fn.modal") === "undefined") {
//   document.write(
//     '<script src="./assets/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>'
//   );
// }
