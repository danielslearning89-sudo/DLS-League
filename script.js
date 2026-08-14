// Calculate Points, GD, and Sort Standings
function calculateStandings() {
    // Initialize stats for each team
    const standings = teams.map(team => ({
        ...team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        pts: 0
    }));

    // Process each played match
    matches.forEach(match => {
        if (!match.played) return;

        const home = standings.find(t => t.id === match.homeId);
        const away = standings.find(t => t.id === match.awayId);

        if (home && away) {
            home.played++;
            away.played++;

            home.gf += match.homeScore;
            home.ga += match.awayScore;
            away.gf += match.awayScore;
            away.ga += match.homeScore;

            if (match.homeScore > match.awayScore) {
                home.won++;
                home.pts += 3;
                away.lost++;
            } else if (match.homeScore < match.awayScore) {
                away.won++;
                away.pts += 3;
                home.lost++;
            } else {
                home.drawn++;
                home.pts += 1;
                away.drawn++;
                away.pts += 1;
            }
        }
    });

    // Calculate Goal Difference & Sort (Points -> Goal Difference -> Goals For)
    standings.forEach(t => t.gd = t.gf - t.ga);

    standings.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });

    return standings;
}

// Render Standings Table
function renderTable() {
    const tableBody = document.getElementById("table-body");
    const standings = calculateStandings();

    tableBody.innerHTML = standings.map((team, index) => `
        <tr>
            <td>${index + 1}</td>
            <td class="team-cell">
                <img src="${team.logo}" class="team-logo" alt="">
                <span>${team.name}</span>
            </td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.gd > 0 ? '+' + team.gd : team.gd}</td>
            <td><strong>${team.pts}</strong></td>
        </tr>
    `).join('');

    return standings;
}

// Render Fixtures List
function renderFixtures() {
    const container = document.getElementById("fixtures-container");
    
    container.innerHTML = matches.map(match => {
        const home = teams.find(t => t.id === match.homeId);
        const away = teams.find(t => t.id === match.awayId);

        const scoreDisplay = match.played 
            ? `${match.homeScore} - ${match.awayScore}` 
            : `VS`;

        return `
            <div class="match-card">
                <div class="match-team">
                    <img src="${home.logo}" class="team-logo" alt="">
                    <span>${home.name}</span>
                </div>
                <div class="score-box">${scoreDisplay}</div>
                <div class="match-team away">
                    <span>${away.name}</span>
                    <img src="${away.logo}" class="team-logo" alt="">
                </div>
            </div>
        `;
    }).join('');
}

// Search Filter Function
function filterFixtures() {
    const query = document.getElementById("team-search").value.toLowerCase().trim();
    const matchCards = document.querySelectorAll("#fixtures-container .match-card");

    matchCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (query === "" || text.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Update Top Stats Overview Cards
function updateStatsOverview(standings) {
    let totalPlayed = 0;
    let totalGoals = 0;

    matches.forEach(match => {
        if (match.played) {
            totalPlayed++;
            totalGoals += (match.homeScore + match.awayScore);
        }
    });

    document.getElementById("stat-matches").textContent = totalPlayed;
    document.getElementById("stat-goals").textContent = totalGoals;

    if (standings && standings.length > 0) {
        document.getElementById("stat-leader").textContent = standings[0].name;
    }
}

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    const sortedStandings = renderTable();
    renderFixtures();
    updateStatsOverview(sortedStandings);
});
