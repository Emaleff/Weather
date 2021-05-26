const cityNameHTML = document.getElementById('city');
const currentTemperatureHtml = document.getElementById('currentTemperature');
const currentImgHtml = document.getElementById('currentImg');
const container = document.getElementById('container');

const dayAfterTomorrow = document.getElementById('dayAfterTomorrow');
const dayAfterTomorrowMaxTemp = document.getElementById('dayAfterTomorrowMaxTemp');
const dayAfterTomorrowMinTemp = document.getElementById('dayAfterTomorrowMinTemp');

const tomorrow = document.getElementById('tomorrow');
const tomorrowMaxTemp = document.getElementById('tomorrowMaxTemp');
const tomorrowMinTemp = document.getElementById('tomorrowMinTemp');

const apiKey = '2ae6c97d85c596f0d2b5ecf82eb15c0e';


navigator.geolocation.getCurrentPosition(response => {
    let lat = response.coords.latitude.toFixed(2);
    let lon = response.coords.longitude.toFixed(2);
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&timezone&units=metric&exclude={hourly,daily}&appid=${apiKey}`;

    getWeather(url);
});

function getWeather(url) {
    fetch(url)
        .then(response => response.json())
        // .then(res => console.log(res))
        .then(res => {
            cityNameHTML.textContent = res.timezone;
            currentTemperatureHtml.textContent = Math.round(res.current.temp);
            const imgItem = res.current.weather[0].icon;
            const urlImg = `http://openweathermap.org/img/w/${imgItem}.png`;
            const fragment = document.createDocumentFragment();
            console.log(imgItem);
            if (imgItem === '02n' || imgItem === '03n' || imgItem === '04n') {
                container.style.backgroundImage = 'url("./images/02n.jpg")';
            } else if (imgItem === '02d' || imgItem === '03d' || imgItem === '04d') {
                container.style.backgroundImage = 'url("./images/02d.jpg")';
            } else if (imgItem === '01n') {
                container.style.backgroundImage = 'url("./images/01n.jpg")';
            } else if (imgItem === '01d') {
                container.style.backgroundImage = 'url("./images/clearSkyDay.jpg")';
            } else if (imgItem === '09d' || imgItem === '10d' || imgItem === '09n' || imgItem === '10n') {
                container.style.backgroundImage = 'url("./images/rain.jpg")';
            }
            let img = document.createElement('img');
            img.src = urlImg;

            fragment.appendChild(img);
            currentImgHtml.innerHTML = '';
            currentImgHtml.appendChild(fragment);
            console.log(res);

            tomorrowMaxTemp.textContent = Math.round(res.daily[0].temp.max);
            let imgTomorrow = document.createElement('img');
            let imgTomorrowItem = res.daily[0].weather[0].icon;
            let urlTomorrow = `http://openweathermap.org/img/w/${imgTomorrowItem}.png`;

            imgTomorrow.src = urlTomorrow;
            let fragmentTomorrow = document.createDocumentFragment();
            if (tomorrow.querySelector('img')) {
                tomorrow.querySelector('img').remove()
            }
            // tomorrow.querySelector('img').remove();
            fragmentTomorrow.appendChild(imgTomorrow);
            tomorrow.appendChild(fragmentTomorrow);
            tomorrowMinTemp.textContent = Math.round(res.daily[0].temp.min);

            dayAfterTomorrowMaxTemp.textContent = Math.round(res.daily[1].temp.max);
            let imgDayAfterTomorrow = document.createElement('img');
            let imgDayAfterTomorrowItem = res.daily[1].weather[0].icon;
            let urlDayAfterTomorrow = `http://openweathermap.org/img/w/${imgDayAfterTomorrowItem}.png`;

            imgDayAfterTomorrow.src = urlDayAfterTomorrow;
            let fragmentDayAfterTomorrow = document.createDocumentFragment();
            fragmentDayAfterTomorrow.appendChild(imgDayAfterTomorrow);
            if (dayAfterTomorrow.querySelector('img')) {
                dayAfterTomorrow.querySelector('img').remove()
            }
            dayAfterTomorrow.appendChild(fragmentDayAfterTomorrow);
            dayAfterTomorrowMinTemp.textContent = Math.round(res.daily[1].temp.min);

            let date = new Date();
            const currentHours = date.getHours();
            let hourly3 = document.getElementById('hourly3');
            hourly3.textContent = Math.round(res.hourly[2].temp);
            const h3time = document.getElementById('h3time');
            h3time.textContent = currentHours + 3;

            let imgHourly3 = document.createElement('img');
            let hourly3Item = res.hourly[2].weather[0].icon;
            let hourly3Url = `http://openweathermap.org/img/w/${hourly3Item}.png`;
            imgHourly3.src = hourly3Url;
            let hourly3fragment = document.createDocumentFragment();
            hourly3fragment.appendChild(imgHourly3);
            let h3Img = document.getElementById('h3Img');
            if (h3Img.querySelector('img')) {
                h3Img.querySelector('img').remove();
            }
            h3Img.appendChild(hourly3fragment);

            let hourly6 = document.getElementById('hourly6');
            hourly6.textContent = Math.round(res.hourly[5].temp);

            const h6time = document.getElementById('h6time');
            h6time.textContent = currentHours + 6;

            let imgHourly6 = document.createElement('img');
            let hourly6Item = res.hourly[5].weather[0].icon;
            let hourly6Url = `http://openweathermap.org/img/w/${hourly6Item}.png`;
            imgHourly6.src = hourly6Url;
            let hourly6fragment = document.createDocumentFragment();
            hourly6fragment.appendChild(imgHourly6);
            let h6Img = document.getElementById('h6Img');
            if (h6Img.querySelector('img')) {
                h6Img.querySelector('img').remove();
            }
            h6Img.appendChild(hourly6fragment);

            let hourly9 = document.getElementById('hourly9');
            hourly9.textContent = Math.round(res.hourly[8].temp);

            const h9time = document.getElementById('h9time');
            h9time.textContent = currentHours + 9;

            let imgHourly9 = document.createElement('img');
            let hourly9Item = res.hourly[8].weather[0].icon;
            let hourly9Url = `http://openweathermap.org/img/w/${hourly9Item}.png`;
            imgHourly9.src = hourly9Url;
            let hourly9fragment = document.createDocumentFragment();
            hourly9fragment.appendChild(imgHourly9);
            let h9Img = document.getElementById('h9Img');
            if (h9Img.querySelector('img')) {
                h9Img.querySelector('img').remove();
            }
            h9Img.appendChild(hourly9fragment);

            let hourly12 = document.getElementById('hourly12');
            hourly12.textContent = Math.round(res.hourly[11].temp);

            const h12time = document.getElementById('h12time');
            h12time.textContent = currentHours + 12;

            let imgHourly12 = document.createElement('img');
            let hourly12Item = res.hourly[11].weather[0].icon;
            let hourly12Url = `http://openweathermap.org/img/w/${hourly12Item}.png`;
            imgHourly12.src = hourly12Url;
            let hourly12fragment = document.createDocumentFragment();
            hourly12fragment.appendChild(imgHourly12);
            let h12Img = document.getElementById('h12Img');
            if (h12Img.querySelector('img')) {
                h12Img.querySelector('img').remove();
            }
            h12Img.appendChild(hourly12fragment);

            let hourly15 = document.getElementById('hourly15');
            hourly15.textContent = Math.round(res.hourly[14].temp);

            const h15time = document.getElementById('h15time');
            h15time.textContent = currentHours + 15;

            let imgHourly15 = document.createElement('img');
            let hourly15Item = res.hourly[14].weather[0].icon;
            let hourly15Url = `http://openweathermap.org/img/w/${hourly15Item}.png`;
            imgHourly15.src = hourly15Url;
            let hourly15fragment = document.createDocumentFragment();
            hourly15fragment.appendChild(imgHourly15);
            let h15Img = document.getElementById('h15Img');
            if (h15Img.querySelector('img')) {
                h15Img.querySelector('img').remove();
            }
            h15Img.appendChild(hourly15fragment);

            let hourly18 = document.getElementById('hourly18');
            hourly18.textContent = Math.round(res.hourly[17].temp);

            const h18time = document.getElementById('h18time');
            h18time.textContent = currentHours + 18;

            let imgHourly18 = document.createElement('img');
            let hourly18Item = res.hourly[17].weather[0].icon;
            let hourly18Url = `http://openweathermap.org/img/w/${hourly18Item}.png`;
            imgHourly18.src = hourly18Url;
            let hourly18fragment = document.createDocumentFragment();
            hourly18fragment.appendChild(imgHourly18);
            let h18Img = document.getElementById('h18Img');
            if (h18Img.querySelector('img')) {
                h18Img.querySelector('img').remove();
            }
            h18Img.appendChild(hourly18fragment);

            let hourly21 = document.getElementById('hourly21');
            hourly21.textContent = Math.round(res.hourly[20].temp);

            const h21time = document.getElementById('h21time');
            h21time.textContent = currentHours + 21;

            let imgHourly21 = document.createElement('img');
            let hourly21Item = res.hourly[20].weather[0].icon;
            let hourly21Url = `http://openweathermap.org/img/w/${hourly21Item}.png`;
            imgHourly21.src = hourly21Url;
            let hourly21fragment = document.createDocumentFragment();
            hourly21fragment.appendChild(imgHourly21);
            let h21Img = document.getElementById('h21Img');
            if (h21Img.querySelector('img')) {
                h21Img.querySelector('img').remove();
            }
            h21Img.appendChild(hourly21fragment);

        });
}


const citySearch = document.getElementById('citySearch');
const citySearchBtn = document.getElementById('citySearchBtn');

citySearchBtn.addEventListener('click', () => {
    const cityName = citySearch.value;
    console.log(cityName);

    const apiKeySputnik = '5032f91e8da6431d8605-f9c0c9a00357'
    const searchCityUrl = `http://search.maps.sputnik.ru/search/addr?q=${cityName}&apikey=${apiKeySputnik}`;

    fetch(searchCityUrl)
        .then(res => res.json())
        .then(res => {
            const lat = res.result.viewport.TopLat.toFixed(2);
            const lon = res.result.viewport.TopLon.toFixed(2);

            console.log(lat, lon)
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&timezone&units=metric&exclude={hourly,daily}&appid=${apiKey}`;

            getWeather(url);
        })
})

