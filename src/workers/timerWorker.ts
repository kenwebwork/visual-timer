let intervalId: any = null;

self.onmessage = function (e) {
  const { command } = e.data;

  if (command === "start") {
    if (!intervalId) {
      intervalId = setInterval(() => {
        self.postMessage({ type: "tick" });
      }, 1000);
    }
  } else if (command === "stop") {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  } else if (command === "reset") {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    self.postMessage({ type: "reset" });
  }
};