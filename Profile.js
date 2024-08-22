import React from 'react';
import './Profile.css';

function Profile() {
  // Mock data for the profile details
  const profile = {
    name: "John Doe",
    gender: "Male",
    age: 28,
    picture: "https://via.placeholder.com/150",
    phone: "+1 234 567 890",
    email: "john.doe@example.com",
    patientId: "1234567890",
    medicalDetails: {
      affectedSide: "Left",
      condition: "Sprained Ankle",
      speciality: "Orthopedics",
      medicalHistory: "None"
    },
    goalReached: 75 // percentage value
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profile.picture} alt="Profile" className="profile-pic"/>
        <div className="profile-details">
          <h1>{profile.name}</h1>
          <p>Gender: {profile.gender}</p>
          <p>Age: {profile.age}</p>
          <p>Phone: {profile.phone}</p>
          <p>Email: {profile.email}</p>
          <p>Patient ID: {profile.patientId}</p>
        </div>
      </div>
      <div className="medical-details">
        <h2>Medical Details</h2>
        <p>Affected Side: {profile.medicalDetails.affectedSide}</p>
        <p>Condition: {profile.medicalDetails.condition}</p>
        <p>Speciality: {profile.medicalDetails.speciality}</p>
        <p>Medical History: {profile.medicalDetails.medicalHistory}</p>
      </div>
      <div className="goal-progress">
        <h2>Goal Reached</h2>
        <div className="semi-circle">
          <div className="semi-circle-inner" style={{transform: `rotate(${profile.goalReached * 1.8}deg)`}}></div>
        </div>
        <p>{profile.goalReached}%</p>
      </div>
    </div>
  );
}

export default Profile;
