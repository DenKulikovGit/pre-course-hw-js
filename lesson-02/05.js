let passport = {
    name: "Petr",
    surname: "Petrov",
};
let passport2 = {};
for (let key in passport) {
    passport2[key] = passport[key];
}
passport2.name = "Ivan";
console.log(passport.name);
console.log(passport2.name);