# Click Outside Hook

A custom React hook for detecting clicks outside of a referenced element. This is particularly useful for closing dropdowns, modals, tooltips, and other UI elements when users click outside of them.

## Features

- ✅ **TypeScript Support**: Fully typed with TypeScript generics
- ✅ **Touch Support**: Works with both mouse and touch events
- ✅ **Conditional Execution**: Only active when enabled
- ✅ **Multiple Elements**: Support for multiple click outside detections
- ✅ **Memory Efficient**: Properly cleans up event listeners
- ✅ **Accessibility**: Works with keyboard navigation (ESC key)

## Installation

The hook is already included in the project. Simply import it where needed:

```typescript
import { useClickOutside, useMultipleClickOutside } from '../../hooks/useClickOutside';
```

## Basic Usage

### Single Element

```typescript
import React, { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu
      </button>
      {isOpen && (
        <div className="dropdown">
          {/* Dropdown content */}
        </div>
      )}
    </div>
  );
}
```

### Multiple Elements

```typescript
import React, { useState } from 'react';
import { useMultipleClickOutside } from '../../hooks/useClickOutside';

function MyComponent() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  
  const dropdown1Ref = useRef<HTMLDivElement>(null);
  const dropdown2Ref = useRef<HTMLDivElement>(null);

  useMultipleClickOutside([
    {
      ref: dropdown1Ref,
      handler: () => setDropdown1Open(false),
      enabled: dropdown1Open
    },
    {
      ref: dropdown2Ref,
      handler: () => setDropdown2Open(false),
      enabled: dropdown2Open
    }
  ]);

  return (
    <div>
      <div ref={dropdown1Ref}>
        {/* First dropdown */}
      </div>
      <div ref={dropdown2Ref}>
        {/* Second dropdown */}
      </div>
    </div>
  );
}
```

## API Reference

### useClickOutside

```typescript
function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void,
  enabled: boolean = true
): RefObject<T>
```

#### Parameters

- `handler`: Function to call when clicking outside the element
- `enabled`: Whether the hook is active (default: `true`)

#### Returns

- `RefObject<T>`: React ref to attach to the target element

### useMultipleClickOutside

```typescript
function useMultipleClickOutside<T extends HTMLElement = HTMLElement>(
  handlers: Array<{
    ref: React.RefObject<T>;
    handler: () => void;
    enabled?: boolean;
  }>
): void
```

#### Parameters

- `handlers`: Array of objects containing:
  - `ref`: React ref to the target element
  - `handler`: Function to call when clicking outside
  - `enabled`: Whether this specific handler is active (default: `true`)

## Real-World Examples

### Navigation Dropdown

```typescript
function NavigationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  
  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Services
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          {/* Dropdown items */}
        </div>
      )}
    </div>
  );
}
```

### Modal Component

```typescript
function Modal({ isOpen, onClose, children }) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose, isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  );
}
```

### Mobile Menu

```typescript
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Menu
      </button>
      {isOpen && (
        <div ref={menuRef} className="fixed inset-0 bg-black bg-opacity-50">
          <div className="bg-white w-64 h-full">
            {/* Menu content */}
          </div>
        </div>
      )}
    </>
  );
}
```

## Best Practices

1. **Always clean up**: The hook automatically cleans up event listeners, but make sure to remove refs when components unmount.

2. **Use TypeScript**: Specify the element type for better type safety:
   ```typescript
   const ref = useClickOutside<HTMLDivElement>(handler, enabled);
   ```

3. **Conditional execution**: Use the `enabled` parameter to only activate the hook when needed:
   ```typescript
   const ref = useClickOutside(handler, isDropdownOpen);
   ```

4. **Accessibility**: The hook works well with keyboard navigation. Consider adding ESC key support:
   ```typescript
   useEffect(() => {
     const handleKeyDown = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
         setIsOpen(false);
       }
     };
     document.addEventListener('keydown', handleKeyDown);
     return () => document.removeEventListener('keydown', handleKeyDown);
   }, []);
   ```

5. **Performance**: For multiple elements, use `useMultipleClickOutside` instead of multiple `useClickOutside` calls.

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Hook not working
- Make sure the ref is properly attached to the target element
- Check that the `enabled` parameter is `true`
- Verify that the element is actually rendered in the DOM

### Multiple clicks detected
- This is normal behavior - the hook detects both mousedown and touchstart events
- The hook is designed to work with both mouse and touch interactions

### TypeScript errors
- Make sure to specify the correct element type: `useClickOutside<HTMLDivElement>`
- Check that the ref type matches the element type
