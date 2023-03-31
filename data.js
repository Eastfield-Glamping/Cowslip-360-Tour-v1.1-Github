var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen--living-room",
      "name": "Kitchen / Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.1384916966855432,
        "pitch": 0.018667951382980164,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -1.7904169709007238,
          "pitch": 0.09592738844888515,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": 2.1318524450084624,
          "pitch": 0.2414725330134928,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.008990207157598462,
        "pitch": -0.010364984925104181,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": -1.458539235317211,
          "pitch": 0.1573283160145067,
          "rotation": 0,
          "target": "0-kitchen--living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.3120942793160957,
        "pitch": 0.08629379052111119,
        "fov": 1.3608936558192368
      },
      "linkHotspots": [
        {
          "yaw": 1.5831947028004345,
          "pitch": 0.03495776739573486,
          "rotation": 0,
          "target": "0-kitchen--living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
