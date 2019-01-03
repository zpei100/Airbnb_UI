import React from 'react';

export const save = function(favorite, onClick) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill={favorite ? 'red' : '#484848'}
      fillOpacity="0.5"
      stroke="#484848"
      strokeWidth="1.5"
      focusable="false"
      aria-hidden="true"
      role="presentation"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      style={{
        height: '15px',
        width: '15px',
        display: 'block',
        overflow: 'visible'
      }}
    >
      <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
    </svg>
  );
};

export const share = (
  <svg
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    style={{
      height: '15px',
      width: '15px',
      display: 'block',
      fill: 'currentcolor'
    }}
  >
    <path
      d="m22.19 8.5h-3.14a.81.81 0 0 0 -.81.8c0 .44.36.8.81.8h2.33v12.31h-18.76v-12.31h3.11c.45 0 .81-.36.81-.8a.81.81 0 0 0 -.81-.8h-3.92a.81.81 0 0 0 -.81.8v13.91c0 .44.36.8.81.8h20.38c.45 0 .81-.36.81-.8v-13.91a.81.81 0 0 0 -.81-.8zm-14.11-3.82c.19 0 .36-.06.51-.18l2.01-1.58.6-.47v13.79c0 .44.36.8.81.8s.81-.36.81-.8v-13.79l.59.47 2.01 1.58a.8.8 0 0 0 .5.18.81.81 0 0 0 .63-.3.79.79 0 0 0 -.13-1.12l-3.92-3.09a.42.42 0 0 0 -.07-.04l-.07-.03-.01-.01-.05-.03a.76.76 0 0 0 -.3-.06.81.81 0 0 0 -.3.06l-.01.01-.06.04-.07.03a.42.42 0 0 0 -.07.04l-3.92 3.09a.79.79 0 0 0 -.13 1.12c.16.19.39.3.63.3z"
      fillRule="evenodd"
    />
  </svg>
);

export const exit = (color = 'white', size = '2em') => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label="Close"
    focusable="false"
    style={{
      height: size,
      width: size,
      display: 'block',
      fill: color
    }}
  >
    <path
      d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
      fillRule="evenodd"
    />
  </svg>
);

const arrow_style = {
  display: `block`,
  height: `70px`,
  width: `70px`,
  fill: `rgb(255,255,255)`
};

export const next_arrow = (
  <svg
    viewBox="0 0 18 18"
    role="img"
    aria-label="Next"
    focusable="false"
    style={arrow_style}
  >
    <path
      d={
        'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z'
      }
      fillRule="evenodd"
    />
  </svg>
);

export const prev_arrow = (
  <svg
    viewBox="0 0 18 18"
    role="img"
    aria-label="Prev"
    focusable="false"
    style={arrow_style}
  >
    <path
      d={
        'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z'
      }
      fillRule="evenodd"
    />
  </svg>
);

export const heart = function(favorite, onClick) {
  return (
    <svg
      viewBox="20 0 25 25"
      fill={favorite ? 'red' : '#484848'}
      onClick={onClick}
      fillOpacity="0.5"
      stroke="#ffffff"
      strokeWidth="2.5"
      focusable="false"
      aria-label="Add listing to a list"
      role="img"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        height: `28px`,
        width: `28px`,
        display: `block`,
        overflow: `visible`,
        position: 'absolute',
        right: 0,
        cursor: 'pointer'
      }}
      className="m-2 favorite-icon"
    >
      <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38" />
    </svg>
  );
};

export const logo = (
  <svg
    viewBox="0 0 1000 1000"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    style={{ height: '2em', width: '2em', fill: 'red' }}
  >
    <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" />
  </svg>
);

export const thumbsUp = (
  <svg
    viewBox="0 0 16 16"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    style={{height: '1em', width: '1em', display: 'block', fill: 'teal'}}
  >
    <path d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63" />
  </svg>
);
