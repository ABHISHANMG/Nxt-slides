import './index.css'

const Slides = props => {
  const {eachItem, slideClick, isActive, slideNumber} = props
  const {description, heading, id} = eachItem

  const onClickSlide = () => {
    slideClick(id)
  }

  const activeTab = isActive ? 'active-tab' : ''

  return (
    <li
      className={`list-item-container ${activeTab}`}
      testid={`slideTab${slideNumber + 1}`}
    >
      <p className="slide-para">{slideNumber + 1}</p>
      <button type="button" className="slide-item-btn" onClick={onClickSlide}>
        <h1 className="slide-heading">{heading}</h1>
        <p className="slide-para">{description}</p>
      </button>
    </li>
  )
}

export default Slides
