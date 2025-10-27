import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col py-10 bg-blue-800 text-white">
      <div className="flex flex-row justify-around items-center gap-3 bg-blue-800 text-white py-7">
        <div className="w-60">
          <Image
            src="/image/logo_dark.8e5c7ade 2.png"
            alt="لوگوی ری پیمنت"
            width={200}
            height={80}
            className="object-contain"
          />
          <p className="text-sm mt-4 leading-6">
            راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
            پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام
            تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به
            ثبت رسید و فعالیت رسمی آغاز نمود.
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <div className="pb-4 font-bold">
              <li>لینک های مرتبط</li>
            </div>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/coins">قیمت رمز ارزها</Link>
            </li>
            <li>
              <Link href="/blog">مقالات و وبلاگ</Link>
            </li>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/faq">سوالات متداول</Link>
            </li>
            <li>
              <Link href="/terms">شرایط و قوانین</Link>
            </li>
            <li>
              <Link href="/jobs">فرصت های شغلی</Link>
            </li>
            <li>
              <Link href="/community">انجمن</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <div className="pb-4 font-bold">
              <li>تبادل ارز</li>
            </div>
            <li>خرید بیت کوین</li>
            <li>خرید اتریوم</li>
            <li>خرید ریپل</li>
            <li>خرید سولانا</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3">
            <li>خرید یواس دی کوین</li>
            <li>خرید چین لینک</li>
            <li>خرید دوج کوین</li>
            <li>خرید تتر</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-gray-500"></div>

      <div className="flex flex-row justify-around items-center py-10 text-white">
        <h3>تمامی حقوق این سرویس متعلق به مجموعه ری پیمنت است</h3>
        <div className="flex flex-row gap-6">
          <Image
            src="/image/social-icon/Frame-1.svg"
            alt="social 1"
            width={30}
            height={30}
          />
          <Image
            src="/image/social-icon/Frame-2.svg"
            alt="social 2"
            width={30}
            height={30}
          />
          <Image
            src="/image/social-icon/Frame-3.svg"
            alt="social 3"
            width={30}
            height={30}
          />
          <Image
            src="/image/social-icon/Frame-4.svg"
            alt="social 4"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
