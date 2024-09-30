export default function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark py-3"
      aria-label="Offcanvas navbar large"
    >
      <div class="container-fluid px-4">
        <a class="fs-3 fw-bold text-danger" href="/">
          Red Tiger Construction
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label"></h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active btn btn-primary"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-dark" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-dark" href="/contact">
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn btn-dark" href="/services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
