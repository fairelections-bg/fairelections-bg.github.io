
type FraudsItemProps = {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    prevention: string;
}
export const FraudsItem = (props: FraudsItemProps) => {
    return (
        <div className="my-3 my-md-5">
            <h3 className="mb-3 text-center">{props.title}</h3>
            <h4 className="mb-3">{props.subtitle}</h4>
            <div className="row align-items-center">

                <div className="col-md-4">
                    <img src={props.image} className="img-fluid" alt={props.title} />
                </div>

                <div className="col-md-8">
                    <p>{props.description}</p>
                    <p><strong>Как да се предотврати:</strong> {props.prevention}</p>
                </div>
            </div>
        </div>
    );
}