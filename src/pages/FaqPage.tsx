import CollapsiblePanel2 from "components/CollapsiblePanel2";
import { ArrowLeft2, SafeHome } from "iconsax-react";

export default function FaqPage() {
	const questions = [
		{
			question: "آیا بدون ثبت‌نام در سایت امکان خرید وجود دارد؟",
			answer: (
				<p>
					"خیر، متأسفانه چنین امکانی وجود ندارد. شما برای خرید از سایت
					می‌بایست ثبت‌نام کرده و وارد حساب کاربری خودتان شوید."
				</p>
			),
		},
		{
			question: "شیوه ثبت‌نام با مرورگر نسخه کامپیوتر چگونه است؟",
			answer: (
				<p>
					اگر با مرورگر کامپیوتر وارد سایت سون شاپ می‌شوید در صفحه
					اصلی سایت، بالای صفحه روی گزینه "ثبت‌نام کنید" کلیک کنید.
					نام کاربری می‌تواند شماره همراه یا ایمیل شما باشد و رمز عبور
					نیز حداقل 6 رقم یا کارکتر باشد. همچنین گزینه قوانین و شرایط
					سون شاپ را انتخاب کنید.
				</p>
			),
		},
		{
			question: "رمز عبور خود را فراموش کرده‌ام چگونه وارد سایت شوم؟",
			answer: (
				<p>
					اگر رمز عبور خود را فراموش کرده‌اید می‌توانید در قسمت "رمز
					عبور را فراموش کرده‌اید؟" نام کاربری خود را وارد کنید و پس
					از انتخاب گزینه ارسال، یک پیامک حاوی کد بازیابی برای شماره
					موبایل یا آدرس ایمیل شما ارسال می‌شود که می‌توانید با درج کد
					ارسال شده، فرآیند بازیابی رمز حساب کاربری خود را انجام دهید.
					در صورت بروز هرگونه مشکل می توانید با شماره 5555555-041 تماس
					حاصل فرمایید.
				</p>
			),
		},
		{
			question: "آیا بدون ثبت‌نام در سایت امکان خرید وجود دارد؟",
			answer: (
				<p>
					خیر، متأسفانه چنین امکانی وجود ندارد. شما برای خرید از سایت
					می‌بایست ثبت‌نام کرده و وارد حساب کاربری خودتان شوید.
				</p>
			),
		},
		{
			question:
				"چگونه از سایت سون شاپ می‌توانم خرید انجام دهم؟چگونه از سایت سون شاپ می‌توانم خرید انجام دهم؟",
			answer: (
				<>
					<p>
						ابتدا می بایست توجه داشته باشید که وارد حساب کاربری خود
						شوید و کالاهای مورد نیاز خود را به سبدخریدتان اضافه
						کنید.
					</p>
					<p>بر روی سبد خرید کلیک کنید.</p>
					<p>
						بعد از بررسی قیمت کالاها، تعداد کالاها و... بر روی گزینه
						تسویه حساب کلیک کنید.
					</p>
					<p>
						آدرس و مشخصات گیرنده را ثبت کنید(تمامی موارد باید به
						درستی وارد شود) بعد از ثبت آدرس، گزینه آدرس را انتخاب
						کنید. سپس شیوه ارسال سفارش را نیز انتخاب کنید.
					</p>
					<p>
						آدرس و مشخصات گیرنده را ثبت کنید(تمامی موارد باید به
						درستی وارد شود) بعد از ثبت آدرس، گزینه آدرس را انتخاب
						کنید. سپس شیوه ارسال سفارش را نیز انتخاب کنید.
					</p>
				</>
			),
		},
		{
			question:
				"کالاها را به سبد خرید اضافه کردم اما گزینه تسویه حساب برایم غیرفعال است؟",
			answer: (
				<p>
					ابتدا مطمئن شوید که وارد حساب کاربری خود شده اید. امکان دارد
					کالاهایی که از قبل به سبد خرید خود اضافه کرده‌اید ناموجود
					شده باشد که در این صورت عبارت" محدودیت در تعداد " در زیر
					عنوان کالا با رنگ قرمز نشان داده می‌شود و می‌بایست کالا را
					از سبد خرید حذف کنید تا گزینه تسویه حساب فعال گردد.
				</p>
			),
		},
		{
			question: "آیا امکان پرداخت درب منزل وجود دارد؟",
			answer: (
				<p>
					خیر، به صورت پرداخت درب منزل امکان پذیر نیست و جهت تکمیل ثبت
					سفارش می‌بایست مبلغ از طریق درگاه بانکی پرداخت گردد.
				</p>
			),
		},
		{
			question: "مبلغ از حساب من کسر شده است ولی خرید انجام نشده است؟",
			answer: (
				<>
					<p>
						دقت کنید پس از پرداخت هزینه از طریق درگاه بانک، باید روی
						گزینه ی تکمیل خرید کلیک کنید اگر این کار را انجام داده
						اید و مبلغ ازحساب شما کسر شده است ولی وضعیت سفارش شما
						"سفارش تکمیل نشده - مبلغ پرداخت نشده " است، مبلغ کسر شده
						حداکثرطی 72 ساعت کاری به حسابتان باز می گردد.
					</p>
					<p>
						دقت کنید ممکن است از طرف بانک پیامک جهت بازگشت مبلغ
						ارسال نشود و می بایست گردش های حساب بانکی خود را چک
						کنید.
					</p>
				</>
			),
		},
	];

	return (
		<>
			<div className="flex justify-end gap-2 mr-6 mt-10">
				<p className="font-light">پرسش های متداول</p>
				<ArrowLeft2 />
				<SafeHome variant="Bold" />
			</div>
			<div className="border-[1.5px] border-gray-300 bg-gray-200 rounded-3xl flex flex-col gap-4 m-4 p-8">
				{questions.map((qa, _) => (
					<CollapsiblePanel2 key={_} text={qa.question}>
						{qa.answer}
					</CollapsiblePanel2>
				))}
			</div>
		</>
	);
}
