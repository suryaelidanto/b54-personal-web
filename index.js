const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

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
app.delete("/blog/:id", deleteBlog);

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

function blog(req, res) {
  res.render("blog", { data });
}

function addBlog(req, res) {
  const { title, content } = req.body;

  data.unshift({
    title,
    content,
    image:
      "https://images.pexels.com/photos/21558419/pexels-photo-21558419/free-photo-of-black-and-white-photograph-of-daisies-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  });

  res.redirect("blog");
}

function deleteBlog(req, res) {
  const { id } = req.params;

  data.splice(id, 1);
  res.redirect("/blog");
}

function editBlog(req,res) {
  const {title, content, id} = req.body

  data[id] = {
    title,
    content
  }

  res.redirect("/blog")
}

function addBlogView(req, res) {
  res.render("add-blog");
}

function editBlogView(req, res) {
  const { id } = req.params; // 0

  const selectedData = data[id];
  selectedData.id = id

  res.render("edit-blog", { data: selectedData });
}

function contact(req, res) {
  res.render("contact");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function blogDetail(req, res) {
  const { id } = req.params;

  const data = {
    id: id,
    title: "Title 1",
    content: "Content 1",
  };

  res.render("blog-detail", { data: data });
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
