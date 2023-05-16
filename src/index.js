//console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    const fetchData = () => {
      fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
          const images = data.message;
          const imageContainer = document.getElementById("image-container");
  
          images.forEach(imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            imageContainer.appendChild(img);
          });
  
          return fetch(breedUrl);
        })
        .then(response => response.json())
        .then(data => {
          const breeds = data.message;
          const breedList = document.getElementById("breed-list");
  
          for (const breed in breeds) {
            const listItem = document.createElement("li");
            listItem.textContent = breed;
            breedList.appendChild(listItem);
          }
  
          breedList.addEventListener("click", event => {
            const clickedListItem = event.target;
            clickedListItem.style.color = "red";
          });
  
          const dropdown = document.getElementById("dropdown");
  
          dropdown.addEventListener("change", event => {
            const selectedLetter = event.target.value.toLowerCase();
            const breedItems = breedList.getElementsByTagName("li");
  
            for (const item of breedItems) {
              if (item.textContent.toLowerCase().startsWith(selectedLetter)) {
                item.style.display = "list-item";
              } else {
                item.style.display = "none";
              }
            }
          });
        })
        .catch(error => console.log(error));
    };
  
    fetchData();
  });

