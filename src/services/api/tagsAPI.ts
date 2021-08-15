import axios from "axios"

import {TagsState} from "../../store/ducks/tags/contracts/state"


export const tagsAPI = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get('/tags').then(({data}) => data)
    }
}