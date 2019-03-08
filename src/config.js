import fetchIntercept from 'fetch-intercept';
import createstore from './store';
export const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        let withDefaults = Object.assign({}, config);
        withDefaults.headers = withDefaults.headers || new Headers({
            'AUTHORIZATION': `Bearer shikhabwehfbwefbffbweufwfwf`
        });

        // call to action to show spinner
        createstore.dispatch({
            type: 'SET_LOADER',
            loading: true
        });

        return [url, withDefaults];
    },

    requestError: function (error) {
        createstore.dispatch({
            type: 'SET_LOADER',
            loading: false,
            error: error
        });
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        createstore.dispatch({
            type: 'SET_LOADER',
            loading: false
        });
        return response;
    },

    responseError: function (error) {
        createstore.dispatch({
            type: 'SET_LOADER',
            loading: false,
            error: error
        });
        // Handle an fetch error
        return Promise.reject(error);
    }
});

// export default unregister;