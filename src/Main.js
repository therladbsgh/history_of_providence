import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

import Beginning from './components/Beginning';
import Family from './components/Family';
import Brown from './components/Brown';
import Fox from './components/Fox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showGeneral: true,
      showNegative: false,
      showInfoNorth: true,
      showSilenceNorth: false,
      showInfoSlaveryMem: false,
      showInfoHeffen: true,
      showSilenceHeffen: false,
      showInfoHill: false,
      showInfoFox: true,
      showSilenceFox: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: "#c4aa82"}}>
          <a className="navbar-brand" href="/">History of Providence</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#beginning">The Beginning</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#brown">The Brown family</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#university">Brown University</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#foxpoint">Fox Point</a>
              </li>
            </ul>
            <a className="nav-link" style={{color: "black"}} href="about">About</a>
          </div>
        </nav>

        <div className="rightNav">
          <input type="checkbox"
            name="showGeneral"
            checked={this.state.showGeneral}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span style={{marginLeft: "10px"}}>Show general information</span><br />
          <input type="checkbox"
            name="showNegative"
            checked={this.state.showNegative}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="negative" style={{marginLeft: "10px"}}>Show negative space</span><br /><br />

          <p>North Burial Ground</p>
          <input type="checkbox"
            name="showInfoNorth"
            checked={this.state.showInfoNorth}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="infoNorth" style={{marginLeft: "10px"}}>Show information</span><br />
          <input type="checkbox"
            name="showSilenceNorth"
            checked={this.state.showSilenceNorth}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="silenceNorth" style={{marginLeft: "10px"}}>Show silences caused</span><br /><br />

          <p>Brown University Slavery Memorial</p>
          <input type="checkbox"
            name="showSilenceNorth"
            checked={this.state.showSilenceNorth}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="infoSlaveryMem" style={{marginLeft: "10px"}}>Show information</span><br /><br />

          <p>Haffenreffer Museum</p>
          <input type="checkbox"
            name="showInfoHeffen"
            checked={this.state.showInfoHeffen}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="infoHeffen" style={{marginLeft: "10px"}}>Show information</span><br />
          <input type="checkbox"
            name="showSilenceHeffen"
            checked={this.state.showSilenceHeffen}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="silenceHeffen" style={{marginLeft: "10px"}}>Show silences caused</span><br/><br/>

          <p>Neutaconkanut Hill</p>
          <input type="checkbox"
            name="showInfoHill"
            checked={this.state.showInfoHill}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="infoHill" style={{marginLeft: "10px"}}>Show information</span><br /><br />

          <p>139 Transit Street</p>
          <input type="checkbox"
            name="showInfoFox"
            checked={this.state.showInfoFox}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="infoFox" style={{marginLeft: "10px"}}>Show information</span><br />
          <input type="checkbox"
            name="showSilenceFox"
            checked={this.state.showSilenceFox}
            onChange={this.handleInputChange}
            className="checkbox" />
          <span className="silenceFox" style={{marginLeft: "10px"}}>Show silences caused</span><br/><br/>
        </div>

        <ScrollableAnchor id={'beginning'}>
          <Beginning
            showGeneral={this.state.showGeneral}
            showNegative={this.state.showNegative}
            showSilenceHeffen={this.state.showSilenceHeffen}
            showInfoHill={this.state.showInfoHill} />
        </ScrollableAnchor>
        <ScrollableAnchor id={'brown'}>
          <Family
            showGeneral={this.state.showGeneral}
            showNegative={this.state.showNegative}
            showInfoNorth={this.state.showInfoNorth}
            showSilenceNorth={this.state.showSilenceNorth} />
        </ScrollableAnchor>
        <ScrollableAnchor id={'university'}>
          <Brown
            showGeneral={this.state.showGeneral}
            showNegative={this.state.showNegative}
            showInfoNorth={this.state.showInfoNorth}
            showInfoSlaveryMem={this.state.showSilenceNorth}
            showInfoHeffen={this.state.showInfoHeffen}
            showSilenceHeffen={this.state.showSilenceHeffen}
            showSilenceFox={this.state.showSilenceFox} />
        </ScrollableAnchor>
        <ScrollableAnchor id={'foxpoint'}>
          <Fox
            showGeneral={this.state.showGeneral}
            showNegative={this.state.showNegative}
            showInfoFox={this.state.showInfoFox}
            showSilenceFox={this.state.showSilenceFox} />
        </ScrollableAnchor>
        <div style={{height: "10vh"}}></div>
      </div>
    );
  }
}

export default App;
