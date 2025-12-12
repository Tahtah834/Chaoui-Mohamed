import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If grid is open, Escape closes it
      if (isGridOpen) {
        if (e.key === 'Escape') setIsGridOpen(false);
        return; 
      }

      // Normal navigation
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isGridOpen]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-2 md:p-4">
      {/* Main Presentation Container - Made Larger */}
      <div className="w-full h-[85vh] md:h-[92vh] max-w-[1920px] aspect-video bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* Slide Content Area or Grid View */}
        <div className="flex-1 overflow-hidden relative bg-gray-50">
          {isGridOpen ? (
            <div className="h-full overflow-y-auto p-6 md:p-8 animate-in fade-in duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 sticky top-0 bg-gray-50 pb-4 border-b z-10 flex justify-between items-center">
                <span>Vue d'ensemble</span>
                <span className="text-sm font-normal text-gray-500 bg-white px-3 py-1 rounded-full border">{totalSlides} diapositives</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-8">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentSlideIndex(index);
                      setIsGridOpen(false);
                    }}
                    className={`p-4 rounded-xl text-left transition-all border-2 flex flex-col gap-3 group h-48 justify-between
                      ${currentSlideIndex === index 
                        ? 'border-brand-500 bg-white shadow-md ring-2 ring-brand-200' 
                        : 'border-white bg-white hover:border-brand-300 hover:shadow-lg'
                      }`}
                  >
                    <div>
                      <div className="flex justify-between items-center w-full mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full
                          ${currentSlideIndex === index ? 'bg-brand-100 text-brand-700' : 'bg-gray-100 text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-600'}
                        `}>
                          #{index + 1}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800 line-clamp-3 leading-tight group-hover:text-brand-700 text-sm">
                        {slide.title}
                      </span>
                    </div>
                    {slide.subtitle && (
                      <span className="text-xs text-gray-400 line-clamp-1 border-t pt-2 mt-1">
                        {slide.subtitle}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <SlideRenderer slide={currentSlide} />
          )}
        </div>

        {/* Control Bar (Bottom) */}
        <div className="bg-gray-50 border-t border-gray-200 p-3 md:p-4 flex items-center justify-between shrink-0 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium font-mono text-sm hidden sm:inline">
              SLIDE {currentSlideIndex + 1} / {totalSlides}
            </span>
            <div className="h-2 w-24 sm:w-48 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-500 transition-all duration-300"
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2.5 rounded-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-700"
              title="Précédent"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === totalSlides - 1}
              className="p-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              title="Suivant"
            >
              <ChevronRight size={24} />
            </button>

            <div className="w-px h-6 bg-gray-300 mx-3" />

            <button 
              onClick={() => setIsGridOpen(!isGridOpen)}
              className={`p-2.5 rounded-lg transition-colors ${isGridOpen ? 'bg-brand-100 text-brand-700' : 'hover:bg-gray-200 text-gray-600'}`}
              title="Vue grille"
            >
              <Grid size={20} />
            </button>

            <button 
              onClick={toggleFullscreen}
              className="p-2.5 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
              title="Plein écran"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;