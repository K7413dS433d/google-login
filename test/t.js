const fetchGoogleUserProfile = async (accessToken) => {
  const apiUrl = "https://www.googleapis.com/oauth2/v3/userinfo"; // URL for user info

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Pass the access token in the header
      },
    });

    if (!response.ok) {
      //   console.log(response.statusText);
      throw new Error("Failed to fetch user profile.");
    }

    const userProfile = await response.json();
    console.log("User Profile:", userProfile);
    return userProfile; // Return the user profile
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};
