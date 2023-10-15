import Cookies from 'js-cookie'
import {useNavigate, Route} from 'react-router-dom'

const navigate = useNavigate()

const Wrapper = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return navigate("/login")
  }
  return <Route {...props} />
}

export default Wrapper