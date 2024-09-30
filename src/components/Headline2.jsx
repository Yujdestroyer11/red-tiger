import image3 from "../../public/images/image3.jpg";

export default function Headline2() {
  return (
    <div class="container py-5 my-5 px-5 bg-body-tertiary border rounded-3">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1 kanit">
            Project Arabella
          </h2>
          <p class="lead rubik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="hover-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={image3}
            alt=""
            srcset=""
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
    </div>
  );
}
