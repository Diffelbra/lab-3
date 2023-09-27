let wood = 0;
const wood = 0; 

let marshmallows = 3;
const marshmallows = 3;

let fire = false 

const game = {
    wood: 0, 
    marshmallows: 3,
    fire : false,
    tent: false,
};

function help() {
    console.log('Welcome to the Text-Based Console Game!');
    console.log('Commands:');
    console.log(' help() Display game instructions and commands.');
    console.log(' pitch() -Pitch the tent. ');
    console.log(' search() -Search for wood. ');
    console.log(' tend() -Tend to the fire. ');
    console.log(' roast() -Roast marshmallows');
    console.log(' sleep() -Go to and end the game (If conditions are met).');
}

function pitch() {
    if (game.tent) {
        return 'You already pitched the tent.';
    }

game.wood++
}

function search() {
     if (game.fire) {
        return 'You cannot search for wood while the fire is lit. ';
     }

     game.wood++;
     return 'You found a piece of wood. ';
}   

function tend() {
    if(game.fire) {
        game.fire = false;
        return 'You have put out the fire. ';
    } else  { 

    if (game.wood > 0) {
        
        game.fire = true;
        return 'You have started the fire.';
    } else { 
        return 'You need wood to start the fire.' ;
    }
}
}
}


    function roast() {
        if(game.fire) {
            if(game.marshmallows > 0) {
                game.marshmallows--;
                return 'You roasted a marshmallows. Yum!';
            } else {
                return 'You are out of marshmallows. ';
            }
        }

        function sleep() {
            if(game.tent && game.fire) {
                console.log('You went to sleep and ended the game. ');
                game.wood = 0;
                game.marshmallows = 3;
                game.fire = false;
                game.ifre = false;
            } else {
                console.log('You cannot sleep yet. Make sure you have pitched the tent and lit the fire.');
            }
        }

        help();
        
}
}