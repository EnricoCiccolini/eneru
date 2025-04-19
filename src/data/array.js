

const arrayUltimoReparto = [

    {
        slug: ":1",
        body: "Benvenuto nell'Ultimo Reparto. Sei entrato in un ospedale psichiatrico abbandonato, dove nessuno ha il coraggio di addentrarsi. I corridoi sono silenziosi, ma senti dei passi in lontananza. Una voce ti sussurra:'Non andare più avanti'.",
        title: "Un letto d'ospedale in un corridoio spettrale",
        image: "/letto.jpg",
        choice1: 'secgli la porta 1',
        choice2: 'scegli la porta 2',
        n1: ":2",
        n2: "",
        sound: ''


    },
    {
        slug: ":2",
        body: "Davanti a te ci sono due porte. Una sembra vecchia e abbandonata, l'altra sembra essere appena stata aperta da qualcuno... ma forse è solo un'illusione.",
        title: "Quale porta sceglierai?",
        image: "/porta.png",
        choice1: "Entra nella porta di legno",
        choice2: "Entra nella porta aperta",
        n1: ":3",
        n2: ":4",
        sound: ""
    },
    {
        slug: ":3",
        body: "La porta scricchiola mentre entri. La stanza è vuota, ma un diario sul pavimento cattura la tua attenzione. Le sue pagine sono piene di frasi incomprensibili, ma una ti colpisce: 'Se continui a leggere, non potrai più uscire.'",
        title: "Stanza d'ospedale spoglia con un letto e un diario aperto sul pavimento.",
        image: "/lettino.png",
        choice1: "Leggi il diario.",
        choice2: "Torna nel corridoio",
        n1: ":5",
        n2: ":6",
        sound: ""
    },
    {
        slug: ":4",
        body: "Entri in una stanza piena di attrezzi medici abbandonati. L'aria è pesante e un'ombra si muove rapidamente nello specchio.Una voce ti sussurra: 'Non dovresti essere qui.'",
        title: "C'è qualcuno?",
        image: "/attrezzi.png",
        choice1: "Esamina lo specchio.",
        choice2: "Scappa dalla stanza.",
        n1: ":7",
        n2: ":8",
        sound: ""
    },
    {
        slug: ":5",
        body: "Mentre leggi, le parole sembrano farsi sempre più inquietanti. Il tuo respiro si fa più pesante, la stanza inizia a distorcersi. All'improvviso, la tua mente è sopraffatta. La follia ti sta inghiottendo.",
        title: "Scritte inquietanti e disegni disturbanti",
        image: "/book.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
    {
        slug: ":6",
        body: "Decidi di tornare nel corridoio, ma ora sembra ancora più angusto. Un rumore improvviso ti fa voltare. Un paziente, con uno sguardo vuoto, ti sta fissando. Cosa fai?",
        title: "Il paziente ti guarda..",
        image: "/sedia.png",
        choice1: "Avvicinati al paziente.",
        choice2: " Fuggi lungo il corridoio.",
        n1: ":9",
        n2: ":10",
        sound: ""
    },
    {
        slug: ":7",
        body: "Specchiandoti non vedi il tuo riflesso, ma un'oscura figura appare al tuo posto. Sembra quasi voler uscire da quel vetro. Cosa fai?",
        title: "Sembra ci sia una presenza..",
        image: "/paziente.png",
        choice1: "Distruggi lo specchio.",
        choice2: "Scappa dalla stanza",
        n1: ":11",
        n2: ":12",
        sound: ""
    },
    {
        slug: ":8",
        body: "Stai per fuggire dalla stanza quando d'un tratto la porta si chiude, impedendoti di uscire. Voltandoti scopri che quella strana presenza si è materializzata di fronte a te, ripetendo strane parole... la follia ha preso il tuo possesso.",
        title: "Sembra una figura spettrale",
        image: "/voltoSpecchio.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
    {
        slug: ":9",
        body: "Ti avvicini al paziente, che sembrava essere fermo immobile, ma purtroppo per te non è così. Comincia ad allungare le sue mani verso il tuo volto e d'un tratto... la follia ti appartiene.",
        title: "Sicuro di avvicinarti?",
        image: "/sediaRotelle.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
    {
        slug: ":10",
        body: "Stai fuggendo a perdifiato. Il corridoio sembra non avere mai fine, ma d'un tratto vedi una porta, sul lato, leggermente diversa dalle altre. Cosa fai?",
        title: "Sembra un corridoio infinito..",
        image: "/corridoio.png",
        choice1: "Apri una porta laterale.",
        choice2: "Continui a fuggire.",
        n1: ":13",
        n2: ":14",
        sound: ""
    },
    {
        slug: ":11",
        body: " Infrangendo lo specchio, si apre un varco, colmo di ombre ed oscurità. Un passo avanti o indietro possono decidere del tuo destino.",
        title: "Specchio rotto che rivela un vortice oscuro e pieno di ombre al suo interno",
        image: "/nuvole.png",
        choice1: "Entra nel varco.",
        choice2: "Fuggi dalla stanza",
        n1: ":15",
        n2: ":16",
        sound: ""
    },
    {
        slug: ":12",
        body: " Vai verso la porta per fuggire, ma l'ombra intravista prima si materializza lì con te. D'un tratto ti ritrovi legato ad una sedia, mentre l'ombra, con un filo di voce, riempie la tua testa con la più profonda follia!",
        title: "Sembra una figura oscura",
        image: "/ombra.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
    {
        slug: ":13",
        body: " Apri la porta e ti ritrovi di fronte il paziente di prima! Questo notandoti ti attacca, ferendoti e cadi a terra, senza forze.",
        title: "Sembra un uomo folle",
        image: "/psycho.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
    {
        slug: ":14",
        body: "Continui a fuggire: sembra che il corridoio non avrà mai fine. Quando le forze stanno per lasciarti, scorgi una porta diversa dalle altre, più grande. La spalanchi e ti ritrovi fuori dall'ospedale. Segnato dagli avvenimenti vissuti, ma libero!",
        title: "Sembra un'uscita",
        image: "/portone.png",
        choice1: "HAI VINTO!",
        choice2: "",
        n1: "",
        n2: "",
        sound: ""
    },
    {
        slug: ":15",
        body: "Entri in quel turbine di ombre ed oscurità, quando d'un tratto tutto svanisce. Sei fuori dall'edificio, sul prato, scosso e senza memoria dell'accaduto. Non sai perché sei lì, ma una cosa ti è certa: meglio stare lontani da quell'ospedale abbandonato!",
        title: "L'edificio abbandonato",
        image: "/edificio.png",
        choice1: "HAI VINTO!",
        choice2: "",
        n1: "",
        n2: "",
        sound: ""
    },
    {
        slug: ":16",
        body: "Corri verso la porta per fuggire, ma purtroppo il portale nello specchio è rimasto aperto per troppo tempo. Le entità che vi erano celate escono fuori, prendendoti con loro e relegandoti allo specchio per sempre. Il vetro si ripara, con te al suo interno.",
        title: "Sembra un uomo terrorrizzato..",
        image: "/paziente.png",
        choice1: "HAI PERSO!",
        choice2: "",
        n1: ":1",
        n2: ":",
        sound: ""
    },
];
export default arrayUltimoReparto;