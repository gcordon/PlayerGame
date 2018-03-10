// 载入图片类
class LindrawImage {
    constructor(game, name) {
        // 保存LinGame的回调
        this.game = game
        // 载入图片
        this.textTrue = this.game.textrueByName(name)
        // 载入后图片的宽度和高度
        this.x = 0
        this.y = 0
        this.w = this.textTrue.width
        this.h = this.textTrue.height
    }
    static new(game, name) {
        let i = new this(game, name)
        return i
    }
    update() {

    }
    draw() {

    }
}
