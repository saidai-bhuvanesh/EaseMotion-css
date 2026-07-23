import React, { useState, useRef, useEffect } from 'react';
import './style.css';

/**
 * SwingSelect component provides a React dropdown select control.
 * Applies a smooth pendulum "Swing" animation upon selection / success state.
 */
const SwingSelect = ({ options = [], value, onChange, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
    
    // Trigger swing animation
    setIsSwinging(true);
    setTimeout(() => setIsSwinging(false), 800);

    triggerRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (!isOpen) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        setIsOpen(true);
        setFocusedIndex(options.findIndex(opt => opt.value === value));
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleSelect(options[focusedIndex]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div 
      className={`swing-select-container-ag ${isOpen ? 'is-open-ag' : ''}`} 
      ref={containerRef}
    >
      <button
        type="button"
        ref={triggerRef}
        className={`swing-select-trigger-ag ${isSwinging ? 'is-success-ag' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={placeholder}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className="swing-select-caret-ag" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <ul 
        className="swing-select-dropdown-ag" 
        role="listbox"
        aria-label="Options"
      >
        {options.map((option, idx) => (
          <li
            key={option.value}
            role="option"
            aria-selected={value === option.value}
            className={`swing-select-option-ag 
              ${value === option.value ? 'is-selected-ag' : ''} 
              ${idx === focusedIndex ? 'is-focused-ag' : ''}`
            }
            onClick={() => handleSelect(option)}
            onMouseEnter={() => setFocusedIndex(idx)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwingSelect;
export { SwingSelect };
