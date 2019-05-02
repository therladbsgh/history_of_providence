import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="container" style={{width: "100vw", padding: 0, margin: 0, marginTop: "50px"}}>
        <div className="row" style={{width: "100vw"}}>
          <div className="col-2" style={{textAlign: "left", paddingLeft: "50px"}}>
            <h1 className="subtitle">Brown University</h1>
          </div>
          <div className="col-8" style={{textAlign: "left"}}>
            { this.props.showGeneral &&
              <div style={{display: "inline"}}>Brown University traces its origins to 1764 with the granting of the Charter by the Rhode Island General Assembly. The founding was promoted by Reverend Morgan Edwards, moderator of the Philadelphia Baptist Association, in 1762 {this.props.showNegative && <span className="negative">(was he the only one?)</span>}. Under Edward’s leadership, Rhode Island was selected as a likely site, since the colony had been settled by Baptists, was still largely governed by Baptists, and had no college. A representative of the Association, James Manning, visited Newport in July 1763, where he met with “about 15 gentlemen of the same denomination” {this.props.showNegative && <span className="negative">(who?)</span>} at the home of Deputy Governor John Gardner. The plan for a college was immediately accepted and in August, 1763 {this.props.showNegative && <span className="negative">(what about the opinions of other people? the common person?)</span>}, a Charter was presented to the General Assembly in Newport. After postponement, a different charter was presented at subsequent sessions and granted on March 2 and 3, 1764, for the “College or University in the English Colony of Rhode Island and Providence Plantations” {this.props.showNegative && <span className="negative">(why the postponement?)</span>}. James Manning went on to become the first president of Brown University {this.props.showNegative && <span className="negative">(why?)</span>}, often referred to as “Rhode Island College” until 1804 {this.props.showNegative && <span className="negative">(were there any opposition to the college?)</span>}.(<a href="https://blogs.brown.edu/libnews/founding-of-brown-university/">Brown University</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}><br /><br />Nicholas Brown and his descendants would become the branch of the family most actively associated with the institution that has borne their name since 1804: Brown University {this.props.showNegative && <span className="negative">(how did they get so influential?)</span>}. (<a href="http://www.ric.edu/northburialground/tours_hplovecraft-brownnicholas.html">North Burial Ground Website</a>) </div>
            }

            { this.props.showInfoNorth &&
              <div className="infoNorth" style={{display: "inline"}}>Nicholas himself served as treasurer of the university (then called the College of Rhode Island) {this.props.showNegative && <span className="negative">(how? what about other candidates?)</span>}, and Nicholas Brown & Company constructed the first building on the Providence campus in 1770, which was University Hall. (<a href="http://www.ric.edu/northburialground/tours_hplovecraft-brownnicholas.html">North Burial Ground Website</a>) </div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>In the 1980s, the Fox Point community lost the tug of war between Brown University, Interstate 195, Historic Preservation, Providence Redevelopment Agency, and Holy Rosary Church {this.props.showNegative && <span className="negative">(were there any third parties to comment?)</span>}. After Manny Almeida's closed in the early 1980s, Wickenden Street became quiet. (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>) </div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>"Brown University has taken over now. All these little fancy shops on Wickenden Street, coffee shops, antique shops, and the old tenants would come back, they wouldn't believe what was going on. (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>) </div>
            }

            { this.props.showInfoHeffen &&
              <div className="infoHeffen" style={{display: "inline"}}><br/><br/>The Haffenreffer Museum of Anthropology is Brown University’s teaching and research museum. A resource across the university, we inspire creative and critical thinking about culture by fostering interdisciplinary understanding of the material world.  We provide opportunities for faculty and students to work with collections and the public, teaching through objects and programs in classrooms, in the gallery in Manning Hall, and at the Collections Research Center.(<a href="https://www.brown.edu/research/facilities/haffenreffer-museum/about">Brown University</a>) </div>
            }

            { this.props.showInfoHeffen &&
              <div className="infoHeffen" style={{display: "inline"}}><br/><br/>Rudolf F. Haffenreffer Jr. Haffenreffer was a brewer, entrepreneur, and philanthropist who lived in Fall River, Massachusetts. Haffenreffer became deeply interested in Native American archaeology and history {this.props.showNegative && <span className="negative">(why?)</span>}. He purchased local collections of Indian artifacts {this.props.showNegative && <span className="negative">(how?)</span>} and made collecting trips to the Southwest {this.props.showNegative && <span className="negative">(how were things collected?)</span>}. In order to house his growing collection, he built a museum {this.props.showNegative && <span className="negative">(how? in terms of economic, and acquiring land?)</span>}, which he named the "King Philip Museum" {this.props.showNegative && <span className="negative">(why King Philip, when he was subjected to violence?)</span>}. Haffenreffer interacted with the local Native American tribes {this.props.showNegative && <span className="negative">(in what way?)</span>} and sponsored meetings of the Algonquin Indian Council of New England.(<a href="https://www.brown.edu/research/facilities/haffenreffer-museum/about/museum-history">Brown University</a>) </div>
            }

            { this.props.showSilenceHeffen &&
              <div className="silenceHeffen" style={{display: "inline"}}>However, the actual details and historical context of how each artifact ended up in the Haffenreffer museum remains unknown to the everyday person. </div>
            }

            { this.props.showInfoSlaveryMem &&
              <div className="infoSlaveryMem" style={{display: "inline"}}><br /><br />1In 2003, under the direction of President Ruth Simmons, Brown University undertook an unprecedented study of the university’s relationship to the trans-Atlantic slave trade {this.props.showNegative && <span className="negative">(what were the methodologies?)</span>}. The findings of the three-year study were clear, if discomforting. Slavery and the slave trade were pervasive throughout Rhode Island; Rhode Island dominated the North American share of the African slave trade; the economy of the state was dependent on slavery; and Brown University was a beneficiary of this trade. The Slavery and Justice Committee set out a number of recommendations for future actions, one of which was the creation of a permanent memorial to recognize Brown and Rhode Island’s relationship to the transatlantic slave trade {this.props.showNegative && <span className="negative">(what led to this decision? were there any other proposals?)</span>}: “a living site of memory, inviting reflection and fresh discovery without provoking paralysis or shame.” (<a href="https://www.brown.edu/about/public-art/martin-puryear-slavery-memorial">Brown University</a>) </div>
            }


            { this.props.showSilenceHeffen &&
              <div className="silenceHeffen" style={{display: "inline"}}><br/><br/>On Aug. 20 2017, the Pokanokets and activist groups took over the entrance and compound to Brown University's Haffenreffer property and set up an encampment outside the main warehouse {this.props.showNegative && <span className="negative">(what were Brown members doing in this time?)</span>}. They seek reparations to return the land to a “healthy and productive environmental state, creating a sustainable habitat for the local wildlife and surrounding local community.” “We as aboriginal citizens have been denied our birthright to our family’s land, our sovereignty rights, therefore states and powerful organizations have held our wealth over and over to the point that they believe it is their natural gift and natural right to have our property,” said Sagamore William (Po Wauipi Neimpaug) Guy, leader of the Pokanoket Tribe. (<a href="https://www.ecori.org/social-justice-archive/2017/8/28/pokanocket-tribe-occupies-brown-university-land">EcoRI</a>) </div>
            }

            { this.props.showSilenceHeffen &&
              <div className="silenceHeffen" style={{display: "inline"}}><br/><br/>In its initial statement, Brown University gave its support for the Pokanokets' right to assemble on the land. That goodwill dissipated somewhat, when faculty from Brown’s Native American and Indigenous Studies (NAIS) program sent an e-mail to students and faculty that questioned the legitimacy of the Pokanoket Tribe {this.props.showNegative && <span className="negative">(under what motivation?)</span>}. While Brown University permits the Pokanoket to conduct tribal ceremonies at King Philip’s Seat, the tribe doesn't have federal or state recognition {this.props.showNegative && <span className="negative">(why, and is it justified?)</span>}, such as the Narragansett Indian Tribe of South County, nor are the Pokanokets recognized by other Wampanoag tribes. Without any federal or state recognition, the Pokanoket Tribe isn't able to hold ancestral land in trust, according to the NAIS {this.props.showNegative && <span className="negative">(why, and is it justified?)</span>}. (<a href="https://www.ecori.org/social-justice-archive/2017/8/28/pokanocket-tribe-occupies-brown-university-land">EcoRI</a>) </div>
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
