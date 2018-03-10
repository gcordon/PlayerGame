// 降落伞
class ParaChute {
    constructor(game) {
        this.game = game

        this.speed = 2
        this.active = true

        this.textTrue = this.game.textrueByName('parachute1')
        this.x = randomBetween(50,800)
        this.y = -randomBetween(200,1500)
        this.w = this.textTrue.width
        this.h = this.textTrue.height
    }
    static new(game) {
        return new this(game)
    }
    move() {
        this.y += this.speed+5

        // 随机降落
        let ran = randomBetween(this.h, 800-this.h)

        if (this.y + this.h >= ran) {
            this.textTrue = this.game.textrueByName('parachute2')
            let ran = randomBetween(1,5)
            this.y += ran
            this.x -= ran
        }
        if (this.y - this.h >= 800) {
            this.reset()
        }
    }
    // 重置
    reset() {
        this.x = randomBetween(50,600)
        this.y = -randomBetween(200,600)
        this.speed = 2
        this.active = true
        this.textTrue = this.game.textrueByName('parachute1')
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
        this.active = false
    }
    update() {
        this.move()
    }
}
