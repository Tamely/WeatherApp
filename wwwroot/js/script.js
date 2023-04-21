window.weather = {
    notFound: function() {
        let container = document.querySelector('.container');
        let weatherBox = document.querySelector('.weather-box')
        let weatherDetails = document.querySelector('.weather-details')
        let error404 = document.querySelector('.not-found')
        
        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
    },
    show: function() {
        let container = document.querySelector('.container');
        let weatherBox = document.querySelector('.weather-box')
        let weatherDetails = document.querySelector('.weather-details')
        
        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';
    }
}