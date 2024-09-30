import image2 from "../../public/images/image2.jpg";

export default function Headline() {
  return (
    <div class="container my-5">
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1 kanit">
            Project Arylla
          </h2>
          <p class="lead rubik">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="hover-image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={image2}
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
