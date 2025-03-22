let currdeg = 0;  // 現在の回転角度

const items = document.querySelectorAll(".item");
const totalItems = items.length;
const angle = 360 / totalItems; // 各アイテムの角度を均等に分割

// 各画像の初期配置を設定
items.forEach((item, index) => {
    const rotation = angle * index; // 各アイテムの回転角度
    item.style.transform = `rotateY(${rotation}deg) translateZ(400px)`; // 250px → 300px に変更
});

// nextボタン
document.querySelector(".next").addEventListener("click", function() {
    rotate("n");  // 回転する
});

// prevボタン
document.querySelector(".prev").addEventListener("click", function() {
    rotate("p");  // 回転する
});

// 回転処理
function rotate(direction) {
    const step = 360 / totalItems; // 一回あたりの回転角度
    if (direction === "n") {
        currdeg -= step; // 次の画像の角度
    }
    if (direction === "p") {
        currdeg += step; // 前の画像の角度
    }

    // GSAPで回転させる
    gsap.to(".carousel-container", {
        rotationY: currdeg,
        duration: 0.6,
        ease: "power2.inOut"
    });
}
