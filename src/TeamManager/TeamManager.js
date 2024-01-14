import React from 'react';
import './TeamManager.css'; // Create a CSS file for styling

function TeamManager({ exportedTeam }) {
  return (
    <div className="team-manager">
      <h2>Your exported team</h2>
      <div className="exported-team">
        {exportedTeam.map((member, index) => (
          <div key={index} className="team-member-card">
            <img src={member.sprite} alt={member.name} className="team-member-sprite" />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamManager;