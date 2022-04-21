function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({
      status: "fail",
      errors: "Not Authorized! Re-check your HTTP request.",
    });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      if (err.name == "TokenExpiredError") {
        const refreshToken = req.session.refreshToken;
        if (refreshToken == null)
          return res.status(401).json({
            status: "fail",
            errors: "Not Authorized! Re-check your HTTP request.",
          });
        // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
        // this code will work after using Redis as memcache.
        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err, user) => {
            if (err)
              return res.status(403).json({
                status: "fail",
                errors: "You are forbidden to access this endpoint.",
              });
            req.session.accessToken = generateAccessToken({ name: user.name });
            req.user = user;
            next();
          }
        );
      }
    } else {
      return res.status(403).json({
        status: "fail",
        errors: "You are forbidden to access this endpoint.",
      });
    }
    req.user = user;
    next();
  });
}

module.exports = { generateAccessToken, authenticateToken };
