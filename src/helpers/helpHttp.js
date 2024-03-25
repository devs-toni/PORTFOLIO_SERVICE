export const helpHttp = () => {
    //Handler Fetch
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json"
        };
        options.method = options.method || "GET";
        options.headers = options.headers 
            ? {...defaultHeader, ...options.headers} 
            : defaultHeader;
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        return fetch(endpoint, options)
            .then((res) => res.ok ? res.json() : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Error!"
                })
            .catch((err) => err));
        }        
       

    const get = (url, options = {}) => {
        return customFetch(url, options);
    };

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };
    
    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };
    
    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        del
    }
}