var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-1",
      "name": "LIVING 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.7571297173383496,
          "pitch": 1.052782251432948,
          "rotation": 2.356194490192345,
          "target": "1-living-2"
        },
        {
          "yaw": -1.261551097480691,
          "pitch": 0.35117563998117163,
          "rotation": 0,
          "target": "2-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-2",
      "name": "LIVING 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.15420669313544977,
          "pitch": 0.41904502471633975,
          "rotation": 0,
          "target": "2-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-1",
      "name": "DINING 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.022202182671737347,
          "pitch": 0.24160937367033597,
          "rotation": 3.141592653589793,
          "target": "3-dining-2"
        },
        {
          "yaw": 1.67662511218035,
          "pitch": 0.3585539960081281,
          "rotation": 0,
          "target": "5-prayer-room-"
        },
        {
          "yaw": -2.5813256340189756,
          "pitch": 0.5175634392284305,
          "rotation": 5.497787143782138,
          "target": "0-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-2",
      "name": "DINING 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.11666438558858339,
          "pitch": 0.5197537429456709,
          "rotation": 7.853981633974483,
          "target": "2-dining-1"
        },
        {
          "yaw": 0.2227411418314098,
          "pitch": 0.24612943093585926,
          "rotation": 0,
          "target": "0-living-1"
        },
        {
          "yaw": -0.46335214090378685,
          "pitch": 0.20753010229350188,
          "rotation": 4.71238898038469,
          "target": "5-prayer-room-"
        },
        {
          "yaw": 1.8781791910328796,
          "pitch": 0.4457355343077829,
          "rotation": 0,
          "target": "4-wash-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash-room",
      "name": "WASH ROOM",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2747020082160194,
          "pitch": 1.0557840747878462,
          "rotation": 0,
          "target": "3-dining-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-prayer-room-",
      "name": "PRAYER ROOM ",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.01611043467674378,
        "pitch": 0.009398784133836102,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.2878616849804754,
          "pitch": 0.5198455473570434,
          "rotation": 0.7853981633974483,
          "target": "2-dining-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KOYAMON HALL INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
