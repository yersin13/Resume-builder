// ✅ Make it a default export
import React from 'react';
import html2pdf from 'html2pdf.js';


type Props = {
  contentId: string;
};

const PdfDownloader: React.FC<Props> = ({ contentId }) => {
  const handleDownload = () => {
    const element = document.getElementById(contentId);
    if (element) {
      html2pdf().from(element).save('resume.pdf');
    }
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Download PDF
    </button>
  );
};

export default PdfDownloader;
