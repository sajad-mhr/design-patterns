// تابع برای درخواست به API آب و هوا
async function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
  }
  
  // کلاس پراکسی برای مدیریت کش
  class WeatherProxy {
    constructor() {
      this.cache = {};
      this.cacheTime = 5000; // 5 ثانیه به میلی‌ثانیه
    }
  
    async getWeather(city) {
      const currentTime = new Date().getTime();
  
      // بررسی اینکه آیا داده در کش وجود دارد و معتبر است یا خیر
      if (this.cache[city] && (currentTime - this.cache[city].timestamp < this.cacheTime)) {
        console.log("Reading data from cache...");
        return this.cache[city].data;
      }
  
      // اگر داده معتبر نباشد، درخواست جدید به API ارسال می‌شود
      console.log("Fetching data from API...");
      const data = await fetchWeatherData(city);
      this.cache[city] = {
        data: data,
        timestamp: currentTime
      };
  
      return data;
    }
  }
  
  // استفاده از پراکسی
  (async () => {
    const proxy = new WeatherProxy();
  
    // بار اول، داده از API دریافت می‌شود
    let weatherData = await proxy.getWeather('Tehran');
    console.log(weatherData);
  
    // بار دوم، داده از کش خوانده می‌شود (در صورتی که زمان معتبر باشد)
    weatherData = await proxy.getWeather('Tehran');
    console.log(weatherData);
  
    // بعد از 10 دقیقه، دوباره داده از API دریافت می‌شود
    setTimeout(async () => {
      weatherData = await proxy.getWeather('Tehran');
      console.log(weatherData);
    }, 5000); // 10 دقیقه و 10 ثانیه برای اطمینان از انقضای کش
  })();
  