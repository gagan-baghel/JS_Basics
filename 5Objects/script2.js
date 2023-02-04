
const product = {
	itemName: "nailcutter",
	price: 30,
	discount : "50%",
	itemCode : 112233

}
console.log(product);

function product1(a,b,c,d){
	return{
	itemName: a,
	price: b,
	discount : c,
	itemCode : d
	}
}

const pro1 = product1("nailcutter",30,"50%","121121"); 
console.log(pro1);











































function Product2(a,b,c,d){
	this.itemName = a;
	this.price = b;
	this.discount = c;
	this.itemCode = d;
	this.discountValue = function(){
		return b* c/100;
	}
}

const Pro2 = new Product2("nailcutter",30,50,"88881"); 