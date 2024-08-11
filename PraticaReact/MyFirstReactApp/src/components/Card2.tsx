//Interface para definir propiades
interface Props {
  body: string;
}
function Card2(props: Props) {
  const { body } = props;

  const width = {
    width: "350px",
  };
  return (
    <div className="container">
      <div className="card" style={width}>
        <div className="card-body"> {body}</div>
      </div>
    </div>
    //
  );
}
export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
export default Card2;
