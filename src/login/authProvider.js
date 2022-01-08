const authProvider = {
  // called when the user attempts to log in
  login: (loginInfo) => {
    if (loginInfo == null || loginInfo.userInfo == null) {
      return Promise.reject();
    }

    const userInfo = loginInfo.userInfo;
    localStorage.setItem("name", userInfo.name);
    localStorage.setItem("role", userInfo.role);
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("name");
    return Promise.resolve();
  },
  getIdentity: () => {

  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("name");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("name") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const role = localStorage.getItem("role");
    return role ? Promise.resolve(role) : Promise.resolve("gust");
  },
};

export default authProvider;
