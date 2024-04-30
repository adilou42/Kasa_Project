export const breakpoints = {
  small: '576px',
  min_tablet: '768px',
  max_tablet: '1023px',
  extraLarge: '1024px',
};

for (const breakpoint in breakpoints) {
  document.documentElement.style.setProperty(`--${breakpoint}`, breakpoints[breakpoint]);
}