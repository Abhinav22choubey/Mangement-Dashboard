import { X } from "lucide-react";

const Popup = ({
  isOpen,
  onClose,
  title,
  showHeader = false,
  children,
  maxWidth = "500px",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        style={{ maxWidth }}
      >
        {/* Header */}
        {showHeader && (
          <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-3 border-b border-gray-300">
            <h2 className="text20 font-medium text-gray-800">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 leading-none"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
