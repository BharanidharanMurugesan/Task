// Logout button
logout.addEventListener("click", function() {
    let confirmLogout = confirm("Are you sure you want to logout?");
    if(confirmLogout){
      axios.get("/logout")
      .then(() => {
          window.location.href = "logout.html";
      })
      .catch(error => {
          console.log(error);
      });
    }
  });
  