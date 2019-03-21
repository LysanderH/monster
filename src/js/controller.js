import { player } from "./player";

export const controller = {
    'attackElt': document.querySelector('.attacks'),
    'attackWrpr': document.querySelector('.attack-wrapper'),
    'game': null,

    // get the buttons
    'attackBtn': '',
    'specialAttackBtn': '',
    'healBtn': '',
    'surrender': '',

    // variables
    'attackHeight': 7,
    'specialAttackHeight': 12,
    'healHeight': 7,

    // playerReference
    'playerLp': '',
    'damage1': 0,
    'damage2': 0,


    init(game) {
        this.game = game;
        this.copyElt();
        this.attacks();

    },
    copyElt() {
        const cloned = document.importNode(this.attackElt.content, true);
        this.attackBtn = cloned.querySelector('.attack__attack-btn');
        this.specialAttackBtn = cloned.querySelector('.attack__special-attack-btn');
        this.healBtn = cloned.querySelector('.attack__heal-btn');
        this.surrenderBtn = cloned.querySelector('.attack__surrender-btn');
        this.attackWrpr.appendChild(cloned);
    },
    attacks() {
        // On click on the attack button
        this.attackBtn.addEventListener('click', () => {
            // The new life point of the players
            this.damage1 = Math.round(this.attackHeight * Math.random());
            this.damage2 = Math.round(this.attackHeight * Math.random());
            this.game.player.playerArray.lp = this.game.player.playerArray.lp - this.damage1;
            this.game.player2.playerArray.lp = this.game.player2.playerArray.lp - this.damage2;
            // Change the number and width of the div in the view
            this.playerLp = document.querySelectorAll('.player__status');
            this.playerLp[0].style.width = this.game.player.playerArray.lp + '%';
            this.playerLp[1].style.width = this.game.player2.playerArray.lp + '%';
            const points = document.querySelectorAll('.player__points');
            points[0].textContent = this.game.player.playerArray.lp;
            points[1].textContent = this.game.player2.playerArray.lp;
            // Alert that a player win if the players lp are equal or lower than 0
            if (this.game.player.playerArray.lp <= 0) {
                alert(this.game.player2.playerArray.name + ' wins');
            }
            if (this.game.player2.playerArray.lp <= 0) {
                alert(this.game.player.playerArray.name + ' wins');
            }
            // change the color of the player status bar
            console.log(this.game.player.playerArray.lp);
            this.playerLp[0].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // change the color of the player status bar
            this.playerLp[1].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // le log
            this.game.log.init(this.game);
        })
        // On click on the speial attack button
        this.specialAttackBtn.addEventListener('click', () => {
            // The new life point of the players
            this.game.player.playerArray.lp = this.game.player.playerArray.lp - Math.round(this.attackHeight * 2 * Math.random());
            this.game.player2.playerArray.lp = this.game.player2.playerArray.lp - Math.round(this.attackHeight * 2 * Math.random());
            // Change the number and width of the div in the view
            this.playerLp = document.querySelectorAll('.player__status');
            this.playerLp[0].style.width = this.game.player.playerArray.lp + '%';
            this.playerLp[1].style.width = this.game.player2.playerArray.lp + '%';
            const points = document.querySelectorAll('.player__points');
            points[0].textContent = this.game.player.playerArray.lp;
            points[1].textContent = this.game.player2.playerArray.lp;
            // Alert that a player win if the players lp are equal or lower than 0
            if (this.game.player.playerArray.lp <= 0) {
                alert(this.game.player2.playerArray.name + ' wins');
            }
            if (this.game.player2.playerArray.lp <= 0) {
                alert(this.game.player.playerArray.name + ' wins');
            }
            // change the color of the player status bar
            console.log(this.game.player.playerArray.lp);
            this.playerLp[0].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // change the color of the player status bar
            this.playerLp[1].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // le log
            this.game.log.init(this.game);
        })
        // On click on the speial heal button
        this.healBtn.addEventListener('click', () => {
            // The new life point of the players
            this.game.player.playerArray.lp = this.game.player.playerArray.lp + Math.round(this.attackHeight * Math.random());
            this.game.player2.playerArray.lp = this.game.player2.playerArray.lp + Math.round(this.attackHeight * Math.random());
            // Change the number and width of the div in the view
            this.playerLp = document.querySelectorAll('.player__status');
            console.log(this.game.player.playerArray.lp);
            console.log(this.playerLp[0]);
            this.playerLp[0].style.width = this.game.player.playerArray.lp + '%';
            this.playerLp[1].style.width = this.game.player2.playerArray.lp + '%';
            const points = document.querySelectorAll('.player__points');
            points[0].textContent = this.game.player.playerArray.lp;
            points[1].textContent = this.game.player2.playerArray.lp;
            // Alert that a player win if the players lp are equal or lower than 0
            if (this.game.player.playerArray.lp <= 0) {
                alert(this.game.player2.playerArray.name + ' wins');
            }
            if (this.game.player2.playerArray.lp <= 0) {
                alert(this.game.player.playerArray.name + ' wins');
            }
            // change the color of the player status bar
            console.log(this.game.player.playerArray.lp);
            this.playerLp[0].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // change the color of the player status bar
            this.playerLp[1].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
            // le log
            this.game.log.init(this.game);
        })
        // On click on the surrender button
        this.surrenderBtn.addEventListener('click', () => {
            // The new life point of the players
            this.game.player.playerArray.lp = 100;
            this.game.player2.playerArray.lp = 100;
            // Change the number and width of the div in the view
            this.playerLp = document.querySelectorAll('.player__status');

            this.playerLp[0].style.width = this.game.player.playerArray.lp + '%';
            this.playerLp[1].style.width = this.game.player2.playerArray.lp + '%';

            const points = document.querySelectorAll('.player__points');
            points[0].textContent = this.game.player.playerArray.lp;
            points[1].textContent = this.game.player2.playerArray.lp;
            // change the color of the player status bar
            this.playerLp[0].style.backgroundColor = 'hsl(' + 130 + 'deg,' + 60 + '%,' + 50 + '%)';
            // change the color of the player status bar
            this.playerLp[1].style.backgroundColor = 'hsl(' + 130 + 'deg,' + 60 + '%,' + 50 + '%)';
        })
    },
    attackEffect() {
        // The new life point of the players
        this.damage1 = Math.round(this.attackHeight * Math.random());
        this.damage2 = Math.round(this.attackHeight * Math.random());
        this.game.player.playerArray.lp = this.game.player.playerArray.lp - this.damage1;
        this.game.player2.playerArray.lp = this.game.player2.playerArray.lp - this.damage2;
        // Change the number and width of the div in the view
        this.playerLp = document.querySelectorAll('.player__status');
        this.playerLp[0].style.width = this.game.player.playerArray.lp + '%';
        this.playerLp[1].style.width = this.game.player2.playerArray.lp + '%';
        const points = document.querySelectorAll('.player__points');
        points[0].textContent = this.game.player.playerArray.lp;
        points[1].textContent = this.game.player2.playerArray.lp;
        // Alert that a player win if the players lp are equal or lower than 0
        if (this.game.player.playerArray.lp <= 0) {
            alert(this.game.player2.playerArray.name + ' wins');
        }
        if (this.game.player2.playerArray.lp <= 0) {
            alert(this.game.player.playerArray.name + ' wins');
        }
        // change the color of the player status bar
        console.log(this.game.player.playerArray.lp);
        this.playerLp[0].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
        // change the color of the player status bar
        this.playerLp[1].style.backgroundColor = 'hsl(' + this.game.player.playerArray.lp * 2 + 'deg,' + 60 + '%,' + 50 + '%)';
    }
}