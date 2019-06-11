export default {
    get(key) {
        const result = localStorage.getItem(key);
        
        return JSON.parse(result);
    },

    post(key, data) {
        const serialData = JSON.stringify(data);
        localStorage.setItem(key, serialData);
    },

    delete(key) {
        localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear()
    }
};