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

  data.push({
    title,
    content,
  });

  res.redirect("blog");
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
        content : "Content 1"
    }

  res.render("blog-detail", {data: data});
}

app.listen(port, () => {
  console.log("Server is running on PORT :", port);
});
