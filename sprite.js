class Sprite {
    constructor(config) {

        //Set up the image
        this.image = new Image()
        this.image.src = config.src
        this.image.onload = () => {
            this.isLoaded = true
        }
        
        //Shadow image
        this.shadow = new Image()
        this .useShadow = true
        if (this.useShadow) {
            this.shadow.src = "characters/shadow.png"
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true
        }
        

        //configure animation and initial state
        this.animations = config.animations || {
            idle: [
                [0,0]
            ]
        }

        this.currentAnimation = config.currentAnimation || "idle"
        this.currentAnimationFrame = 0

        //Reference the game object
        this.gameObject = config.gameObject
    }

    draw(ctx) {
        // setting position and scale of game object
        const x = this.gameObject.x 
        const y = this.gameObject.y
        const scaleWidth = this.gameObject.width
        const scaleHeight =this.gameObject.height
        //setting position of shadow
        const shadowx = this.gameObject.shadowx
        const shadowy = this.gameObject.shadowy
        this.isShadowLoaded && ctx.drawImage(this.shadow, shadowx, shadowy)
        this.isLoaded && ctx.drawImage(this.image,
            x,y, this.image.width * this.gameObject.width, this.image.height * this.gameObject.height
        )
        
    }
}

