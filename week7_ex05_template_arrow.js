let date = new Date();
let day = date.getDay();
let year = date.getFullYear();


console.log(`Today is ${date}
  and it is the ${day}th day of the week,
  and it is currently ${year}`
);

function getFavouriteShoeHTML(shoename,brand){
  let htmlBlock = `
  <div class="shoe">
    <h3>${shoename}</h3>
    <p>Brand: ${brand}</p>
  </div>`
  return htmlBlock;
};

let favouriteShoe = getFavouriteShoeHTML("Air Max 90", "Nike");
console.log(favouriteShoe);

//percentage 

let number = 80;

 const percentage = (num) =>{
  return num / 100 * number;
 }

console.log(percentage(20));

let cities = ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth"];

const cityList = (cities) => {
  let cityRemove = cities.pop();
  let cityAdd = cities.push("Bloemfontein");
  return cities;
}

console.log(cityList(cities));