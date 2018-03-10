// 鸟
class Bird {
    constructor(game) {
        this.game = game
        this.count = 8
        this.index = 0
        this.x = 500
        this.y = 20
        this.speed = 2
        this.birds = []
        for (let i=1; i<9; i++) {
            let f = this.game.textrueByName(`bird${i}`)
            this.birds.push(f)
        }
        this.textTrue = this.birds[0]
    }
    static new(game) {
        return new this(game)
    }
    move() {
        this.x -= this.speed
        if (this.x + this.textTrue.width < 0) {
            this.x = 1200
        }
    }
    update() {
        this.move()
        this.count--
        if( this.count == 0) {
            this.count = 8
            this.index = (this.index+1) % this.birds.length
            this.textTrue = this.birds[this.index]
        }
    }
}
