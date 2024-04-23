// const blogs = [];

// function addBlog(e) {
//   e.preventDefault();

//   const title = document.getElementById("input-blog-title").value; // title 1
//   const content = document.getElementById("input-blog-content").value; // content 1
//   let image = document.getElementById("input-blog-image").files; // cat.jpg
//   // const nodejs = document.getElementById("nodejs").checked // checked = true
//   // const python = document.getElementById("python").checked

//   // let tech = []

//   // for (let x = 0; x < technologies.length; x++) {
//   //     if (technologies[x].checked) {
//   //         tech.push(technologies[x].value)
//   //     }
//   // }

//   image = URL.createObjectURL(image[0]);

//   const createdAt = new Date();

//   // localStorage.setItem("blog", JSON.stringify({
//   //     title,
//   //     content,
//   //     imageLink
//   // }))

//   const blog = {
//     title,
//     content,
//     image,
//     createdAt,
//   };

//   console.log("blog");
//   blogs.unshift(blog);
//   renderBlog();

//   console.log("blogs", blogs);
// }

// function renderBlog() {
//   let html = "";

//   for (let index = 0; index < blogs.length; index++) {
//     // let renderTechIcons = ''

//     // if (blogs[index].nodejs) {
//     //     renderTechIcons += `<i class="fa-brands fa-node"></i>`
//     // }

//     // if (blogs[index].python) {
//     //     renderTechIcons += `<i class="fa-brands fa-python"></i>`
//     // }

//     html += `
//         <div class="card d-flex flex-row">
//         <img
//           src="${blogs[index].image}"
//           class="card-img-top w-25"
//           alt="..."
//         />
//         <div class="card-body d-flex flex-column align-items-start">
//           <div class="w-100 d-flex justify-content-end">
//             <a href="#" class="btn btn-secondary mx-2">Edit Post</a>
//             <a href="#" class="btn btn-warning">Delete Post</a>
//           </div>
//           <h5 class="card-title fw-bold">${blogs[index].title}</h5>
//             <p class="card-text">
//             ${getFullTime(blogs[index].createdAt)} | Ichsan Emrald Alamsyah
//             </p>
//           <p class="card-text">
//           ${blogs[index].content}
//           </p>
//           <p class="card-text">
//           ${getDistanceTime(blogs[index].createdAt)}
//           </p>
//         </div>
//       </div>
// `;
//   }

//   document.getElementById("contents").innerHTML = html;
// }

// function getFullTime(dates) {
//   // date formatter
//   let minutes = dates.getMinutes();
//   let hours = dates.getHours();
//   const date = dates.getDate();
//   const month = dates.getMonth();
//   const year = dates.getFullYear();

//   // solusi 1 : bikin condition

//   // if(bulan == 0) bulan = "January"
//   // if(bulan == 1) bulan = "February"
//   // if(bulan == 2) bulan = "March"

//   // solusi 2 : bikin array, isinya January - December
//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   return `${date} ${months[month]} ${year} ${hours}:${minutes} WIB`;
// }

// function getDistanceTime(timePost) {
//   // fungsi untuk menghitung jarak antara waktu ketika kita posting blog dengan waktu sekarang
//   let timeNow = new Date();

//   let distance = timeNow - timePost; // hasilnya miliseconds -> 1 detik = 1000ms

//   // Math.floor() // membulatkan ke bawah, ex : 1.3 -> 1
//   // Math.round() // membulatkan ke terdekat, ex : 1.3 -> 1 OR 1.7 -> 2
//   // Math.ceil() // membulatkan ke atas, ex : 1.3 -> 2
//   const seconds = Math.floor(distance / 1000);
//   const minutes = Math.floor(distance / 1000 / 60);
//   const hours = Math.floor(distance / 1000 / 60 / 60);
//   const day = Math.floor(distance / 1000 / 60 / 60 / 24);

//   if (seconds < 60) {
//     return seconds + " seconds ago";
//   } else if (minutes < 60) {
//     return minutes + " minutes ago";
//   } else if (hours < 60) {
//     return hours + " hours ago";
//   } else if (day < 24) {
//     return day + " day ago";
//   }
// }

// renderBlog();

// setInterval(() => {
//   renderBlog();
// }, 1000);
