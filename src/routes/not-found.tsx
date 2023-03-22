
import { NavLink } from "react-router-dom";

export const NotFound = () => {

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Страницата не може да бъде намерена.</h2>
            <p>
              <NavLink className="custom-btn btn" to="/">Към началната страница</NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}