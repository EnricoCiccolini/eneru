import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Games() {

    function removeBg() {
        document.body.classList.remove('img-back');
        document.body.classList.remove('img-back-2');
    };

    useEffect(() => {
        removeBg();
    }, []);

    return <div className="d-flex justify-content-center mt-5">
        <div className="card mx-3 ">
            <img src="/manicomio.jpg" className="card-img-top" alt="ultimo" />
            <div className="card-body">
                <h3 className="card-title">L'ultimo reparto</h3>
                <p className="card-text fw-bold">Sarai solo, un manicomio, spettrale, un'unica uscita... Riuscirai a trovarla?</p>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-secondary" to={"/games/ultimo/:1"} >Gioca ora </Link>
                </div>
            </div>
        </div>

        <div className="card">
            <img src="/mano.jpg" className="card-img-top" alt="ultimo" />
            <div className="card-body">
                <h3 className="card-title">sepolti vivi </h3>
                <p className="card-text fw-bold">Sarai solo, sotto terra, in compagnia di ratti e scheletri, un'unica uscita... Riuscirai a trovarla?</p>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-secondary" to={"/games/sepolti/:1"} >Gioca ora </Link>
                </div>
            </div>
        </div>
    </div>
};
