import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Target, 
  Users, 
  FileText, 
  AlertTriangle, 
  ShieldCheck, 
  BarChart2, 
  Briefcase,
  Layers,
  Database
} from 'lucide-react';
import { SlideData, SlideLayout } from '../types';

interface SlideRendererProps {
  slide: SlideData;
}

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const IconWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="p-2 bg-brand-100 rounded-lg text-brand-700 mr-3 shrink-0">
    {children}
  </div>
);

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const content = slide.content;

  const renderTitle = () => (
    <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-24 bg-brand-700 rounded-2xl flex items-center justify-center text-white shadow-xl"
        >
          <BarChart2 size={48} />
        </motion.div>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <h2 className="text-2xl text-brand-700 font-medium">
              {slide.subtitle}
            </h2>
          )}
        </div>
        <div className="text-gray-500 border-t pt-4 w-full md:w-2/3">
          {slide.footer}
        </div>
      </div>
      
      {slide.imageUrl && (
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 h-64 md:h-full rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img 
            src={slide.imageUrl} 
            alt="Slide visual" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      )}
    </div>
  );

  const renderBulletList = () => (
    <div className="flex h-full gap-12">
      <div className={`flex flex-col justify-center ${slide.imageUrl ? 'w-full md:w-3/5' : 'w-full'}`}>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-brand-500 pb-4 inline-block self-start">
          {slide.title}
        </h2>
        <ul className="space-y-4 overflow-y-auto max-h-[65vh] pr-4 scrollbar-thin scrollbar-thumb-gray-300">
          {content?.mainPoints?.map((point, idx) => (
            <motion.li 
              key={idx}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: idx * 0.05 }}
              className="flex items-start text-lg text-gray-700 leading-relaxed"
            >
              <IconWrapper>
                <ChevronRight size={20} />
              </IconWrapper>
              <span className="mt-1">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      {slide.imageUrl && (
        <motion.div 
          className="hidden md:block w-2/5 h-full rounded-2xl overflow-hidden shadow-lg self-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img 
            src={slide.imageUrl} 
            alt="Illustration" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );

  const renderTwoColumn = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
        {slide.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full overflow-y-auto pb-4">
        {/* Left Column */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center mb-4 text-brand-700">
            {slide.title.includes('Risques') ? <AlertTriangle size={28} className="text-accent-500" /> : <Layers size={28} />}
            <h3 className="text-xl font-bold ml-3 uppercase tracking-wide">{content?.leftColumn?.title}</h3>
          </div>
          <ul className="space-y-3">
            {content?.leftColumn?.points.map((p, i) => (
              <li key={i} className="flex items-start text-gray-700 text-base">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 mr-2.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="bg-brand-50 p-6 rounded-xl shadow-sm border border-brand-100 flex flex-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-4 text-brand-900">
             {slide.title.includes('Risques') ? <ShieldCheck size={28} /> : <Target size={28} />}
            <h3 className="text-xl font-bold ml-3 uppercase tracking-wide">{content?.rightColumn?.title}</h3>
          </div>
          <ul className="space-y-3">
            {content?.rightColumn?.points.map((p, i) => (
              <li key={i} className="flex items-start text-gray-800 text-base">
                <span className="w-1.5 h-1.5 bg-brand-700 rounded-full mt-2 mr-2.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );

  const renderKpiTable = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart2 className="mr-4 text-brand-600" />
        {slide.title}
      </h2>
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white flex-1 overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="bg-brand-700 text-white shadow-md">
              <th className="p-4 font-semibold text-lg w-1/3">Indicateur</th>
              <th className="p-4 font-semibold text-lg w-1/3">Mode de calcul (Formule)</th>
              <th className="p-4 font-semibold text-lg w-1/3">Fréquence</th>
            </tr>
          </thead>
          <tbody>
            {content?.tableData?.map((row, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 + 0.3 }}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-brand-50 transition-colors`}
              >
                <td className="p-4 border-t border-gray-100 font-bold text-brand-900">{row.label}</td>
                <td className="p-4 border-t border-gray-100 text-gray-700 font-mono text-sm bg-gray-50/50">{row.formula}</td>
                <td className="p-4 border-t border-gray-100 text-gray-600">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                    ${row.frequency === 'Quotidien' ? 'bg-green-100 text-green-800' : 
                      row.frequency === 'Hebdomadaire' ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {row.frequency}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (slide.layout) {
      case SlideLayout.TITLE: return renderTitle();
      case SlideLayout.BULLET_LIST: return renderBulletList();
      case SlideLayout.TWO_COLUMN: return renderTwoColumn();
      case SlideLayout.KPI_TABLE: return renderKpiTable();
      default: return <div>Unknown Layout</div>;
    }
  };

  return (
    <motion.div 
      className="w-full h-full p-6 md:p-12 flex flex-col relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={slide.id}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-100/50 to-transparent rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-50/50 rounded-tr-full -z-10" />
      
      {renderContent()}
    </motion.div>
  );
};