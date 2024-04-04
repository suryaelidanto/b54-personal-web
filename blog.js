var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-image").value;


    if (title === "") {
        return alert("Please entered your title!")
    } else if (startdate === "") {
        return alert("Please entered your start date!")
    } else if (enddate === "") {
        return alert("Please entered your end date!")
    } else if (content === "") {
        return alert("Please entered your content!")
    } else if (imageUrl === "") {
        return alert("Please entered your image!")
    }

    dataProject.push({
        title: title,
        content: content,
        image: image,
    })

    console.log(dataProject);
}


// Fungsi Prefent Default
// 1. untuk menampung nilai yang sudah diinput dari form
// 2. Untuk mencegah browser melakukan refresh, karena type
// dari buttonnya adalah submit yang mana submit secara otomatis merefresh

