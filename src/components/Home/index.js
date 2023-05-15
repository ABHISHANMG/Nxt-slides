import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Header from '../Header'

import Slides from '../Slides'

import Display from '../Display'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Home extends Component {
  state = {
    activeTab: initialSlidesList[0].id,
    stateInitialSlidesList: initialSlidesList,
  }

  slideClick = id => {
    this.setState({activeTab: id})
  }

  updateDescription = newDescription => {
    const {activeTab} = this.state
    this.setState(prevState => {
      const updatedSlidesList = prevState.stateInitialSlidesList.map(
        eachItem => {
          if (activeTab === eachItem.id) {
            return {...eachItem, description: newDescription}
          }
          return eachItem
        },
      )

      return {
        stateInitialSlidesList: updatedSlidesList,
      }
    })
  }

  updateHeading = newHeading => {
    const {activeTab} = this.state
    this.setState(prevState => {
      const updatedSlidesList = prevState.stateInitialSlidesList.map(
        eachItem => {
          if (eachItem.id === activeTab) {
            return {
              ...eachItem,
              heading: newHeading,
            }
          }
          return eachItem
        },
      )

      return {
        stateInitialSlidesList: updatedSlidesList,
      }
    })
  }

  addNewTab = () => {
    const {activeTab, stateInitialSlidesList} = this.state

    const newTab = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    const updatedSlidesList = stateInitialSlidesList.slice()
    const activeTabIndex = updatedSlidesList.findIndex(
      tab => tab.id === activeTab,
    )

    if (activeTabIndex !== -1) {
      updatedSlidesList.splice(activeTabIndex + 1, 0, newTab)
    }

    this.setState({
      stateInitialSlidesList: updatedSlidesList,
      activeTab: newTab.id,
    })
  }

  render() {
    const {activeTab, stateInitialSlidesList} = this.state
    const filteredSlide = stateInitialSlidesList.filter(
      eachItem => eachItem.id === activeTab,
    )
    return (
      <div className="home">
        <Header />
        <button type="button" className="new-btn" onClick={this.addNewTab}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
            className="plus-image-size"
          />
          New
        </button>
        <div className="home-container">
          <div className="sliding-container">
            <ol testid="slide">
              {stateInitialSlidesList.map((eachItem, index) => (
                <Slides
                  key={eachItem.id}
                  eachItem={eachItem}
                  slideClick={this.slideClick}
                  isActive={activeTab === eachItem.id}
                  slideNumber={index}
                />
              ))}
            </ol>
          </div>
          <div className="display-container">
            <div
              className="sub-display-container"
              testid="slide background image"
            >
              {filteredSlide.map(eachItem => (
                <Display
                  slideItem={eachItem}
                  key={eachItem.id}
                  newUpdateHeading={this.updateHeading}
                  newUpdateDescription={this.updateDescription}
                  activeTabIndex={activeTab}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
