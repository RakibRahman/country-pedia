const output = document.getElementById("output");
const details = document.getElementById("details");
const chose = document.getElementById("chose");

const url = "https://restcountries.eu/rest/v2/all";
const countryList = fetch("https://restcountries.eu/rest/v2/all");

let myData = {};
const fetchCountries = () => {
  //   const countryList = fetch(url);
  countryList
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myData = data;
      //   console.log(myData);
      output.innerHTML = "";
      buildCountries(data);
    });
};
const buildCountries = (info) => {
  let select = document.createElement("select");
  info.forEach((item, index) => {
    let option = document.createElement("option");
    // console.log(item, index);
    option.value = index;
    option.textContent = item.name;
    select.appendChild(option);
  });
  select.addEventListener("change", outputData);
  output.appendChild(select);
};
const outputData = (detail) => {
  console.log(detail);
  console.log(detail.target.value);
  let obj = myData[detail.target.value];
  console.log(obj);

  let flag = `<img src="${obj.flag}">`;
  let name = `<h1> Name:  ${obj.name} </h1>`;
  let population = `<p><span>Population:</span> ${obj.population}`;

  details.innerHTML = `${flag}  ${name}   ${population}`;

  chose.innerHTML = `You have selected <span>${obj.name}</span> `;
};

fetchCountries();
