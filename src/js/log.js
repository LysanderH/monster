export const log = {
    'logElt': document.querySelector('.logs'),
    'logWrpr': document.querySelector('.log-wrapper'),
    'text': '',
    'game': null,
    init(game) {
        this.game = game;
        this.copyElt();
    },
    copyElt() {
        const cloned = document.importNode(this.logElt.content, true);
        this.text = this.game.player.playerArray.name + ' a perdu ' + this.game.controller.damage1 + ' points ' + this.game.player2.playerArray.name + ' a perdu ' + this.game.controller.damage2 + ' points';
        cloned.querySelector('p').textContent = this.text;
        this.logWrpr.prepend(cloned);
    }
}