let a = {
    num1:14,
    num2:17,

    printData:function(){
        console.log(this.num1 + this.num2)
    }

}

a.printData()

let b = {age:14,name:'vitalii'}

let n = b

n.age = 47

console.log(n)

const tom = { name: 'Tom'};
const sam = {age: 39};

const person = {height: 170};
Object.assign(person, tom, sam);
console.log(person);

const Fot = {name: 'Fot'};
const Boc = {name: 'Boc'}

console.log(Fot == Boc)

const user = {};
user.name = 'Ser';
user.age = 27;


user.print = function(){
    
    console.log(this.name);
    console.log(this.age);
};
const hasNameProp = "name" in user;
console.log(hasNameProp);

const hasWeightProp = "weight" in user;
console.log(hasWeightProp)


const Ret = {
    name: 'Nat',
    age: 37,
    print(){
        console.log(this.name,this.age);
    }
}

for(const prop in Ret) {
    console.log(prop, " : ", Ret[prop]);
}


let i = {age:7,age1:77}
let g = i
console.log(g)
