import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-2c15e-default-rtdb.europe-west1.firebasedatabase.app/'
})
