// // ここからコードを書きます🤗
// // alert("授業の内容です");

// // console.log("はじめてのジャバスクリプト")
// // console.log(23 + 5)
// // console.log(2000 - 1800)
// // console.log("18 + 5")

// // 変数の勉強

// // const a ="言問茶屋"
// // const ten = 10


// // console.log(a)
// // const tashizan = ten + ten
// // const kakezan = ten * ten
// // console.log(tashizan)
// // console.log(kakezan)
// // console.log(tashizan*tashizan)

// // // if文の勉強

// // const aa = 1;

// // if(aa === 1){
// // console.log("大吉") ;  
// // } else if(aa === 2) {
// //     console.log("中吉")
// // } else if(aa === 3);{
// //    console.log("小吉");
// // } else {
// // console.log("吉")
// // }
// // ()

// // 問題

// // const point = 90 ;

// // if(point >= 80){
// //     console.log("素晴らしい！おめでとう")
// // }else{
// //     console.log("もっと頑張りましょう")
// // }

// // const random = Moth.floor(Moth.random()　+　5);
// // console.log(random,"ランダム数字")

// // if(random === 0){
// // console.log("大吉")
// // }　else{
// // console.log("中吉")

// // }

// // const random = Math.floor( Math.random() * 5)





// if(random ===1){
// console.log("大吉");
// } else if (random === 2);{
//     console.log("中吉");
// } else if (random === 3) {      
//         console.log("中吉");{
// } else if ("末")
// }



// $("h1").on("click", function () {
//     $("h1").css("color", "red");
//   });

$.getJSON("php/instagram.php", function(instagramData){    const galleryData = instagramData["media"]["data"];    let photos = '<ul class="instagram-gallery__list">';    for (let i = 0; i < galleryData.length; i++) {      if (galleryData[i]["thumbnail_url"]) {        photos += '<li class="instagram-gallery__item"><a href="' + galleryData[i].permalink + '" target="_blank" rel="noopener"><img src="' + galleryData[i].thumbnail_url + '" alt="' + galleryData[i].caption + '"></a></li>';      } else if(galleryData[i]["media_url"].indexOf("video") == -1){        photos += '<li class="instagram-gallery__item"><a href="' + galleryData[i].permalink + '" target="_blank" rel="noopener"><img src="' + galleryData[i].media_url + '" alt="' + galleryData[i].caption + '"></a></li>';      }    };    photos += "</ul>";    $(".instagram-gallery").append(photos);  });
  