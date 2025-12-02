# Responsive Dashboard Implementation Guide

## Quick Start Guide for Developers

This guide helps developers understand and maintain the responsive design
patterns used throughout the Frox Dashboard.

---

## 1. Core Principles

### Mobile-First Approach

```jsx
// ✅ CORRECT: Start with mobile, enhance upward
className =
  'text-xs p-2 flex-col sm:text-sm sm:p-3 sm:flex-row md:text-base md:p-4';

// ❌ WRONG: Desktop-first, remove on mobile
className = 'text-base p-4 flex-row sm:text-sm sm:p-3 sm:flex-col';
```

### Responsive Breakpoints

| Breakpoint | Width   | Device            | Usage               |
| ---------- | ------- | ----------------- | ------------------- |
| None       | 0-640px | Mobile            | Base styles         |
| `sm:`      | 640px+  | Tablet            | Intermediate layout |
| `md:`      | 768px+  | iPad/Large tablet | Enhanced features   |
| `lg:`      | 1024px+ | Desktop           | Full layout         |

---

## 2. Common Responsive Patterns

### Pattern 1: Typography Cascade

```jsx
// Always apply cascading text sizes
<h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
  Responsive Heading
</h1>

<p className="text-xs sm:text-sm md:text-base lg:text-lg">
  Body text with responsive sizing
</p>
```

**Key Points:**

- Base size for mobile (text-xs, text-sm, etc.)
- Add sm: for tablet improvements
- Add md: for tablet+ enhancements
- Add lg: for desktop optimization

### Pattern 2: Spacing Scale

```jsx
// Use consistent spacing patterns
<div className="p-2 sm:p-3 md:p-4 lg:p-5">
  Content
</div>

// Gap in flex/grid
<div className="flex gap-2 sm:gap-3 md:gap-4">
  Items
</div>

// Margin
<div className="mt-2 sm:mt-3 md:mt-4">
  Content
</div>
```

**Spacing Scale:**

- Mobile: 2 (8px)
- Tablet: 3 (12px)
- Desktop: 4 (16px)

### Pattern 3: Flex/Grid Stacking

```jsx
// Flex stacking
<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Grid columns
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
  <Card />
</div>
```

**Common Patterns:**

- Forms: 1 column mobile → 2-3 columns tablet+ → 4+ desktop
- Cards: 2 columns mobile → 3 columns tablet → 4+ desktop
- Tables: Scrollable mobile → full display tablet+

### Pattern 4: Responsive Width

```jsx
// Full width on mobile, constrained on larger screens
<input className="w-full sm:w-40 md:w-48" />

// Container padding
<div className="px-2 sm:px-3 md:px-4 lg:px-5">
  Content
</div>

// Image sizing
<img className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
```

### Pattern 5: Visibility Control

```jsx
// Show only on mobile
<div className="sm:hidden">Mobile only</div>

// Hide on mobile
<div className="hidden sm:block">Tablet+ only</div>

// Hide until desktop
<div className="hidden lg:table-cell">Desktop only column</div>

// Progressive enhancement
<div className="hidden md:flex">Extra features on larger screens</div>
```

### Pattern 6: Dark Mode

```jsx
// Always include dark mode variants
<div className="bg-white dark:bg-slate-800">
  <p className="text-gray-900 dark:text-white">Text that adapts to theme</p>
  <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
    Button with theme support
  </button>
</div>
```

**Color Mappings:**

- Background: `white / dark:slate-800`
- Text: `gray-900 / dark:white`
- Borders: `gray-300 / dark:slate-700`
- Hover: `gray-100 / dark:slate-700`
- Cards: `white / dark:slate-800`

---

## 3. Responsive Components

### Tables (Mobile-Friendly)

```jsx
// Wrapper with horizontal scroll
<div className="overflow-x-auto table-container">
  <table className="min-w-max w-full">
    <thead>
      <tr>
        <th className="hidden md:table-cell">Extra Info</th>
        <th>Always Visible</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
          Content
        </td>
      </tr>
    </tbody>
  </table>
</div>

// CSS in globals.css
.table-container {
  -webkit-overflow-scrolling: touch;
}
```

**Key Points:**

- Always use `overflow-x-auto` for mobile
- Hide columns on mobile: `hidden sm:table-cell`
- Use responsive padding: `px-2 sm:px-3 md:px-4`
- Add `min-w-max` to table for scroll support

### Forms (Responsive Layout)

```jsx
<form className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-3 sm:p-4">
  <input
    className="w-full sm:w-40 border border-gray-300 dark:border-gray-600 
               bg-white dark:bg-slate-700 p-2 sm:p-2.5 rounded text-xs sm:text-sm"
    placeholder="Input"
  />
  <select
    className="w-full sm:w-32 border border-gray-300 dark:border-gray-600 
               bg-white dark:bg-slate-700 p-2 sm:p-2.5 rounded text-xs sm:text-sm"
  >
    <option>Select</option>
  </select>
  <button
    className="px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-500 text-white rounded 
               text-xs sm:text-sm whitespace-nowrap"
  >
    Submit
  </button>
</form>
```

**Form Patterns:**

- Mobile: Full width, stacked layout
- Tablet+: Horizontal layout with responsive gaps
- Inputs: Full width mobile, constrained tablet+
- Labels: Above input on mobile, beside on desktop

### Dropdowns (Mobile-Optimized)

```jsx
// Responsive dropdown
<div className="relative">
  <button className="p-1 sm:p-2 hover:bg-gray-100 dark:hover:bg-slate-700">
    Menu
  </button>
  {open && (
    <div
      className="absolute right-0 w-32 sm:w-40 bg-white dark:bg-slate-800 
                    border border-gray-200 dark:border-slate-700 rounded-lg shadow"
    >
      <button
        className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 
                        text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-slate-700"
      >
        Option 1
      </button>
    </div>
  )}
</div>
```

**Dropdown Tips:**

- Responsive width: `w-32 sm:w-40 md:w-48`
- Responsive padding: `px-2 sm:px-3`, `py-1.5 sm:py-2`
- Responsive text: `text-xs sm:text-sm`
- Always include dark mode colors

### Pagination (Overflow Handling)

```jsx
<div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1">
  {pages.map(page => (
    <button
      key={page}
      className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm 
                 whitespace-nowrap flex-shrink-0 
                 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600"
    >
      {page}
    </button>
  ))}
</div>
```

**Pagination Tips:**

- Add `overflow-x-auto` for mobile horizontal scroll
- Use `whitespace-nowrap flex-shrink-0` to prevent wrapping
- Responsive gap: `gap-2 sm:gap-3`
- Add `pb-1` for scroll indicator visibility

---

## 4. Dark Mode Implementation

### Adding Dark Mode to New Components

```jsx
// Step 1: Add dark background
className = 'bg-white dark:bg-slate-800';

// Step 2: Add dark text colors
className = 'text-gray-900 dark:text-white';

// Step 3: Add dark borders
className = 'border-gray-300 dark:border-gray-600';

// Step 4: Add dark hover states
className = 'hover:bg-gray-100 dark:hover:bg-slate-700';

// Step 5: Test in dark mode
// Open browser devtools → Toggle dark mode
```

### Color Palette Reference

```jsx
// Backgrounds
bg-white / dark:bg-slate-800
bg-gray-50 / dark:bg-slate-900

// Cards
bg-white / dark:bg-slate-800

// Sidebars
bg-[var(--sidebar-bg)] / dark:bg-[var(--sidebar-bg)]

// Text
text-gray-900 / dark:text-white
text-gray-600 / dark:text-gray-400
text-gray-500 / dark:text-gray-500

// Borders
border-gray-200 / dark:border-slate-700
border-gray-300 / dark:border-gray-600

// Inputs
bg-white dark:bg-slate-700
border-gray-300 dark:border-gray-600
text-gray-900 dark:text-white

// Hover/Active
hover:bg-gray-100 dark:hover:bg-slate-700
```

---

## 5. Common Mistakes to Avoid

### ❌ Mistake 1: Desktop-First Approach

```jsx
// ❌ WRONG - Removes styles on mobile
className = 'text-base flex-row p-4 md:text-sm md:flex-col md:p-2';

// ✅ CORRECT - Starts mobile-first
className = 'text-sm flex-col p-2 md:text-base md:flex-row md:p-4';
```

### ❌ Mistake 2: Missing Dark Mode

```jsx
// ❌ WRONG - No dark mode support
className = 'bg-blue-500 text-white';

// ✅ CORRECT - Full dark mode support
className = 'bg-blue-500 dark:bg-blue-600 text-white dark:text-white';
```

### ❌ Mistake 3: Fixed Widths on Mobile

```jsx
// ❌ WRONG - Too narrow on mobile
className = 'w-96';

// ✅ CORRECT - Responsive width
className = 'w-full sm:w-96';
```

### ❌ Mistake 4: Inconsistent Spacing

```jsx
// ❌ WRONG - Different scales at different sizes
className = 'p-2 sm:p-6 md:p-3';

// ✅ CORRECT - Consistent progression
className = 'p-2 sm:p-3 md:p-4 lg:p-5';
```

### ❌ Mistake 5: Ignoring Touch Targets

```jsx
// ❌ WRONG - Too small for touch
className = 'p-1 h-6 w-6';

// ✅ CORRECT - Minimum 44x44px on mobile
className = 'p-2 sm:p-1 h-6 w-6 sm:min-h-[44px] sm:min-w-[44px]';
```

---

## 6. Testing Checklist

### Device Testing

- [ ] iPhone SE (320px)
- [ ] iPhone X (375px)
- [ ] Galaxy S9 (360px)
- [ ] iPad (768px)
- [ ] Laptop (1024px+)
- [ ] 4K Monitor (2560px)

### Responsive Features

- [ ] Text sizes readable at all breakpoints
- [ ] Buttons clickable (44px minimum touch target)
- [ ] Forms easy to use on mobile
- [ ] Tables have horizontal scroll on mobile
- [ ] Navigation accessible on all sizes
- [ ] Images scale properly
- [ ] No horizontal scroll on non-table content

### Dark Mode Testing

- [ ] Background colors visible
- [ ] Text has sufficient contrast (4.5:1)
- [ ] Borders visible in dark mode
- [ ] Hover states work correctly
- [ ] All form inputs visible
- [ ] Icons render correctly

### Performance

- [ ] No layout shifts between breakpoints
- [ ] Smooth transitions between sizes
- [ ] Images optimized for mobile
- [ ] No horizontal scroll on desktop
- [ ] Touch interactions responsive

---

## 7. Adding New Components

### Template for Responsive Component

```jsx
export default function NewComponent() {
  return (
    // Mobile-first container with responsive padding
    <div
      className="bg-white dark:bg-slate-800 p-3 sm:p-4 md:p-6 
                    rounded-lg shadow-lg transition-colors duration-300"
    >
      // Responsive heading
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl 
                     font-bold text-gray-900 dark:text-white 
                     mb-2 sm:mb-3 md:mb-4"
      >
        Title
      </h2>
      // Responsive layout
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
        // Responsive item
        <div
          className="flex-1 border border-gray-300 dark:border-gray-600 
                       p-2 sm:p-3 rounded-lg"
        >
          <p
            className="text-xs sm:text-sm md:text-base 
                       text-gray-600 dark:text-gray-400"
          >
            Content
          </p>
        </div>
        // Responsive button
        <button
          className="px-3 sm:px-4 py-2 sm:py-2.5 
                          bg-blue-500 hover:bg-blue-600 
                          dark:bg-blue-600 dark:hover:bg-blue-700 
                          text-white rounded-lg 
                          text-xs sm:text-sm 
                          font-medium whitespace-nowrap 
                          transition-colors duration-300"
        >
          Action
        </button>
      </div>
    </div>
  );
}
```

---

## 8. Debugging Tips

### Check Breakpoint

```javascript
// In browser console
window.innerWidth; // Check current viewport width
// 0-640px = mobile
// 640-1024px = tablet
// 1024px+ = desktop
```

### Toggle Dark Mode

```javascript
// In browser console
document.documentElement.classList.add('dark'); // Enable dark mode
document.documentElement.classList.remove('dark'); // Disable dark mode
```

### Inspect Responsive Classes

```jsx
// Use browser devtools
1. Right-click element → Inspect
2. Check Classes panel
3. Look for sm:, md:, lg: prefixes
4. Verify dark: variants present
```

### Common Issues

**Issue: Styles not applying**

- Check if breakpoint selector is correct
- Verify class name spelling
- Ensure dark mode toggle is working

**Issue: Layout shift on resize**

- Check for fixed widths that change
- Verify padding/margin scales consistently
- Use CSS Grid or Flexbox instead of absolute positioning

**Issue: Text too small on mobile**

- Verify text-xs isn't the base size
- Add responsive scaling: text-xs sm:text-sm
- Check font-size is at least 16px on inputs

---

## 9. Performance Best Practices

### CSS Optimization

```jsx
// ✅ Use Tailwind utilities
className="p-2 sm:p-3 md:p-4"

// ❌ Avoid inline styles
style={{ padding: responsivePadding }}

// ✅ Use dark mode prefix
className="bg-white dark:bg-slate-800"

// ❌ Don't conditionally render for responsive
{isMobile && <MobileComponent />} // Bad pattern
```

### Bundle Size

- Tailwind purges unused classes
- No extra CSS for responsive breakpoints
- Dark mode uses existing classes

### Load Time

- Images: Use responsive sizes with srcset
- Lazy load images below the fold
- Use WebP format with fallbacks

---

## 10. Resources & References

### Tailwind CSS Documentation

- Responsive Design: https://tailwindcss.com/docs/responsive-design
- Dark Mode: https://tailwindcss.com/docs/dark-mode
- Breakpoints: https://tailwindcss.com/docs/screens

### Mobile-First Design

- Mobile-first approach: Start with mobile design
- Progressive enhancement: Add features for larger screens
- Test on real devices first

### Accessibility

- WCAG 2.1 Guidelines
- Minimum touch target: 44x44px
- Color contrast: 4.5:1 for normal text
- Font size: Minimum 16px on inputs

---

## Summary

**Key Takeaway:** Always think mobile-first. Start with base styles optimized
for mobile, then enhance progressively for larger screens using responsive
prefixes (sm:, md:, lg:). Always include dark mode support and test on real
devices.

**Quick Checklist for New Components:**

- ✅ Mobile-first base styles
- ✅ Responsive prefixes for all sizes
- ✅ Dark mode support
- ✅ Proper touch targets
- ✅ Responsive typography
- ✅ Responsive spacing
- ✅ Tested on real devices
- ✅ Performance optimized

---

_Happy responsive coding! 🚀_
