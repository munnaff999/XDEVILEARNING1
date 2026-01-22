function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById("loginBox").style.display="none";
    document.getElementById("userBox").style.display="block";
    document.getElementById("userEmail").innerText = user.email;
  }
});