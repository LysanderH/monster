export const player = {
    'playerElt': document.querySelector('.players'),
    'playerWrpr': document.querySelector('.player-wrapper'),
    'playerDiv': document.querySelector('.player'),
    'playerArray': {
        'name': 'player 1',
        'type': '',
        'lp': 100,
    },
    init() {
        this.playerArray.name = prompt('Give me your name PLAYER ONE XD');
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
