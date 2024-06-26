[🔙 بازگشت](../readme.md)

## Decorator Design Pattern

<div align="right" dir="rtl">

دیزاین پترن Decorator یکی از الگوهای طراحی ساختاری (Structural Design Patterns) است که به ما اجازه می‌دهد بدون تغییر در کلاس‌های اصلی، قابلیت‌های جدید به آن‌ها اضافه کنیم. این دیزاین پترن می‌تواند برای تزریق رفتارهای اضافی به یک شیء در زمان اجرا استفاده شود.

</div>

## Example

<div align="right" dir="rtl">

فرض کنید ما یک سیستم پیام‌رسانی داریم که می‌خواهیم قابلیت‌های مختلفی مانند رمزنگاری، فشرده‌سازی، و ثبت‌وقایع (logging) را به پیام‌ها اضافه کنیم. ابتدا کلاس پایه پیام را تعریف می‌کنیم و سپس دکوراتورهای مختلف را پیاده‌سازی می‌کنیم.

فایل مثال : [decorator.js](./decorator.js)

</div>
