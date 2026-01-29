import { useState } from "react";
import { FileText, Image as ImageIcon } from "lucide-react";
import Popup from "./Popup";
import { formatFileSize, truncateText } from "./utils";

const FilePreview = ({ files = [] }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const getFileIcon = (name) => {
    const ext = name.split(".").pop()?.toLowerCase();

    if (["jpg", "jpeg", "png", "webp"].includes(ext)) {
      return <ImageIcon className="w-12 h-12 text-blue-500" />;
    }

    return <FileText className="w-12 h-12 text-red-500" />;
  };

  return (
    <>
      {/* Grid container */}
      <div
        className="grid gap-4 justify-items-start p-4"
        style={{
          maxWidth: "1164px",
          gridTemplateColumns: "repeat(auto-fill, minmax(199px, 1fr))",
        }}
      >
        {files.map((file, index) => (
          <DocumentCard
            key={index}
            file={file}
            onClick={() => setSelectedFile(file)}
            getFileIcon={getFileIcon}
          />
        ))}
      </div>

      {/* Popup Preview */}
      <Popup
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(null)}
        showHeader
        title={selectedFile?.name}
        maxWidth="700px"
      >
        {selectedFile && (
          <>
            {/* Image Preview */}
            {/\.(jpg|jpeg|png|webp)$/i.test(selectedFile.name) && (
              <img
                src={selectedFile.url}
                alt={selectedFile.name}
                className="w-full rounded"
              />
            )}

            {/* PDF Preview */}
            {/\.pdf$/i.test(selectedFile.name) && (
              <iframe
                src={selectedFile.url}
                className="w-full h-[80vh] rounded"
                title="PDF Preview"
              />
            )}

            {/* Other Files */}
            {!/\.(jpg|jpeg|png|webp|pdf)$/i.test(selectedFile.name) && (
              <div className="text-center py-5">
                <p className="text16 font-medium mb-3">
                  Preview not supported
                </p>
                <a
                  href={selectedFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Open File
                </a>
              </div>
            )}
          </>
        )}
      </Popup>
    </>
  );
};

function DocumentCard({ file, onClick, getFileIcon }) {
  return (
    <div
      onClick={onClick}
      className="relative w-[199px] h-[230px] bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 transition"
    >
      {/* Icon */}
      <div className="absolute left-[28px] top-[-7px] w-[149px] h-[149px] flex items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-md bg-gray-100 center">
          {getFileIcon(file.name)}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[150px] w-[180px] border-t border-gray-200" />

      {/* Title */}
      <h3 className="absolute left-1/2 -translate-x-1/2 top-[154px] w-[186px] font-semibold text15 leading-[18px] text-black truncate">
        {truncateText(file.name, 28)}
      </h3>

      {/* Description (file size) */}
      <p className="absolute left-1/2 -translate-x-1/2 top-[173px] w-[186px] text12 leading-[15px] text-black line-clamp-2">
        Size: {formatFileSize(file.size)}
      </p>

      {/* Time */}
      {file.time && (
        <p className="absolute left-1/2 -translate-x-1/2 top-[206px] w-[186px] text12 leading-[15px] font-medium text-black truncate">
          {file.time}
        </p>
      )}
    </div>
  );
}

export default FilePreview;
