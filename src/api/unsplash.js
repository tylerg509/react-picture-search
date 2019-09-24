import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 0f5d1d5face81906a0f734f3069c3ca4d0e624412b676ad1bac3e60f7a1d9d4b'

    }
});