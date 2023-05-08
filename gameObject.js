class GameObject {
    constructor(config) {
        this.x = config.x || 0
        this.y = config.y || 0
        this.shadowx = config.shadowx || 0
        this.shadowy = config.shadowy || 0
        this.width = config.width 
        this.height = config.height 
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "characters/Elves/Elf_female_idle1.png"
        })
    }
}