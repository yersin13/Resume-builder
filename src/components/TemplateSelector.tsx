import React from 'react';

interface TemplateSelectorProps {
  selected: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selected, onChange }) => {
  return (
    <div>
      <label>Choose Template:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
        <option value="creative">Creative</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
