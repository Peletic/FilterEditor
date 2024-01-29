module.exports = {
  global: {
    "profit": 50000000,
    "profit_percentage": 60,
    "flipper_modes": {
      "attribute-direct-target": {
        "enabled": false,
        "min_volume": 1
      },
      "attribute-target": {
        "enabled": false,
        "min_volume": 1.5
      },
      "direct-target-pet": {
        "enabled": true,
        "min_volume": 1
      },
      "target-pet": {
        "enabled": true,
        "min_volume": 2
      },
      "direct-target": {
        "enabled": true,
        "min_volume": 1
      },
      "target": {
        "enabled": true,
        "min_volume": 1
      },
      "lbin": {
        "enabled": true,
        "min_volume": 1
      },
      "volatile-median": {
        "enabled": false,
        "min_volume": 1
      }
    }
  }
};