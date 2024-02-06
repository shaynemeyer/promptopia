'use client';

import Link from 'next/link';

interface FormProps {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<
    React.SetStateAction<{ prompt: string; tag: string }>
  >;
  submitting: boolean;
  handleSubmit: (e) => void;
}

function Form({ type, post, setPost, submitting, handleSubmit }: FormProps) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
    </section>
  );
}

export default Form;
