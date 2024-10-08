import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({ experience }) => {
  if (!experience) {
    return null; // Return null if no experience data is available
  }

  const { company, title, location, current, to, from, description } = experience;
    
  return <div>
    <h3 className="text-dark">{company}</h3>
    <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
        <strong>Position: </strong> {title}
    </p>
    {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
  </div>;
};

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
