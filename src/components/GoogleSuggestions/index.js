// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  userInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {userInput} = this.state

    const arrowClick = id => {
      const clickSuggestion = suggestionsList.find(
        eachItem => eachItem.id === id,
      )

      this.setState({userInput: clickSuggestion.suggestion})
    }

    const filterdList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="search-container">
          <div className="search-box">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.userInput}
              value={userInput}
            />
          </div>
          <ul className="list-itme-container">
            {filterdList.map(eachItem => (
              <SuggestionItem
                arrowClick={arrowClick}
                item={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
