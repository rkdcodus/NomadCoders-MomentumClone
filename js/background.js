// const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

// const chooseImg = images[Math.floor(Math.random() * images.length)];

// const bgImg = document.createElement("img");

// bgImg.src = `img/${chooseImg}`;

// document.body.appendChild(bgImg);


const figcation = document.querySelector(".figcaption figcaption");
const API_KEY="563492ad6f91700001000001d011baf122ad40aab24ea60dede6de10";

let page_num=1;
// https://api.pexels.com/v1/search?query=nature&per_page=1
async function CuratedPhotos(){
    // fetch the data from api
    const data=await fetch(`https://api.pexels.com/v1/search?query=landscape&per_page=50`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,     //use the apikey you have generated
        },
    });
    const response=await data.json();   //convert the response to json 

    display_images(response);   // call the display_images method to display the images on page
}

function display_images(response){
    const chooseImg = response.photos[Math.floor(Math.random() * response.photos.length)];
    const bgImg = document.createElement("img");
    bgImg.src = `${chooseImg.src.landscape}`;
    document.body.appendChild(bgImg);
    figcation.innerText = `Photo By ${chooseImg.photographer}📸`;
}

// https://dev.to/nehasoni__/create-an-amazing-image-search-app-using-pexels-api-2cf

CuratedPhotos();