MY_API = 'ddfe265249ef245b93a1c51cf0f4e05b';

function getSuccess(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=36.3963324&lon=128.1484302&appid=ddfe265249ef245b93a1c51cf0f4e05b&units=metric"
    
}

function geoFail(){
    alert('Can\'t find your location');
}

navigator.geolocation.getCurrentPosition(getSuccess,geoFail);
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//36.3963324   128.1484302