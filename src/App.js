import React, { useState } from 'react';

const CarSellForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedFeatures = [...carData.features];
    if (checked) {
      updatedFeatures.push(name);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== name);
    }
    setCarData((prevData) => ({
      ...prevData,
      features: updatedFeatures,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Car Make:
        <input
          type="text"
          name="make"
          value={carData.make}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <label style={styles.label}>
        Car Model:
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <label style={styles.label}>
        Year:
        <input
          type="date"
          name="year"
          value={carData.year}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <label style={styles.label}>
        Mileage:
        <input
          type="number"
          name="mileage"
          value={carData.mileage}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <label style={styles.label}>
        Condition:
        <br />
        <label style={styles.radioLabel}>
          Excellent
          <input
            type="radio"
            name="condition"
            value="Excellent"
            checked={carData.condition === 'Excellent'}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Good
          <input
            type="radio"
            name="condition"
            value="Good"
            checked={carData.condition === 'Good'}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Fair
          <input
            type="radio"
            name="condition"
            value="Fair"
            checked={carData.condition === 'Fair'}
            onChange={handleChange}
          />
        </label>
        <br />
        <label style={styles.radioLabel}>
          Poor
          <input
            type="radio"
            name="condition"
            value="Poor"
            checked={carData.condition === 'Poor'}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <label style={styles.label}>
        Features:
        <br />
        <label style={styles.checkboxLabel}>
          Air Conditioning
          <input
            type="checkbox"
            name="Air Conditioning"
            checked={carData.features.includes('Air Conditioning')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Power Steering
          <input
            type="checkbox"
            name="Power Steering"
            checked={carData.features.includes('Power Steering')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Power Windows
          <input
            type="checkbox"
            name="Power Windows"
            checked={carData.features.includes('Power Windows')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          ABS
          <input
            type="checkbox"
            name="ABS"
            checked={carData.features.includes('ABS')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
        <br />
        <label style={styles.checkboxLabel}>
          Navigation System
          <input
            type="checkbox"
            name="Navigation System"
            checked={carData.features.includes('Navigation System')}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </label>
      </label>
      <br />

      <label style={styles.label}>
        Transmission:
        <select
          name="transmission"
          value={carData.transmission}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
      <br />

      <label style={styles.label}>
        Price Range:
        <input
          type="range"
          name="priceRange"
          value={carData.priceRange}
          min="0"
          max="100"
          onChange={handleChange}
          style={styles.inputRange}
        />
      </label>
      <br />

      <label style={styles.label}>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={carData.contactNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <br />

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
//  backgroundColor:" grey",
    margin: '0 auto',
    // backgroundColor: "#333",
  },
  label: {
    marginBottom: '10px',
    display: 'block',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
    backgroundColor:"lightgrey"
  },
  radioLabel: {
    marginRight: '10px',
  },
  checkboxLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  checkbox: {
    marginRight: '5px',
  },
  select: {
    width: '100%',
    padding: '5px',
    fontSize: '16px',
  },
  inputRange: {
    width: '100%',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  
};

export default CarSellForm;
