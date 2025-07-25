let asr = document.getElementById('asr-time');
let dhuhr = document.getElementById('dhuhr-time');
let fajr = document.getElementById('fajr-time');
let isha = document.getElementById('isha-time');
let maghrib = document.getElementById('maghrib-time');
let date = document.querySelector('.date');


function getprayertime(country1 , city1,takecityname){
    let params = {
    country : country1,
    city : city1,
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
    .then(function (response) {
        asr.innerText = response.data.data.timings.Asr;
        dhuhr.innerText = response.data.data.timings.Dhuhr;
        fajr.innerText = response.data.data.timings.Fajr;
        isha.innerText = response.data.data.timings.Isha;
        maghrib.innerText = response.data.data.timings.Maghrib;
        document.querySelector('.city-name').innerText = takecityname.innerText;
        date.innerText = response.data.data.date.readable + " "+response.data.data.date.hijri.weekday.ar
        
    })
    .catch(function (error) {
        console.log(error);
    })
}
getprayertime('IQ', 'Baghdād',document.getElementById('baghdad'))
