import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID Jrs5UlA_bRfUQNKvew3jeaz5Sw1DQvLRFThxE9NID0A'
    }
});