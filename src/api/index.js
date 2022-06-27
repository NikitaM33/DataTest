import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://62b993ff41bf319d228015e5.mockapi.io/',
    timeout: 3000
});

export const tableDataAPI = {
    getData () {
        return instance.get('clients').catch(err => `Get request is failed! ${err}`);
    }
};