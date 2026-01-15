// Class Formulaire V1 //
// Enregistre les données du formulaire en format Json dans le localstorage // 

class formulaire{

    constructor(id) {
        this.id = id;
        this.formulaire = document.getElementById(id);
        this.objet_formulaire = new FormData();
        this.liste = new Array();
    }
};

