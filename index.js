const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const config = require("./config/config.json");
const { Sequelize, QueryTypes, where } = require("sequelize");
const sequelize = new Sequelize(config.development);
const blogModel = require("./models").blog;

// app.set = setting variable global, configuration, dll
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

// app.use = setting middleware
app.use("/assets", express.static(path.join(__dirname, "./assets")));

// body parser
app.use(express.urlencoded({ extended: false }));
// extended : false => querystring bawaan dari express
// extended : true = > menggunakan query strign third party => qs

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

const data = [];

// service
function home(req, res) {
  res.render("index");
}

async function blog(req, res) {
  // const query = "SELECT * FROM blogs";
  // const data = await sequelize.query(query, { type: QueryTypes.SELECT });

  const data = await blogModel.findAll();

  console.log("data", data);

  res.render("blog", { data });
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

  console.log("blog inserted", data);

  res.redirect("blog");
}

async function deleteBlog(req, res) {
  const { id } = req.params;

  // const query = `DELETE FROM blogs WHERE id=${id}`;
  // const data = await sequelize.query(query, { type: QueryTypes.DELETE });

  const data = await blogModel.destroy({
    where: { id },
  });

  console.log("blog deleted", data);

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

  console.log("updated blog", data);

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

  console.log("blog detail", data);

  res.render("blog-detail", { data });
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
