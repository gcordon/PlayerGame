class LinGame {
    constructor(fps, images, runcallback) {
        window.fps = fps
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.runcallback = runcallback
        this.images = images
        // 鼠标事件
        this.keydowns = {}
        this.actions = {}

        window.addEventListener('keydown', (event)=> {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', (event)=> {
            this.keydowns[event.key] = false
        })

        this.init()
    }
    static instance(...arg) {
        this.i = this.i || new this(...arg)
        return this.i
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    update() {

        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    drawImage(img) {

        this.context.drawImage(img.textTrue, img.x, img.y)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    textrueByName(name) {
        let img = this.images[name]
         return img
        // let image = {
        //     w: img.width,
        //     h: img.height,
        //     image : img,
        // }
        // return image
    }
    runloop() {
        // event
        let action = Object.keys(this.actions)
        for (let i=0; i<action.length; i++) {
            let keys = action[i]
            if(this.keydowns[keys]) {
                this.actions[keys]()
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()

        setTimeout( ()=> {
            //
            this.runloop()
        }, 1000/window.fps)

    }
    runWithScene(scene) {
        //
        this.scene = scene
        //
        setTimeout( ()=> {
            this.runloop()
        }, 1000/this.fps)
    }
    __start() {
        //
        this.runcallback(this)
    }
    init() {

        // 加载图片
        let loads = []
        let name = Object.keys(this.images)
        for (let i=0; i<name.length; i++) {
            let keys = name[i]
            let path = this.images[keys]
            let img = new Image()
            img.src = path
            img.onload = () => {
                // 把加载好img对象存起来
                this.images[keys] = img
                loads.push(1)
                if (loads.length == name.length) {
                    // 回调
                    this.__start()
                }
            }
        }
    }
}
