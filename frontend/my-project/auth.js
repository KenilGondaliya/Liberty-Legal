
export const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  
  export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };
  
  
  export const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
  };
  
  // Check if the user is authenticated by checking for an access token
  export const isAuthenticated = () => {
    return !!getAccessToken(); 
  };
  
  
  export const clearTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };
  