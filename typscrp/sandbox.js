//class
var Student = /** @class */ (function () {
    function Student(studentId, Name, age, present) {
        this.cardNumber = 12345678;
        this.bank = "HDFC";
        this.cvv = 123;
        this.studentId = studentId;
        this.Name = Name;
        this.age = age;
        this.present = present;
    }
    Student.prototype.printRecords = function () {
        console.log(this.studentId, this.Name, this.age, this.present);
    };
    Student.prototype.bankdetails = function () {
        console.log(this.cardNumber, this.bank, this.cvv);
    };
    return Student;
}());
var student1 = new Student(101, "Shinchan", 5, true);
// student1.studentId=101
// student1.Name="Nobita Nobi"
// student1.age=12
// student1.present=true
console.log(student1);
student1.printRecords();
// type myType=string| number|boolean
// const add = (a:myType, b?:number, c:number=20): void =>{
//     if(b!=undefined)
//         console.log(a,b,c);
//     else
//         console.log(a,c);
//     //return  a*b;
// }
// const a=add;
// a("Hello",40);
// a(40)
// a(true,40,50);
// let firstName="Meghana";
// firstName="Kolli";
// console.log(firstName);
// let loc="Trivandrum";
// console.log(loc);
// let pincode=695582;
// console.log(pincode);
// var data = new Date();
// console.log(data.getDate());
// let language: any;
// language=[4,5,6,7,8];
// language="Malayalam";
// console.log(language);
// let a=10;
// let b=50;
// console.log((a+b)+" "+(a*b)+""+(a%b)+" "+(a%b));
// if(a>b){
//     console.log("A is greater")
// }
// else{
//     console.log("B is greater")
// }
// function fact(n): number{
//     let total=1
//     for(let i=1;i<=5;i++){
//         total*=i
//     }
//     return total
// }
// console.log(fact(5))
// let fruits=["apple", "banana", "orange", "leach", "berries"]
// console.log(fruits)
// console.log(fruits.length)
// let score=['Rohit',240.35,74.8,"India",80.00]
// console.log(score)
// score.push("lives in Mumbai")
// console.log(score)
// fruits.forEach((fruit)=>{
//     console.log(fruit.toUpperCase())
// })
// function printName(obj:{first:string; last?:string}){
//     console.log(obj.first.toLowerCase())
//     console.log(obj.last?.toLowerCase())
// }
// printName({first:"Meghana"})
// printName({first:"Meghana", last:"Kolli"})
// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//       console.log("Hello, " + x.join(" and "));
//     } else {
//       console.log("Welcome lone traveler " + x);
//     }
// }
// welcomePeople(["Anil", "Meghana","Shreeya"])
// let pet={"type":"Dog", "name":"Ginger", "Breed":"Labrador"}
// console.log(pet.name)
// //pet={"weight":"30","age":"8yrs", "color":"brown"} (not possible)
// let pet2=pet
// pet2={"type":"Cat","name":"Tom","Breed":"Persian"}
// console.log(pet2) 
// console.log(pet)
// pet={"type":"Dog","name":"Bruno","Breed":"German Shepard"}
// console.log(pet)
