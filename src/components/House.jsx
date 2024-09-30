export default function House(props) {
  return (
    <div class="col">
      <div class="card">
        <img
          src={props.img}
          class="card-img-top"
          alt="..."
          width="200"
          height="300"
        />
        <div class="card-body">
          <h5 class="card-title">{props.price}</h5>
          <p class="card-text">{props.name}</p>
          <a href="#" class="btn btn-primary">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
