import './index.css'

const TabItem = props => {
  const {details, isActive} = props

  const {displayText} = details
  const apply = isActive ? 'special' : ''
  return (
    <li className="tab-item">
      <button type="button" className={`button ${apply}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
