// ContainerComponent.jsx
import React, { useRef } from "react";
import {
  HiMiniArrowTurnLeftDown,
  HiMiniArrowTurnRightDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
<<<<<<< HEAD
import LoaderComponent from "./LoaderComponent"; 
=======
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4

export default function ContainerComponent({
  children,
  currentPage,
  totalPages,
  isLoading, // بنستخدم isLoading هنا
  setPage,
}) {
  const containerRef = useRef(null);

  const handleNextPage = () => {
    // نتأكد إننا نقدر ننتقل للصفحة التالية
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
      // بنرجع لأعلى الصفحة عشان المستخدم يشوف المحتوى الجديد
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    // نتأكد إننا نقدر نرجع للصفحة السابقة
    if (currentPage > 1) {
      setPage(currentPage - 1);
      // بنرجع لأعلى الصفحة عشان المستخدم يشوف المحتوى الجديد
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ---

  // *** هنا هو التعديل الرئيسي ***
  // بنفحص الـ isLoading هنا، قبل ما نعرض أي حاجة تانية.
  // لو فيه تحميل، بنعرض الـ spinner وبنوقف عرض أي حاجة تانية.
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[700px]">
<<<<<<< HEAD
          <LoaderComponent />
=======
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-sky-500"></div>
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
      </div>
    );
  }

  // ---

  // لو مفيش تحميل، بنعرض المحتوى العادي للمكون
  return (
    <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center gap-5">
      <div className="p-5 my-4 w-full text-center">
        <div className="flex flex-row items-end justify-center text-center gap-2 mb-10">
          <HiMiniArrowTurnLeftDown className="text-3xl text-white font-extrabold" />
          <h1 className="text-5xl font-extrabold">Your Search Result</h1>
          <HiMiniArrowTurnRightDown className="text-3xl text-white font-extrabold" />
        </div>

        <div
          ref={containerRef}
<<<<<<< HEAD
          className="flex flex-wrap justify-center gap-4"
=======
          className="flex flex-wrap justify-center gap-4 h-[700px] overflow-y-auto overflow-x-hidden custom-scrollbar"
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
        >
          {children}
        </div>

        {/* Simplified Pagination Controls */}
        {/* بنعرض أزرار التنقل بس لو فيه صفحات أكتر من صفر */}
        {totalPages > 0 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={handlePrevPage} // بنستدعي الدالة مباشرة
              disabled={currentPage === 1 || isLoading} // بنعطل الزرار لو في الصفحة الأولى أو فيه تحميل
              className={`p-2 rounded-full ${
                currentPage === 1 || isLoading
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-500 hover:bg-sky-500/20"
              }`}
              aria-label="Previous page"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            <span className="text-sky-500">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage} // بنستدعي الدالة مباشرة
              disabled={currentPage === totalPages || isLoading} // بنعطل الزرار لو في آخر صفحة أو فيه تحميل
              className={`p-2 rounded-full ${
                currentPage === totalPages || isLoading
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-500 hover:bg-sky-500/20"
              }`}
              aria-label="Next page"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}