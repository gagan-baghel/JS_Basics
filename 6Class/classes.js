class Product{
	constructor(iname){
		console.log("pass by P2 " + iname);
		this.iname=iname;
	}
	getiname(){
		return this.iname + "is a product";
	}
}

class P2 extends Product{
	constructor(iname){
		super(iname);//call the parent constructor
	}

	getiname(){
		return this.iname + "is a Furniture";
	}

}


const mobile  = new Product("Samsung"); //class using expression
const pencil  = new P2("Chair"); //class using expression


// const p1 = class Product{
// 	constructor(iname,product,discount,productCode){
// 		this.iname=iname;
// 		this.product=product;
// 		this.discount=discount;
// 		this.productCode=productCode;
// 	}

// 	get getdiscountValue(){ 
// 		return this.discount
// 	} 

// 	set setdiscountValue( value ){
// 		 this.discount = value
// 	} 

// 	//method inside class 
// 	get getDiscount(){ 
// 		return this.discount * 100 /100
// 	}	
// }

// let chair = new p1("Samsung","Samsung Galaxy S10",10,"S10");


// // getter and setter method