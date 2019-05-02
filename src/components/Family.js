import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="container" style={{width: "100vw", padding: 0, margin: 0, marginTop: "50px"}}>
        <div className="row" style={{width: "100vw"}}>
          <div className="col-2" style={{textAlign: "left", paddingLeft: "50px"}}>
            <h1 className="subtitle">The Brown Family</h1>
          </div>
          <div className="col-8" style={{textAlign: "left"}}>
            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>John Brown was born in Providence, Rhode Island on January 27, 1736. He was the fifth of six children born to Captain James Brown and Hope Power, and a great‑great‑grandchild of Chad Brown, who was one of the original settlers of Providence {this.props.showNegative && <span className="negative">(is there any mention of other Browns? what does it mean to be an original settler?)</span>}. (<a href="http://rhodetour.org/tours/show/21">North Burial Ground Website</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>As a young teen, he was smart and confident, describing himself in his cipher book as “the cleverest boy in Providence Town.” {this.props.showNegative && <span className="negative">(why is this important/mentioned? No other person in this site has their childhood described to this extent.)</span>} He married Sarah Smith in 1760, and together they would have six children, two of whom died young. (<a href="http://rhodetour.org/tours/show/21">North Burial Ground Website</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>Over his long career, John made and lost and remade fortunes {this.props.showNegative && <span className="negative">(how? why?)</span>}. He was at various times a merchant, slave trader, patriot, China trader, ship builder, fleet owner, statesman, industrialist, and banker {this.props.showNegative && <span className="negative">(who was affected by him with these ventures, positively or negatively?)</span>}. (<a href="http://rhodetour.org/tours/show/21">North Burial Ground Website</a>) </div>
            }

            { this.props.showSilenceNorth &&
              <div className="silenceNorth" style={{display: "inline"}}>John Brown's real significance as a slave merchant was political. Although he sponsored only six slave voyages, so far as is known, John Brown was a shameless advocate for the trade {this.props.showNegative && <span className="negative">(how did this affect the people around him?)</span>}. (Farrow, Lang, Frank) </div>
            }

            { this.props.showSilenceNorth &&
              <div className="silenceNorth" style={{display: "inline"}}>During the Bristol Era ... John Brown of Providence ... joined forces to protect the [slave] trade. Brown, perhaps the richest man in Providence, shared a business empire with three brothers ... [and] morphed into plutocrats, at odds with and above the law {this.props.showNegative && <span className="negative">(how did this come to be, and how did it affect Providence and other people?)</span>}. (Farrow, Lang, Frank) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>Between 1786 and 1788 he built a home for himself and his family at the corner of Benefit St. and Power St {this.props.showNegative && <span className="negative">(why is this detail mentioned?)</span>}. in Providence, a house John Quincy Adams described as the “most magnificent and elegant private mansion that I have ever see on this continent” {this.props.showNegative && <span className="negative">(why is this detail mentioned?)</span>}. The John Brown House is now owned by the Rhode Island Historical Society and available for tours. (<a href="http://rhodetour.org/tours/show/21">North Burial Ground Website</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>John died of heart failure on September 20, 1803. His remains lie in the oldest part of the cemetery, near those of many of his family members. (<a href="http://rhodetour.org/tours/show/21">North Burial Ground Website</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}><br /><br />Beginning in the early 1790s, Moses Brown and his business partners {this.props.showNegative && <span className="negative">(who?)</span>} provided much of the financing for the rapid construction of textile mills throughout southern New England {this.props.showNegative && <span className="negative">(who used, worked, and/or benefited from it?)</span>} ... Moses was instrumental in the development of Samuel Slater’s Pawtucket mill {this.props.showNegative && <span className="negative">(what about Slater?)</span>}, the first water-powered spinning mill in the United States {this.props.showNegative && <span className="negative">(first? any other people who helped?)</span>}, an event often heralded as the beginning of the American Industrial Revolution {this.props.showNegative && <span className="negative">(really? what about other events?)</span>}. Brown continued to be involved in business ventures through the end of his life {this.props.showNegative && <span className="negative">(with whom? how did it affect other people)</span>} but increasingly turned the daily operations over to others. (<a href="http://www.ric.edu/northburialground/tours_revolutionary-brownmoses.html">North Burial Ground Website</a>) </div>
            }

            { this.props.showSilenceNorth &&
              <div className="silenceNorth" style={{display: "inline"}}>Economics were already betraying even Moses Brown's good intentions ... by 1800, the cotton gin and Slater's machines were transforming Southern agriculture and Northern industry. The conscience-stricken Moses had done more to perpetuate slavery than his avaricious big brother. (Farrow, Lang, Frank) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>Moses Brown devoted his later years to philanthropy and education, working in particular to secure a Friend’s School for Quakers in Providence, now called the Moses Brown School. He also helped to establish and build the Rhode Island Bible Society, the Rhode Island Peace Society, the Rhode Island Agricultural Society, the Providence Athenaeum, and the Rhode Island Historical Society. He was involved in efforts to curb the drunkenness and prostitution that increasingly seemed part of the local economy {this.props.showNegative && <span className="negative">(what about the perspectives of the people involved in drunkenness and prostitution?)</span>}. (<a href="http://www.ric.edu/northburialground/tours_revolutionary-brownmoses.html">North Burial Ground Website</a>) </div>
            }

            { this.props.showSilenceNorth &&
              <div className="silenceNorth" style={{display: "inline"}}><br /><br />Most of the Brown family's early wealth came from ordinary West Indian commerce, privateering (basically, legalized pirating), an iron foundry, and the manufacture of spermaceti candles. Their pig iron and candles found their way into the holds of Newport slave ships. The Browns, including John, really only dabbled in the trade itself. (Farrow, Lang, Frank) </div>
            }

          </div>
          <div className="col-2">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
