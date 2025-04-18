import { Link } from "react-router-dom"


function Games() {


    return (
        <>
            <div className="card" >
                <img src="/prova.jpg" className="card-img-top" alt="ultimo" />
                <div className="card-body">
                    <h5 className="card-title">Ultimo reparto</h5>
                    <p className="card-text">Un manicomio , un uscita ... riuscirai a trovarla ?</p>
                    <Link className="btn btn-primary" to={"/games/ultimo/:1"} >prova ora </Link>
                </div>
            </div>
        </>

    )
}
export default Games
