import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* 1. 메인 히어로 섹션 (배경 이미지 적용 영역) */}
      <section className="relative bg-blue-900 text-white py-32 px-4 text-center overflow-hidden">
        {/* 어두운 오버레이 (글씨를 잘 보이게 함) */}
        {/* <div className="absolute inset-0 bg-blue-900/70 z-10"></div>  */}
        
        {/* 배경 이미지 설정: public/hero-bg.jpg 파일이 필요합니다 */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/bg3.png')" }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Premium <span className="text-yellow-500">Packaging</span> <br className="hidden md:block" /> & Cleaning Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium drop-shadow-md">
            For All Melbourne Businesses
          </p>
          <div className="inline-block bg-yellow-500 text-blue-900 font-extrabold px-8 py-4 rounded-full mb-10 shadow-xl text-lg md:text-xl transform hover:scale-105 transition">
            🚚 Free Delivery Across Victoria
          </div>
          <div>
            <Link href="/catalogue" className="inline-block border-2 border-yellow-500 text-yellow-500 font-bold px-10 py-3 rounded hover:bg-yellow-500 hover:text-blue-900 transition shadow-lg">
              Explore Our Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 회사 설명 섹션 (About KLEAN KING) */}
      <section className="relative w-full py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/bg4.png')" }}>
  
  {/* 글씨 가독성을 위한 반투명 흰색 오버레이 */}
  <div className="absolute inset-0 bg-white/85"></div>

  {/* 내부 콘텐츠 (z-10을 주어 오버레이 위로 올라오게 함) */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">About <span className="text-yellow-500">KLEAN KING</span></h2>
            <div className="w-24 h-2 bg-yellow-500 mb-8 rounded-full"></div>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Welcome to Klean King, Melbourne’s premier <strong>wholesale</strong> and <strong>retail</strong> supplier of <strong>food packaging</strong> and <strong>cleaning products</strong>. 
              With 15 years of industry experience, we have been a trusted partner for restaurants, cafés, and food service businesses, providing high-quality packaging solutions and essential cleaning supplies. 
            </p>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
              At Klean King, we take pride in offering a comprehensive range of products at <strong>competitive prices</strong>, ensuring our customers receive the best value. Whether you need durable food packaging for takeaway orders or powerful cleaning solutions to maintain hygiene standards, we’ve got you covered.
            </p>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
              We also provide a <strong>reliable delivery service</strong>, making it easier for businesses to access the supplies they need, when they need them. Partner with Klean King for top-tier products, excellent customer service, and fast, <strong>efficient delivery</strong>. Let us help your business succeed.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-900 font-bold text-lg">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Premium Sustainable Food Packaging Lineup
              </li>
              <li className="flex items-center text-blue-900 font-bold text-lg">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                High-Efficiency Industrial and Commercial Cleaning Solutions
              </li>
              <li className="flex items-center text-blue-900 font-bold text-lg">
                <svg className="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Free Next-Day Delivery to Melbourne and Surrounding Areas
              </li>
            </ul>
          </div>
          
          {/* 소개 이미지 영역 */}
          {/* <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/bg4.png')" }}
            > */}
              {/* 이미지가 없을 때를 대비한 임시 배경 */}
              {/* <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-900 font-bold">
                Company/Warehouse Image Area
              </div> */}
            {/* </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}