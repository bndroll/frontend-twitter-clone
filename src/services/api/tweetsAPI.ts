import axios from "axios"
import {TweetsState} from "../../store/ducks/tweets/contracts/state"
import {Tweet} from "../../store/ducks/tweet/contracts/state"


export const TweetsAPI = {
    fetchTweets(): Promise<TweetsState['items']> {
        return axios.get('/tweets?_sort=id&_order=desc').then(({data}) => data)
    },
    fetchTweetData(id: string): Promise<Tweet[]> {
        return axios.get(`/tweets?_id=${id}`).then(({data}) => data[0])
    },
    addTweet(payload: Tweet): Promise<Tweet> {
        return axios.post('/tweets', payload).then(({data}) => data)
    }
}