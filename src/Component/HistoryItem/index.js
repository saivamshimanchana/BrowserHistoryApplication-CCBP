import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteSelectedItem = () => deleteItem(id)
  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <div className="details-container">
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={deleteSelectedItem}
        id="delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default HistoryItem
