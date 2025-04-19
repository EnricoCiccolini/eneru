import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrayUltimoReparto from "../data/array";

export default function LastCard() {

    const { slug } = useParams();

    const array = arrayUltimoReparto.find(ele => (ele.slug == slug));
    array ? document.body.classList.add('img-back') : '';

    const scelta = array.choice1 && array.n1 || array.choice2 && array.n2;

    return <div className="d-flex justify-content-center mt-5">
        <div className="card" >
            <img src={array.image} className="card-img-top" alt="ultimo" />
            <div className="card-body">
                <h5 className="card-title">{array.title}</h5>
                <p className="card-text">{array.body}</p>
                <div className="d-flex justify-content-center">
                    {scelta ? (
                        <>
                            {array.choice1 && array.n1 && (
                                <Link className="btn btn-secondary mx-2" to={`/games/ultimo/${array.n1}`}>
                                    {array.choice1}
                                </Link>
                            )}
                            {array.choice2 && array.n2 && (
                                <Link className="btn btn-secondary" to={`/games/ultimo/${array.n2}`}>
                                    {array.choice2}
                                </Link>
                            )}
                        </>
                    ) : (
                        <div className="text-center mt-4">
                            <h4>HAI VINTO!</h4>
                            <Link to="/" className="btn btn-success mt-3">Torna alla Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
};
