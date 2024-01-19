let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let copyPassportMarried = {...passportMarried, married: true}
copyPassportMarried.married = true;

console.log(passportMarried);
console.log(copyPassportMarried);