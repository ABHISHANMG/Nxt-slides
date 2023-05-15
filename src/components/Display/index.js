import {useState} from 'react'

import './index.css'

const Display = props => {
  const [editHeading, setEditHeading] = useState(false)
  const [editDescription, setEditDescription] = useState(false)
  const {slideItem, newUpdateDescription, newUpdateHeading} = props
  const {heading, description} = slideItem

  const changeHeading = () => {
    setEditHeading(true)
  }

  const changeDescription = () => {
    setEditDescription(true)
  }

  const onChangeHeading = event => {
    newUpdateHeading(event.target.value)
  }

  const onChangeDescription = event => {
    newUpdateDescription(event.target.value)
  }

  const onBlurHeading = () => {
    setEditHeading(false)
  }

  const onBlurDescription = () => {
    setEditDescription(false)
  }

  return (
    <>
      {editHeading ? (
        <input
          value={heading}
          type="text"
          className="input-bar-heading"
          onChange={onChangeHeading}
          onBlur={onBlurHeading}
        />
      ) : (
        <h1 className="display-slide-heading" onClick={changeHeading}>
          {heading}
        </h1>
      )}
      {editDescription ? (
        <input
          value={description}
          className="input-bar-heading input-bar-des"
          onChange={onChangeDescription}
          onBlur={onBlurDescription}
        />
      ) : (
        <p className="display-slide-para" onClick={changeDescription}>
          {description}
        </p>
      )}
    </>
  )
}

export default Display
