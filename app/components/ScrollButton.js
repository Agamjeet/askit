'use client';

export default function ScrollButton({ targetId, children, className }) {
  const handleClick = () => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
