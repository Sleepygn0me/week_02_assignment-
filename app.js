console.log("hello world");

//Todo: I need to store my image data
//I can use images stored locally or stored remotely
//use images as objects in an array
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

//Todo: I need to create my thumbnail images
function createThumbnails(images) {
  const container = document.getElementById("thumbnailContainer");
  const display = document.getElementById("largeImgDisplay");
  container.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const thumbImg = document.createElement("img");
    thumbImg.src = images[i].thumbnail;
    thumbImg.alt = images[i].altText;

    // Optional: make thumbnail clickable to show large image
    thumbImg.addEventListener("click", () => {
      const display = document.getElementById("largeImgDisplay");
      display.innerHTML = `<img src="${images[i].url}" alt="${images[i].altText}" style="max-width:100%;">`;
    });

    container.appendChild(thumbImg);
  }
}

createThumbnails(images);
// - add an event listener to each image--> the event handler of this listener is the function you write to create large images
// append the created images to the thumbnailContainer
//}

//Todo: I need to create my large images
//this task is the event handler for the thumbnail events.
//funtion createLargeImagesHandler(){
//select the large image container
//delete the current image in the large image container
//largeImageContainer.innerHTML = null
//create an image
//update src and alt values
//add className for styling
//append the img to the container}

// add this event handler to the thumbnail event
//call the createThumbnails function
