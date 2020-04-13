import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function App() {
  const [periodType, setPeriodType] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setPeriodType(event.target.value);
  };
  const handleClick = () => setLoading(true);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  return (
    <div className="app">
      <div className="form-section">
        <h1 className="title">COVID-19-ESTIMATOR</h1>
        <hr />
        <div className="text-box">
          <p className="main-text">Enter all the information below in order to get an estimate of the state of COVID-19</p>
        </div>
        <Form>
          <Form.Group>
            <Form.Label>Population</Form.Label>
            <Form.Control data-population type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Period Type</Form.Label>
            <Form.Control data-period-type as="select">
              <option value=""></option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Time to Elapse</Form.Label>
            <Form.Control data-time-to-elapse type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reported Cases</Form.Label>
            <Form.Control data-reported-cases type="number" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Hospital Beds</Form.Label>
            <Form.Control data-total-hospital-beds type="number" />
          </Form.Group>

          <Button
            className="submit-btn"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Loading…' : 'Click to load'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
