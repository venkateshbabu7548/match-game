import './index.css'

const ImageItem = props => {
  const {details} = props
  const {imageUrl, thumbnailUrl} = details
  return (
    <li className="img-item">
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
    </li>
  )
}
export default ImageItem
