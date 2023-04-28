import React from 'react';
import '../App.css';
import ScheduleForm from '../components/ScheduleForm';

function App() {
  return (
    <div className="App">
      <h1>Healthy & Vibrant Appointment Request</h1>
      <p>At Healthy & Vibrant, new patients can expect a comprehensive assessment of their current health situation. Our approach includes in-depth patient examinations, surveys, testing, dietary evaluations, and laboratory assessments, as needed, to gain a thorough understanding of your health status.</p>
        <br/>

<p>We <strong>encourage you to bring copies of your recent laboratory results, imaging, and any other relevant health information that may help us in our assessment.</strong> From our very first meeting, we strive to work closely with you to develop a personalized and holistic treatment plan that addresses your unique health needs. Our aim is to uncover the root cause of any health concerns and work towards long-lasting results. Additionally, we collaborate with your current healthcare providers as needed to ensure an integrated approach to your overall well-being.

</p>
      <br/>
      <ScheduleForm />
    </div>
  );
}

export default App;