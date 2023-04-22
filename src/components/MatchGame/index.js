import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {score: 0, count: 60, currentTab: tabsList[0].tabId}

  onClickTabItem = tabId => {
    this.setState({currentTab: tabId})
  }

  render() {
    const {score, count, currentTab} = this.state
    const {imagesList} = this.props
    const filteredImages = imagesList.filter(
      each => each.category === currentTab,
    )
    return (
      <div className="con">
        <div className="card">
          <nav className="nav-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="logo"
            />
            <div className="score-con">
              <p>
                Score: <span>{score}</span>
              </p>
              <div className="timer-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                  className="timer"
                />
                <p>
                  <span>{count}</span> sec
                </p>
              </div>
            </div>
          </nav>
          <div className="down">
            <div className="matched-img-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png"
                alt="match"
                className="matched-img"
              />
            </div>

            <div className="tabs-con">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  details={eachTab}
                  isActive={eachTab.tabId === currentTab}
                  onClickTabItem={this.onClickTabItem}
                />
              ))}
            </div>

            <div className="images-con">
              {filteredImages.map(eachImg => (
                <ImageItem key={eachImg.id} details={eachImg} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MatchGame
