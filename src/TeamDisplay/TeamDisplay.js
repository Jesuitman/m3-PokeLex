import React from 'react';
import "./TeamDisplay.css";

function TeamDisplay({ team, handleRemoveFromTeam }) {
  const exportTeam = () => {
    const nullPositions = team.filter(member => member === null).length;
    
    if (nullPositions > 0) {
      const confirmExport = window.confirm(`You still have ${nullPositions} empty spaces on your team. Are you sure you want to export?`);
      
      if (!confirmExport) {
        return;
      }
    }

    // Your export logic goes here

    alert("Team exported!");
  };

  return (
    <div className="team-section">
      <h2>Your team so far...</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            {member ? (
              <>
                <img src={member.sprites.front_default} alt={member.name} className="team-member-sprite" />
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