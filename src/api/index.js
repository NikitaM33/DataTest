import axios from axios;

const instance = axios.create({
    baseURL: 'mockapi...',
    withCredentials: true,
    timeout: 3000
});

const APITableData = {
    getData () {
        return instance.get('').catch(err => `Get request is failed! ${err}`);
    }
};