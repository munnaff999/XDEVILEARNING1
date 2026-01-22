firebase.auth().onAuthStateChanged(user=>{
  if(user){
    firebase.database().ref("users/"+user.uid+"/balance")
    .on("value", snap=>{
      document.getElementById("balance").innerText = snap.val() || 0;
    });
  }
});

function withdraw(){
  alert("Withdraw request sent (Admin approval)");
}