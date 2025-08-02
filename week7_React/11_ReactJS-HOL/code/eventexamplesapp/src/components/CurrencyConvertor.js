import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const euroValue = parseFloat(this.state.rupees) / 90; // Divide instead of multiply
    const eurosRounded = euroValue.toFixed(2);
    this.setState({ euros: eurosRounded });

    alert(`Converting to Euro: Amount is €${eurosRounded}`);
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
        <label>
          Amount:
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleInputChange}
            style={{ marginLeft: "10px", marginBottom: "10px" }}
          />
        </label>
        <br />
        <label>
          Currency:
          <select style={{ marginLeft: "10px" }}>
            <option>Euro</option>
          </select>
        </label>
        <br /><br />
        <button onClick={this.handleSubmit}>Submit</button>

        {this.state.euros && (
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            € {this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
