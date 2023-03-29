function tercihsecim() {
  var yon = document.getElementById("yon").value;
  if (yon == "X") {
    document.getElementById("li_normalfiyat").style.cssText = "display";
    document.getElementById("li_zamlifiyat").style.display = "none";
    document.getElementById("li_zamorani").style.cssText = "display";
  } else if (yon == "Z") {
    document.getElementById("li_normalfiyat").style.display = "none";
    document.getElementById("li_zamlifiyat").style.cssText = "display";
    document.getElementById("li_zamorani").style.cssText = "display";
  } else if (yon == "Y") {
    document.getElementById("li_normalfiyat").style.cssText = "display";
    document.getElementById("li_zamlifiyat").style.cssText = "display";
    document.getElementById("li_zamorani").style.display = "none";
  }
}
function formatTL(num) {
  let p = num.toFixed(2).split(".");
  return (
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num == "-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
      }, "") +
    "," +
    p[1] +
    " TL"
  );
}

function hesapla() {
  let normalfiyat = parseFloat(document.getElementById("normalfiyat").value);
  let zamlifiyat = parseFloat(document.getElementById("zamlifiyat").value);
  let zamorani = parseFloat(document.getElementById("zamorani").value);
  var yon = document.getElementById("yon").value;

  //Zamlı Fiyat Ba
  if (yon == "X") {
    if (normalfiyat > 0) {
      if (zamorani > 0) {
        if (normalfiyat && zamorani) {
          document.getElementById("uyarimsg").style.display = "none";
          document.getElementById("sonuc").style.display = "block";
          let ZamTutari = normalfiyat * (zamorani / 100);
          let ZamliFiyatx = ZamTutari + normalfiyat;
          document.getElementById("sonuc").innerHTML = `
<legend>Zamlı Fiyat Hesaplama Sonuçları</legend>
<b style="font-weight: 100;">Normal Fiyat: </b> ${formatTL(normalfiyat)}<br>
<b style="font-weight: 100;">Zam Tutarı: </b> ${formatTL(ZamTutari)}<br>
<b style="font-weight: 100;">Zamlı Fiyat: </b> ${formatTL(ZamliFiyatx)}<br>
<b style="font-weight: 100;">Zam Oranı: </b> %${zamorani}<br>`;
        } else {
          document.getElementById("uyarimsg").style.display = "block";
          document.getElementById("uyarimsg").innerText =
            "Lütfen tüm alanları doldurun";
        }
      } else {
        document.getElementById("uyarimsg").style.display = "block";
        document.getElementById("uyarimsg").innerText =
          "Zam Oranı %0 dan büyük olmalı";
      }
    } else {
      document.getElementById("uyarimsg").style.display = "block";
      document.getElementById("uyarimsg").innerText =
        "Normal Fiyat 0 dan büyük olmalı";
    }
  }
  //Zamlı Fiyat Bi

  //Normal Fiyat Ba
  else if (yon == "Z") {
    if (zamlifiyat > 0) {
      if (zamorani > 0) {
        if (zamlifiyat && zamorani) {
          document.getElementById("sonuc").style.display = "block";
          document.getElementById("uyarimsg").style.display = "none";
          let normalfiyat = zamlifiyat / (1 + zamorani / 100);
          let ZamTutari = zamlifiyat - normalfiyat;
          document.getElementById("sonuc").innerHTML = `
<legend>Normal Fiyat Hesaplama Sonuçları</legend>
<b style="font-weight: 100;">Normal Fiyat: </b> ${formatTL(normalfiyat)}<br>
<b style="font-weight: 100;">Zam Tutarı: </b> ${formatTL(ZamTutari)}<br>
<b style="font-weight: 100;">Zamlı Fiyat: </b> ${formatTL(zamlifiyat)}<br>
<b style="font-weight: 100;">Zam Oranı: </b> %${zamorani}<br>`;
        } else {
          document.getElementById("uyarimsg").style.display = "block";
          document.getElementById("uyarimsg").innerText =
            "Lütfen tüm alanları doldurun";
        }
      } else {
        document.getElementById("uyarimsg").style.display = "block";
        document.getElementById("uyarimsg").innerText =
          "Zam Oranı %0 dan büyük olmalı";
      }
    } else {
      document.getElementById("uyarimsg").style.display = "block";
      document.getElementById("uyarimsg").innerText =
        "Zamlı Fiyat 0 dan büyük olmalı";
    }
  }
  //Normal Fiyat Bi

  //Zam Oranı Ba
  else if (yon == "Y") {
    if (normalfiyat > 0) {
      if (zamlifiyat > 0) {
        if (normalfiyat && zamlifiyat) {
          if (normalfiyat < zamlifiyat) {
            document.getElementById("sonuc").style.display = "block";
            document.getElementById("uyarimsg").style.display = "none";
            let ZamTutari = zamlifiyat - normalfiyat;
            let zamorani = (zamlifiyat / normalfiyat) * 100 - 100;
            document.getElementById("sonuc").innerHTML = `
<legend>Zam Oranı Hesaplama Sonuçları</legend>
<b style="font-weight: 100;">Normal Fiyat: </b> ${formatTL(normalfiyat)}<br>
<b style="font-weight: 100;">Zam Tutarı: </b> ${formatTL(ZamTutari)}<br>
<b style="font-weight: 100;">Zamlı Fiyat: </b> ${formatTL(zamlifiyat)}<br>
<b style="font-weight: 100;">Zam Oranı: </b> %${zamorani}<br>`;
          } else {
            document.getElementById("uyarimsg").style.display = "block";
            document.getElementById("uyarimsg").innerText =
              "Lütfen geçerli bir zamlı fiyat giriniz. Zamlı fiyat normal fiyattan büyük veya eşit olmalıdır.";
          }
        } else {
          document.getElementById("uyarimsg").style.display = "block";
          document.getElementById("uyarimsg").innerText =
            "Lütfen tüm alanları doldurun";
        }
      } else {
        document.getElementById("uyarimsg").style.display = "block";
        document.getElementById("uyarimsg").innerText =
          "Zamlı Fiyat 0 dan büyük olmalı";
      }
    } else {
      document.getElementById("uyarimsg").style.display = "block";
      document.getElementById("uyarimsg").innerText =
        "Normal Fiyat 0 dan büyük olmalı";
    }
  }
  //Zam Oranı Bi
}

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
