export const operators = {
  // Attackers
  nomad: {
    name: "Nomad",
    role: "attacker",
    icon: "💨",
    image: "/images/operators/r6-operators-list-nomad.webp",
    gadget: "Airjab Launcher",
    description: "Breaches soft walls and floors with a tactical hammer",
    strategies: {
      clubhouse: {
        "Cash Room": [
          {
            placement: "Above Cash Room",
            description: "Breach the floor above Cash Room to create vertical pressure",
            image: "/images/strategies/sledge/clubhouse-cash-room-floor.jpg",
            view: "Looking down into Cash Room from above"
          }
        ],
        "Church": [
          {
            placement: "Church Wall",
            description: "Breach the soft wall between Church and Cash Room",
            image: "/images/strategies/sledge/clubhouse-church-wall.jpg",
            view: "Direct line of sight into Cash Room"
          }
        ]
      },
      oregon: {
        "Basement": [
          {
            placement: "Laundry Room Floor",
            description: "Breach the floor above Laundry Room for vertical control",
            image: "/images/strategies/sledge/oregon-laundry-floor.jpg",
            view: "Overlooking Laundry Room and Supply Room"
          }
        ]
      }
    }
  },
  
  zero: {
    name: "Zero",
    role: "attacker",
    icon: "👁️",
    image: "/images/operators/r6s-operator-list-zero.webp",
    gadget: "Argus Launcher",
    description: "Disables electronic devices with electromagnetic pulses",
    strategies: {
      bank: {
        "Vault": [
          {
            placement: "Outside Vault Door",
            description: "EMP the vault door to disable Bandit batteries",
            image: "/images/strategies/thatcher/bank-vault-door.jpg",
            view: "Vault door with disabled electronics"
          }
        ]
      }
    }
  },
  
  // Defenders
  valkyrie: {
    name: "Valkyrie",
    role: "defender",
    icon: "\uD83D\uDCF9",
    image: "/images/operators/r6-operators-list-valkyrie.webp",
    gadget: "Black Eye Cameras",
    description: "Deployable surveillance cameras that stick to surfaces",
    strategies: {
      clubhouse: {
        "Cash Room": [
          {
            placement: "Outside Cash Room Window",
            description: "Camera on the exterior wall to watch for window pushes",
            image: "/images/strategies/valkyrie/clubhouse-cash-window.jpg",
            view: "Clear view of attackers approaching the window"
          },
          {
            placement: "Church Hallway",
            description: "Camera in Church hallway to watch rotations",
            image: "/images/strategies/valkyrie/clubhouse-church-hall.jpg",
            view: "Monitoring Church to Cash Room rotations"
          }
        ],
        "Church": [
          {
            placement: "Church Roof",
            description: "Camera on Church roof for exterior surveillance",
            image: "/images/strategies/valkyrie/clubhouse-church-roof.jpg",
            view: "Wide view of Church exterior and approaches"
          }
        ]
      },
      oregon: {
        "Basement": [
          {
            placement: "Laundry Room Vent",
            description: "Camera in laundry room vent for vertical intel",
            image: "/images/strategies/valkyrie/oregon-laundry-vent.jpg",
            view: "Looking up through the vent system"
          }
        ],
        "Tower": [
          {
            placement: "Tower Stairs",
            description: "Camera on tower stairs to watch for pushes",
            image: "/images/strategies/valkyrie/oregon-tower-stairs.jpg",
            view: "Monitoring tower stairwell access"
          }
        ]
      },
      bank: {
        "Vault": [
          {
            placement: "Vault Lobby",
            description: "Camera in vault lobby to watch for vault pushes",
            image: "/images/strategies/valkyrie/bank-vault-lobby.jpg",
            view: "Clear view of vault entrance and surrounding area"
          }
        ],
        "Open Area": [
          {
            placement: "Main Lobby Ceiling",
            description: "Camera on main lobby ceiling for wide surveillance",
            image: "/images/strategies/valkyrie/bank-main-lobby.jpg",
            view: "Overview of main lobby and teller area"
          }
        ]
      }
    }
  },
  
  maestro: {
    name: "Maestro",
    role: "defender",
    icon: "\uD83C\uDFAF",
    image: "/images/operators/r6-operators-list-maestro.webp",
    gadget: "Evil Eye Cameras",
    description: "Bulletproof cameras that can shoot laser beams",
    strategies: {
      clubhouse: {
        "Cash Room": [
          {
            placement: "Cash Room Corner",
            description: "Evil Eye in corner to deny plant attempts",
            image: "/images/strategies/maestro/clubhouse-cash-corner.jpg",
            view: "Covering the entire Cash Room site"
          }
        ]
      },
      oregon: {
        "Basement": [
          {
            placement: "Laundry Room Wall",
            description: "Evil Eye on laundry room wall for site control",
            image: "/images/strategies/maestro/oregon-laundry-wall.jpg",
            view: "Denying laundry room access and plant attempts"
          }
        ]
      }
    }
  },
  
  
  mute: {
    name: "Mute",
    role: "defender",
    icon: "\uD83D\uDD07",
    image: "/images/operators/r6-operators-list-mute.webp",
    gadget: "Signal Disruptors",
    description: "Jams electronic devices and drones",
    strategies: {
      clubhouse: {
        "Cash Room": [
          {
            placement: "Cash Room Door",
            description: "Signal disruptor at door to prevent drone intel",
            image: "/images/strategies/mute/clubhouse-cash-door.jpg",
            view: "Jamming drones from entering site"
          }
        ]
      }
    }
  },
  
  kapkan: {
    name: "Kapkan",
    role: "defender",
    icon: "\uD83D\uDCA3",
    image: "/images/operators/r6-operators-list-kapkan.webp",
    gadget: "Entry Denial Devices",
    description: "Explosive traps placed on doorways and windows",
    strategies: {
      oregon: {
        "Basement": [
          {
            placement: "Laundry Room Door",
            description: "EDD on laundry room door to damage attackers",
            image: "/images/strategies/kapkan/oregon-laundry-door.jpg",
            view: "Trap on main entrance to laundry room"
          }
        ]
      }
    }
  },
  
  frost: {
    name: "Frost",
    role: "defender",
    icon: "\u2744\uFE0F",
    image: "/images/operators/r6-operators-list-frost.webp",
    gadget: "Welcome Mats",
    description: "Bear traps that down attackers when stepped on",
    strategies: {
      bank: {
        "Vault": [
          {
            placement: "Vault Stairs",
            description: "Welcome mat at bottom of vault stairs",
            image: "/images/strategies/frost/bank-vault-stairs.jpg",
            view: "Trap at stairwell exit to vault"
          }
        ]
      }
    }
  }
};

export const getOperatorsByRole = (role) => {
  return Object.entries(operators).filter(([_, operator]) => operator.role === role);
};

export const getOperator = (operatorId) => {
  return operators[operatorId];
}; 