const img1= document.getElementById('site1');
const img2= document.getElementById('site2');
const img3= document.getElementById('site3');
const img4= document.getElementById('site4');

var clickcount = parseInt(localStorage.getItem('clickcount')) || 0;

function incrementClickCount() {
    clickcount++;
    localStorage.setItem('clickcount', clickcount.toString());
    window.location.href = "https://www.youtube.com/watch?v=QXkNeiNzDOU";
}

img1.addEventListener("click", function () {
    incrementClickCount();
    console.log("Toplam tıklama sayısı: " + clickcount);
});

img2.addEventListener("click", function () {
    incrementClickCount();
    console.log("Toplam tıklama sayısı: " + clickcount);
    window.location.href = "https://key-drop.com/?code=BURAKSASA";
});

img3.addEventListener("click", function () {
    incrementClickCount();
    console.log("Toplam tıklama sayısı: " + clickcount);
    window.location.href = "https://hellcase.com/fburaksasa";
});

img4.addEventListener("click", function () {
    incrementClickCount();
    console.log("Toplam tıklama sayısı: " + clickcount);
    window.location.href = "https://hellstore.me/r/buraksasa";
});
