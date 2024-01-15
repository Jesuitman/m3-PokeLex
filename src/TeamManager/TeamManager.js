import React from 'react';
import './TeamManager.css';
import PropTypes from 'prop-types'


function TeamManager({ exportedTeam }) {
  return (
    <div className="team-manager">
      <h2>Your exported team</h2>
      {exportedTeam.length === 0 && (
        <div className="list-container">
          Pick a generation and add some pokemon to your team!
        </div>)}
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

TeamManager.propTypes = {
    exportedTeam: PropTypes.array,
  };