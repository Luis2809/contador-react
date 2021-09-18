if (navigator.serviceWorker) {
  navigator.serviceWorker.register("./sw.js");
}

/**
ALTERNATIVA
if ("serviceWorker" in navigator) {
    console.log(Si existe)
  }
**/
