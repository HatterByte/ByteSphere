import React from 'react'
import PropTypes from 'prop-types'
import Moment from "react-moment";

const ProfileEducation = ({ education }) => {
    if (!education) {
      return null; // Return null if no education data is available
    }
  
    const { school, degree, fieldofstudy, current, to, from, description } = education;
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
    <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
        <strong>Degree: </strong> {degree}
    </p>
    <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
}

export default ProfileEducation
