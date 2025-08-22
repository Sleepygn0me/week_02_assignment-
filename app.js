console.log("hello world");

//array to store thumbnails
const images = [
  {
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "a panda eating bamboo with a forest back ground",
  },
  {
    url: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "brown tabby kitten sitting on the floor",
  },
  {
    url: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "polar bear on snow covered ground during daytime",
  },
];

//function for thumbnails
function createThumbnails(images) {
  const container = document.getElementById("thumbnailContainer");
  const display = document.getElementById("largeImgDisplay");
  container.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const thumbImg = document.createElement("img");
    thumbImg.src = images[i].thumbnail;
    thumbImg.alt = images[i].altText;
    thumbImg.classList.add("thumbImg");

    thumbImg.addEventListener("click", () => {
      const display = document.getElementById("largeImgDisplay");
      display.innerHTML = `<img src="${images[i].url}" alt="${images[i].altText}" style="max-width:100%;">`;
    });

    container.appendChild(thumbImg);
  }
  if (images.length > 0) {
    display.innerHTML = `<img src="${images[0].url}" alt="${images[0].altText}" style="max-width:100%;">`;
  }
}

createThumbnails(images);
