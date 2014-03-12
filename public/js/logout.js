// clearing all localStorage after user log's out
function logout2() {
  //console.log("in logout");
  localStorage.clear();
  window.location.href = '/';
}