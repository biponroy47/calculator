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

  let sequence = "";

  const allClear = () => (sequence = "");
  const display = () => (buttons[1].innerHTML = sequence);

  buttons[0].addEventListener("click", () => {
    allClear();
    display();
  });

  buttons[2].addEventListener("click", () => {
    sequence += "1";
    display();
  });

  buttons[3].addEventListener("click", () => {
    sequence += "2";
    display();
  });

  buttons[4].addEventListener("click", () => {
    sequence += "3";
    display();
  });

  buttons[5].addEventListener("click", () => {
    sequence += "+";
    display();
  });

  buttons[6].addEventListener("click", () => {
    sequence += "4";
    display();
  });

  buttons[7].addEventListener("click", () => {
    sequence += "5";
    display();
  });

  buttons[8].addEventListener("click", () => {
    sequence += "6";
    display();
  });

  buttons[9].addEventListener("click", () => {
    sequence += "-";
    display();
  });

  buttons[10].addEventListener("click", () => {
    sequence += "7";
    display();
  });

  buttons[11].addEventListener("click", () => {
    sequence += "8";
    display();
  });

  buttons[12].addEventListener("click", () => {
    sequence += "9";
    display();
  });

  buttons[13].addEventListener("click", () => {
    sequence += "*";
    display();
  });

  buttons[14].addEventListener("click", () => {
    sequence += "0";
    display();
  });

  buttons[15].addEventListener("click", () => {
    sequence += ".";
    display();
  });

  buttons[16].addEventListener("click", () => {
    sequence = eval(sequence);
    display();
  });

  buttons[17].addEventListener("click", () => {
    sequence += "/";
    display();
  });
});
