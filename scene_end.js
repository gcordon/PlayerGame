class SceneEnd {
    constructor(game) {
        this.game = game
        e('.main_game_over').style.display = 'block'
        e('.main_zhe').style.display = 'block'
        //暂停音乐
        e('#game-audio').src = 'sound/hit.mp3'
        e('#game-audio').loop = false
        e('#reset').addEventListener('click', (event)=> {
            let s = SceneStart.new(this.game)
            this.game.replaceScene(s)
        })

    }
    update() {
        // window.time = 1
        window.pased = true
        // window.font = 50
        // window.parachuteNum = 0
        // window.starNum = 0
        // window.playerType = 1
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {

    }
}
