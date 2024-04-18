class Testimonial {
    image = ""
    content = ""
    author = ""

    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        throw new Error("You should use one of 'AuthorTestimonial' or 'CompanyTestimonial'")
    }
}

class AuthorTestimonial extends Testimonial {
    html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class CompanyTestimonial extends Testimonial {
    html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author} Company</p>
        </div>`
    }
}

const testimonial1 = new AuthorTestimonial("https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600", "Mantap sekali jasanya!", "Jimih Setiawan")

const testimonial2 = new AuthorTestimonial("https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600", "Keren kamu bro!", "Adika Wahyu Sulaiman")

const testimonial3 = new CompanyTestimonial("https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600", "Apasih bang!", "Almas Fadhillah")

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML