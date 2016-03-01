var http = require('http');

var post_data = {
	"provider": {
		"name": "Dota 2",
		"appid": 570,
		"version": 43,
		"timestamp": 1456285796
	},
	"map": {
		"name": "dota",
		"matchid": 0,
		"game_time": 20,
		"clock_time": -63,
		"daytime": true,
		"nightstalker_night": false,
		"game_state": "DOTA_GAMERULES_STATE_PRE_GAME",
		"win_team": "none",
		"customgamename": "",
		"ward_purchase_cooldown": 0
	},
	"player": {
		"steamid": "76561197993617025",
		"name": "ShadowFrench's Name Spoofer",
		"activity": "playing",
		"kills": 0,
		"deaths": 0,
		"assists": 0,
		"last_hits": 0,
		"denies": 0,
		"kill_streak": 0,
		"team_name": "radiant",
		"gold": 625,
		"gold_reliable": 0,
		"gold_unreliable": 625,
		"gpm": 0,
		"xpm": 0
	},
	"hero": {
		"id": 50,
		"name": "npc_dota_hero_dazzle",
		"level": 1,
		"alive": true,
		"respawn_seconds": 0,
		"buyback_cost": 101,
		"buyback_cooldown": 0,
		"health": 484,
		"max_health": 484,
		"health_percent": 100,
		"mana": 351,
		"max_mana": 351,
		"mana_percent": 100,
		"silenced": false,
		"stunned": false,
		"disarmed": false,
		"magicimmune": false,
		"hexed": false,
		"muted": false,
		"break": false,
		"has_debuff": false
	},
	"abilities": {
		"ability0": {
			"name": "dazzle_poison_touch",
			"level": 0,
			"can_cast": false,
			"passive": false,
			"ability_active": true,
			"cooldown": 0,
			"ultimate": false
		},
		"ability1": {
			"name": "dazzle_shallow_grave",
			"level": 0,
			"can_cast": false,
			"passive": false,
			"ability_active": true,
			"cooldown": 0,
			"ultimate": false
		},
		"ability2": {
			"name": "dazzle_shadow_wave",
			"level": 1,
			"can_cast": false,
			"passive": false,
			"ability_active": true,
			"cooldown": 8,
			"ultimate": false
		},
		"ability3": {
			"name": "dazzle_weave",
			"level": 0,
			"can_cast": false,
			"passive": false,
			"ability_active": true,
			"cooldown": 0,
			"ultimate": true
		},
		"attributes": {
			"level": 0
		}
	},
	"items": {
		"slot0": {
			"name": "empty"
		},
		"slot1": {
			"name": "empty"
		},
		"slot2": {
			"name": "empty"
		},
		"slot3": {
			"name": "empty"
		},
		"slot4": {
			"name": "empty"
		},
		"slot5": {
			"name": "empty"
		},
		"stash0": {
			"name": "empty"
		},
		"stash1": {
			"name": "empty"
		},
		"stash2": {
			"name": "empty"
		},
		"stash3": {
			"name": "empty"
		},
		"stash4": {
			"name": "empty"
		},
		"stash5": {
			"name": "empty"
		}
	},
	"previously": {
		"map": {
			"clock_time": -64
		}
	}
};

post_data = JSON.stringify(post_data)


var post_options = {
      host: '127.0.0.1',
      port: '323232',
      path: '',
      method: 'POST'//,
      /*
      headers: {
        'Content-Type': 'text/data',
          'Content-Length':'test')
      } */
  };

  

  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();
