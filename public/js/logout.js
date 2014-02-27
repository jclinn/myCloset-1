function logout2() {
  console.log("in logout");
  localStorage.clear();
  window.location.href = '/';
}