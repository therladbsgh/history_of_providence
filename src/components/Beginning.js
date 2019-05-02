import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="container" style={{width: "100vw", padding: 0, margin: 0, marginTop: "50px"}}>
        <div className="row" style={{width: "100vw"}}>
          <div className="col-2" style={{textAlign: "left", paddingLeft: "50px"}}>
            <h1 className="subtitle">The Beginning</h1>
          </div>
          <div className="col-8" style={{textAlign: "left"}}>

            {this.props.showInfoHill &&
              <p className="infoHill">The Rhode Island Native American Indian, the mighty Narragansett Tribe, lived on the Hill centuries before the white man arrived, and continued to hold ceremonies on the Hill into the 1920s {this.props.showNegative && <span className="negative">(what about other tribes?)</span>}. During pre-Colonial times, the area was managed by native tribes {this.props.showNegative && <span className="negative">(who?)</span>} who regularly burned the underbrush, which allowed for commanding views in all directions off the hill. The natives could keep an eye on both friend and foe from this strategic lookout. (<a href="https://www.ecori.org/green-groups/2012/8/11/volunteers-restored-historic-neutaconkanut-hill.html">EcoRI</a>) In 1636 Roger Williams, accompanied by a group of five other ‘believers’ {this.props.showNegative && <span className="negative">(who?)</span>}, obtained land from Narragansett Sachems Canonicus and Miantonomi {this.props.showNegative && <span className="negative">(through what interaction?)</span>} ... The northwest boundary of this land, set forth by Williams and the Sachems, was the Great Hill of Neutaconkanut. (<a href="http://www.nhill.org/about/history/">Neutaconkanut Hill Conservancy</a>)</p>
            }

            { this.props.showSilenceHeffen &&
              <p className="silenceHeffen">One of the indigenous groups in Rhode Island were the Pokanokets. The name was outlawed during King Philip’s War {this.props.showNegative && <span className="negative">(why?)</span>} and the tribe then took the Wampanoag name {this.props.showNegative && <span className="negative">(why?)</span>}. (<a href="https://www.ecori.org/social-justice-archive/2017/8/28/pokanocket-tribe-occupies-brown-university-land">EcoRI</a>)</p>
            }

            { this.props.showGeneral &&
               <p>Providence was, from the start, a site marked by innovative ideas and the disruption of convention. Unlike other colonies whose dealings with Native Americans had been fraught with suspicion and violence, Providence was acquired fairly {this.props.showNegative && <span className="negative">(said who?)</span>}, sold by one netop to another, among friends {this.props.showNegative && <span className="negative">(is this the whole truth?)</span>}. And, unlike other colonies, Providence offered a haven for those persecuted on religious ground {this.props.showNegative && <span className="negative">(is this true from the perspective of other religious groups?)</span>}. (<a href="http://rhodetour.org/tours/show/21">Rhode Island Tour</a>)</p>
            }

            { this.props.showGeneral &&
            <p>Providence was founded {this.props.showNegative && <span className="negative">(under what definition?)</span>} on the current site of the Roger Williams National Memorial, the heart of the town ultimately moved south and west {this.props.showNegative && <span className="negative">(what happened to people already living there?)</span>}, with the Great Salt River and Cove serving as anchors for the new settlement. Providence first sustained itself as a planting community in the 17th century {this.props.showNegative && <span className="negative">(did other industries exist prior?)</span>}. (<a href="http://rhodetour.org/tours/show/21">Rhode Island Tour</a>)</p>
            }

            { this.props.showSilenceHeffen &&
              <p className="silenceHeffen">In 1675, the mostly wooded site on the edge of Mount Hope Bay saw the first battle of King Philip's War {this.props.showNegative && <span className="negative">(what was the perspective of third parties? other people?)</span>}. A year later, Metacom (King Philip) was killed and butchered by colonists. A massive rock protrusion known as "King Philip’s Seat" marks the site where Metacom presided over tribal meetings {this.props.showNegative && <span className="negative">(were there any other significant landmarks like this? do they still exist today?)</span>}. (<a href="https://www.ecori.org/social-justice-archive/2017/8/28/pokanocket-tribe-occupies-brown-university-land">EcoRI</a>)</p>
            }

            { this.props.showGeneral &&
              <p>Wharves and warehouses dotted the Providence waterfront in the 18th century {this.props.showNegative && <span className="negative">(what happened to the old industries?)</span>}, and the community continued to spread west along Weybosset Neck {this.props.showNegative && <span className="negative">(what happens to the people already living there?)</span>}, as more space was needed for factories {this.props.showNegative && <span className="negative">(what happened to the displaced people?)</span>}. (<a href="http://rhodetour.org/tours/show/21">Rhode Island Tour</a>)</p>
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
