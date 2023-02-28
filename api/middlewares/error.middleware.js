module.exports = (err, req, res, next) => {
  console.error("\x1b[31m%s\x1b[0m", err);
  return res.status(400).json({ message: err.message });
};
