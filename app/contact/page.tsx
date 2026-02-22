export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-1">
      {/* Contact Information & Location */}
      <section className="max-w-7xl mx-auto px-4 py-24 bg-white">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
                Contact <span className="text-yellow-500">Us</span>
            </h2>
            <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full"></div>
            <p className="mt-6 font-bold text-slate-600 text-2xl">
                VISIT OUR WAREHOUSE / SHOWROOM !!!
            </p>
        </div>

        {/* 2단 그리드 레이아웃: md 사이즈 이상에서 반반으로 나뉨 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* 왼쪽: Visit Our Warehouse 정보 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center">

            
            <div className="space-y-8">
                {/* 주소 */}
                <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 mr-5">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Address</h4>
                    <p className="text-slate-600 leading-relaxed">
                    17-19 Murdock St.<br />
                    Calyton South, VIC 3026 Austrailia<br />
                    </p>
                </div>
                </div>

                {/* 전화번호 */}
                <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 mr-5">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Phone</h4>
                    <p className="text-slate-600">Office: +61 3 9543 6021 / +61 420 316 021</p>
                    <p className="text-slate-600">Sales1: +61 449 521 839</p>
                    <p className="text-slate-600">Sales2: +61 4525 576 990</p>
                </div>
                </div>

                {/* 이메일 */}
                <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 mr-5">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Email</h4>
                    <p className="text-slate-600">admin@kleankingmelbourne.com.au</p>
                </div>
                </div>
                
                {/* 영업 시간 */}
                <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm shrink-0 mr-5">
                    <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Business Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
                </div>
            </div>
            </div>

            {/* 오른쪽: 구글 지도 (아이프레임 임베드) */}
            <div className="w-full h-[400px] md:h-auto min-h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <iframe 
                // 122 Castro Way 주소가 중심에 오도록 구글 지도 URL을 설정했습니다.
                src="https://www.google.com/maps?q=17-19+Murdock+st,+Clayton+South,+VIC+3169&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Klean King Warehouse Location"
            ></iframe>
            </div>
    
        </div>
        </section>
        
      </div>
    )
}