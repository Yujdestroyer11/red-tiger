import construction from "../../public/images/construction.jpg";
import image4 from "../../public/images/image4.jpg";

export default function Hero() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-sm-12 col-lg-6">
          <img
            src={image4}
            class="d-block mx-lg-auto img-fluid img-thumbnail"
            alt="People at the construction site"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-2 fw-bold text-body-emphasis lh-1 mb-3">
            Let's <span class="text-primary-emphasis">build</span> your dream
            home. <span class="text-primary-emphasis">Together</span>
          </h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/contact">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Contact us
              </button>
            </a>
            <a href="/services">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Services
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
