const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

let galleryHTML = "";

images.forEach((image) => {
  galleryHTML += `
        <li>
          <img src="${image.url}" alt="${image.alt}">
        </li>
      `;
});

gallery.insertAdjacentHTML("beforeend", galleryHTML);

gallery.style.display = "flex";
gallery.style.alignItems = "center";
gallery.style.listStyle = "none";
gallery.style.padding = "0";

const galleryItems = gallery.querySelectorAll("li");
galleryItems.forEach((item) => {
  item.style.margin = "10px";

  const img = item.querySelector("img");
  img.style.maxWidth = "100%";
});
