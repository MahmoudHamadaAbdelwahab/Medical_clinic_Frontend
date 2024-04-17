import { Link } from "react-router-dom";
import img1 from "./../../img/gallery/teamDoc3.png";
const Slider = () => {
    return (
    <div className="slider text-center">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-center">
                <div className="col-sm-5 col-lg-6">
                    <img
                    className="pt-7 pt-md-0 img-fluid"
                    src={img1}
                    alt="First slide"
                    />
                </div>
                <div className="cart col-sm-7 col-lg-6">
                    <h3 className="slider-title">We're determined for your better life.</h3>
                    <p className="slider-text"> There is a big discount Up to 50% discount on your purchase</p>
                   <Link to="/contactUs">
                    <button>make an appointment </button>
                   </Link>
                </div>
            </div>
        </div>
    </div>
     
    )
}

export default Slider
