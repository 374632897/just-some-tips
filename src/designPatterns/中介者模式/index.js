function Player (name, teamColor) {
  this.name = name;
  this.teamColor = teamColor;
  this.state = 'alive';
}
Player.prototype.lose = function () {
  // this.state = 'dead';
  console.log(this.name + ' lose');
};
Player.prototype.win = function () {
  console.log(this.name + '  won');
};
Player.prototype.die = function () {
  this.state = 'dead';
  playerDirector.ReceiveMessage('playerDead', this);
}
Player.prototype.remove = function () {
  playerDirector.ReceiveMessage('removePlayer', this);
}
Player.prototype.changeTeam = function (color) {
  playerDirector.ReceiveMessage('changeTeam', this, color);
}
var playerFactory = function (name, teamColor) {
  var newPlayer = new Player(name, teamColor);
  playerDirector.ReceiveMessage('addPlayer', newPlayer);
  return newPlayer;
}

var playerDirector = (function () {
  var players = {}, operations = {};
  operations.addPlayer = function (player) {
    var teamColor = player.teamColor;
    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player);
  };
  operations.removePlayer = function (player) {
    var teamColor = player.teamColor, teamPlayers = players[teamColor] || [];
    for (var i = teamPlayers.length - 1; i >= 0; i--) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1);
      }
    }
  };
  operations.changeTeam = function (player, newTeamColor) {
    operations.removePlayer(player);
    player.teamColor = newTeamColor;
    operations.addPlayer(player);
  };
  operations.playerDead = function (player) {
    var teamColor = player.teamColor, teamPlayers = players[teamColor];
    var all_dead = true;
    for (var i = 0, nowPlayer; nowPlayer = teamPlayers[i++];) {
      if (nowPlayer.state !== 'dead') {
        all_dead = false;
        break;
      }
    }
    if (all_dead === true) {
      for (var i = 0, nowPlayer; nowPlayer = teamPlayers[i++];) {
        nowPlayer.lose();
      }
      for (var color in players) {
        if (color !== teamColor) {
          var teamPlayers = players[color];
          for (var i = 0, nowPlayer; nowPlayer = teamPlayers[i++];) {
            nowPlayer.win();
          }
        }
      }
    }
  };
  var ReceiveMessage = function () {
    var message = Array.prototype.shift.call(arguments);
    operations[message].apply(this, arguments);
  };
  return {
    ReceiveMessage: ReceiveMessage
  };
})();

var player1 = playerFactory('Jason', 'red');
var player2 = playerFactory('Jason2', 'red');
var player3 = playerFactory('Jason3', 'red');
var player4 = playerFactory('Jason4', 'red');
var player5 = playerFactory('Jason5', 'red');
var player6 = playerFactory('Jason6', 'blue');
var player7 = playerFactory('Jason7', 'blue');
var player8 = playerFactory('Jason8', 'blue');
var player9 = playerFactory('Jason9', 'blue');
var player10 = playerFactory('Jason0', 'blue');
