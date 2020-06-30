import API from "../../utils/API"

const isAuth = () => {
    API.getUser()
    .then(res => console.log(res))
}

export default isAuth