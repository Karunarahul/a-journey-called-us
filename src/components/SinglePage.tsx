import React from 'react';

interface SinglePageProps {
  side: 'left' | 'right';
  pageNumber?: number | string;
  runningHeader?: string;
  children: React.ReactNode;
  className?: string;
  isTurningLeaf?: boolean;
}

export const SinglePage: React.FC<SinglePageProps> = ({
  side,
  pageNumber,
  runningHeader,
  children,
  className = "",
  isTurningLeaf = false,
}) => {
  const isLeft = side === 'left';
  const isRight = side === 'right';

  return (
    <div
      className={`relative w-full h-full bg-[#FAF5EC] book-paper overflow-hidden flex flex-col justify-between ${
        isLeft
          ? 'rounded-l-2xl rounded-r-none border-l border-y border-[#CBB598] pl-5 sm:pl-9 pr-10 sm:pr-14'
          : 'rounded-r-2xl rounded-l-none border-r border-y border-[#CBB598] pl-10 sm:pl-14 pr-5 sm:pr-9'
      } ${
        isTurningLeaf ? 'shadow-2xl' : ''
      } ${className}`}
      style={{
        boxShadow: isTurningLeaf
          ? (isLeft
              ? '-15px 10px 40px rgba(0, 0, 0, 0.45), inset 0 0 40px rgba(200, 169, 126, 0.12)'
              : '15px 10px 40px rgba(0, 0, 0, 0.45), inset 0 0 40px rgba(200, 169, 126, 0.12)')
          : (isLeft
              ? '-4px 0 0 #D9C5AB, -6px 0 0 #EFE5D5, -12px 10px 30px rgba(0, 0, 0, 0.45)'
              : '4px 0 0 #D9C5AB, 6px 0 0 #EFE5D5, 12px 10px 30px rgba(0, 0, 0, 0.45)'),
      }}
    >
      {/* Gutter / Crease shadow along the central spiral spine */}
      {isLeft && (
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-black/15 via-black/4 to-transparent pointer-events-none z-20" />
      )}
      {isRight && (
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-black/15 via-black/4 to-transparent pointer-events-none z-20" />
      )}

      {/* Main Page Content Body */}
      <div className="relative z-10 flex-grow flex flex-col justify-between pt-5 sm:pt-7 pb-2 sm:pb-3 overflow-hidden">
        {children}
      </div>

      {/* Standardized Physical Page Footer */}
      {(pageNumber !== undefined || runningHeader) && (
        <div
          className={`relative z-10 pt-2 pb-2.5 sm:pb-3 border-t border-[#DEC7AA]/60 flex items-center justify-between text-xs font-serif text-[#806B5A] ${
            isLeft ? 'pr-2' : 'pl-2'
          }`}
        >
          {isLeft ? (
            <>
              <span className="font-handwriting text-base text-[#722F3E] italic">
                {runningHeader || "A Journey Called Us"}
              </span>
              <span className="font-mono text-[11px] text-[#806B5A]/80 tracking-wider">
                {pageNumber !== undefined ? (typeof pageNumber === 'number' && pageNumber < 10 ? `0${pageNumber}` : pageNumber) : ""}
              </span>
            </>
          ) : (
            <>
              <span className="font-mono text-[11px] text-[#806B5A]/80 tracking-wider">
                {pageNumber !== undefined ? (typeof pageNumber === 'number' && pageNumber < 10 ? `0${pageNumber}` : pageNumber) : ""}
              </span>
              <span className="font-handwriting text-base text-[#722F3E] italic">
                {runningHeader || "Tejjaaaa & Me ❤️"}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
