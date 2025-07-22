// components/IconButton.jsx

function IconButton({ href, children, icon: Icon, variant = "primary", external = false }) {
  const baseClasses = "flex items-center gap-2 px-6 py-2 rounded transition transform hover:-translate-y-1";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    gray: "border border-gray-600 text-gray-700 hover:bg-gray-100",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]}`;

  return (
    <a
      href={href}
      className={combinedClasses}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Icon className="w-5 h-5" />
      {children}
    </a>
  );
}

export default IconButton;
