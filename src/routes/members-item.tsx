/* eslint-disable react/jsx-no-target-blank */

type MembersItemProps = {
    logo: string;
    url: string;
    name: string;
    description: string;
}
export const MembersItem = (props: MembersItemProps) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
            <a href={props.url} target="_blank">
                <div className="custom-block-wrap text-center pt-4">
                    <img src={props.logo} className="img-fluid" alt={props.name} />
                    <div className="custom-block">
                        <div className="custom-block-body">
                            <h5 className="mb-3 text-center">{props.name}</h5>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}