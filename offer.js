function completeOffer(amount){
  const user = firebase.auth().signInWithPopup(provider).currentUser;
  if(!user) return alert("Login first");

  firebase.database().ref("users/"+user.uid+"/balance")
  .transaction(b => (b || 0) + amount);

  alert("Offer Completed! ₹"+amount+" added");
}
