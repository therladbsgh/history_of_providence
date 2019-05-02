import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="container" style={{width: "100vw", padding: 0, margin: 0, marginTop: "50px"}}>
        <div className="row" style={{width: "100vw"}}>
          <div className="col-2" style={{textAlign: "left", paddingLeft: "50px"}}>
            <h1 className="subtitle">Fox Point</h1>
          </div>
          <div className="col-8" style={{textAlign: "left"}}>
            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}>"{this.props.showNegative && <span className="negative">(is there more to the history prior to 20th Century? what of the Native Americans?) </span>}Swaggling down Brooke Street to Wickenden, standing on the corner to see and be seen, longshoremen on a day off, a Sunday, holiday or Easter, whatever day it was, you know you could count on Johnny and his boys to be up to something. Oftentimes, when we got over the guys would start "let's go, let's go to Boston, "let's go here, let's go there." You take Fox Point, put it on a trailer truck, and I'll go. I'm not leaving Fox Point. Everything I wanted was right here. Your Hall, your stores, your restaurants, the gas station, the boy's club. You know, I didn't need to go anywhere, I didn't have to leave Fox Point." (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>)</div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>"The first time I knew that something was happening in South Main Street, was down by the pool. And the City came and put horses in the middle of the street. And we asked, what are you doing that for? He said "we're gonna make this a one way" {this.props.showNegative && <span className="negative">(what was the perspective of the Rhode Island Development Agency?)</span>}. The construction of Interstate 195 began in the 1960s, and cut the Cape Verdean community right in half. Urban renewal and gentrification in Fox Point meant Cape Verdean removal. Scores of Cape Verdean families were displaced." (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>)</div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>"They told us, "well, we're gonna fix these houses up, we're gonna knock some of them down, we're gonna fix them up, and you gonna be the first ones that come on." But little did we know, you know. We couldn't afford these houses here {this.props.showNegative && <span className="negative">(was this intentional? how did this issue arise?)</span>}. The providence development Agency came, said that the families had to move. They were gonna do this, they were gonna do that, they were gonna do this, so the people -- they panicked. They panicked {this.props.showNegative && <span className="negative">(did everyone?)</span>}, and a lot of them got nervous, they started to move out, some went to East Providence, and they went to different areas. When I lived on Wickenden Street, my landlord wants us out. He jacked my rate up $300. If I was paying $300 then, he was charging me 600 bucks ... I said "if you do want me out, was it that bad, I've been here 20 years, man, you want me out {this.props.showNegative && <span className="negative">(why did they want out so badly?)</span>}?" (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>)</div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>John Murphy came to visit Mrs. Alves ... she says "John, they want "me to move," she says "after all, you don't move mountains. "so, could you please help me?" he says, "Mrs. Alves, Mamae I'll see what I can do for you." Today, her house is still standing. And we thanked John Murphy. And he told me, he came and he told me "Mrs. Alves, you're safe, you can stay {this.props.showNegative && <span className="negative">(how? under what conditions? what was the tradeoff?)</span>}. "the House is -- "You don't have to move." (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>)</div>
            }

            { this.props.showSilenceFox &&
              <div className="silenceFox" style={{display: "inline"}}><br/><br/>The community lost the tug of war between Brown University, Interstate 195, Historic Preservation, Providence Redevelopment Agency, and Holy Rosary Church {this.props.showNegative && <span className="negative">(what led to this tug of war between so many parties?)</span>}. After Manny Almeida's closed in the early 1980s, Wickenden Street became quiet. (<a href="https://brown.kanopy.com/video/some-kind-funny-porto-rican-cape-verdean-ame">Andrade-Watkins</a>)<br/><br/></div>
            }

            { this.props.showInfoFox &&
              <div className="infoFox" style={{display: "inline"}}>In the summer of 2018, a Brown University student named Andrew was working under an UTRA in the university. Given that residential dorms were unavailable, Andrew lived in a sublet in 139 Transit Street through the summer. During that time, Andrew was able to explore the food options in Wickenden, the parks in East Providence, and generally had an enjoyable time. </div>
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
