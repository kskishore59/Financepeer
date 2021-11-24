import './index.css'

const User = props => {
  const {details} = props
  const {id, title, body} = details

  return (
    <li className="list-item">
      <h1>{`${id}. ${title}`}</h1>
      <p>{body}</p>
    </li>
  )
}

export default User
