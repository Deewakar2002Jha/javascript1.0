let users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1754764972197-f1f6b3349a5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://images.unsplash.com/photo-1744749583027-eaef2cf563ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
    bio: "main character energy 🍿 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1757877942839-e3ed20a6c8c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://images.unsplash.com/photo-1757573913927-0f6a58fb0f49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
];

//saara user show karana hai
//filter karana hai har baar input karna per
//show karna filtered user ko

function showUser(arr){
  arr.forEach(function(user){
              // Create outer card div
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

// Create blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = user.pic;
blurredLayer.classList.add("blurred-layer");

// Create content div
const content = document.createElement("div");
content.classList.add("content");
// Create h3 and paragraph
const heading = document.createElement("h3");
heading.textContent = user.name;

const para = document.createElement("p");
para.textContent = user.bio;

// Append heading and paragraph to content
content.appendChild(heading);
content.appendChild(para);

// Append all to card
card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Finally, append card to the body or any container
document.body.appendChild(card);


  })
}
