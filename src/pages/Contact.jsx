import Buildnow from "../components/Buildnow"

export default function Contact() {
    return (
        <div>
            <h2 class="text-center my-5">Contact us</h2>     
            <div class="container my-5 form-container">
                <div class="row my-5">
                <div class="col ">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                </div>
                <div class="my-5">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>  
        <Buildnow />
        </div>
      )
};