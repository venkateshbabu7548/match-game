import './index.css'

const ImageItem = props => {
  const {details} = props
  const {thumbnailUrl} = details
  return (
    <li className="img-item">
      <button type="button" className="img-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
