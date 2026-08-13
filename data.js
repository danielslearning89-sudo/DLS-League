// List of all teams
const teams = [
    { id: 1, name: "Obsidian FC", logo: "team_logo/Obsidian FC.jpg" },
    { id: 2, name: "Desky FC", logo: "team_logo/Desky FC.jpg" },
    { id: 3, name: "Man Utd", logo: "team_logo/Man UTD.jpg" },
    { id: 4, name: "Galaxiers", logo: "team_logo/Galaxiers.jpg" },
    { id: 5, name: "Hyper City", logo: "team_logo/Hyper City.jpg" },
    { id: 6, name: "Viper Fc", logo: "team_logo/Viper FC.jpg" },
    { id: 7, name: "Manchester United H", logo: "team_logo/Manchester United H.jpg" },
];

// All 42 Double Round-Robin fixtures (7 Teams, 14 Matchdays)
const matches = [
    // --- FIRST HALF OF SEASON ---
    // Matchday 1 (Titan Warriors bye)
    { homeId: 1, awayId: 6, homeScore: 1, awayScore: 0, played: true },
    { homeId: 2, awayId: 5, homeScore: 0, awayScore: 0, played: true },
    { homeId: 3, awayId: 4, homeScore: 0, awayScore: 3, played: true },

    // Matchday 2 (Viper Squad bye)
    { homeId: 7, awayId: 5, homeScore: 0, awayScore: 0, played: false },
    { homeId: 1, awayId: 4, homeScore: 0, awayScore: 0, played: false },
    { homeId: 2, awayId: 3, homeScore: 0, awayScore: 0, played: false },

    // Matchday 3 (Apex Predators bye)
    { homeId: 6, awayId: 4, homeScore: 0, awayScore: 0, played: false },
    { homeId: 7, awayId: 3, homeScore: 0, awayScore: 0, played: false },
    { homeId: 1, awayId: 2, homeScore: 0, awayScore: 0, played: false },

    // Matchday 4 (Shadow Strikers bye)
    { homeId: 5, awayId: 3, homeScore: 0, awayScore: 0, played: false },
    { homeId: 6, awayId: 2, homeScore: 0, awayScore: 0, played: false },
    { homeId: 7, awayId: 1, homeScore: 0, awayScore: 0, played: false },

    // Matchday 5 (Golden Eagles bye)
    { homeId: 4, awayId: 2, homeScore: 0, awayScore: 0, played: false },
    { homeId: 5, awayId: 1, homeScore: 0, awayScore: 0, played: false },
    { homeId: 6, awayId: 7, homeScore: 0, awayScore: 0, played: false },

    // Matchday 6 (Cyber Knights bye)
    { homeId: 3, awayId: 1, homeScore: 0, awayScore: 0, played: false },
    { homeId: 4, awayId: 7, homeScore: 0, awayScore: 0, played: false },
    { homeId: 5, awayId: 6, homeScore: 0, awayScore: 0, played: false },

    // Matchday 7 (Thunder FC bye)
    { homeId: 2, awayId: 7, homeScore: 0, awayScore: 0, played: false },
    { homeId: 3, awayId: 6, homeScore: 0, awayScore: 0, played: false },
    { homeId: 4, awayId: 5, homeScore: 0, awayScore: 0, played: false },

    // --- SECOND HALF OF SEASON (Reverse Fixtures) ---
    // Matchday 8 (Titan Warriors bye)
    { homeId: 6, awayId: 1, homeScore: 0, awayScore: 0, played: false },
    { homeId: 5, awayId: 2, homeScore: 0, awayScore: 0, played: false },
    { homeId: 4, awayId: 3, homeScore: 0, awayScore: 0, played: false },

    // Matchday 9 (Viper Squad bye)
    { homeId: 5, awayId: 7, homeScore: 0, awayScore: 0, played: false },
    { homeId: 4, awayId: 1, homeScore: 0, awayScore: 0, played: false },
    { homeId: 3, awayId: 2, homeScore: 0, awayScore: 0, played: false },

    // Matchday 10 (Apex Predators bye)
    { homeId: 4, awayId: 6, homeScore: 0, awayScore: 0, played: false },
    { homeId: 3, awayId: 7, homeScore: 0, awayScore: 0, played: false },
    { homeId: 2, awayId: 1, homeScore: 0, awayScore: 0, played: false },

    // Matchday 11 (Shadow Strikers bye)
    { homeId: 3, awayId: 5, homeScore: 0, awayScore: 0, played: false },
    { homeId: 2, awayId: 6, homeScore: 0, awayScore: 0, played: false },
    { homeId: 1, awayId: 7, homeScore: 0, awayScore: 0, played: false },

    // Matchday 12 (Golden Eagles bye)
    { homeId: 2, awayId: 4, homeScore: 0, awayScore: 0, played: false },
    { homeId: 1, awayId: 5, homeScore: 0, awayScore: 0, played: false },
    { homeId: 7, awayId: 6, homeScore: 0, awayScore: 0, played: false },

    // Matchday 13 (Cyber Knights bye)
    { homeId: 1, awayId: 3, homeScore: 0, awayScore: 0, played: false },
    { homeId: 7, awayId: 4, homeScore: 0, awayScore: 0, played: false },
    { homeId: 6, awayId: 5, homeScore: 0, awayScore: 0, played: false },

    // Matchday 14 (Thunder FC bye)
    { homeId: 7, awayId: 2, homeScore: 0, awayScore: 0, played: false },
    { homeId: 6, awayId: 3, homeScore: 0, awayScore: 0, played: false },
    { homeId: 5, awayId: 4, homeScore: 0, awayScore: 0, played: false }
];
