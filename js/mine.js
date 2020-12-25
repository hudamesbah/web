// // // // // // //function
// // // // // // //scheme  functional programming language

// // // // // // function test(){
// // // // // //    alert("hello user");
// // // // // // }

// // // // // // //test(); //calling - invoke

// // // // // // //pramameters
// // // // // // function calculateTotal(x){
// // // // // //     console.log( (x * 16) + 50);

// // // // // // }

// // // // // // calculateTotal(100);

// // // // // // calculateTotal(10);

// // // // // // function getSum(x , y){
// // // // // //     alert(x + y);
// // // // // // }

// // // // // // // getSum(10,20);

// // // // // // // getSum("web","design");

// // // // // // getSum("web");

// // // // // // getSum(10);

// // // // // // getSum();

// // // // // function test2(x,y,z){
// // // // //    var res = x+y+z;

// // // // //    console.log(res);

// // // // //    return res ;

// // // // // }

// // // // // test2(10,20,30); //60

// // // // // console.log( test2(10,20,30)  )

// // // // // var n1 = test2(1,2,3);

// // // // // // alert(n1);

// // // // // test2("hello" , "ya ","hoda");

// // // // // // function name(params) { // statment function

// // // // // // }

// // // // // var viewMessage = function(){ // function expression  'anonymus function'

// // // // //     alert("hello user");
// // // // // }

// // // // // viewMessage();

// // // // // var str1 = "hoda";

// // // // // var str2 = "ahmed";

// // // // // var str3 = "ali";

// // // // // var x = 40 ;
// // // // // var y = 50 ;
// // // // // var z = 70 ;

// // // // // test2(str1 , str2 , str3);

// // // // // test2(x , y , z);

// // // // var x ;

// // // // console.log(x);//10

// // // // var x ; //declarations

// // // // x = 10; //assigmnet

// // // // /** hoisting */

// // // // // xyz();

// // // // viewMessage();

// // // // function xyz(){
// // // //     alert("xyz");
// // // // }

// // // // var viewMessage = function(){
// // // //     alert("hello");
// // // // }

// // //  var x = 30;//global variable

// // // var y = 20 ;//global variable

// // // function test(){

// // //     var x = 20; //local variable

// // //      y+=5; // 25
// // //     console.log(x);

// // // }

// // // test();//20

// // // console.log(y);//20

// // // console.log(x); //30

// // // //self invoked function

// // // (function () {
// // //     alert("hello");
// // //     var index = 20 ;
// // //var index = 20 ;
// // //alert("hello");
// // //  })();

// // var x = 10;
// // x = 20;

// // //object

// // var studet = {}; //object;

// // // studet = {
// // //     property1 : value ,
// // //     property2 : value ,
// // // }

// // studet = {
// //   name: "ahmed",
// //   age: 20,
// //   level: 4,
// //   adrress: "14 haram st",
// //   graduated: false,
// // };

// // studet.name; // ahmed

// // studet.name = "merit";

// // studet.phone = "0123154654654";

// // console.log(studet.name);

// // console.log(studet);

// // console.log(typeof studet);

// // var employee = {
// //   name: "ahmed",
// //   age: 45,
// //   salary: 5000,
// //   position: "manager",
// //   address: { street: 10, country: "egypt", state: "caito" },
// //   work: function (x) {
// //     //method
// //     // alert(x + "i'm working")

// //     return x * 50;
// //   },
// //   married: true,
// // };

// // employee.work(10); //invoke calling

// // var x = employee.work(10);

// // console.log(x);

// // console.log(employee.address.state);

// // // console.log( employee["address"]["state"]  )




// // // Math.max(10,20,30,50,40);//50
// // Math.min(10,20,30,50,40);//50
// // Math.pow(10,2);//50

// // Math.random();
// // // var x = Math.round(Math.random()*500);
// // //var x = Math.ceil(2.2);
// // // var x = Math.floor(2.7);

// // console.log(x);

// // // console.log( Math.min(10,20,30,50,40) );


// // /**
// //  * 
// //  * functional programming lang
// //  * 1-function can assign to a variable
// //  * 
// //  * var x = function(){
// //  * }
// //  * 
// //  * var y = test(3);
// //  * 
// //  * 
// //  * 2-function can be property in an obj
// //  * 
// //  * var obj = {
// //  * test : function(){}
// //  * }
// //  * 
// //  * 3- function can be a prameter to another
// //  * 
// //  * 
// //  test(Math.max(10,20,30) );

// //  4- function can be returened from another function
 
// //  function test2(x,y,z){

// //   return Math.min(x,y,z);

// //  }
// //  * 
// //  * 
// //  * 
// //  * 
// //  */

// //  function test(x){

// //   alert(x)

// //  }


// //  test(Math.max(10,20,30) );

// //array



// var numbrs = [1,2,3,5,8,7];

// var mixed = [12,"ahmed",true,undefined];



// colors[0] // red
// colors[0]="test";
// colors[5]="brown";
// colors[6]="#09c";

// console.log(colors[10]); //undefiend

// console.log(colors[0])
// console.log(colors);

// console.log(typeof(colors));

// var obj = {
//   name : "merit",
//   age:25
// };

// var users = [{
//   name:"ahmed",
//   age:15
// },{
//   name:"ali",
//   age:20,
  

// },{ 
//   name:"salma",
//   age:25
// }];


// console.log(users[2].name)

// var student = {
//   name:"ahmed",
//   subject :["db","ai","sw1","math"],
//   address : {street:"10",country:"egypt"}


// }

// student.subject[3] // math

// console.log(student.subject[3])



//  var colors = ["red","tomato","teal","black","#fff","blue","rosybrown"];

//  colors[0]//red
//  colors[1]//tomato
//  colors[2]

//  colors.length //

//  colors.push("merit");
//  colors.push("ahmed");
//  colors.push("amira");
//  colors.push("samar");

// colors.unshift("web");
// colors.unshift("test");

// colors.pop();
// colors.pop();

// colors.shift();

  //  colors.splice(3,0,10);

//    colors.reverse();

//  console.log(colors)

//  console.log(colors.length )

//  for(var i=0;i<colors.length;i++){
//    console.log(colors[i]);

//  }

// var a = 10;
// var b = 20;
// var c = 30;

// var arr1 = [a,b,c];


// console.log(arr1);