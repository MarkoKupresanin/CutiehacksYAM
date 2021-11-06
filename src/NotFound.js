import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFoundDiv">
            <h1>Error 404: Resource Not Found</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
}
 
export default NotFound;