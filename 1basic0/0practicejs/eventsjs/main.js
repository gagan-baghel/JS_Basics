// function clicked(){
// 	console.log(" button clicked");
// }

// window.onload = function(){
// 	console.log("document was loaded");
// }

// // f1.addEventListener("click",function(){
// // 	console.log("div1 was clicked");
// // });

// // div1.addEventListener('mouseover',function(){
// // 	console.log("mouse over box");
// // });

// // div1.addEventListener('mouseout',function(){
// // 	console.log("mouse out of  box");
// // });

// let p =document.querySelector(".div1").innerHTML

// f1.addEventListener('mouseup',function(){
// 	document.querySelector(".div1").innerHTML =p;
// 	console.log("mouse up box");
// });

// f1.addEventListener('mousedown',function(){
// 	document.querySelector(".div1").innerHTML = "hello"
// 	console.log("mouse down of  box");
// });


//arrow functions

// summ = (a,b) => {
// 	return a+b;
// }

// loghing = ()=> {
// 	document.querySelector(".div1").innerHTML = "set interval sarted"
// 	console.log("logged in");
// }
// loghi = ()=> {

// 	console.log("logbvcvvh");
// }

// // setInterval & setTimeout
// //clr return an id for function so that we can control it 


// ct = setTimeout(loghing,5000); //run after 5 seconds
// clr =  setInterval(loghi,1000); //run after 5 seconds

//  clearInterval(clr); //stop the interval
// //  clearTimeout(ct); //stop the timeout



// JSON

obj = {
	name : "gagan"
}

a = JSON.stringify(obj);  // easy to transport 
console.log(a);
parsed = JSON.parse(`{"name":"gagan"}`)
console.log(parsed);
