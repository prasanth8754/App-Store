import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-cont">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="app-para">{appName}</p>
    </li>
  )
}

export default AppItem
