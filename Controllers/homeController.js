const HomeController = (req, res) => {
  res.render("home", { title: "Home" });
};

module.exports = HomeController;
