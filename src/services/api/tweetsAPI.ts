import axios from "axios"
import {TweetsState} from "../../store/ducks/tweets/contracts/state"


export const TweetsAPI = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('https://trycode.pw/c/ZA5JZ.json').then(({data}) => data)
    }
}