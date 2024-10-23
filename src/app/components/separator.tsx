'use client'; // This marks the file as a Client Component

import React, { useRef, useEffect, useState } from 'react';

export function Separator({ full = true }) {
  const separatorRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState('100%'); // Default full width

  useEffect(() => {
    if (!full && separatorRef.current) {
      // Find the largest sibling element's width and set the separator width accordingly
      const parentElement = separatorRef.current.parentElement;
      if (parentElement) {
        let maxSiblingWidth = 0;
        Array.from(parentElement.children).forEach((child) => {
          if (child !== separatorRef.current) {
            const childWidth = child.getBoundingClientRect().width;
            if (childWidth > maxSiblingWidth) {
              maxSiblingWidth = childWidth;
            }
          }
        });
        setMaxWidth(`${maxSiblingWidth}px`);
      }
    }
  }, [full]);

  return (
    <hr
      ref={separatorRef}
      style={{ width: full ? '100%' : maxWidth }}
      className="border-t border-gray-300 opacity-50 mt-8 mb-4"
    />
  );
}
