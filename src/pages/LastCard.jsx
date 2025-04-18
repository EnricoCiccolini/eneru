import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import arrayultimoreparto from "../data/array"

function LastCard() {

    const { slug } = useParams()


    const array = arrayultimoreparto.find(ele => (ele.slug == slug))
    console.log(array)

    return <div>


        <div className="card" >
            <img src={array.image} className="card-img-top" alt="ultimo" />
            <div className="card-body">
                <h5 className="card-title">{array.title}</h5>
                <p className="card-text">{array.body}</p>
                <Link className="btn btn-primary" to={`/games/ultimo/${array.n1}`} >{array.choice1} </Link>
                <Link className="btn btn-primary" to={`/games/ultimo/${array.n2}`} >{array.choice2} </Link>
            </div>
        </div>
    </div>
}


export default LastCard