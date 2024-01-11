import React from 'react';
import "./TeamDisplay.css"

function TeamDisplay({ team, handleRemoveFromTeam }) {
  return (
    <div className="team-section">
      <h2>Your team so far...</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            {member ? (
              <>
                <img src={member.sprites.front_default} alt={member.name} className="team-member-sprite" />
                <button onClick={() => handleRemoveFromTeam(index)}>Remove</button>
              </>
            ) : (
              <p>Empty</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDisplay;