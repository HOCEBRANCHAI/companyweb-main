import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect clicks outside of a referenced element
 * @param handler - Function to call when clicking outside
 * @param enabled - Whether the hook is enabled (default: true)
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  handler: () => void,
  enabled: boolean = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler, enabled]);

  return ref;
}

/**
 * Custom hook for multiple click outside detection
 * Useful when you have multiple dropdowns that should close when clicking outside any of them
 */
export function useMultipleClickOutside<T extends HTMLElement = HTMLElement>(
  handlers: Array<{ ref: React.RefObject<T>; handler: () => void; enabled?: boolean }>
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      handlers.forEach(({ ref, handler, enabled = true }) => {
        if (enabled && ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handlers]);
}
