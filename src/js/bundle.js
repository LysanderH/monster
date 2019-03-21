import {controller} from './controller.js';
import {player} from './player.js';
import {player2} from './player2.js';
import {log} from './log.js';

const game = {
    'start': null,
    'controller': controller,
    'player': player,
    'player2': player2,
    'log': log,
    init() {
        this.player.init(this);
        this.player2.init(this);
        // this.log.init(this);
        this.controller.init(this);
    },
};

game.init();