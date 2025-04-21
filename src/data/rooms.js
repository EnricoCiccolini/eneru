const rooms = [
    {
        slug: ":1",
        body: "Sei un manutentore notturno del vecchio cimitero comunale. Durante un sopralluogo, il terreno sotto di te cede improvvisamente. Ti risvegli nella rete fognaria, senza sapere dove ti trovi esattamente. L'aria è pesante. Devi trovare una via d'uscita prima che sia troppo tardi...",
        title: "ENERU SLIDE GAME",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0000.png",
        choice1: 'INIZIO',
        choice2: '',
        n1: ":2",
        n2: "",
        sound: ''
    },

    {
        slug: ":2",
        body: "Sei ancora frastornato, ma sai di non poter rimanere lì fermo. Davanti a te si diramano due cunicoli: uno è illuminato da una luce intermittente, l'altro invece è completamente buio. Cosa fai?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0001.png",
        choice1: 'Entri in quello "illuminato"',
        choice2: 'Entri in quello non "illuminato"',
        n1: ":3",
        n2: ":4",
        sound: ''
    },

    {
        slug: ":3",
        body: "Continuando con difficoltà, nella poca luce a disposizione, trovi sul tuo cammino una vecchia radio arrugginita con una voce quasi incomprensibile che parla. Cosa decidi di fare?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0002.png",
        choice1: 'Ascolti con attenzione.',
        choice2: 'Rompi la radio e vai avanti',
        n1: ":5",
        n2: ":6",
        sound: ''
    },

    {
        slug: ":4",
        body: "Ti incammini nel buio, non sapendo bene dove mettere i piedi. D'un tratto una piccola luce comincia a lampeggiare flebile e abbassando lo sguardo vedi un corpo. Cosa decidi di fare?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0003.png",
        choice1: 'Ignori il corpo e prosegui',
        choice2: 'Controlli il corpo',
        n1: ":7",
        n2: ":8",
        sound: ''
    },

    {
        slug: ":5",
        body: "La voce nella radio è quella di un uomo che spiega come tutti i cunicoli siano costruiti per non far fuggire nessuno. Preso dall'angoscia rimugini sul tutto, ma passa il tempo e perdi conoscenza dopo aver respirato troppo a lungo i gas tossici del luogo.",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0004.png",
        choice1: 'HAI PERSO',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },

    {
        slug: ":6",
        body: "Dopo aver distrutto la radio, noti più avanti un condotto di areazione che punta verso l'alto, forse conduce in superficie. Cosa fai?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0005.png",
        choice1: 'Provi a salirci dentro',
        choice2: 'Prosegui nel cunicolo',
        n1: ":9",
        n2: ":10",
        sound: ''
    },

    {
        slug: ":7",
        body: "Ignorando il corpo e cercando di evitarlo, non hai notato come poco più avanti c'era una crepa nel terreno. Purtroppo passandoci sopra sei caduto fino in fondo alla terra, sepolto tra ossa e fango!",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0006.png",
        choice1: 'HAI PERSO',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },

    {
        slug: ":8",
        body: "Purtroppo il corpo non ha polso, ma controllando nelle tasche trovi una sorta di mappa che indica tutti i cunicoli sotterranei. Cosa ci fai?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0007.png",
        choice1: 'Segui le indicazioni della mappa',
        choice2: 'Corri via.',
        n1: ":11",
        n2: ":12",
        sound: ''
    },

    {
        slug: ":9",
        body: "Mentre sali nel condotto questo cede e cadendo purtroppo ti ferisci gravemente. Non riesci a rialzarti e manca poco che l'aria finisca e tu perda conoscenza.",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0008.png",
        choice1: 'HAI PERSO',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },

    {
        slug: ":10",
        body: "Dopo aver camminato a lungo trovi una botola che sembra essere chiusa da un lucchetto. Vicino si trova un mazzo di chiavi con circa 30 modelli diversi.",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_009.png",
        choice1: 'Provi tutte le chiavi.',
        choice2: 'Cerchi in giro qualcosa per scassinare il lucchetto',
        n1: ":13",
        n2: ":14",
        sound: ''
    },

    {
        slug: ":11",
        body: "La mappa ti permette, tramite delle scorciatoie di arrivare di fronte ad una grata, che una volta aperta conduce fuori dal sottosuolo. Sei finalmente libero e puoi di nuovo respirare aria pulita.",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0010.png",
        choice1: '',
        choice2: '',
        n1: "",
        n2: "",
        sound: ''
    },

    {
        slug: ":12",
        body: "Correndo via da quel corpo e non seguendo la mappa ti ritrovi a calpestare una porzione di terreno debole, cadendo quindi ancora più a fondo, sepolto dal fango e dalle ossa!",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0011.png",
        choice1: 'HAI PERSO ',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },

    {
        slug: ":13",
        body: "Provi una ad una tutte le chiavi, quando alla fine ti accorgi che nessuna di esse è quella corretta è troppo tardi: l'aria è finita e non hai più forze!",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0012.png",
        choice1: 'HAI PERSO ',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },

    {
        slug: ":14",
        body: "Forzi il lucchetto con una lastra di metallo trovata in giro ed entrando dentro ti ritrovi dentro ad una cripta. Cosa decidi di fare?",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0013.png",
        choice1: 'Esplori la cripta.',
        choice2: "Cerchi una via d'uscita.",
        n1: ":15",
        n2: ":16",
        sound: ''
    },

    {
        slug: ":15",
        body: "Dentro la cripta, percorrendola, scopri un passaggio segreto e dopo aver camminato a lungo ti ritrovi fuori, nel cimitero e finalmente libero da quella lunga agonia!",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0014.png",
        choice1: '',
        choice2: '',
        n1: "",
        n2: "",
        sound: ''
    },

    {
        slug: ":16",
        body: "Cercando una via d'uscita ti ritrovi dentro una stanza che risulta essere però un vicolo cieco, in quanto dopo il tuo passaggio, tutte le pareti crollano. Ti ritrovi davanti una parete di teschi, l'unica compagnia in attesa che l'aria si esaurisca!",
        image: "/ENERUSLIDEGAMEIG2-SEPOLTIVIVI_20250418_154531_0015.png",
        choice1: 'HAI PERSO ',
        choice2: '',
        n1: ":1",
        n2: "",
        sound: ''
    },
];

export default rooms;