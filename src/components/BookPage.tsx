import React from 'react';

interface BookPageProps {
  side: 'left' | 'right' | 'single';
  pageNumber?: number | string;
  subTitle?: string;
  children: React.ReactNode;
  className?: string;
  stackThickness?: number; // Visual thickness of pages underneath (1..5)
}

export const BookPage: React.FC<BookPageProps> = ({
  side,
  pageNumber,
  subTitle,
  children,
  className = "",
  stackThickness = 3,
}) => {
  const isLeft = side === 'left';
  const isRight = side === 'right';

  // Realistic paper stack shadow styling depending on side
  const stackShadow = isLeft
    ? `${-stackThickness * 2}px 10px 25px rgba(0, 0, 0, 0.45), ${-stackThickness}px 0 0 #D9C5AB, ${-stackThickness * 1.5}px 0 0 #EFE5D5`
    : `${stackThickness * 2}px 10px 25px rgba(0, 0, 0, 0.45), ${stackThickness}px 0 0 #D9C5AB, ${stackThickness * 1.5}px 0 0 #EFE5D5`;

  return (
    <div
      className={`relative bg-[#FAF5EC] rounded-xl overflow-hidden flex flex-col justify-between book-paper transition-shadow duration-300 ${
        isLeft
          ? 'pr-6 sm:pr-10 pl-6 sm:pl-10 border-l border-y border-[#CBB598]'
          : isRight
          ? 'pl-6 sm:pl-10 pr-6 sm:pl-10 border-r border-y border-[#CBB598]'
          : 'px-6 sm:px-10 border border-[#CBB598]'
      } ${className}`}
      style={{
        boxShadow: side === 'single' ? '0 20px 40px rgba(0,0,0,0.5)' : stackShadow,
        minHeight: '620px',
      }}
    >
      {/* Inner spine margin gutter shadow (darkens slightly near the spiral binding) */}
      {isLeft && (
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black/10 via-black/3 to-transparent pointer-events-none z-10" />
      )}
      {isRight && (
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/10 via-black/3 to-transparent pointer-events-none z-10" />
      )}

      {/* Main Page Content Body */}
      <div className="relative z-10 flex-grow flex flex-col justify-between py-6 sm:py-8">
        {children}
      </div>

      {/* Page Footer Annotation & Number */}
      {(pageNumber || subTitle) && (
        <div
          className={`relative z-10 pt-3 pb-2 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A] ${
            isLeft ? 'pr-2' : isRight ? 'pl-2' : ''
          }`}
        >
          {isLeft ? (
            <>
              <span className="font-handwriting text-base text-[#722F3E] italic">
                {subTitle || "A Journey Called Us"}
              </span>
              <span>{pageNumber ? `Page 0${pageNumber}` : ""}</span>
            </>
          ) : (
            <>
              <span>{pageNumber ? `Page 0${pageNumber}` : ""}</span>
              <span className="font-handwriting text-base text-[#722F3E] italic">
                {subTitle || "Tejjaaaa & Me ❤️"}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
