type ErrorProps = {
    error?: string;
    reset: () => void;
    message?: string;
    href: string;
  };
  
  type FormStatesType = {
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    question: string;
  };
  
  interface InputProps {
    label?: React.ReactNode;
    id?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    textArea?: boolean;
    value?: string;
    pattern?: string | RegExp;
    rows?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  }
  
  type ChildrenProps = { children: React.ReactNode };
  
  type LoaderProps = { size?: string };
  