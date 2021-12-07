// Dice counter array: 0 = total, 1 = one, 2 = two, etc. 
var diceCount = [0,0,0,0,0,0,0];

document.addEventListener('DOMContentLoaded', function(){

    console.log('Hi')
    // Flip Button Click Handler
    document.getElementById('roll').addEventListener('click',function(){
        let imageElement = document.getElementById('game-img');

        //Flip the coin at random and determine heads=0 or tails=1
        let result = Math.round(Math.random()*100)%6+1;
        

        //Switch format as follows: Update diceCount based on result. Then update the
        //corresponding image, text and table for counts
        switch (result){
            case 1: 
                diceCount[0] += 1;
                diceCount[result] += 1;

                imageElement.setAttribute('src', './assets/images/dice/dice1.png');
                document.getElementById('ones').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a One!";
                break;
            case 2:
                diceCount[0] += 1;
                diceCount[result] += 1;
                
                imageElement.setAttribute('src', './assets/images/dice/dice2.png');
                document.getElementById('twos').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a Two!";
                break;
            case 3:
                diceCount[0] += 1;
                diceCount[result] += 1;

                imageElement.setAttribute('src', './assets/images/dice/dice3.png');
                document.getElementById('threes').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a Three!";
                break;
            case 4:
                diceCount[0] += 1;
                diceCount[result] += 1;

                imageElement.setAttribute('src', './assets/images/dice/dice4.png');
                document.getElementById('fours').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a Four!";
                break;
            case 5:
                diceCount[0] += 1;
                diceCount[result] += 1;

                imageElement.setAttribute('src', './assets/images/dice/dice5.png');
                document.getElementById('fives').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a Five!";
                break;
            case 6:
                diceCount[0] += 1;
                diceCount[result] += 1;

                imageElement.setAttribute('src', './assets/images/dice/dice6.png');
                document.getElementById('sixes').textContent = diceCount[result];
                document.querySelector('h3').textContent = "You Rolled a Six!";
                break;
        };

        
        //calculate percentages inside forloop
        let percentages = [0,0,0,0,0,0];
        for(i=0; i<6; i++){
            percentages[i]=Math.round(diceCount[i+1]/diceCount[0]*100);
        };

    

        //Update the table to display the results 
        document.getElementById('ones-percent').textContent = `${percentages[0]}%`;
        document.getElementById('twos-percent').textContent = `${percentages[1]}%`;
        document.getElementById('threes-percent').textContent = `${percentages[2]}%`;
        document.getElementById('fours-percent').textContent = `${percentages[3]}%`;
        document.getElementById('fives-percent').textContent = `${percentages[4]}%`;
        document.getElementById('sixes-percent').textContent = `${percentages[5]}%`;        
    })
        
    //Clear Button Click Handler
    document.getElementById('clear').addEventListener('click',function(){
        //Reset all global variables
        diceCount = [0,0,0,0,0,0,0];

        //Reset image and message to pregame settings
        document.querySelector('h3').textContent = `Let's Get Rolling!`;
        let imageElement = document.getElementById('game-img');
        imageElement.setAttribute('src', './assets/images/dice/dice6.png')

         //Reset table to pregame settings
        document.getElementById('ones').textContent = diceCount[1];
        document.getElementById('twos').textContent = diceCount[2];
        document.getElementById('threes').textContent = diceCount[3];
        document.getElementById('fours').textContent = diceCount[4];
        document.getElementById('fives').textContent = diceCount[5];
        document.getElementById('sixes').textContent = diceCount[6];

        document.getElementById('ones-percent').textContent = `0%`;
        document.getElementById('twos-percent').textContent = `0%`;
        document.getElementById('threes-percent').textContent = `0%`;
        document.getElementById('fours-percent').textContent = `0%`;
        document.getElementById('fives-percent').textContent = `0%`;
        document.getElementById('sixes-percent').textContent = `0%`;        
    });
});