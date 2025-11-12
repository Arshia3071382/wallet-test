"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "رمز ارز چیست؟",
      answer:
        "لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب‌بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری استفاده می‌کند.",
    },
    {
      question: "آیا می‌توانم با کارت بانکی بیت کوین بخرم؟",
      answer:
        "بله، شما می‌توانید با استفاده از کارت‌های بانکی عضو شبکه شتاب اقدام به خرید بیت کوین کنید.",
    },
    {
      question: "چرا باید از والت استفاده کنم؟",
      answer:
        "والت به شما کمک می‌کند تا رمزارزهای خود را به‌صورت ایمن نگهداری کرده و در هر زمان انتقال دهید.",
    },
  ];

  return (
    <section dir="rtl" className="max-w-2xl mx-auto my-10 px-15 ">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4 cursor-pointer select-none"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 text-lg">
              {item.question}
            </h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </div>

          {openIndex === index && (
            <p className="mt-3 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
