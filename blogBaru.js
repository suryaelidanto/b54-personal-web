var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-image").files[0];
    let imageURL = URL.createObjectURL(image)


    if (title === "") {
        return alert("Please entered your title!")
    } else if (startdate === "") {
        return alert("Please entered your startdate!")
    } else if (enddate === "") {
        return alert("Please entered your enddate!")
    } else if (content === "") {
        return alert("Please entered your content!")
    } else if (imageURL === "") {
        return alert("Please entered your image!")
    }

    if (startdate > enddate) {
        return alert("The end date cannot be less than the start date")
    }
    // Setiap proses yang ada pada Javascript proses berurutan


    // Proses Penghitungan durasi
    let startDatePart = startdate.split("/")
    let endDatePart = enddate.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
    let formatEndtDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

    let newStartDate = new Date(formatStartDate)
    let newEndtDate = new Date(formatEndtDate)

    // konversi pengurangan dalam milisecond
    let timeDifference = newEndtDate - newStartDate

    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    // tugas cari tahu kenapa 1000 * 60 * 60 * 24
    // Jadi dalam 1 detik 1000 ms, dalam 1 detik ada 60, 1 menit ada 60 detik dalam 1 hari ada 24 jam
    let differenceInMonths = Math.floor(differenceInDays / 30.44)
    // Jadi untuk bulan tidak setiap bulan itu 30 hari, jadi diambil tengah2nya 30.44, karna biasanya bulan ada yang 31, 28, 29.
    let differenceInYears = Math.floor(differenceInMonths / 12)

    let duration;

    if (differenceInYears > 0) {
        duration = `${differenceInYears} years`
    } else if (differenceInMonths > 0) {
        duration = `${differenceInMonths} month`
    } else {
        duration = `${differenceInDays} days`
    }
    // Untuk menampilkan hasil 2 tahun, 3 bulan, 1 hari, 4 jam, 1 detik (Tugas kalian)


    // Jadi ketika data inputan si startdate dan juga enddate masuk akan di proses di perhitungan durasi
    // start date = 05/04/2024
    // end date = 12/04/2024
    // Format tanggal diatas merupakan format dari Indonesia

    // ["05", "04", "2024"]
    //   0     1      2
    // Format tanggalnya akan diubah menjadi seperti :
    // ["2024", "04", "05"] : line 35
    // ["2024", "04", "12"] : line 36
    //   2       1     0
    // Format tanggal mengacu pada penulisan tanggal secara Global

    // Dikonversi ke Milisecond : line 42

    // 1712250000000 : start date
    // 1712854800000 : end date
    // ------------- (-)
    // 604800000

    // 604800000 -> dikonversi ke hari menjadi 7 Hari


    dataProject.push({
        title: title,
        startdate: startdate,
        enddate: enddate,
        content: content,
        image: imageURL,
        duration: duration
    })

    console.log(dataProject);

    newData()
}


function newData() {
    document.getElementById("list-project").innerHTML = ""
    // ini berfungsi sebagai insiasi penampung data baru untuk membuat si list-project menjadi kosong
    // baru dibawahnya diinisiasi isi dari inputan form

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]

        // i ke-1 = 0
        // i ke-2 = 1
        // i ke-3 = 2

        // karena kita punya inputan dataProject yang panjangnya sesuai dengan inputan form akan menghitungnya
        // misal inputannya jumlahnya ada 3 berati length = 3

        // i++
        // +1 setiap prosesnya

        // jadi karena i dimulai dari 0
        // maka i++ :
        // 0     = 0
        // 0 + 1 = 1
        // 1 + 1 = 2

        // tugas mencari apa itu perulangan for lebih lanjut

        document.getElementById("list-project").innerHTML += `
        <div id="list-project">
        <img src="${project.image}" alt="ini adalah gambar project">
        <h3>${project.title}</h3>
        <p>${project.startdate} - ${project.enddate}</p>
        <p>Durasi : ${project.duration}</p>
        <p>${project.content}</p>
         </div>
        
        `
    }
    // Tugasnya adalah membuat CSS yang bagus sebaik yang kalian bisa untuk mempercantik halaman websitenya
}