// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, arrowClick} = props
  const {suggestion, id} = item
  const onArrowClick = () => {
    arrowClick(id)
  }

  return (
    <li className="list-contaienr">
      <p>{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
