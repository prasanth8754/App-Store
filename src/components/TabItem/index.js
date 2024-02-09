import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickBtn = () => {
    onClickTabItem(tabId)
  }

  const isActiveBtnClassName = isActive ? 'active-tab-btn' : ''
  console.log(isActiveBtnClassName)
  return (
    <li className="btn-cont">
      <button
        type="button"
        className={`tab-btn ${isActiveBtnClassName}`}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
