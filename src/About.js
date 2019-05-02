import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSilenceHeffen: false,
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
            </ul>
            <a className="nav-link" style={{color: "black"}} href="about">About</a>
          </div>
        </nav>

        <p style={{margin: "30px"}}>
        There are certain limitations within the StoryMap that I wanted to achieve. The main issue is that while the StoryMap seems apt for presentations and projects dealing with analyzing geographic locations, it is less apt in analyzing narratives and text.<br/><br/>

        The StoryMap narrative is linear: there are multiple slides, one after another in succession. This format makes it difficult to describe narratives that are not linear, but may be happening in parallel. Narratives that intersect, support or contradict each other must all be explained one at a time, and must be discussed comparing and contrasting to other narratives which requires a lot of reading, and in general, is unintuitive.<br /><br />

        This creative project aims to fulfill that goal of visualizing how narratives compare and contrast with one another. Some narratives fill in the silences of other narratives. Some narratives spread out over many different topics, disrupting many narratives at the same time, while some narratives are narrow in scope. Through this tool, one is able to easily see what information and silences are created through monuments and their narratives. One is also able to see how narratives work with other narratives.<br/><br/>

        That being said, this tool also comes with its limitations. Most importantly, it is simply designed to lay down the source texts side-by-side. While this is easy to visualize, it may be difficult to comprehend (for instance, there is context missing on why specific things are labeled "silences" and some "information.") To fully justify why some are assigned silences and some as information, explanations are necessary which does not fit into the layout of this tool. In this way, descriptions with maps and images in a StoryMap complements the tool. <br/><br/>

        <hr/>

        The initial set-up of the page is designed to display only the "conventional" information of Providence, that you would see in non-controversial text such as leaflets, websites about Providence or Brown University, etc. While these provide ample information, it is clear that they are also missing certain information -- which is where the "silence" checkboxes and the "information" of restorative monuments/spaces come into place.<br/><br/>

        Furthermore, there is an additional checkbox that perspective that shows all possible “negative space” (in artistic terms) that may be asked but where information is missing. The goal is not to take a "got you" moment and accuse/expose these sources of missing information or doing any wrongdoing. Rather, the greater goal in this demonstration is to show how the missing of information is inherent in even an informative text. Most of us will read the text and accept the narrative as-is, not questioning how the facts are presented, and not questioning what facts are selected in the first place (and what is not selected.) Only through a critical analysis of what is in the “negative space” of this text can we then begin to analyze whether this “negative space” exists through silencing or epistemological violence.

        </p>
      </div>
    );
  }
}

export default App;
