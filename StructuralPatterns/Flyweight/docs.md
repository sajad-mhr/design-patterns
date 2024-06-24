[🔙 بازگشت](../readme.md)

## Flyweight Design Pattern

<div align="right" dir="rtl">

دیزاین پترن Flyweight یکی از الگوهای ساختاری (Structural Design Patterns) است که هدف آن کاهش مصرف حافظه از طریق به اشتراک‌گذاری اشیاء مشابه است. این الگو به خصوص در برنامه‌هایی که تعداد زیادی از اشیاء مشابه وجود دارد و هر کدام می‌توانند داده‌های مشابهی داشته باشند، کاربرد دارد.

ایده اصلی این الگو این است که بخش‌های غیر متغیر و مشترک اشیاء را در یک مکان ذخیره کنیم و فقط بخش‌های متغیر را به صورت جداگانه نگه داریم

</div>

## Example

<div align="right" dir="rtl">

فرض کنید می‌خواهیم سیستمی برای نمایش کاراکترها در یک مستند پیاده‌سازی کنیم. هر کاراکتر می‌تواند خصوصیات غیر متغیری مانند فونت، رنگ و سایز داشته باشد. از سوی دیگر، خصوصیات متغیری مانند موقعیت (x و y) نیز دارد.

فایل مثال : [flyweight.js](./flyweight.js)


در این مثال، character1 و character2 به دلیل داشتن خصوصیات یکسان، به همان نمونه از کلاس Character اشاره می‌کنند. این امر موجب صرفه‌جویی در حافظه می‌شود زیرا به جای ایجاد دو شیء مجزا، از یک شیء مشترک استفاده می‌شود.

Flyweight Pattern می‌تواند به صورت قابل توجهی مصرف حافظه را کاهش دهد، به خصوص در برنامه‌هایی که تعداد زیادی از اشیاء مشابه وجود دارند.

</div>