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
        if(this.game.controller.damage2 >= 0 || this.game.controller.damage2 >= 0){
            this.text = this.game.player.playerArray.name + ' a été soigné de ' + this.game.controller.damage1 + ' points | ' + this.game.player2.playerArray.name + ' a été soigné de ' + this.game.controller.damage2 + ' points';
        }
        if(this.game.controller.damage2 <= 0 || this.game.controller.damage2 <= 0){
            this.text = this.game.player.playerArray.name + ' a perdu ' + this.game.controller.damage1 + ' points | ' + this.game.player2.playerArray.name + ' a perdu ' + this.game.controller.damage2 + ' points';
        }
        if(this.game.controller.damage1 === 0 && this.game.controller.damage2 === 0){
            this.text = 'Rien ne sais passé';
        }
        cloned.querySelector('p').textContent = this.text;
        this.logWrpr.prepend(cloned);
    }
}