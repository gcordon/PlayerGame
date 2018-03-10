//
class LinScene {
    constructor(game) {
        // 保存LinGame的回调
        this.game = game
        //
        this.elements = []
    }
    addElement(img) {
        this.elements.push(img)
    }
    static new(game) {
        let i = new this(game)
        return i
    }

    draw() {
        for (let i=0; i<this.elements.length; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {
        for (let i=0; i<this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }
}

// 场景
class Scene extends LinScene {
    constructor(game) {

        window.time = 1
        window.pased = false
        window.font = 50
        window.parachuteNum = 10
        window.starNum = 0
        window.playerType = 1

        e('.main_game_over').style.display = 'none'
        e('.main_zhe').style.display = 'none'
        e('#game-audio').src = 'sound/background.mp3'


        // 重新开始游戏
        window.addEventListener('keydown', (event)=> {
            if (event.key == 'r') {
                let s = Scene.new(game)
                game.replaceScene(s)
            }
        })

        super(game)


        // 版权
        this.copy = LindrawImage.new(this.game, 'copy')
        this.copy.x = this.game.canvas.width-this.copy.w
        this.copy.y = this.game.canvas.height-this.copy.h-30


        window.pased = false
        // 保存LinGame的回调
        this.player = Play.new(this.game)
        //云
        this.clouds = []
        for (let i=0; i<20; i++) {
            let c = Cloud.new(this.game)
            this.clouds.push(c)
        }

        //鸟
        this.birds = []
        for (let i=0; i< 15; i++) {
            let b = BirdOne.new(this.game)
            this.birds.push(b)
        }

        //星星
        this.stars = []
        for (let i=0; i< 16; i++) {
            let b = Star.new(this.game)
            this.stars.push(b)
        }

        // 降落伞
        this.parachutes = []
        for (let i=0; i< 10; i++) {
            let p = ParaChute.new(this.game)
            this.parachutes.push(p)
        }

        this.addElement(this.player)
        this.addElement(this.copy)


        e('.main_game_over').style.display = 'none'
        e('.main_zhe').style.display = 'none'

        // for (let i=0; i<this.birds.length; i++) {
        //     let b = this.birds[i]
        //     b.x = randomBetween(200, 1200)
        //     b.y = randomBetween(200, 800)
        //     if (b.active) {
        //         this.addElement(b)
        //     }
        // }

    }
    update() {
        if (window.pased) {
            return
        }
        // 云
        for (let i=0; i<this.clouds.length; i++) {
            let c = this.clouds[i]
            c.update()
        }
        // 鸟
        for(let i=0; i<this.birds.length;i++) {
            let b = this.birds[i]
            b.update()
            if (b.collide(this.player)) {
                b.kioo() // 消失
            }
        }
        // 星星
        for(let i=0; i<this.stars.length;i++) {
            let s = this.stars[i]
            s.update()
            if (s.collide(this.player)) {
                // 加星数
                window.starNum++
                // 消失
                s.kioo() //
            }
        }
        // 降落伞
        for(let i=0; i<this.parachutes.length;i++) {
            let p = this.parachutes[i]
            p.update()
            if (p.collide(this.player)) {
                p.kioo() // 消失
                window.parachuteNum+=10
            }
        }
        //
        super.update()

        // 背景
    }
    draw() {
        //
        this.game.context.beginPath()
        this.game.context.fillStyle="#1DB0B8";
        this.game.context.fillRect(0,0,1200,800);
        this.game.context.closePath()
        // 云
        for (let i=0; i<this.clouds.length; i++) {
            let c = this.clouds[i]
            this.game.drawImage(c)
        }
        //鸟
        for(let i=0; i<this.birds.length;i++) {
            let bird = this.birds[i]
            if (bird.active) {
                this.game.drawImage(bird)
            }
        }
        //星星
        for(let i=0; i<this.stars.length;i++) {
            let s = this.stars[i]
            if (s.active) {
                this.game.drawImage(s)
            }
        }
        // 降落伞
        for(let i=0; i<this.parachutes.length;i++) {
            let p = this.parachutes[i]
            if (p.active) {
                this.game.drawImage(p)
            }
        }

        // 时间
        this.game.context.fillStyle = '#FFFFFF'
        this.game.context.font= `${window.font}px Verdana`;
        this.game.context.fillText(`${window.time} S`,this.game.canvas.width/2, 100)
        this.game.context.fillStyle = 'red'
        this.game.context.fillText(`${window.starNum}`, 100, 100)
        // 画背景
        super.draw()
        //
        // 燃油
        this.ranyou()
    }
    ranyou() {
        let ctx = this.game.context
        ctx.beginPath()
        ctx.strokeStyle = '#000'
        ctx.lineWidth = '3'
        ctx.moveTo(200,700)
        ctx.lineTo(1000,700)
        ctx.arcTo(1100,700, 1060, 720, 22)
        // ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50)
        ctx.stroke()
        ctx.closePath()


        ctx.beginPath()
        ctx.fillStyle = '#000'
        ctx.arc(1005,722,22,0,2*Math.PI);
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.moveTo(1018,742)
        ctx.lineTo(200,742)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.moveTo(1018,742)
        ctx.lineTo(200,742)
        ctx.arcTo(180,722, 200, 700, 30)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.fillStyle = '#000'
        ctx.arc(200,722,23,0,2*Math.PI);
        ctx.fill()
        ctx.closePath()


        ctx.beginPath()
        ctx.fillStyle = '#fff'
        ctx.rect(210, 702, 797, 38)
        ctx.fill();
        ctx.closePath()


        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.rect(210, 702, `${window.parachuteNum}`, 38)
        ctx.fill();
        ctx.closePath()


        // 燃油数
        ctx.fillStyle = '#333'
        ctx.font= `${window.font-20}px Verdana`;
        ctx.fillText(`燃油*${window.parachuteNum}`,30, 730)

    }
}
