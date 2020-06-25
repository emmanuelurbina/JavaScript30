class DrumpKit {
    kit = "";
    play() {
        /* Si se vuelve a presionar una tecla emitira enseguida el audio */
        if (!this.kit) return;
        /* Se reproduce audio */
        this.kit.currentTime = 0;
        this.kit.play();
    }
}