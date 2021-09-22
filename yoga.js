var title = ["1. Vajrasana",
            "2. Bhadrasana",
            "3. Bhujangasana",
            "4. Ardha Matsyendrasana",
            "5. Shavasana",
            "6. Matsyasana",
            "7.Paschimothanasana",
            "8. Trikonasana",
            "9. Utkatasana",
            "10. Balasana"];

document.getElementById("header").innerHTML = title[0];
var j = 0;

var images = ["YogaImages/1-Vajrasana.jpg",
                "YogaImages/2-Bhadrasana.jpg",
                "YogaImages/3-Bhujangasana.jpg",
                "YogaImages/4-Ardha Matsendrasana.jpg",
                "YogaImages/5-Shavasana.jpg",
                "YogaImages/6-Matsyasana.jpg",
                "YogaImages/7-Paschimothanasana.jpeg",
                "YogaImages/8-Trikonasana.jpg",
                "YogaImages/9-Utkatasana.jpg",
                "YogaImages/10-Balasana.png"];

var time = 1500;
var i = 0;
var x;
                               
var uses = [
  "-- helps regulate blood circulation in pelvic area and aids in digestion",
  "-- body alignment is improved",
  "-- therapeutic for asthma, stretching, improves mensual irregularities",
  "-- increases flexibility and cleanses internal orgnas",
  "-- reducing anxiety and promoting muscle relaxation",
  "-- strengthen muscles and iimproves posture",
  "-- helps relieving the symptoms of menopause and menstural discomfort",
  "-- stimulates function of abdominal organs along with reducing stress",
  "-- stimulates the heart, diaphragm and abdominal organs",
  "-- reduces stress and fatigue",
];

document.getElementById("benefits").innerHTML = "Benefits: " + uses[0];
var k = 0;

var start = document.getElementById("Play");
var stop = document.getElementById("Pause");

function nextImage() {
  if (j < title.length - 1) {
    j++;
  } else {
    j = 0;
  }
  document.getElementById("header").innerHTML = title[j];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  document.getElementById("imageSlider").src = images[i];
  
  if (k < uses.length - 1) {
    k++;
  } else {
    k = 0;
  }
  document.getElementById("benefits").innerHTML = "Benefits: " + uses[k];
}

function preImage() {
  if (j > 0) {
    --j;
  } else {
    j = title.length - 1;
  }
  document.getElementById("header").innerHTML = title[j];

  if (k > 0) {
    --k;
  } else {
    k = uses.length - 1;
  }
  document.getElementById("benefits").innerHTML = "Benefits: " + uses[k];

  if (i > 0) {
    --i;
  } else {
    i = images.length - 1;
  }
  document.getElementById("imageSlider").src = images[i];
}

function changeImage() {
  stop.style.visibility = "visible";
  start.style.visibility = "hidden";

  x = setInterval(function () {
    nextImage();
  }, time);
}

function stopImage() {
  stop.style.visibility = "hidden";
  start.style.visibility = "visible";
  clearInterval(x);
}

