// lista contatti
var app = new Vue(
    {
        el: '#root',
        data: {
            currentContact: 0,
            userInput: '',
            userFilter: '',
            currentMessage: false,
            isActive: false,
            messaggiRandom: [
                "L amore non è qualcosa che cerchi. È qualcosa che dai.",
                "La vera grandezza di un capo sta proprio nel saper compiere delle scelte quando è l’ora ",
                "È qualcosa che non posso spiegare ma quando sono insieme a te, ovunque ci troviamo, non ho più paura di niente!",
                "Tutti noi prima o poi moriamo. Questo significa forse che la vita è priva di significato? Significa che il fatto di essere venuti al mondo non ha alcun senso? Vale lo stesso per i nostri compagni caduti? Quei soldati non hanno avuto significato? No, non è così! A dare loro un significato siamo noi! Quei valorosi e sfortunati caduti gli unici a poterli ricordare siamo noi, i vivi! Noi moriremo qui! E affideremo il nostro significato a chi è rimasto in vita! Questo è l’unico modo che abbiamo per lottare contro questo mondo crudele! ",
                "Non ci sono scorciatoie!",
                "Siamo giovani una sola volta!",
                "Se una persona ti accetta per quello che sei, diventerà di certo la persona più importante della tua vita",
                "In un mondo senza luce, un fiore è destinato a cadere",
                "Quando si è in guerra conta solo il numero di nemici che riesci a sconfiggere.",
                "Ma certamente!",
                "Tutto questo a me pare che sia assurdo!",
                "Ma certo.",
                "Come e a quale scopo dici questo?",
            ],
            contacts:[
                {
                    name: 'Saitama',
                    avatar: 'img/saitama.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'E anche oggi non ho incontrato nessuno che mi possa far divertire',
                            status:'received'
                        },
                        {
                            date: '15.32',
                            text: 'Che noia però',
                            status:'received'
                        },
                        {
                            date: '15.33',
                            text: 'Ringrazia pelato!',
                            status:'sent'
                        },
                        {
                            date: '15.40',
                            text: 'Se ti prendo ti ammazzoo!',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'C18',
                    avatar: 'img/c-18.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.33',
                            text: 'Abbiondaa!',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Hey, come stai?',
                            status:'received'
                        },
                        {
                            date: '15.33',
                            text: 'Tutto bene dai tu? ancora arrabbiata con Crilin? aahha',
                            status:'sent'
                        },
                        {
                            date: '15.33',
                            text: 'Lasciamo perdere che è meglio!',
                            status:'received'
                        },
                        {
                            date: '15.33',
                            text: 'ahhahhahha',
                            status:'sent'
                        },
                        {
                            date: '15.33',
                            text: 'Immaginavo!',
                            status:'sent'
                        },
                    ]
                },
                {
                    name: 'Yugi',
                    avatar: 'img/yugi.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Hoo perso un pezzo di Exodiaaa!',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Secondo te una carta falsa funziona uguale?',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Conni',
                    avatar: 'img/conan.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Ho capito chi è l assassino!',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Ash',
                    avatar: 'img/ash.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Vuoi Pikachu? mi ha proprio rotto con sto pika pika, non lo sopporto più',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Mikasa',
                    avatar: 'img/mikasa.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Non riesco ad andare avanti, non riesco a stare senza Eren.',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Tanto valeva farmi mangiare da lui stesso',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Gaa',
                    avatar: 'img/gaa.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Non ne posso più, non potevo avere la volpe o l occhio rosso?',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Mi tocca pulire la macchina tutti i giorni, manco quando andavo al mare',
                            status:'received'
                        },
                    ]
                },

                {
                    name: 'Goku',
                    avatar: 'img/goku.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Ho appena sconfitto Vegeta per la dodicesima volta ahha, Mi prepari da mangiare?',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Luffy',
                    avatar: 'img/luffy.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Mi sono allungato un po troppo, è mezz ora che aspetto che la gamba torni alle dimensioni normalii ahsaha',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Eren',
                    avatar: 'img/eren.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Sai dove si trova Mikasa? Non la trovo da nessuna parte, secondo me l han mangiata',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Kaneki',
                    avatar: 'img/kaneki.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Mi stan chiamando masochista.. sai il motivo?',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Light',
                    avatar: 'img/light.png',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'L crede di potermi battere in astuzia e sopratutto a tennis.',
                            status:'received'
                        },
                        {
                            date: '15.31',
                            text: 'Evidentemente non ha ben capito, poverino. Meglio se continua a mangiare la cioccolata in camera',
                            status:'received'
                        },
                    ]
                },
                
            ]
        },
        methods: {
            // funzione per mostrare il contatto attualmente selezionato 
            showCurrentContact(index) {
                this.currentContact = index;
                this.currentMessage = false;
            },

            // funzione per inviare messaggi 
            addMessage() {
                const userMessage = {
                    date: dayjs( ).format('DD/MM/YYYY HH:mm:ss'),
                    text: this.userInput,
                    status: 'sent'
                };

                // devo pushare l'oggetto messaggio dentro l'array di messaggi di un utente
                if (userMessage.text.length > 0) {
                    this.contacts[this.currentContact].messages.push(userMessage);
                    this.userInput = '';
                };

                const randomMessageRic = this.messaggiRandom[Math.floor(Math.random() * this.messaggiRandom.length)];

                setTimeout(() => {
                    const autoReply = {
                        date: dayjs( ).format('DD/MM/YYYY HH:mm:ss'),
                        text: randomMessageRic,
                        status: 'received'
                    };
                    this.contacts[this.currentContact].messages.push(autoReply);

                }, 1000);
                
            },

            // funzione per filtrare la ricerca 
            filter() {
                
                // eseguo un for each per controllare tutti i nomi dei contatti per poi confrontarli 
                this.contacts.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.userFilter.toLowerCase() )) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    };
                });
            },

            // dropdown 
            showDropdown(index) {
                if(this.currentMessage === index) {
                    this.currentMessage = false;
                } else {
                    this.currentMessage = index;
                };
            },

            // menu dropdown (optional)
            menuDropdown() {
                if(this.isActive === false) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            },

            // funzione per eliminare messaggio
            deleteMessage (index) {
                this.contacts[this.currentContact].messages.splice(index, 1);
                this.currentMessage = false;
            },
        }    
    }
)
