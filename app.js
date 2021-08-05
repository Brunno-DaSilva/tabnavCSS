// In Branch School tab
function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  // deactivate existing active tab and panel
  // for( let i = 0; i < activeTabs.length; i++) {
  //   activeTabs[i].className = activeTabs[i].className.replace('active', '');
  // }

  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

const trigger_search = document.querySelector(".trigger_search");
const input = document.querySelector(".input");

trigger_search.addEventListener("click", () => {
  if (!input.classList.contains("input-open")) {
    input.classList.add("input-open");
    trigger_search.innerHTML = "<i class='fas fa-times'>  </i>";
  } else {
    input.classList.remove("input-open");
    trigger_search.innerHTML = "<i class='fas fa-search'>  </i>";
  }
});

const news = document.getElementById("news");
let display_hide_El = document.getElementById("display__onClick");
const lastEl = document.getElementById("lastEl");

news.addEventListener("click", showNavItems);

function showNavItems() {
  if (display_hide_El.style.display === "none") {
    display_hide_El.style.display = "flex";
    display_hide_El.style.flexDirection = "column";
    display_hide_El.style.minWidth = "20rem";
    display_hide_El.style.padding = "0.5rem";
    display_hide_El.style.boxShadow = `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`;
  } else {
    display_hide_El.style.display = "none";
  }
}

function focusOut() {
  display_hide_El.style.display = "none";
  console.log("Focus out");
}

lastEl.addEventListener("focusout", focusOut);
