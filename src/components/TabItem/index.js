import './index.css'

const TabItem = props => {
  const {details, isActive, onClickTabItem} = props

  const {tabId, displayText} = details
  const apply = isActive ? 'special' : ''
  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={`button ${apply}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
