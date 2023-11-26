const exitTrail = document.querySelector(".exit-trail-btn");
const trail = document.querySelector(".trial-container");
const toggleGuides = document.querySelectorAll(".guides");
const toggleOptions = document.querySelector(".options-container");
const optionsList = document.querySelector(".options-list-container");
const toggleAlert = document.querySelector(".notification-container");
const alert = document.querySelector(".alerts-container");

const toggleGuideDropdown = document.querySelector(".guide-dropdown-btn");
const guideDropdown = document.querySelector(".guide-dropdown-container");

dropdown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="#4A4A4A"/>
</svg>`;

dropup = ` <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z"
    fill="#4A4A4A" />
</svg>`;

let show = true;
toggleGuideDropdown.addEventListener("click", () => {
  if (show) {
    toggleGuideDropdown.childNodes[1].innerHTML = dropdown;
    guideDropdown.classList.toggle("open");
    show = false;
  } else {
    toggleGuideDropdown.childNodes[1].innerHTML = dropup;
    guideDropdown.classList.toggle("open");
    show = true
  }
});

const checkedIcon = `<circle cx="12" cy="12" r="10" fill="#303030"></circle>
<path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
fill="#fff"></path>`;

const rotateCheckIcon = `<path
  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
  stroke="black"
  stroke-width="2.5"
  stroke-linecap="round"
  stroke-linejoin="round"
/>`;

const circleIcon = `<circle cx="16" cy="16" r="12" stroke="grey" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />`;

const setupBtn = document.querySelectorAll(".guides-list");
const addSetUp = document.querySelectorAll(".guides-list .option");

const progressBarNum = document.querySelector(".guide-header-2 div");
const progressBarStatus = document.querySelector(".guide-header-2 progress");

let addN = 0;
const updateProgressBar = (P, N) => {
  addN += N;
  progressBarNum.innerHTML = `${addN} / 5 completed`;
  progressBarStatus.value += P;
};

let addSetUpTrue = [false, false, false, false, false];
const performCheck = (svgElement) => {
  svgElement.childNodes[1].classList.remove("rotate-check");
  svgElement.childNodes[1].setAttribute("viewBox", "0 0 24 24");
  svgElement.childNodes[1].innerHTML = checkedIcon;
};

const performCircle = (svgElement) => {
  svgElement.childNodes[1].setAttribute("viewBox", "0 0 32 32");
  svgElement.childNodes[1].innerHTML = circleIcon;
};

const performRotate = (svgElement) => {
  svgElement.childNodes[1].setAttribute("viewBox", "0 0 28 28");
  svgElement.childNodes[1].innerHTML = rotateCheckIcon;
  svgElement.childNodes[1].classList.add("rotate-check");

  setTimeout(() => {
    performCheck(svgElement);
  }, 400);
};

for (let i = 0; i < setupBtn.length; i++) {
  addSetUp[i].addEventListener("click", () => {
    if (!addSetUpTrue[i]) {
      performRotate(addSetUp[i]);
      updateProgressBar(20, 1);
      addSetUpTrue[i] = true;
    } else {
      performCircle(addSetUp[i]);
      updateProgressBar(-20, -1);
      addSetUpTrue[i] = false;
    }
  });
}

// TOGGLING STATES

toggleAlert.addEventListener("click", (e) => {
  e.stopPropagation();
  alert.classList.toggle("active");
  optionsList.classList.remove("active");
});

toggleOptions.addEventListener("click", (e) => {
  e.stopPropagation();
  optionsList.classList.toggle("active");
  alert.classList.remove("active");
});

document.body.addEventListener("click", () => {
  alert.classList.remove("active");
  optionsList.classList.remove("active");
});

exitTrail.addEventListener("click", () => {
  trail.classList.toggle("active");
});

// HANDLING CLICK EVENTS ON THE LIST OF GUIDES

window.onload = function () {
  const firstDiv = document.querySelector(".guides");
  firstDiv.classList.add("expand");
  firstDiv.style.backgroundColor = "#f3f3f3";
};

let previousClicked = document.querySelector(".expand");

function expandDiv(element) {
  if (previousClicked !== element) {
    if (previousClicked) {
      previousClicked.classList.remove("expand");
      previousClicked.style.backgroundColor = "";
    }
  }

  element.classList.add("expand");

  if (element.classList.contains("expand")) {
    element.style.backgroundColor = "#f3f3f3";
  } else {
    element.style.backgroundColor = "";
  }

  previousClicked = element;
}
