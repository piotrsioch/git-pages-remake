const images = document.querySelectorAll(".img-slide");
const userProjectBtns = document.querySelectorAll(".btn-get-started");
const gitClientBtns = document.querySelectorAll(".btn--client");
const themeOrScratchBtns = document.querySelectorAll(".btn--theme");

const userOrganizationPart = document.querySelector(".user-organization-part");
const projectSitePart = document.querySelector(".project-site");

const userOrganizationMap = new Map();
userOrganizationMap.set(userProjectBtns[0], userOrganizationPart);
userOrganizationMap.set(userProjectBtns[1], projectSitePart);

const optionTerminal = document.querySelector(".option--terminal");
const optionGithubDesktop = document.querySelector(".option--github-desktop");
const optionIdk = document.querySelector(".option--idk");

const gitClientMap = new Map();
gitClientMap.set(gitClientBtns[0], optionTerminal);
gitClientMap.set(gitClientBtns[1], optionGithubDesktop);
gitClientMap.set(gitClientBtns[2], optionIdk);

const optionTheme = document.querySelector(".option--choose-theme");
const optionScratch = document.querySelector(".start-from-scratch");

const themeScratchMap = new Map();
themeScratchMap.set(themeOrScratchBtns[0], optionTheme);
themeScratchMap.set(themeOrScratchBtns[1], optionScratch);

let index = 0;

const pos = {
  index: 0,
};

const slider = function (images, pos) {
  if (pos.index !== images.length - 1) {
    images[pos.index].classList.remove("img-active");
    images[pos.index + 1].classList.add("img-active");
    pos.index++;
  } else if (pos.index === images.length - 1) {
    images[pos.index].classList.remove("img-active");
    pos.index = 0;
    images[pos.index].classList.add("img-active");
  }
};

setInterval(slider, 2000, images, pos);

const manipulateActiveClass = function (elementArr, clicked) {
  elementArr.forEach((el) => el.classList.remove("btn--active"));
  clicked.classList.add("btn--active");
};

const manipulateHiddenAtribvute = function (map, e) {
  map.forEach((value, key) => {
    value.classList.add("hide");
  });
  const current = map.get(e.target);
  current.classList.remove("hide");
};

userProjectBtns.forEach((el) =>
  el.addEventListener("click", function (e) {
    manipulateActiveClass(userProjectBtns, e.target);
    manipulateHiddenAtribvute(userOrganizationMap, e);
  })
);

gitClientBtns.forEach((el) =>
  el.addEventListener("click", function (e) {
    manipulateActiveClass(gitClientBtns, e.target);
    manipulateHiddenAtribvute(gitClientMap, e);
  })
);

themeOrScratchBtns.forEach((el) =>
  el.addEventListener("click", function (e) {
    manipulateActiveClass(themeOrScratchBtns, e.target);
    manipulateHiddenAtribvute(themeScratchMap, e);
  })
);

// projectSiteBtnEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   manipulateActiveClass(userProjectBtns, projectSiteBtnEl);
// });

// userOrOrganizationBtnEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   manipulateActiveClass(userProjectBtns, userOrOrganizationBtnEl);
// });
