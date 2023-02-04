// let lecture = 5;
// let course = 4;
// let title = "js";

// function enroll() {
// 	 console.log("you are successfully enrollerd")
// }

// const contex = {
// 	  lecture: lecture,
// 	  course: course,
// 	  title: "js",
// 	  notes :  {
// 		  introduction : "welcome to js",
// 	  },
// 	  enroll() {
// 		console.log("you are successfully---- enrollerd")
//        },
       
// };

// contex.enroll()
// console.log(contex)
// contex.price=390823908309






// function hello(len){
// 	return {
// 	makeithappen: len,
// 	goals : 5,
// 	mainfield : 7
// 	}
// } //object literal
// console.log(hello("green"))
// console.log(hello("yellow"))

// const newc = hello("pink")

// function Constructorock(h){
// 	this.h = h,
// 	this.enroll= function(){
// 		console.log("hello");
// 	}
// }
// const rse =  new Constructorock("bookify")
// delete rse.h;
// console.log(rse)

// console.log(newc.constructor)


// reference data type is also an object 

// const funcdemo = Function("title",`{ 
// 	this.title = title 
// 	this.enroll = function(){
// 		console.log("enrolled")
// 	} 
// }`)  //internal steps

// const c2 = new funcdemo("hello")

// console.log(c2)
// console.log(c2.enroll())



// let obj = {num :2}
// let obj2 = obj
// obj.num=4
// obj.kite = 18
// console.log(obj.num);
// console.log(obj2.num);
// console.log(obj2.kite);


const obj1 ={
	prop :3,
	prop2 : 7 
}

// first method
const obj2 = {...obj1}  // spread operator
obj2.prop=99
console.log(obj1);
console.log(obj2);

//second method 
const obj3 = Object.assign({},obj1) //intial obj and we can also add more to it in future
console.log(obj3);

console.log("looping"
);
//looping in obj 

let obj4 ={} 
for(let key in obj1) {
	console.log(key, obj1[key]); 
}
for(let key of Object.keys(obj1)) {
	console.log(key, obj1[key]);
	obj4[key]=obj1[key]
}
console.log(obj4);

// copying obj by pass by value we get 
// 1)spreading {...}
// 2)Object.assign({},obj)
// 3)by looping
