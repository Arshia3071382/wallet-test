// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // تنظیمات اصلی
  reactStrictMode: false,
  
  // تنظیمات تصاویر
  images: {
    domains: [], // برای تصاویر خارجی باید دامنه اضافه کنید
    formats: ['image/webp', 'image/avif'],
  },
  
  // تنظیمات کامپایلر
  compiler: {
    // هیچ فریمورک CSS-in-JS فعال نیست
  },
  
  // ویژگی‌های experimental غیرفعال
  experimental: {},
}

module.exports = nextConfig