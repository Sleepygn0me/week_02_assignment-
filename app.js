console.log("hello world");

//Todo: I need to store my image data
//I can use images stored locally or stored remotely
//use images as objects in an array
const images = [
  {
    url: "url1",
    thumbnail: "thumbnail1",
    altText: "altText1",
  },
  {
    url: "url2",
    thumbnail: "thumbnail2",
    altText: "altText2",
  },
  {
    url: "url3",
    thumbnail: "thumbnail3",
    altText: "altText3",
  },
];
//Todo: I need to create my thumbnaail images
//funtion to create thumbnails{
//select the DOM element(thumbnialContainer) to contain the thuumbnails
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
