import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-140b0.firebaseio.com/'
})