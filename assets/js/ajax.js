function getTestimonialData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText));
    };

    xhr.onerror = () => {
      reject("Network Error!");
    };

    xhr.send();
  });
}

async function allTestimonial() {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/866829d0e4851e873f3a"
  );

  if (!testimonials.length) {
    return (document.getElementById("testimonials").innerHTML =
      `<h1>Data not found!</h1>`);
  }

  const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
                  <img src="${testimonial.image}" class="profile-testimonial" />
                  <p class="quote">"${testimonial.content}"</p>
                  <p class="author">- ${testimonial.author}</p>
              </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

async function filterTestimonial(rating) {
  const testimonials = await getTestimonialData(
    "https://api.npoint.io/866829d0e4851e873f3a"
  );

  const filteredTestimonial = testimonials.filter(
    (testimonial) => testimonial.rating == rating
  );

  if (!filteredTestimonial.length) {
    return (document.getElementById("testimonials").innerHTML =
      `<h1>Data not found!</h1>`);
  }

  const testimonialHTML = filteredTestimonial.map((testimonial) => {
    return `<div class="testimonial">
                      <img src="${testimonial.image}" class="profile-testimonial" />
                      <p class="quote">"${testimonial.content}"</p>
                      <p class="author">- ${testimonial.author}</p>
                  </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
}

allTestimonial();
