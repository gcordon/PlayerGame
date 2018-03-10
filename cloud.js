// 云
class Cloud extends LindrawImage {
    constructor(game) {
        super(game, `cloud${randomBetween(0, 6)}`)
        this.setUp()
    }
    setUp() {
        this.x = randomBetween(1500,2000)
        this.y = randomBetween(50,750)
        this.speed = randomBetween(10,20)
    }
    move() {
        this.x-=this.speed
        if (this.x+this.w < 0) {
            this.setUp()
        }
    }
    update() {
        this.move()
    }

}
