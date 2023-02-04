let time = prompt("Enter time in 24 hour format");
//undefined is considered as 0 here by autointerpretation of js
if (time > 0 && time < 12) {
	alert("Good morning");
}
else if(time >= 12 && time < 17){ 
	alert("Good afternoon");

}
else if(time >= 17 && time < 21){ 
	alert("Good evening");
}
else{ 
	alert("Good night");
}