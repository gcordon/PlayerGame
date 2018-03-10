class  SceneStart {
    constructor(game) {
        this.game = game
        window.addEventListener('keydown', (event)=> {
            if(event.key == 'k') {
                this.gameScene()
            }
        })
        e('#go').addEventListener('click', (event)=> {
            this.gameScene()
        })


        window.time = 1
        window.pased = false
        window.font = 50
        window.parachuteNum = 10
        window.starNum = 0
        window.playerType = 1


        e('#game-audio').pause()
        e('.main_game_start').style.display = 'block'

    }
    gameScene() {
        e('.main_game_start').style.display = 'none'
        let s = Scene.new(this.game)
        this.game.replaceScene(s)
    }
    update() {
        [pased] = [window]
        pased = true
    }
    draw() {
    }
    static new(game) {
        let i = new this(game)
        return i
    }
}
