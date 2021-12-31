/** LISTENERS */
function load() {
  console.log("DOM fully loaded and parsed");
  addCardClickListener();
  addSeeReverseClickListener();
  addSeeAnverseClickListener();
}

function addCardClickListener() {
  Array.from(document.getElementsByClassName("card")).forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      selectCard(item);
    });
  });
}

function addSeeReverseClickListener() {
  Array.from(document.getElementsByClassName("fa-rotate-right")).forEach(
    (item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        seeReverse(item);
      });
    }
  );
}

function addSeeAnverseClickListener() {
  Array.from(document.getElementsByClassName("reverse")).forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      seeAnverse(item);
    });
  });
}

/** CARDS */
function selectCard(selItem) {
  clearSelection();
  selItem.classList.add("selected");
  var buttons = selItem.getElementsByTagName("button");
  var allSelectionButtons = selItem.getElementsByClassName("fa-check-circle");
  Array.from(allSelectionButtons).forEach(
    (element) => (element.style.display = "inline")
  );
}

function clearSelection() {
  var allCards = document.getElementsByClassName("card");
  Array.from(allCards).forEach((element) =>
    element.classList.remove("selected")
  );
  var allSelectionButtons = document.getElementsByClassName("fa-check-circle");
  Array.from(allSelectionButtons).forEach(
    (element) => (element.style.display = "none")
  );
}

function seeReverse(selItem) {
  var anverse =
    selItem.parentElement.parentElement.getElementsByClassName("anverse");
  Array.from(anverse).forEach(function (element) {
    element.style.display = "none";
  });
  var reverse =
    selItem.parentElement.parentElement.getElementsByClassName("reverse");
  Array.from(reverse).forEach(function (element) {
    element.style.display = "block";
  });
}

function seeAnverse(selItem) {
  var anverse =
    selItem.parentElement.parentElement.getElementsByClassName("anverse");
  Array.from(anverse).forEach((element) => (element.style.display = "block"));
  var reverse =
    selItem.parentElement.parentElement.getElementsByClassName("reverse");
  Array.from(reverse).forEach((element) => (element.style.display = "none"));
}
