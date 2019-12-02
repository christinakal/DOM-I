const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAV
let menuElement = document.querySelectorAll('nav > a');


let index = 0; //create a counter for keeping track of the elements' position
for (const key in siteContent.nav) {
  const element = siteContent.nav[key];

  const anchorElement = menuElement[index];
  anchorElement.innerHTML = element;
  anchorElement.style.color = 'green';

  index++;

  if (index >= 6) break;
}

const other = document.createElement('a');
const projects = document.createElement('a');

other.innerHTML = "Other";
projects.innerHTML = "Projects";

let parent = document.querySelector("nav");

parent.appendChild(other);
parent.prepend(projects);



// CTA SECTION

let ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta button'); 
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById('cta-img'); 
ctaImg.src = siteContent["cta"]["img-src"];



// MAIN-CONTENT SECTION

let firstHeader = document.querySelector('.text-content:nth-child(1) h4');
firstHeader.innerHTML = siteContent["main-content"]["features-h4"]
let firstParagraph = document.querySelector('.text-content:nth-child(1) p');
firstParagraph.innerHTML = siteContent["main-content"]["features-content"]

let secondHeader = document.querySelector('.text-content:nth-child(2) h4');
secondHeader.innerHTML = siteContent["main-content"]["about-h4"];
let secondParagraph = document.querySelector('.text-content:nth-child(2) p');
secondParagraph.innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

let thirdHeader = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
thirdHeader.innerHTML = siteContent["main-content"]["services-h4"];
let thirdParagraph = document.querySelector('.bottom-content .text-content:nth-child(1) p');
thirdParagraph.innerHTML = siteContent["main-content"]["services-content"]

let forthHeader = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
forthHeader.innerHTML = siteContent["main-content"]["product-h4"];
let forthParagraph = document.querySelector('.bottom-content .text-content:nth-child(2) p');
forthParagraph.innerHTML = siteContent["main-content"]["product-content"]

let fifthHeader = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
fifthHeader.innerHTML = siteContent["main-content"]["vision-h4"];
let fifthParagraph = document.querySelector('.bottom-content .text-content:nth-child(3) p');
fifthParagraph.innerHTML = siteContent["main-content"]["vision-content"]


// CONTACT SECTION

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

let address = document.querySelector('.contact p:nth-child(2)');
address.innerHTML = siteContent["contact"][ "address"];
address.style.width = "20%";

let phone = document.querySelector('.contact p:nth-child(3)');
phone.innerHTML = siteContent["contact"][ "phone"];

let email = document.querySelector('.contact p:nth-child(4)');
email.innerHTML = siteContent["contact"][ "email"];


// FOOTER
let footerParagraph = document.querySelector('footer p');
footerParagraph.innerHTML = siteContent["footer"]["copyright"];