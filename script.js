document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    renderFixtures();
});

function renderTable() {
    // Initialize stats for each team
    let standings = teams.map(team => ({
        ...team,
        played: 0, won: 0, drawn: 0, lost: 0,
        gf: 0, ga: 0, gd: 0, points: 0
    }));

    // Calculate match outcomes
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
                home.points += 3;
                away.lost++;
            } else if (match.homeScore < match.awayScore) {
                away.won++;
                away.points += 3;
                home.lost++;
            } else {
                home.drawn++;
                away.drawn++;
                home.points += 1;
                away.points += 1;
            }

            home.gd = home.gf - home.ga;
            away.gd = away.gf - away.ga;
        }
    });

    // Sort teams by points, then Goal Difference (GD)
    standings.sort((a, b) => b.points - a.points || b.gd - a.gd);

    // Output rows to HTML
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = standings.map((team, index) => `
        <tr>
            <td>${index + 1}</td>
            <td class="team-cell">
                <img src="${team.logo}" alt="${team.name}" class="team-logo">
                <span>${team.name}</span>
            </td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.gd > 0 ? '+' + team.gd : team.gd}</td>
            <td><strong>${team.points}</strong></td>
        </tr>
    `).join('');
}

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