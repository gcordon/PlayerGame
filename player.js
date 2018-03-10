// 飞机
class Play extends LindrawImage{
    constructor(game) {
        super(game, `player${randomBetween(1,4)}`)
        this.x = randomBetween(20,50)
        this.y = randomBetween(200,500)
        // this.speed = randomBetween(10,20)
        this.speed = 10
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    moveLinR(move) {
        if (this.x < 0 ) {
            this.x = 0
        }
        if (this.x > this.game.canvas.width-this.w) {
            this.x = this.game.canvas.width-this.w
        }
    }
    moveTinD(move) {
        if (this.y < 0 ) {
            this.y = 0
        }
        if (this.y > this.game.canvas.height-this.h) {
            this.y = this.game.canvas.height-this.h
        }
    }
    moveLeft() {
        if (window.pased) return
        this.x -= this.speed
        this.moveLinR(this.x)
    }
    moveRight() {
        if (window.pased) return
        this.x += this.speed
        this.moveLinR(this.x)
    }
    moveUp() {
        if (window.pased) return
        this.y -= this.speed
        this.moveTinD(this.y)
    }
    moveDown() {
        if (window.pased) return
        this.y += this.speed
        this.moveTinD(this.y)
    }
    setInputs() {
        let g = this.game
        // ArrowLeft
            g.registerAction('a', ()=> {
                this.moveLeft()
            })
            g.registerAction('d', ()=> {
                this.moveRight()
            })
            g.registerAction('w', ()=> {
                this.moveUp()
            })
            g.registerAction('s', ()=> {
                this.moveDown()
            })

            g.registerAction('ArrowLeft', ()=> {
                this.moveLeft()
            })
            g.registerAction('ArrowRight', ()=> {
                this.moveRight()
            })
            g.registerAction('ArrowUp', ()=> {
                this.moveUp()
            })
            g.registerAction('ArrowDown', ()=> {
                this.moveDown()
            })
    }
    update() {
        this.setInputs()
    }
}
