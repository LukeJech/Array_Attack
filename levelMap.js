class levelMap {
    constructor(config) {
        this.gameObjects = config.gameObjects
        this.mapImage = new Image()
        this.mapImage.src = config.src
    }

    drawMapImage(ctx) {
        ctx.drawImage(this.mapImage, 0,0)
    }
}

window.LevelMaps = {
    DragonCave: {
        src: "backgrounds/game_background_cave.png",
        gameObjects: {
            player: new GameObject({
                x:200,
                y:300,
                shadowx: 257,
                shadowy: 453,
                width: .25,
                height: .25,
                src: "characters/Goblins/Goblin_female_idle1.png"
            }),
            enemy1: new GameObject({
                x:800,
                y:400,
                shadowx: 792,
                shadowy: 475,
                width: .5,
                height: .5,
                src: "enemies/MonsterV1/Idle/skeleton-Idle_0.png"
            })
        }
    },
    MushroomForest: {
        src: "backgrounds/mushroom_forest.png",
        gameObjects: {
            player: new GameObject({
                x:200,
                y:300,
                shadowx: 257,
                shadowy: 453,
                width: .25,
                height: .25,
                src: "characters/Goblins/Goblin_female_idle1.png"
            }),
            enemy1: new GameObject({
                x:800,
                y:400,
                shadowx: 792,
                shadowy: 480,
                width: .5,
                height: .5,
                src: "enemies/MonsterV1/Idle/skeleton-Idle_0.png"
            }),
            enemy2: new GameObject({
                x:850,
                y:250,
                shadowx: 895,
                shadowy: 350,
                width: .5,
                height: .5,
                src: "enemies/MonsterV3/Idle/skeleton-Idle_0.png"
            }),
        }
    },
}

