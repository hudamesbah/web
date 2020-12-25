// $("section").animate({
// width:"100%"
// },2000)
// $("section").animate({
//   height:"100vh"
//   },2000,function(){
//     $("h1").fadeIn(1000,
//       function(){
//         $(".item").slideDown(1000)
//       })
//   });
// $(".btn").click(function(){
//   // 
//   $(".huda").fadeOut(2000);
//   $(".huda1").fadeOut(2000).fadeIn(2000).slideUp(2000);
//   $(".huda2").fadeOut(2000);
// })
// $("section").animate({
//   width:"100%"

// },2000,function(){
//   $("section").animate({
//     height:"100vh"
  
//   },2000,function(){
//     $("h1").fadeIn(2000,function(){

//       $(".item").fadeIn(2000,function(){

//         $(".item").animate({
//           borderRadius:"50%",
//         })



//       })


//     });
//   })
// })
$(".small-img").click(function(){
  let imgSrc=$(this).attr("src");
  $(".main-img").attr("src",imgSrc)
 
})