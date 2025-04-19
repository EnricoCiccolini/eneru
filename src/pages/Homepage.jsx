export default function Homepage() {

    document.body.classList.remove('img-back');
    return (
        <>
            <h1 className="text-red fw-bold text-center mt-4 mb-4">BOOK ROOMS</h1>
            <div class="container text-center">
                <div class="row align-items-start gap-3">
                    <div class="col-3">
                        <h3 className="fw-bold">Cos'è una Book Room?</h3>
                        <p>Una Book Room è come un'escape room, però virtuale!</p>
                    </div>
                    <div class="col-3">
                        <h3 className="fw-bold">Lo scopo</h3>
                        <p>Devi indovinare attraverso delle scelte, quale sia la via giusta per uscirne vivo!</p>
                    </div>
                    <div class="col-3">
                        <h3 className="fw-bold">Pronto a metterti alla prova?</h3>
                        <p>"Logica, intuito e creatività: le Book Room sono il modo perfetto per mettere alla prova il tuo cervello divertendoti!"</p>
                    </div>
                    <div class="col-3">
                        <h3 className="fw-bold">Un divertimento assicurato</h3>
                        <p>Chiunque abbia provato le nostre Book Room ne è uscito soddisfatto!</p>
                    </div>
                    <div class="col-3">
                        <h3 className="fw-bold">Coinvolgimento narrativo</h3>
                        <p>Ogni Book Room è basata su una storia unica che ti trascina dentro un mondo misterioso. Sei il protagonista: le tue scelte scrivono il finale!</p>
                    </div>
                    <div class="col-3">
                        <h3 className="fw-bold">Gioca dove e quando vuoi</h3>
                        <p>Ti basta un dispositivo e una connessione: nessun orario, nessun limite. Vivi l’esperienza ovunque ti trovi, da solo o in compagnia!</p>
                    </div>
                </div>
            </div>
            <img className="img-home" src='../../public/escape.jpg'></img>
        </>
    )
};
