// problem 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



function favoriteFoods(person) {
    for (let i = 0; i < Object.keys(person).length; i++) {
        let category = Object.keys(person)[i]
        console.log(`My favorite ${category} is/are:`)

        if (Array.isArray(Object.values(person)[i])) {
            for (let j = 0; j < Object.values(person)[i].length; j++) {

                if (typeof(Object.values(person)[i][j]) === 'object'){
                    let sub_category = Object.values(person)[i][j]
                    for (let k = 0; k < Object.values(sub_category).length; k++) {
                        console.log(`\t- ${Object.keys(sub_category)[k]}: ${Object.values(sub_category)[k]}`)
                    }
                    
                } else {
                    console.log(`\t- ${Object.values(person)[i][j]}`)
                }
            }
        } else {
            console.log(`\t- ${Object.values(person)[i]}`)
        }
    }
}
favoriteFoods(person3)


// problem 3
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => {
        return `${this.name} is ${this.age} years old`;
    }

    addOne = () => {
        this.age = this.age + 1
        return `${this.name} is now ${this.age} years old`;
    }

    addAge = (years) => {
        return `${this.name} is now ${this.age + years} years old`;
    }
}

let kathy = new Person('Kathy', 29)
let potato = new Person('Potato', 91)
console.log(kathy.printInfo())
console.log(kathy.addAge(3))
console.log(potato.printInfo())
console.log(potato.addOne())



// problem 3

function isGreaterThan10(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str);
        } else {
            reject(str);
        }
    })
}

isGreaterThan10("this is my string ")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small number")
    })

isGreaterThan10("hello")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small number")
    })

// codewars problem 1

function duplicateEncode(word){
    word_obj = {}
    new_word = ""
    word_lower = word.toLowerCase()
    for (let i = 0; i < word_lower.length; i++) {
        if (word_obj[word_lower[i]] === undefined) {
            word_obj[word_lower[i]] = 1
        } else {
            word_obj[word_lower[i]] += 1
        }
    }
    for (let j = 0; j < word_lower.length; j++) {
        if (word_obj[word_lower[j]] === 1) {
            new_word += "("
        } else {
            new_word += ")"
        }
    } return new_word;
} 

console.log(duplicateEncode("recede"))


// code wars probelm 2 

function longestRepetition(s) {
    let count = 1
    let max_count = 1
    let letter = s[0]
    if (s === "") {
        return ["", 0]
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            count += 1
        } else if (count > max_count) {
            letter = s[i]
            max_count = count
            count = 1
        } else {
            count = 1
        }
    } return [letter, max_count]
}