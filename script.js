window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  //buttons
  //0 = AC
  //1 = display
  //2 = 1
  //3 = 2
  //4 = 3
  //5 = +
  //6 = 4
  //7 = 5
  //8 = 6
  //9 = -
  //10 = 7
  //11 = 8
  //12 = 9
  //13 = x
  //14 = 0
  //15 = .
  //16 = =
  //17 = ÷

  const sequence = "";
  const result = "0";

  const display = (sequence) => {
    buttons[1].textContent = sequence;
  };

  const allClear = (sequence, result) => {
    sequence = "";
    result = "0";
  };
});
