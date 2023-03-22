const giphyForm = document.getElementById("giphy-form");
const searchButton = document.getElementById("searchButton");
const removeButton = document.getElementById("removeButton");
const imagesDiv = document.querySelector("#imagesDiv");

async function getData(searchBox) {
  try {
    const response = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=np4BcdkA0RPvHxN3UvKo8kl1nFDfnqpU&q=" +
        searchBox +
        "&limit=25&offset=0&rating=g&lang=en"
    );
    console.log(response);

    const image = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 25);
    image.src = response.data.data[randomNumber].images.fixed_height.url;
    imagesDiv.appendChild(image);
  } catch (error) {
    alert("Search term not found!");
  }
}

searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  const searchBox = document.getElementById("searchBox").value;
  getData(searchBox);
});

removeButton.addEventListener("click", function () {
  e.preventDefault();
  imagesDiv.innerHTML = "";
});
