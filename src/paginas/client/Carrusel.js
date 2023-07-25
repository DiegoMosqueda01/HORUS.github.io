import React from "react";

function Carrusel() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../image/sodas.jpg"
              class="d-block w-100"
              alt="..."
              height={400}
            />
            <div class="carousel-caption d-none d-md-block">
              <p>
                Soda de limon, naranja, uva, manzana, fresa, piña, mango, etc.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../image/martinis.png"
              class="d-block w-100"
              alt="..."
              height={400}
            />
            <div class="carousel-caption d-none d-md-block">
              <p>Martinis de sabores con alcohol, sin alcohol, etc.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../image/coctel.png"
              class="d-block w-100"
              alt="..."
              height={400}
            />
            <div class="carousel-caption d-none d-md-block">
              <p>Copteles de licores, tequila, ron, vodka, whisky, etc.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
