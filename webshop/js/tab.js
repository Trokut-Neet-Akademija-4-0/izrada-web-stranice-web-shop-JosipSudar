document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    document.title = "Come back :(";
  } else {
    document.title = document.querySelector("title").textContent;
  }
});
