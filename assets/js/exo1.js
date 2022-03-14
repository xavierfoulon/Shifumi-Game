$(function(){
    let userScore = 0; //le score de l'utilisateur débute de 0
    let machineScore = 0; //le score de la machine débute de 0
    let percent = 0; //pourçentage de succès 
    let count = 0; //pour le nombre de victoire, défaites


    //au clique sur le bouton attrivution du score
    $('#button').click(function (){
    count++;
    let userChoice = $('#shifumi-select').val();
    //l'utilisateur choisi tout d'abord son shifumi
    let machineChoice = machineChoiceRandom(1,3);
    //la machine choisi entre 1 et 4. 

    //comparer les deux résultats
    let compare;//=$('#compare');
    
    //on utilise la fonction parsInt, avec le choix dans la chaine de caractère des deux joueurs.
    result =  parseInt(userChoice + machineChoice);
    //switch du choix séléctionner de l'user et de la machine
    switch(result){

//attribution des résultats et des scores, selon les différents choix des joueurs

        //feuille vs pierre humain gagne
        case 21:
            compare='La feuille couvre la pierre. L\'humain Gagne !';
            $('#humainImg').attr('src', 'assets/img/feuille.png');
            $('#machineImg').attr('src', 'assets/img/pierre.png');
            userScore++;
        break;


        //feuille vs feuille égalité
        case 22:
            compare='Feuille - Feuille.  Egalité.';
            $('#humainImg').attr('src', 'assets/img/feuille.png');
            $('#machineImg').attr('src', 'assets/img/feuille.png');
            break;


        //ciseaux vs feuille machine gagne
        case 23:
            compare='Les ciseaux coupe la feuille. La machine Gagne !';
            $('#humainImg').attr('src', 'assets/img/feuille.png');
            $('#machineImg').attr('src', 'assets/img/ciseaux.png');
            machineScore++;
        break;

        
        //pierre vs pierre égalité
        case 11:
            compare='Pierre - Pierre.  Egalité.';
            $('#humainImg').attr('src', 'assets/img/pierre.png');
            $('#machineImg').attr('src', 'assets/img/pierre.png');
            //attribution du score : default (??)
        break;
        
        
        //feuille vs pierre machine gagne
        case 12:
            compare='La feuille couvre la pierre, La machine Gagne !';
            $('#humainImg').attr('src', 'assets/img/pierre.png');
            $('#machineImg').attr('src', 'assets/img/feuille.png');
            //attribution du score à la machine
            machineScore++;
        break;
        
        
        //feuille vs pierre machine gagne
        case 13:
            compare='La pierre casse les ciseaux  L\'humain Gagne !';
            $('#humainImg').attr('src', 'assets/img/pierre.png');
            $('#machineImg').attr('src', 'assets/img/ciseaux.png');
            //attribution du score à l'utilisateur
            userScore++;
        break;


        //pierre vs ciseaux machine gagne
        case 31:
            compare='La pierre casse les ciseaux. La machine Gagne !';
            $('#humainImg').attr('src', 'assets/img/ciseaux.png');
            $('#machineImg').attr('src', 'assets/img/pierre.png');
            //attribution du score à l'ordinateur
            machineScore++;
        break;


        //ciseaux vs feuille humain gagne
        case 32:
            compare='Les ciseaux coupent la feuille.  L\'humain Gagne !';
            $('#humainImg').attr('src', 'assets/img/ciseaux.png');
            $('#machineImg').attr('src', 'assets/img/feuille.png');
            //attribution du score à l'utilisateur
            userScore++;
        break;


        //cieaux vs ciseaux égalité
        case 33:
            compare='Ciseaux - Ciseaux. Egalité.';
            $('#humainImg').attr('src', 'assets/img/ciseaux.png');
            $('#machineImg').attr('src', 'assets/img/ciseaux.png');
            //attribution du score : default (??)
        break;


        default:
            compare='Choissisez votre Shifumi';
    }
    
    console.log(result);
    $('#compare').text(compare);

    $('#success').text(`Succès: ${userScore}`);

    $('#machineWin').text(`Succès: ${machineScore}`);
    percent = ((userScore / (count) ) * 100).toFixed(2);

    $('#percentSuccess').text(`Votre taux de succès: ${percent}%`);
    });
    function machineChoiceRandom(min, max)
    {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});