// 星星
class Star {
    constructor(game) {
        this.game = game
        this.count = 8
        this.index = 0
        this.x = randomBetween(20,680)
        this.y = -randomBetween(50,3000)
        this.speed = 20
        this.active = true

        this.stars = []
        for (let i=1; i<8; i++) {
            let s = this.game.textrueByName(`star${i}`)
            this.stars.push(s)
        }
        this.textTrue = this.stars[0]
        this.w = this.textTrue.width
        this.h = this.textTrue.height
    }
    static new(game) {
        return new this(game)
    }
    move() {
        this.y += this.speed
        if (this.y + this.textTrue.height < 0) {
            this.reset()
        }
    }
    // 重置
    reset() {
        this.x = randomBetween(20,680)
        this.y = -randomBetween(50,3000)
        this.speed = 10// 燃油耗尽
        if (parachuteNum <= 0) {
            setAduio.src = 'sound/finish.mp3'
            setAduio.loop = false

            let s = SceneEnd.new(game)
            game.replaceScene(s)
            reset()
        }
        this.active = true
    }
    collide(img) {
        if ( (img.x > this.x && img.x < this.x + this.w) ||  (this.x > img.x && this.x < img.x + img.w) ){
            if ( (img.y > this.y && img.y < this.y + this.h) || (this.y > img.y && this.y < img.y + img.h) ){
                return this.active && true
            }
        }
        return false
    }
    kioo() {
        // game over
                // window.pased = true
        //
        let setAduio = e('#game-audio')
        setAduio.src = 'sound/star.mp3'
        setAduio.loop = false
        setTimeout( ()=> {
            if (setAduio.ended) {
                setAduio.src = 'sound/background.mp3'
                setAduio.loop = true
            }
        }, 1000)
        this.active = false
    }
    update() {
        this.move()
        this.count--
        if( this.count == 0) {
            this.count = 2
            this.index = (this.index+1) % this.stars.length
            this.textTrue = this.stars[this.index]
        }
    }

}
