// Coin counter variabls
var total = 0, heads = 0, tails = 0;

// Flip Button Click Handler
document.getElementById('flip').addEventListener('click',function(){
    let imageElement = document.getElementById('penny-img');

    //Flip the coin at random and determine heads=0 or tails=1
    let result = Math.round(Math.random()*100)%2;
    if (result === 0){
        //Update Results of the toss
        total += 1;
        heads += 1;
        
        //Update both the image and results h3 header
        imageElement.setAttribute('src', './assets/images/penny-heads.jpg');
        document.querySelector('h3').textContent = "You Flipped Heads!";
    } else {
        //Update the results of the toss
        total += 1;
        tails += 1;

        //Update both the image and results h3 header
        imageElement.setAttribute('src', './assets/images/penny-tails.jpg');
        document.querySelector('h3').textContent = "You Flipped Tails!";
    };
    //Calculate the percentages of the results
    let headsPercent = Math.round(heads/total*100);
    let tailsPercent = Math.round(tails/total*100);

    //Update the table to display the results 
    document.getElementById('heads').textContent = heads;
    document.getElementById('tails').textContent = tails;
    document.getElementById('heads-percent').textContent = `${headsPercent}%`;
    document.getElementById('tails-percent').textContent = `${tailsPercent}%`;
    console.log(total,heads,tails,headsPercent,tailsPercent);
    
})
    
//Clear Button Click Handler
document.getElementById('clear').addEventListener('click',function(){
    //Reset all global variabls
    heads = 0;
    tails = 0;
    total = 0; 

    //Reset table to pregame settings
    document.getElementById('heads').textContent = heads;
    document.getElementById('tails').textContent = tails;
    document.getElementById('heads-percent').textContent = `0%`;
    document.getElementById('tails-percent').textContent = `0%`;
    
});
