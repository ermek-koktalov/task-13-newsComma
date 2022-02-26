document.getElementById("get-news").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "news.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let news = this.response;
      newsComma = news.split(",");
      let output = "";
      newsComma.forEach((item) => {
        //console.log(item);
        output += `<p>${item}</p>`;
      });
      document.querySelector(".output").innerHTML = output;
    }
  };

  xhr.send();
}
