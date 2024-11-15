const getWeather = async () => {
    const url = 'https://api.oceandrivers.com/static/resources.json';
    try {
        const response = await fetch(url);
        console.log(response);
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        console.log(error);
        
    }
    
};


getWeather();