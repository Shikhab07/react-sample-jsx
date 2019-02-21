const ApiClientService = {

    getData: function() {
        return fetch('https://randomuser.me/api/?results=10').then(results => {
            return results.json();
        })
    }
}

export default ApiClientService;