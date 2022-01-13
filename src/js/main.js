window.onload = function () {
  //   1 Icona
  var aCol = document.getElementsByClassName("icon-1");
  //   2 Icona
  var bCol = document.getElementsByClassName("icon-2");
  //   3 Icona
  var cCol = document.getElementsByClassName("icon-3");

  //   1 Pavadinimas
  var aColo = document.getElementsByClassName("pa-1");
  //   2 Pavadinimas
  var bColo = document.getElementsByClassName("pa-2");
  //   3 Pavadinimas
  var cColo = document.getElementsByClassName("pa-3");
  //   4 Pavadinimas
  var dColo = document.getElementsByClassName("pa-4");
  //   5 Pavadinimas
  var eColo = document.getElementsByClassName("pa-5");
  //   6 Pavadinimas
  var fColo = document.getElementsByClassName("pa-6");

  // 1 Icona

  // mouseover Funkcija
  document.getElementById("about-1").addEventListener("mouseover", function () {
    //   Background Spalva
    changeBackgroundColor(aCol, "#fff");
    //   Spalva
    changeColor(aCol, "#18d26e");
  });
  // mouseout Funkcija
  document.getElementById("about-1").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(aCol, "#fff");
    //   Background Spalva
    changeBackgroundColor(aCol, "#18d26e");
  });
  // 1 Icona Pabaiga

  // 2 Icona

  // mouseover Funkcija
  document.getElementById("about-2").addEventListener("mouseover", function () {
    //   Background Spalva
    changeBackgroundColor(bCol, "#fff");
    //   Spalva
    changeColor(bCol, "#18d26e");
  });
  // mouseout Funkcija
  document.getElementById("about-2").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(bCol, "#fff");
    //   Background Spalva
    changeBackgroundColor(bCol, "#18d26e");
  });
  // 2 Icona Pabaiga

  // 3 Icona
  // mouseover Funkcija
  document.getElementById("about-3").addEventListener("mouseover", function () {
    //   Background Spalva
    changeBackgroundColor(cCol, "#fff");
    //   Spalva
    changeColor(cCol, "#18d26e");
  });
  // mouseout Funkcija
  document.getElementById("about-3").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(cCol, "#fff");
    //   Background Spalva
    changeBackgroundColor(cCol, "#18d26e");
  });
  // 3 Icona Pabaiga

  // 1 Pavadinimas

  // mouseover Funkcija
  document
    .getElementById("itemas-1")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(aColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-1").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(aColo, "#111");
  });
  // 1 Pavadinimas Pabaiga

  // 2 Pavadinimas

  // mouseover Funkcija
  document
    .getElementById("itemas-2")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(bColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-2").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(bColo, "#111");
  });
  // 2 Pavadinimas Pabaiga

  // 3 Pavadinimas
  // mouseover Funkcija
  document
    .getElementById("itemas-3")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(cColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-3").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(cColo, "#111");
  });
  // 3 Pavadinimas Pabaiga

  // 4 Pavadinimas

  // mouseover Funkcija
  document
    .getElementById("itemas-4")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(dColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-4").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(dColo, "#111");
  });
  // 4 Pavadinimas Pabaiga

  // 5 Pavadinimas

  // mouseover Funkcija
  document
    .getElementById("itemas-5")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(eColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-5").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(eColo, "#111");
  });
  // 5 Pavadinimas Pabaiga

  // 6 Pavadinimas
  // mouseover Funkcija
  document
    .getElementById("itemas-6")
    .addEventListener("mouseover", function () {
      //   Spalva
      changeColor(fColo, "#18d26e");
    });
  // mouseout Funkcija
  document.getElementById("itemas-6").addEventListener("mouseout", function () {
    //   Spalva
    changeColor(fColo, "#111");
  });
  // 6 Pavadinimas Pabaiga
};
//   Funkcija Background Spalvos Keitimui
function changeBackgroundColor(col, color) {
  for (var i = 0, len = col.length; i < len; i++) {
    col[i].style["background-color"] = color;
  }
}
//   Funkcija Spalvos Keitimui
function changeColor(col, color) {
  for (var i = 0, len = col.length; i < len; i++) {
    col[i].style["color"] = color;
  }
}

//   Funkcija Spalvos Keitimui
function changeColor(colo, color) {
  for (var i = 0, len = colo.length; i < len; i++) {
    colo[i].style["color"] = color;
  }
}
