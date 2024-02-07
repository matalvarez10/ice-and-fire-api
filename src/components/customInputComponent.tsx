interface CustomInputComponentProps {
    labelText: string;
    type: string;
    placeholder?: string;
    name: string;
    value: string | number;
    required?:boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  
  const CustomInputComponent: React.FC<CustomInputComponentProps> = ({
    labelText,
    ...rest
  }) => {
    return (
      <label className="flex flex-col font-lato font-light">
        <span>{labelText}</span>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          {...rest}
        />
      </label>
    );
  };
  
  export default CustomInputComponent;
  