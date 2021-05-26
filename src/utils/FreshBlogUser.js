class FreshBlogUser {
  loggedIn = false;
  isAuthor = false;

  constructor(userResponse) {
    if (userResponse && userResponse.clientPrincipal !== null) {
      const { clientPrincipal } = userResponse;
      this.isLoggedIn = true;
      this.isAuthor = clientPrincipal.userRoles.find(
        (role) => role === "author"
      );
    }
  }
}

export default FreshBlogUser;
