import { SelectProps } from './types';

export const Select = ({ options, className , classSelect, ...props }: SelectProps) => {
  return (
    <div className={classSelect}>
      <select className={className} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
