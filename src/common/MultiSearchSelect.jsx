// MultiSearchSelect.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Loader2, Plus, Check } from "lucide-react";

const DefaultChip = ({ item, onRemove }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:border-blue-300 transition-all shadow-sm">
    <span className="max-w-[200px] truncate">{item.name}</span>
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
      className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors"
    >
      <X size={12} className="text-blue-600" />
    </button>
  </span>
);

/**
 * MultiSearchSelect Component
 * 
 * A flexible multi-select component with search, custom chips, and add new functionality.
 * 
 * @component
 * @example
 * ```jsx
 * <MultiSearchSelect
 *   label="Select Users"
 *   selectedValues={users}
 *   onChange={setUsers}
 *   fetchOptions={fetchUsers}
 *   canAddNew={true}
 *   onAddNew={handleAddUser}
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {string} [props.id="multi-search-select"] - HTML id attribute for the input
 * @param {string} [props.name="multi-search-select"] - HTML name attribute for the input
 * @param {string} [props.label] - Label text displayed above the input
 * @param {string} [props.placeholder="Type to search..."] - Placeholder text for the input field
 * @param {Array<{_id: string, name: string}>} props.selectedValues - Array of selected items (must have _id and name)
 * @param {Function} props.onChange - Callback when selection changes (values: Array) => void
 * @param {Function} props.fetchOptions - Async function to fetch options (query: string, page?: number) => Promise<Array | {data: Array, total: number}>
 * @param {boolean} [props.required=false] - Show required indicator (*)
 * @param {string} [props.error] - Error message displayed below input
 * @param {boolean} [props.disabled=false] - Disable the input field
 * @param {number} [props.debounceTime=300] - Search debounce delay in milliseconds
 * @param {number} [props.maxSelections] - Maximum number of selections allowed
 * @param {Function} [props.renderChip] - Custom chip renderer (item: Object, onRemove: Function) => ReactNode
 * @param {boolean} [props.canAddNew=false] - Enable "add new" button when no results found
 * @param {Function} [props.onAddNew] - Async callback to add new item (name: string) => Promise<Object>
 * @param {string} [props.addNewLabel="Add new item"] - Label for add new button
 * @param {boolean} [props.enablePagination=false] - Enable infinite scroll pagination
 * 
 * @returns {React.ReactElement} The MultiSearchSelect component
 */
const MultiSearchSelect = ({
  id = "multi-search-select",
  name = "multi-search-select",
  label,
  placeholder = "Type to search...",
  selectedValues = [],
  onChange,
  fetchOptions,
  required = false,
  error,
  disabled = false,
  debounceTime = 300,
  maxSelections,
  renderChip,
  canAddNew = false,
  onAddNew,
  addNewLabel = "Add new item",
  enablePagination = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addingNew, setAddingNew] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const loadMoreRef = useRef(null);
  const debounceTimer = useRef(null);

  // Close on outside click
  useEffect(() => {
    const close = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // Fetch page
  const fetchPage = async (reset) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    const currentPage = reset ? 1 : page;

    try {
      const res = await fetchOptions(searchQuery, enablePagination ? currentPage : undefined);
      
      // Handle both array response and paginated response
      if (Array.isArray(res)) {
        setOptions(reset ? res : [...options, ...res]);
        setTotal(res.length);
      } else {
        setTotal(res.total);
        setOptions(reset ? res.data : [...options, ...res.data]);
        setPage(currentPage + 1);
      }
    } catch (err) {
      console.error("Failed to fetch options:", err);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setOptions([]);
      setIsOpen(false);
      setPage(1);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setIsOpen(true);
      setPage(1);
      fetchPage(true);
    }, debounceTime);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery]);

  // Infinite scroll
  useEffect(() => {
    if (!enablePagination || !loadMoreRef.current || options.length >= total) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchPage(false);
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [options, total, loading, enablePagination]);

  const selectOption = (option) => {
    if (maxSelections && selectedValues.length >= maxSelections) {
      return;
    }

    // Check if already selected
    if (selectedValues.some((v) => v._id === option._id)) return;

    onChange([...selectedValues, option]);
    setSearchQuery("");
    setOptions([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const removeOption = (id) => {
    onChange(selectedValues.filter((v) => v._id !== id));
  };

  const isSelected = (optionId) => {
    return selectedValues.some((v) => v._id === optionId);
  };

  const handleAddNew = async () => {
    if (!onAddNew || addingNew || !searchQuery.trim()) return;

    setAddingNew(true);
    try {
      const newItem = await onAddNew(searchQuery.trim());
      onChange([...selectedValues, newItem]);
      setSearchQuery("");
      setOptions([]);
      setIsOpen(false);
      inputRef.current?.focus();
    } catch (err) {
      console.error("Failed to add new item:", err);
    } finally {
      setAddingNew(false);
    }
  };

  return (
    <div ref={wrapperRef} className="w-full relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input field */}
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={name}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-3 py-2.5 pr-8 border rounded-lg outline-none transition-colors text-sm ${
            error ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
          } ${disabled ? "bg-gray-50 cursor-not-allowed" : "bg-white"}`}
        />
        <ChevronDown 
          size={16} 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
        />
      </div>

      {/* Selected chips below input */}
      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedValues.map((v) =>
            renderChip ? (
              <React.Fragment key={v._id}>
                {renderChip(v, () => removeOption(v._id))}
              </React.Fragment>
            ) : (
              <DefaultChip key={v._id} item={v} onRemove={() => removeOption(v._id)} />
            )
          )}
        </div>
      )}

      {/* Dropdown */}
      {isOpen && searchQuery.trim() && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-hidden z-50">
          <div className="max-h-80 overflow-y-auto">
            {/* Loading state */}
            {loading && options.length === 0 && (
              <div className="px-4 py-8 text-center">
                <Loader2 className="animate-spin inline-block text-blue-500 mb-2" size={24} />
                <p className="text-sm text-gray-500">Searching...</p>
              </div>
            )}

            {/* Results */}
            {options.length > 0 && (
              <div className="py-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Results ({options.length})
                </div>
                {options.map((option) => {
                  const selected = isSelected(option._id);
                  return (
                    <div
                      key={option._id}
                      onClick={() => !selected && selectOption(option)}
                      className={`px-4 py-2.5 flex items-center justify-between group transition-colors ${
                        selected ? "bg-blue-50 cursor-default" : "hover:bg-gray-50 cursor-pointer"
                      }`}
                    >
                      <span className={`text-sm ${selected ? "text-blue-700 font-medium" : "text-gray-700"}`}>
                        {option.name}
                      </span>
                      {selected && <Check size={16} className="text-blue-600" />}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Infinite scroll loader */}
            {enablePagination && options.length > 0 && options.length < total && (
              <div ref={loadMoreRef} className="py-3 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-sm">Loading more...</span>
                </div>
              </div>
            )}

            {/* No results + Add new */}
            {!loading && options.length === 0 && (
              <div className="py-2">
                <div className="px-4 py-3 text-center border-b border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">No results found</p>
                  <p className="text-xs text-gray-400">Try a different search{canAddNew && " or add a new item"}</p>
                </div>

                {canAddNew && onAddNew && (
                  <button
                    type="button"
                    onClick={handleAddNew}
                    disabled={addingNew}
                    className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      {addingNew ? (
                        <Loader2 size={16} className="animate-spin text-blue-600" />
                      ) : (
                        <Plus size={16} className="text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 group-hover:text-blue-700">{addNewLabel}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Create "<span className="font-medium text-gray-700">{searchQuery}</span>"
                      </p>
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default MultiSearchSelect;