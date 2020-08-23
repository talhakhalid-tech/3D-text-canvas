window.onload = function () {
  //definitions
  const canvas = document.getElementById("lab5-canvas");
  canvas.width = 900;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  let text = "This Is 3D Text";
  context.font = "normal 600 56px monospace";

  // context.fillStyle = "lightgrey";
  // context.fillText(text, 200 - 4, 300 - 4);

  // context.fillStyle = "lightgrey";
  // context.fillText(text, 200 - 3, 300 - 3);

  // context.fillStyle = "lightgrey";
  // context.fillText(text, 200 - 2, 300 - 2);

  // context.fillStyle = "lightgrey";
  // context.fillText(text, 200 - 1, 300 - 1);

  context.fillStyle = "lightgrey";
  for (let i = 1; i < 5; i++) {
    context.fillText(text, 200 - i, 300 - i);
  }

  context.fillStyle = "grey";
  context.fillText(text, 200, 300);
};
