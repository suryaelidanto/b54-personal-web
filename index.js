const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const config = require("./config/config.json");
const { Sequelize, QueryTypes, where } = require("sequelize");
const sequelize = new Sequelize(config.development);
const blogModel = require("./models").blog;
const User = require("./models").user;
const bcrypt = require("bcrypt");
const session = require("express-session")
const flash =  require("express-flash")

// app.set = setting variable global, configuration, dll
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

// app.use = setting middleware
app.use("/assets", express.static(path.join(__dirname, "./assets")));

// body parser
app.use(express.urlencoded({ extended: false }));
// extended : false => querystring bawaan dari express
// extended : true = > menggunakan query strign third party => qs

app.use(session({
  name: "mysession",
  secret : "rahasiabangetdeh",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge : 1000 * 60 * 60 * 24 // 1 hari
  }
}))

app.use(flash())

// route
app.get("/", home);
app.get("/blog", blog);

app.post("/blog", addBlog);
app.post("/edit-blog", editBlog);
app.post("/delete-blog/:id", deleteBlog);

app.get("/add-blog", addBlogView);
app.get("/edit-blog/:id", editBlogView);

app.get("/contact", contact);
app.get("/testimonial", testimonial);
app.get("/blog-detail/:id", blogDetail);

app.get("/login", loginView);
app.get("/register", registerView);

app.post("/login", login);
app.post("/register", register);
app.post("/logout", logout)

function loginView(req, res) {
  res.render("login");
}

async function login(req, res) {
  const { email, password } = req.body;

  console.log("email : ", email);
  console.log("password : ", password);

  const user = await User.findOne({
    where: { email },
  });

  if(!user)  {
    req.flash("danger", "Email is not found!")
    return res.redirect("/login")
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if(!isPasswordValid) {
    req.flash("danger", "Password is wrong!")
    return res.redirect("/login")
  }

  req.session.isLogin = true
  req.session.user = {
    name : user.name,
    email : user.email
  }
  
  req.flash("success", "Login berhasil!")
  res.redirect("/")
}

function registerView(req, res) {
  res.render("register");
}

async function register(req, res) {
  const { name, email, password } = req.body;

  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.redirect("/");
}

async function logout(req,res) {
  req.session.destroy(function(err) {
    if(err) return console.error("Logout failed!")

    console.log("Logout success!")
    res.redirect("/")
  })
}

// service
function home(req, res) {
  res.render("index");
}

async function blog(req, res) {
  // const query = "SELECT * FROM blogs";
  // const data = await sequelize.query(query, { type: QueryTypes.SELECT });

  const data = await blogModel.findAll();

  const isLogin = req.session.isLogin
  const user = req.session.user

  console.log(isLogin, user)

  res.render("blog", { data, isLogin, user });
}

async function addBlog(req, res) {
  const { title, content } = req.body;

  // const query = `INSERT INTO blogs(title,content,image,"createdAt","updatedAt") VALUES('${title}','${content}','https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg', now(), now())`;
  // const data = await sequelize.query(query, { type: QueryTypes.INSERT });

  const data = await blogModel.create({
    title,
    content,
    image:
      "https://i.pinimg.com/originals/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg",
  });

  res.redirect("blog");
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  // const query = `DELETE FROM blogs WHERE id=${id}`;
  // const data = await sequelize.query(query, { type: QueryTypes.DELETE });

  const data = await blogModel.destroy({
    where: { id },
  });

  res.redirect("/blog");
}

async function editBlog(req, res) {
  const { title, content, id } = req.body;

  // const query  = `UPDATE blogs SET title='${title}', content='${content}' WHERE id=${id}`
  // const data = await sequelize.query(query, {type: QueryTypes.UPDATE})

  const data = await blogModel.update(
    {
      title,
      content,
    },
    {
      where: { id },
    }
  );

  res.redirect("/blog");
}

function addBlogView(req, res) {
  res.render("add-blog");
}

async function editBlogView(req, res) {
  const { id } = req.params;

  const data = await blogModel.findOne({
    where: { id },
  });

  res.render("edit-blog", { data });
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

async function blogDetail(req, res) {
  const { id } = req.params; // 2

  // const query = `SELECT * FROM blogs WHERE id=${id}`
  // const data = await sequelize.query(query, {type: QueryTypes.SELECT})

  // console.log("blog detail ", data[0])

  const data = await blogModel.findOne({
    where: { id },
  });

  res.render("blog-detail", { data });
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
