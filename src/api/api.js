import * as axios from 'axios';
import { setData } from '../store/nameReducer';

const getName = () => {
    return async(dispatch) => {
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters`, {
            headers: { 'Authorization': 'bearer pampam' }
        })
        debugger;
        dispatch(setData(response.data))
    }
}

export default getName;