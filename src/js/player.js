import * as settings from './settings';
export const player = {
    'playerElt': document.querySelector('.players'),
    'playerWrpr': document.querySelector('.player-wrapper'),
    'playerDiv': document.querySelector('.player'),
    'playerArray': {  
        'name': settings.PLAYER_NAME_ARRAY[0],
        'type': '',
        'lp': settings.MAX_PLAYER_LP,
    },
    init() {
        this.playerArray.name = prompt(settings.MESSAGE_ARRAY[3]);
        if (this.playerArray.name === ''){
            this.playerArray.name = settings.PLAYER_NAME_ARRAY[0];
        }
        this.createElements();
    },
    createElements() {
        const cloned = document.importNode(this.playerElt.content, true);
        cloned.querySelector('.player__name').textContent = this.playerArray.name;
        cloned.querySelector('.player__status').style.width = this.playerArray.lp + '%';
        cloned.querySelector('.player__points').textContent = this.playerArray.lp;
        this.playerWrpr.appendChild(cloned);
    },
};
