[🔙 بازگشت](../readme.md)

## Composite Design Pattern

<div align="right" dir="rtl">

دیزاین پترن Composite یک پترن ساختاری است که به ما اجازه می‌دهد اشیاء را به صورت درختی از اشیاء مدیریت کنیم. این پترن به ما این امکان را می‌دهد که اشیاء ترکیبی (Composite) و اشیاء ساده (Leaf) را به صورت یکسان با آنها رفتار کنیم.

#### اجزای اصلی Composite Pattern:
**Component:** یک اینترفیس یا کلاس پایه که عملیات‌های مشترک بین Leaf و Composite را تعریف می‌کند.
**Leaf:** نماینده اشیاء ساده‌ای که هیچ زیرشاخه‌ای ندارند.
**Composite:** نماینده اشیاء ترکیبی که می‌توانند شامل Leaf یا Composite های دیگر باشند.

</div>

## Example

<div align="right" dir="rtl">

در این مثال، ما ساختار یک سازمان را مدل‌سازی می‌کنیم که شامل کارمندان (Employee) و تیم‌ها (Team) می‌شود. هر کارمند و هر تیم می‌تواند به عنوان یک جزء در این ساختار باشد.

فایل مثال : [composite.js](./composite.js)

</div>
