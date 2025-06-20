var siteNameInput = document.getElementById("siteNameId");
var siteLinkInput = document.getElementById("siteLinkId");
var siteList = [];

if (localStorage.getItem("siteList") == null) {
  siteList = [];
}
else {
  siteList = JSON.parse(localStorage.getItem("siteList"));  
  displaySite();
}

function addSite() {
  var bookSite = {
    siteName: siteNameInput.value,
    siteLink: siteLinkInput.value,
  };

  siteList.push(bookSite);
  clearIinputs();
  displaySite();
  localStorage.setItem("siteList", JSON.stringify(siteList));
  // console.log(siteList);
}
// ! clear inputs
function clearIinputs() {
  siteNameInput.value = "";
  siteLinkInput.value = "";
}
// ! display
function displaySite() {
  var displayBox = ``;
  for (var i = 0; i < siteList.length; i++) {
    document.getElementById("tableBodyId").innerHTML = displayBox += ` <tr class="bg-white border-bottom">
            <td class="col-md-3 pt-2 pb-2">${i+1}</td>
            <td class="col-md-3 pt-2 pb-2">${siteList[i].siteName}</td>
            <td class="col-md-3 pt-2 pb-2">
              <button onclick="visitSite(${i})" class="btn btn-visit">
                <i class="fa-solid fa-eye pe-2"></i>visit
              </button>
            </td>
            <td class="col-md-3 pt-2 pb-2">
              <button  onclick="deleteSite(${i})" class="btn btn-delete">
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
          </tr>`;
  }
}
// ! delete site
function deleteSite(index) {
  siteList.splice(index, 1);
  localStorage.setItem("siteList", JSON.stringify(siteList));
  displaySite();
}
// ! visit site
function visitSite(index) {
  var siteLink = siteList[index].siteLink;
  window.open(siteLink, "_blank");
} 
