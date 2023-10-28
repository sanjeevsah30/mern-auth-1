import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Signing in...</span>
    </Spinner>
  );
}

export default Loader;
