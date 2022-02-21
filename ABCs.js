class ABCs {
    constructor(game) {
        this.game = game;
        this.alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                        "n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "A","B","C","D","E","F","G","H","I","J","K","L","M",
                        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.randIndex = Math.floor(Math.random()*this.alphabet.length);
        this.x = 10;
        this.y = 10;
        this.size = 100;;
    }

    update() {
    }

    draw(ctx) {
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.stroke();
        // this.randIndex = Math.floor(Math.random()*this.alphabet.length);
        this.letter = this.alphabet[this.randIndex];
        ctx.fillText(this.letter,this.x*2,this.y*2.5);
        //ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}