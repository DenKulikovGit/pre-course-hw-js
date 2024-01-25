const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const orange = words.indexOf("апельсин");
function wordsorange() {
    if (orange >= 0) {
        console.log("Ура! нашел");
    } else {
        console.log("Придется поискать в другом магазине…");
    }
}
wordsorange()