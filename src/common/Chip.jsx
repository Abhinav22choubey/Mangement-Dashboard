// Chip.jsx
import React from 'react';
import { X, Check } from 'lucide-react';

/**
 * Chip Component
 * 
 * A flexible chip/badge component with multiple variants and styles.
 * 
 * @component
 * @example
 * ```jsx
 * <Chip label="Qualified" variant="filled" color="green" />
 * <Chip label="Negotiation" variant="outlined" color="blue" removable onRemove={() => {}} />
 * <Chip label="Call this week" variant="gradient" color="green" />
 * <Chip label="User" icon={<User size={14} />} iconPosition="start" iconCircle />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Text to display in the chip
 * @param {('filled'|'outlined'|'gradient'|'soft'|'bordered')} [props.variant='filled'] - Visual style variant
 * @param {('blue'|'green'|'red'|'yellow'|'purple'|'gray'|'indigo'|'pink'|'orange')} [props.color='blue'] - Color theme
 * @param {('sm'|'md'|'lg')} [props.size='md'] - Size of the chip
 * @param {boolean} [props.removable=false] - Show close/remove button
 * @param {Function} [props.onRemove] - Callback when remove button is clicked
 * @param {boolean} [props.withIcon=false] - Show default check icon
 * @param {React.ReactNode} [props.icon] - Custom icon component
 * @param {('start'|'end')} [props.iconPosition='start'] - Position of the icon
 * @param {boolean} [props.iconCircle=false] - Wrap icon in circular bordered container
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.rounded=true] - Use rounded corners
 * @param {Function} [props.onClick] - Click handler for the chip
 * 
 * @returns {React.ReactElement} The Chip component
 */
const Chip = ({
  label,
  variant = 'filled',
  color = 'blue',
  size = 'md',
  removable = false,
  onRemove,
  withIcon = false,
  icon,
  iconPosition = 'start',
  iconCircle = false,
  className = '',
  rounded = true,
  onClick
}) => {
  // Size configurations
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base gap-2.5'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  const circleIconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  // Color configurations for different variants
  const colorStyles = {
    filled: {
      blue: 'bg-blue-500 text-white hover:bg-blue-600',
      green: 'bg-green-500 text-white hover:bg-green-600',
      red: 'bg-red-500 text-white hover:bg-red-600',
      yellow: 'bg-yellow-400 text-black hover:bg-yellow-500',
      purple: 'bg-purple-500 text-white hover:bg-purple-600',
      gray: 'bg-gray-500 text-white hover:bg-gray-600',
      indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
      pink: 'bg-pink-500 text-white hover:bg-pink-600',
      orange: 'bg-orange-500 text-white hover:bg-orange-600'
    },
    outlined: {
      blue: 'bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50',
      green: 'bg-white border-2 border-green-500 text-green-600 hover:bg-green-50',
      red: 'bg-white border-2 border-red-500 text-red-600 hover:bg-red-50',
      yellow: 'bg-white border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50',
      purple: 'bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50',
      gray: 'bg-white border-2 border-gray-500 text-gray-600 hover:bg-gray-50',
      indigo: 'bg-white border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50',
      pink: 'bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-50',
      orange: 'bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50'
    },
    gradient: {
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700',
      green: 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700',
      red: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700',
      yellow: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700',
      gray: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700',
      indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700',
      pink: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700',
      orange: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
    },
    soft: {
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      green: 'bg-green-100 text-green-700 hover:bg-green-200',
      red: 'bg-red-100 text-red-700 hover:bg-red-200',
      yellow: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
      pink: 'bg-pink-100 text-pink-700 hover:bg-pink-200',
      orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200'
    },
    bordered: {
      blue: 'bg-blue-50 border border-blue-300 text-blue-700 hover:bg-blue-100',
      green: 'bg-green-50 border border-green-300 text-green-700 hover:bg-green-100',
      red: 'bg-red-50 border border-red-300 text-red-700 hover:bg-red-100',
      yellow: 'bg-yellow-50 border border-yellow-300 text-yellow-700 hover:bg-yellow-100',
      purple: 'bg-purple-50 border border-purple-300 text-purple-700 hover:bg-purple-100',
      gray: 'bg-gray-50 border border-gray-300 text-gray-700 hover:bg-gray-100',
      indigo: 'bg-indigo-50 border border-indigo-300 text-indigo-700 hover:bg-indigo-100',
      pink: 'bg-pink-50 border border-pink-300 text-pink-700 hover:bg-pink-100',
      orange: 'bg-orange-50 border border-orange-300 text-orange-700 hover:bg-orange-100'
    }
  };

  // Circle icon border colors based on variant - using text color
  const getCircleIconColors = () => {
    if (variant === 'filled' || variant === 'gradient') {
      // For filled/gradient: semi-transparent white bg with white border
      return 'border-white/30 bg-white/20';
    } else if (variant === 'outlined') {
      // For outlined: white bg with colored border matching text
      const borderColors = {
        blue: 'border-blue-500 bg-white',
        green: 'border-green-500 bg-white',
        red: 'border-red-500 bg-white',
        yellow: 'border-yellow-400 bg-white',
        purple: 'border-purple-500 bg-white',
        gray: 'border-gray-500 bg-white',
        indigo: 'border-indigo-500 bg-white',
        pink: 'border-pink-500 bg-white',
        orange: 'border-orange-500 bg-white'
      };
      return borderColors[color];
    } else if (variant === 'soft') {
      // For soft: same bg as parent with colored border
      const softStyles = {
        blue: 'border-blue-500 bg-blue-100',
        green: 'border-green-500 bg-green-100',
        red: 'border-red-500 bg-red-100',
        yellow: 'border-yellow-500 bg-yellow-100',
        purple: 'border-purple-500 bg-purple-100',
        gray: 'border-gray-500 bg-gray-100',
        indigo: 'border-indigo-500 bg-indigo-100',
        pink: 'border-pink-500 bg-pink-100',
        orange: 'border-orange-500 bg-orange-100'
      };
      return softStyles[color];
    } else if (variant === 'bordered') {
      // For bordered: same bg as parent with colored border
      const borderedStyles = {
        blue: 'border-blue-400 bg-blue-50',
        green: 'border-green-400 bg-green-50',
        red: 'border-red-400 bg-red-50',
        yellow: 'border-yellow-400 bg-yellow-50',
        purple: 'border-purple-400 bg-purple-50',
        gray: 'border-gray-400 bg-gray-50',
        indigo: 'border-indigo-400 bg-indigo-50',
        pink: 'border-pink-400 bg-pink-50',
        orange: 'border-orange-400 bg-orange-50'
      };
      return borderedStyles[color];
    }
    return 'border-white/30 bg-white/20';
  };

  const baseClasses = 'inline-flex items-center font-medium transition-all whitespace-nowrap';
  const roundedClass = rounded ? 'rounded-full' : 'rounded';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  const colorClass = colorStyles[variant]?.[color] || colorStyles.filled.blue;
  const sizeClass = sizeClasses[size];

  // Render icon with optional circular border
  const renderIcon = (iconComponent) => {
    if (iconCircle) {
      return (
        <span 
          className={`flex items-center justify-center rounded-full border flex-shrink-0 ${circleIconSizes[size]} ${getCircleIconColors()}`}
        >
          {React.cloneElement(iconComponent, { size: iconSizes[size] })}
        </span>
      );
    }
    return (
      <span className="flex items-center flex-shrink-0">
        {React.cloneElement(iconComponent, { size: iconSizes[size] })}
      </span>
    );
  };

  const iconElement = icon || (withIcon ? <Check /> : null);

  return (
    <span
      className={`${baseClasses} ${roundedClass} ${colorClass} ${sizeClass} ${clickableClass} ${className}`}
      onClick={onClick}
    >
      {/* Icon at start */}
      {iconElement && iconPosition === 'start' && renderIcon(iconElement)}

      {/* Label */}
      <span className="leading-none">{label}</span>

      {/* Icon at end */}
      {iconElement && iconPosition === 'end' && renderIcon(iconElement)}

      {/* Remove button */}
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="flex items-center justify-center hover:opacity-70 transition-opacity flex-shrink-0"
          aria-label="Remove"
        >
          <X size={iconSizes[size]} />
        </button>
      )}
    </span>
  );
};

export default Chip;