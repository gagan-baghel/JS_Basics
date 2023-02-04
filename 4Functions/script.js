function cookki(maggi,water,pot){
	console.log("your maggi will be ready in   ${maggi*2} minutes");
}

cookki(2,1,1);

function sandwitch(sauce,bread,meat){
	let s = "your sandwitch will be ready in 10 minutes with " + sauce + " sauce and " + bread + " bread" + " and " + meat + " meat";
	return s;
}

let p = sandwitch("mayo","white","chicken");
console.log(p);
