const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 404;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from the Backend";

  console.error(
    `[${req.method}]  ${req.path} >> StatusCode:: ${status}, Message:: ${extraDetails} `
  );

  return res.status(status).json({ status, message, extraDetails });
};

module.exports = errorMiddleware;
