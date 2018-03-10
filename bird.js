// 鸟 一
class BirdOne {
    constructor(game) {
        this.game = game
        this.count = 8
        this.index = 0
        this.x = randomBetween(1200,4000)
        this.y = randomBetween(0,800)
        this.speed = randomBetween(2,12)
        this.active = true
        this.random = {
            0: 'a',
            1: 'b',
            2: 'c',
        }
        this.type = this.random[Math.floor(Math.random() * 3)]
        this.birds = []
        for (let i=1; i<5; i++) {
            let f = this.game.textrueByName(`bird_${this.type}_${i}`)
            this.birds.push(f)
        }
        this.textTrue = this.birds[0]
        this.w = this.textTrue.width
        this.h = this.textTrue.height
    }
    static new(game) {
        return new this(game)
    }
    move() {
        this.x -= this.speed
        if (this.x + this.textTrue.width < 0) {
            this.reset()
        }
    }
    // 重置
    reset() {
        this.x = randomBetween(1200,3000)
        this.y = randomBetween(50,780)
        this.speed = 10
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
            window.pased = true
            //暂停音乐
            e('#game-audio').src = 'sound/hit.mp3'
            e('#game-audio').loop = false
            setTimeout( ()=> {
                let s = SceneEnd.new(this.game)
                this.game.replaceScene(s)
            }, 100)
            return
        //

        this.active = false
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
