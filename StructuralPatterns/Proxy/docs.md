[🔙 بازگشت](../readme.md)

## Proxy Design Pattern

<div align="right" dir="rtl">

دیزاین پترن Proxy یک الگوی ساختاری است که به یک شیء دیگر اجازه می‌دهد تا به نمایندگی از یک شیء اصلی عمل کند. این الگو معمولاً برای کنترل دسترسی به شیء اصلی، کاهش هزینه‌های دسترسی، یا افزودن قابلیت‌های اضافی به شیء اصلی بدون تغییر مستقیم آن استفاده می‌شود.

</div>

## Example

<div align="right" dir="rtl">

در این مثال، از دیزاین پترن Proxy برای مدیریت درخواست‌ها به API آب و هوا استفاده می‌کنیم. هدف این است که وقتی اطلاعات آب و هوا یک بار دریافت می‌شود، در یک بازه زمانی معین (مثلاً 5 ثانیه) از کش خوانده شود و پس از آن دوباره درخواست به API ارسال شود.

فایل مثال : [proxy.js](./proxy.js)


#### توضیحات
تابع fetchWeatherData: این تابع اطلاعات آب و هوا را از API دریافت می‌کند.
کلاس WeatherProxy: این کلاس کش را مدیریت می‌کند. متد getWeather بررسی می‌کند که آیا اطلاعات در کش وجود دارد و معتبر است یا خیر. اگر داده معتبر باشد، آن را از کش می‌خواند. در غیر این صورت، درخواست جدید به API ارسال می‌شود و داده‌های جدید را در کش ذخیره می‌کند.
استفاده از پراکسی: در نهایت، از پراکسی استفاده می‌کنیم تا اطلاعات آب و هوا را دریافت کنیم. بار اول، داده از API دریافت می‌شود و بار دوم، اگر زمان کش معتبر باشد، داده از کش خوانده می‌شود. پس از گذشت زمان معتبر کش، دوباره درخواست به API ارسال می‌شود.
این مثال نشان می‌دهد که چگونه می‌توان با استفاده از دیزاین پترن Proxy، درخواست‌ها به API را بهینه‌سازی کرد و با استفاده از کش، تعداد درخواست‌ها را کاهش داد.

</div>
