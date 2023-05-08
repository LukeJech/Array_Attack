class Level {
    constructor(config){
        this.element = config.element
        this.canvas = this.element.querySelector("#game_canvas")
        this.ctx = this.canvas.getContext("2d")
        this.map = null
    }

    startGameLoop() {
        const step = () => {

            //clear the canvas of old frame
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            
            //drawing level map
            this.map.drawMapImage(this.ctx)

            //draw game object
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx)
            })

            requestAnimationFrame(() =>{
                step()
            })
        }
        step()
    }

    init() {
        this.map = new levelMap(window.LevelMaps.MushroomForest)
        this.startGameLoop()



    }
}

