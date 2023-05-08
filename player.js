class Player {
    constructor(imagesrc, xpos, ypos) {
        this.name = "harry"
        this.health = 100
        this.image = new Image()
        this.image.src = imagesrc
        this.scaleWidth = this.image.width / 4;
        this.scaleHeight = this.image.height / 4;
        this.xpos = xpos
        this.ypos = ypos
    }

    loadImage() {
        this.image.onload = () => {
            ctx.drawImage(this.image, this.xpos, this.ypos, this.scaleWidth, this.scaleHeight)
        }
    }
}



  // playerImage.onload = ()=> {
  //   const scaleWidth = playerImage.width / 4;
  //   const scaleHeight = playerImage.height / 4;
  //   ctx.drawImage(playerImage, 50,300,scaleWidth, scaleHeight )
  // }


//   class Overworld {
//     constructor(config) {
//     this.element = config.element
//     this.canvas = this.element.querySelector("#game_canvas")
//     this.ctx = this.canvas.getContext("2d")
//     }

//     init() {
//         const image = new Image()
//         image.onload = () => {
//             this.ctx.drawImage(image,0,0)
//         }
//         image.src = "backgrounds/game_background_3.png"
//     }
// }