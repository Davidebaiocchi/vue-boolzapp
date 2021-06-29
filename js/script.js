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
            contacts:[
                {
                    name: 'Iq',
                    avatar: 'img/iq.jpg',
                    visible: true,
                    messages: [
            
                        {
                            date: '15.30',
                            text: 'Hai preso il visore?',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Ah e ricordati il giubotto!',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Si ho preso tutto stai tranquillo!!',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Fuze',
                    avatar: 'img/fuze.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Prendi le mineee!',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Quanto sei lento mamma mia',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Sto arrivando, non rompere!',
                            status:'received'
                        },
                    ]
                },
                {
                    name: 'Tatcher',
                    avatar: 'img/tatcher.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Le emp?',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Già prese, tra due minuti sono da te',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Sei il migliore!',
                            status:'sent'
                        },
                    ]
                },
                {
                    name: 'Twitch',
                    avatar: 'img/twitch.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15.30',
                            text: 'Sono passata da te ma non eri a casa, fa sapere quando torni!',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Sono fuori con iq, ti ho detto che devi avvisarmi quando passi a casa mia, ci vediamo dopo!',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Sono stanca di avere solo le briciole..',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Ti prometto che la lascio presto piccola',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Lo dic da 4 mesi',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Questa volta è la volta giusta',
                            status:'sent'
                        },
                        {
                            date: '15.30',
                            text: 'Vedremo, ma tanto so già come andrà..',
                            status:'received'
                        },
                        {
                            date: '15.30',
                            text: 'Ora devo andare, a dopo',
                            status:'sent'
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
        }    
    }
)
