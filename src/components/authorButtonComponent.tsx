import React from "react";

interface AuthorButtonProps {
  author: string;
  selectedAuthor: string | null;
  onClick: (author: string) => void;
}

const AuthorButtonComponent: React.FC<AuthorButtonProps> = ({
  author,
  selectedAuthor,
  onClick,
}) => {
  return (
    <button
      className={`bg-blue-500 py-2 px-4 ${
        selectedAuthor === author ? "bg-blue-700" : ""
      } text-white font-raleway rounded-full text-sm` }
      onClick={() => onClick(author)}
    >
      {author}
    </button>
  );
};

export default AuthorButtonComponent;
