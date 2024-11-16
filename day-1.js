let strVar1="hello"
let strVar2='hello'
let num=23
console.log(strVar1) // "hello"
console.log(strVar2) // "hello"
console.log(num)     // 23
console.log(typeof(strVar1));
console.log(typeof(strVar2));
console.log(typeof(num));
let arr = [1,2,3,4,5]
console.log(arr);   // [1, 2, 3, 4, 5]
console.log(typeof(arr));
let jsonObVar = {
    "username":"vin",
    "password":1234
};
console.log(jsonObVar);      // {"username":"vin","password":1234}
console.log(typeof(jsonObVar));

const _name=123
console.log(typeof(_name));

//Function
greet();
function greet() {
    console.log("Hello World!");

}
// greet();
console.log(typeof(greet));

function greet2(name) {
    console.log("Hello World!"+name);

}
greet2();
greet2("USA");

color="red"
if(color=="red")
{
    console.log("Color is Red");
}
else if (color === "blue"){
    console.log("Color is Blue");
} 
else {
    console.log("Color is not recognized");
}

let arr1=[1,2,3,4,5,6,7,8,9,10]
for(ele in arr1) {
   console.log(ele);
   console.log(arr1[ele]);
}
//unknown function :Unnamed function

let ListVAr=[1,2,3,4,5]
function cube(x){
    return x**3;
}
outVAr=ListVAr.map(cube)
console.log(outVAr);

outVAr1=ListVAr.map((x) =>{return x**2})
console.log(outVAr1);