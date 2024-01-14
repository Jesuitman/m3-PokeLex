import React from 'react';
import "./TeamDisplay.css";

function TeamDisplay({ team, handleRemoveFromTeam,exportTeam }) {

  return (
    <div className="team-section">
      <h2>Your team so far...</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            {member ? (
              <>
                <img src={member.sprite} alt={member.name} className="team-member-sprite" />
                <button className='gen-button' onClick={() => handleRemoveFromTeam(index)}>Remove</button>
              </>
            ) : (
              <p>Empty</p>
            )}
          </div>
        ))}
      </div>
      <button className='gen-button' onClick={exportTeam}>Export Team</button>
    </div>
  );
}

export default TeamDisplay;