const axios = require("axios");

const RequireAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw Error("Token required");
    }
    const token = req.headers.authorization.split(" ")[1];
    const res = await axios.get(
      "https://dev-vvavubejfc3hoy2m.us.auth0.com/userinfo",
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    const userInfo = await res.data;

    req.user = userInfo;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = RequireAuth;
