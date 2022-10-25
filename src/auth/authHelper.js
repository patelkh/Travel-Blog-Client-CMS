//Save credentials
function authenticate(jwt) {
  if (typeof window != "undefined") {
    sessionStorage.setItem("jwt", JSON.stringify(jwt));
    console.log('token added to session storage')
  }
}

//Retrieve credentials
function isAuthenticated() {
  if (typeof window == "undefined") return false;
  if (sessionStorage.getItem("jwt"))
    return JSON.parse(sessionStorage.getItem("jwt"));
  else return false;
}

//Clear credentials
function clearJWT(callback) {
    if(typeof window != "undefined") {
        sessionStorage.remoteItem('jwt')
        callback()
        //signout
    }
}

export { authenticate, isAuthenticated };
