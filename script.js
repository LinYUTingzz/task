let i = 0,
  imgArr = new Array();
imgArr[0] = "https://caring.ncyu.edu.tw/images/logo.png";
imgArr[1] =
  "https://megapx-assets.dcard.tw/images/7790a600-068d-4dea-8eee-e97aee26185e/orig.jpeg";
imgArr[2] =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IGPbRcasC0F-ed8y96NnJy2gxMqVyvrt3lytbd_jHbc9x13WbLzbnieFS7Hl_PeFb6w&usqp=CAU";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}