export default function CatalogSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24 bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Product <span className="text-yellow-500">Catalog</span>
        </h2>
        <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* PDF 뷰어 영역 */}
      {/* 화면 크기에 맞춰 높이(h-[800px])를 적절히 조절하실 수 있습니다 */}
      <div className="bg-white p-2 md:p-4 rounded-2xl shadow-xl border border-slate-200 h-[600px] md:h-[800px] w-full">
        <iframe
          src="/catalog.pdf#toolbar=0&navpanes=0#view=FitH" /* 여기에 실제 PDF 파일 이름을 적어주세요 */
          className="w-full h-full rounded-lg"
          title="Klean King Product Catalog"
        />
      </div>
      
      {/* (선택) PDF 다운로드 버튼 */}
      <div className="text-center mt-8">
        <a 
          href="/catalog.pdf" 
          download 
          className="inline-block px-8 py-3 rounded-full bg-blue-900 text-white font-bold text-lg hover:bg-blue-800 transition-colors shadow-md"
        >
          DOWNLOAD (PDF)
        </a>
      </div>
    </section>
  );
}