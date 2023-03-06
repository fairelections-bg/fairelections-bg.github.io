import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Извиняваме се, възникна неочаквана грешка.</h2>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}