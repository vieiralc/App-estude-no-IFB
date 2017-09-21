// Initialize app
var myApp = new Framework7({
    swipePanel: 'left',
    modalTitle: 'Aplicativo IFB'
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    //var nome = "Lucas";
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //window.alert("Hello " + nome + "!");
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    var nome = "Lucas";
    myApp.alert('Olá ' + nome);
})

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;
    
    if (page.name === 'faq'){
        
        //Inicialização das variáveis de mensagem
        var myMsg = myApp.messages('.messages');
        var MyBarraMsg = myApp.messagebar('.messagebar');
    
        $$('.messagebar .link').on('click', function(){
            //texto digitado a ser enviado
            var texto = MyBarraMsg.value().trim();
        
            // se a mensagem estiver vazia não fazer nada
            if(texto.lenght === 0){
                return;
            }
        
            // apaga conteúdo da msg
            MyBarraMsg.clear();
        
            myMsg.addMessage({
                text: texto,
                type: 'sent',
                day: 'hoje',
                time: "10:00",
            });
        });
    }   
})


