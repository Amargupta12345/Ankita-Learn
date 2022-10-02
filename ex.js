// class Animals{
//     /**
//      ** step 3 Lions is class then they will check construtor value
//      ** object is initialize empty then we will check the value of the object {}
//         let Lions =  {
//             name: "Lion",
//             age: 10,
//             wild : "yes"
//         }
//     */

//     dangerouse = "yes";
//     constructor(name,age,wild){
//         this.name = name;
//         this.age = age;
//         this.wild = wild;
//     }

//     getAnimals(){
//         console.log(`This value is getted with using the getAnimals Functions `,this.name , this.dangerouse);
//     }
// }


// let Lions = new Animals("Lions"); // * step 2 Lions is class then they will check construtor value & new key word is use
//                                   // * Instantiation of empty object.

// Lions.getAnimals(); // * step 4 Lions is class then they will check
//muje asa number chaiye jo ki 18 se bade hone chaiye;

// age Data type array

//index always start from 0 = 12

// length always start from 1 = 13

// 0 = 10;
// 1 = 20;
// 2 = 30;
// 3 = 40;
// 4 = 50;
// 5 = 60;
// 6 = 70;
//

let Age = [10, 12, 15, 18, 4, 55, 52, 3, 54, 19, 5, 3, 10];

// index = 0;
// 0+1 = 1;

for (let index = 0; index < Age.length; index++) {
    const element = Age[index];
    if (element >= 18) {
        console.log(`This value is greater than 18 ${element}`)
    }
    else {
        console.log(`This value is less than 18 ${element}`)
    }
}


