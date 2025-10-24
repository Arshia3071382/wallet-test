import React from 'react'

export default function Footer() {
  return (
   <div className='flex flex-col py-10 bg-blue-800 text-whit'>
     <div className='flex flex-row justify-around items-center gap-3  bg-blue-800 text-white py-7'>
        <div className='w-60'> 
            <img src="/image/logo_dark.8e5c7ade 2.png" alt="" />
            <p>
                راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود.
            </p>
        </div>

        <div>
            <ul  className='flex flex-col gap-3'>
                <div className='pb-4 font-bold'>
                    <li>لینک های مرتبط</li>
                </div>
                <li>صفحه اصلی</li>
                <li>قیمت رمز ارزها</li>
                <li>مقالات و وبلاگ</li>
                <li>درباره ما</li>
            </ul>
        </div>

        <div>
            <ul className='flex flex-col gap-3'>
                <li>سوالات متداول</li>
                <li>شرایط و قوانین</li>
                <li>فرصت های شغلی</li>
                <li>انجمن</li>
            </ul>
        </div>

        <div>
            <ul className='flex flex-col gap-3'>
                 <div className='pb-4 font-bold'>
                    <li>تبادل ارز</li>
                 </div>
                <li>خرید بیت کوین</li>
                <li>خرید اتریوم</li>
                <li>خرید ریپل</li>
                <li>خرید سولانا</li>
               
            </ul>
        </div>

        <div>
            <ul className='flex flex-col gap-3'>
                <li>خرید یواس دی کوین</li>
                <li>خرید چین لینک</li>
                <li>خرید دوج کوین</li>
                <li>خرید تتر</li>
            </ul>
        </div>
        
    </div>
    <div className='w-full h-1 bg-gray-500'></div>

    <div className='flex flex-row justify-around gap-200 py-10 text-white'>
        <h3>تمامی حقوق این سرویس متعلق به مجموعه  ری پیمنت   است</h3>
        <div className='flex flex-row gap-10'>
            <img src="/image/social-icon/Frame-1.svg" alt="" />
            <img src="/image/social-icon/Frame-2.svg" alt="" />
            <img src="/image/social-icon/Frame-3.svg" alt="" />
            <img src="/image/social-icon/Frame-4.svg" alt="" />
        </div>
    </div>
   </div>
  )
}
