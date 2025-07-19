export const maps = {
  clubhouse: {
    name: "Clubhouse",
    image: "/images/maps/clubhouse.jpg",
    description: "A biker gang clubhouse with multiple levels and tight corridors",
    sites: {
      "Cash Room": {
        name: "Cash Room",
        description: "The main money storage area with reinforced walls",
        image: "/images/sites/clubhouse-cash-room.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "smoke", "jager"]
      },
      "Church": {
        name: "Church",
        description: "The chapel area with open sightlines",
        image: "/images/sites/clubhouse-church.jpg",
        difficulty: "Hard",
        bestOperators: ["valkyrie", "mute", "bandit", "smoke"]
      },
      "Gym": {
        name: "Gym",
        description: "The fitness area with multiple entry points",
        image: "/images/sites/clubhouse-gym.jpg",
        difficulty: "Easy",
        bestOperators: ["lesion", "frost", "kapkan", "jager"]
      },
      "Bedroom": {
        name: "Bedroom",
        description: "The sleeping quarters with tight angles",
        image: "/images/sites/clubhouse-bedroom.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "smoke", "mute"]
      }
    }
  },
  
  oregon: {
    name: "Oregon",
    image: "/images/maps/oregon.jpg",
    description: "A rural farmhouse with multiple buildings and outdoor areas",
    sites: {
      "Basement": {
        name: "Basement",
        description: "The underground area with limited access points",
        image: "/images/sites/oregon-basement.jpg",
        difficulty: "Hard",
        bestOperators: ["maestro", "smoke", "kapkan", "mute"]
      },
      "Tower": {
        name: "Tower",
        description: "The elevated tower with vertical gameplay",
        image: "/images/sites/oregon-tower.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "jager", "bandit", "lesion"]
      },
      "Kitchen": {
        name: "Kitchen",
        description: "The main kitchen area with multiple angles",
        image: "/images/sites/oregon-kitchen.jpg",
        difficulty: "Easy",
        bestOperators: ["frost", "kapkan", "lesion", "jager"]
      },
      "Meeting Hall": {
        name: "Meeting Hall",
        description: "The large meeting area with open space",
        image: "/images/sites/oregon-meeting-hall.jpg",
        difficulty: "Medium",
        bestOperators: ["maestro", "smoke", "valkyrie", "mute"]
      }
    }
  },
  
  bank: {
    name: "Bank",
    image: "/images/maps/bank.jpg",
    description: "A large financial institution with multiple floors",
    sites: {
      "Vault": {
        name: "Vault",
        description: "The secure vault area with reinforced walls",
        image: "/images/sites/bank-vault.jpg",
        difficulty: "Hard",
        bestOperators: ["bandit", "mute", "lesion", "frost"]
      },
      "Open Area": {
        name: "Open Area",
        description: "The main lobby and teller area",
        image: "/images/sites/bank-open-area.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "jager", "smoke"]
      },
      "Archives": {
        name: "Archives",
        description: "The document storage area with tight corridors",
        image: "/images/sites/bank-archives.jpg",
        difficulty: "Easy",
        bestOperators: ["kapkan", "frost", "lesion", "mute"]
      },
      "CEO Office": {
        name: "CEO Office",
        description: "The executive office area with luxury furnishings",
        image: "/images/sites/bank-ceo-office.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "smoke", "jager"]
      }
    }
  },
  
  consulate: {
    name: "Consulate",
    image: "/images/maps/consulate.jpg",
    description: "A diplomatic building with formal architecture",
    sites: {
      "Garage": {
        name: "Garage",
        description: "The underground parking area",
        image: "/images/sites/consulate-garage.jpg",
        difficulty: "Hard",
        bestOperators: ["bandit", "mute", "lesion", "smoke"]
      },
      "Lobby": {
        name: "Lobby",
        description: "The main entrance area with grand architecture",
        image: "/images/sites/consulate-lobby.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "jager", "frost"]
      },
      "Press Room": {
        name: "Press Room",
        description: "The media area with open sightlines",
        image: "/images/sites/consulate-press-room.jpg",
        difficulty: "Easy",
        bestOperators: ["kapkan", "lesion", "frost", "jager"]
      },
      "Archives": {
        name: "Archives",
        description: "The document storage area",
        image: "/images/sites/consulate-archives.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "smoke", "mute"]
      }
    }
  },
  
  border: {
    name: "Border",
    image: "/images/maps/border.jpg",
    description: "A border crossing facility with multiple checkpoints",
    sites: {
      "Armory": {
        name: "Armory",
        description: "The weapons storage area with reinforced walls",
        image: "/images/sites/border-armory.jpg",
        difficulty: "Hard",
        bestOperators: ["bandit", "mute", "maestro", "smoke"]
      },
      "Ventilation": {
        name: "Ventilation",
        description: "The HVAC system area with tight spaces",
        image: "/images/sites/border-ventilation.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "lesion", "kapkan", "jager"]
      },
      "Customs": {
        name: "Customs",
        description: "The inspection area with open sightlines",
        image: "/images/sites/border-customs.jpg",
        difficulty: "Easy",
        bestOperators: ["frost", "kapkan", "lesion", "jager"]
      },
      "Tellers": {
        name: "Tellers",
        description: "The service counter area",
        image: "/images/sites/border-tellers.jpg",
        difficulty: "Medium",
        bestOperators: ["valkyrie", "maestro", "smoke", "mute"]
      }
    }
  }
};

export const getMap = (mapId) => {
  return maps[mapId];
};

export const getAllMaps = () => {
  return Object.entries(maps).map(([id, map]) => ({
    id,
    ...map
  }));
}; 