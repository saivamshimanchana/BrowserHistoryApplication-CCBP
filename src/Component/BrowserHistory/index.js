import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

let filteredHistoryList = ''

class BrowserHistory extends Component {
  state = {searchInput: ''}

  updateSearchInput = event => {
    const {value} = event.target
    console.log(value)
    this.setState({searchInput: value})
  }

  render() {
    const {initialHistoryList} = this.props

    const {searchInput} = this.state

    filteredHistoryList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const deleteItem = id => {
      console.log(id)
    }
    return (
      <div className="app-container">
        <div className="header-section">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
          </div>
          <div className="search-bar-bg-container">
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="search-input"
              type="search"
              placeholder="Search History"
              onChange={this.updateSearchInput}
            />
          </div>
        </div>
        <div className="body-section">
          <ul className="history-items-container">
            {filteredHistoryList.map(historyItem => (
              <HistoryItem
                historyItem={historyItem}
                key={historyItem.id}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
