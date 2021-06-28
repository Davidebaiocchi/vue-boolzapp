// lista contatti
var app = new Vue(
    {
        el: '#root',
        data: {
            contacts:[
                {
                    name: 'Iq',
                    avatar: 'img/iq.jpg',
                    visible: true,
                    messages: [
            
                        {
                            date: '10/01/2020 15.30',
                            text: 'Hai preso il visore?',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Ah e ricordati il giubotto!',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
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
                            date: '10/01/2020 15.30',
                            text: 'Prendi le mineee!',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Quanto sei lento mamma mia',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
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
                            date: '10/01/2020 15.30',
                            text: 'Le emp?',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Già prese, tra due minuti sono da te',
                            status:'received'
                        },
                        {
                            date: '10/01/2020 15.30',
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
                            date: '10/01/2020 15.30',
                            text: 'Sono passata da te ma non eri a casa, fa sapere quando torni!',
                            status:'received'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Sono fuori con iq, ti ho detto che devi avvisarmi quando passi a casa mia, ci vediamo dopo!',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Sono stanca di avere solo le briciole..',
                            status:'received'
                        },
                        {
                            date: '10/01/2020 15.30',
                            text: 'Ti prometto che la lascio presto piccola',
                            status:'sent'
                        }
                    ]
                },
            
            ]
        }
        
    }
)
