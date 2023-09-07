module.exports = (req, res, next) => {
  const reliability = 0.8 // use 1 for 100% success rate
  setTimeout(function () {
    if (Math.random() > reliability) {
      res.status(500).jsonp({
        error: 'Random backend error',
      })
    } else {
      next()
    }
  }, Math.max(200, Math.min(700, Math.random() * 1000)))
}
