console.log("hello world");

//Todo: I need to store my image data
//I can use images stored locally or stored remotely
//use images as objects in an array
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "a white dog wearing a yellow rain coat sat on fallen leaves",
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
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DE",
    altText: "polar bear on snow covered ground during daytime",
  },
];

//Todo: I need to create my thumbnail images
function createThumbnails(images) {
  const container = document.getElementById("thumbnailContainer");

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i].thumbnail;
    img.alt = images[i].altText;
    img.classList.add("thumbImage");
  }
  container.appendChild(img);
  {
  }
}
// Call the function on page load
createThumbnails(images);

//select the DOM element(thumbnialContainer) to contain the thumbnails
//this is a repetative task --> loop through the aray (using the length property)
//inside the loop
// - create image element
// -update the src and alt attributes to match those in your array parameters)
// give each img a className (img.className)
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
