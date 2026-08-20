// List of all teams
const teams = [
    { id: 1, name: "Obsidian FC", logo: "team_logo/Obsidian FC.jpg" },
    { id: 2, name: "Desky FC", logo: "team_logo/Desky FC.jpg" },
    { id: 3, name: "Man Utd", logo: "team_logo/Man UTD.jpg" },
    { id: 4, name: "Galaxiers", logo: "team_logo/Galaxiers.jpg" },
    { id: 5, name: "Hyper City", logo: "team_logo/Hyper City.jpg" },
    { id: 6, name: "Viper Fc", logo: "team_logo/Viper FC.jpg" },
    { id: 7, name: "Nobi Fc", logo: "team_logo/Nobi_Fc.jpeg" },
];

// All 42 Double Round-Robin fixtures (7 Teams, 14 Matchdays)
const matches = [
    // --- FIRST HALF OF SEASON ---
    { homeId: 1, awayId: 6, homeScore: 1, awayScore: 0, played: true, matchday: 1 },
    { homeId: 2, awayId: 5, homeScore: 0, awayScore: 0, played: true, matchday: 2 },
    { homeId: 3, awayId: 4, homeScore: 0, awayScore: 3, played: true, matchday: 3 },
    { homeId: 7, awayId: 5, homeScore: 0, awayScore: 3, played: true, matchday: 4 },
    { homeId: 1, awayId: 4, homeScore: 2, awayScore: 3, played: true, matchday: 5 },
    { homeId: 2, awayId: 3, homeScore: 1, awayScore: 0, played: true, matchday: 6 },
    { homeId: 6, awayId: 4, homeScore: 0, awayScore: 3, played: true, matchday: 7 },
    { homeId: 7, awayId: 3, homeScore: 3, awayScore: 0, played: true, matchday: 8 },
    { homeId: 1, awayId: 2, homeScore: 4, awayScore: 3, played: true, matchday: 9 },
    { homeId: 5, awayId: 3, homeScore: 0, awayScore: 0, played: false, matchday: 10 },
    { homeId: 6, awayId: 2, homeScore: 0, awayScore: 0, played: false, matchday: 11 },
    { homeId: 7, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 12 },
    { homeId: 4, awayId: 2, homeScore: 0, awayScore: 0, played: false, matchday: 13 },
    { homeId: 5, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 14 },
    { homeId: 6, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 15 },
    { homeId: 3, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 16 },
    { homeId: 4, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 17 },
    { homeId: 5, awayId: 6, homeScore: 0, awayScore: 0, played: false, matchday: 18 },
    { homeId: 2, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 19 },
    { homeId: 3, awayId: 6, homeScore: 0, awayScore: 0, played: false, matchday: 20 },
    { homeId: 4, awayId: 5, homeScore: 0, awayScore: 0, played: false, matchday: 21 },

    // --- SECOND HALF OF SEASON (Reverse Fixtures) ---
    { homeId: 6, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 22 },
    { homeId: 5, awayId: 2, homeScore: 0, awayScore: 0, played: false, matchday: 23 },
    { homeId: 4, awayId: 3, homeScore: 0, awayScore: 0, played: false, matchday: 24 },
    { homeId: 5, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 25 },
    { homeId: 4, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 26 },
    { homeId: 3, awayId: 2, homeScore: 0, awayScore: 0, played: false, matchday: 27 },
    { homeId: 4, awayId: 6, homeScore: 0, awayScore: 0, played: false, matchday: 28 },
    { homeId: 3, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 29 },
    { homeId: 2, awayId: 1, homeScore: 0, awayScore: 0, played: false, matchday: 30 },
    { homeId: 3, awayId: 5, homeScore: 0, awayScore: 0, played: false, matchday: 31 },
    { homeId: 2, awayId: 6, homeScore: 0, awayScore: 0, played: false, matchday: 32 },
    { homeId: 1, awayId: 7, homeScore: 0, awayScore: 0, played: false, matchday: 33 },
    { homeId: 2, awayId: 4, homeScore: 0, awayScore: 0, played: false, matchday: 34 },
    { homeId: 1, awayId: 5, homeScore: 0, awayScore: 0, played: false, matchday: 35 },
    { homeId: 7, awayId: 6, homeScore: 0, awayScore: 0, played: false, matchday: 36 },
    { homeId: 1, awayId: 3, homeScore: 0, awayScore: 0, played: false, matchday: 37 },
    { homeId: 7, awayId: 4, homeScore: 0, awayScore: 0, played: false, matchday: 38 },
    { homeId: 6, awayId: 5, homeScore: 0, awayScore: 0, played: false, matchday: 39 },
    { homeId: 7, awayId: 2, homeScore: 0, awayScore: 0, played: false, matchday: 40 },
    { homeId: 6, awayId: 3, homeScore: 0, awayScore: 0, played: false, matchday: 41 },
    { homeId: 5, awayId: 4, homeScore: 0, awayScore: 0, played: false, matchday: 42 }
];
