# Portfolio Upgrade TODO

## Navbar Redesign Plan (April 9, 2026)

### Overview
Redesign the top-fixed text navbar into a vertical icon-based sidebar positioned at the middle-left, with frosted glass background and scroll-based active highlighting. On mobile, switch to a horizontal bottom bar.

### Steps
1. Update `src/features/navigation-ui/Header.tsx` to create a new `VerticalNavbar` component with icon badges for each section (Home, About, Education, Works, Contact).
2. Implement scroll-based active state detection using IntersectionObserver to highlight the current section with pulse animation.
3. Add smooth scrolling behavior when clicking navbar icons to jump to section anchors.
4. Style the navbar with frosted background (similar to scrolled header: `bg-slate-900/80 backdrop-blur-md`), fully rounded top/bottom edges, and vertically centered positioning.
5. Add mobile responsiveness: hide vertical navbar on small screens, show horizontal version at bottom center with same icons.
6. Update `src/features/sections/Layout.tsx` to include Contact section and ensure all sections have proper IDs for anchor linking.
7. Remove old top header navigation, keeping only the profile badge if desired, or integrate it elsewhere.
8. Test navigation flow: clicking icons scrolls to sections, active state updates on scroll, mobile switches to bottom bar.

### Relevant Files
- `src/features/navigation-ui/Header.tsx` — Refactor to VerticalNavbar component
- `src/features/sections/Layout.tsx` — Add Contact section and section IDs
- `src/global.css` — Add any new styles if needed for mobile horizontal bar

### Verification
1. Desktop: Vertical navbar appears centered left, frosted background, icons highlight on scroll with pulse.
2. Mobile: Vertical navbar hidden, horizontal bar at bottom center, same functionality.
3. Click any icon: smooth scroll to corresponding section.
4. Scroll manually: active icon updates correctly.
5. Accessibility: keyboard navigation works, screen reader announces active section.

### Decisions
- Icons: Home (Home icon), About (BookUser), Education (GraduationCap), Works (Briefcase or Code), Contact (Mail).
- Positioning: Fixed left-4 or left-6, top-1/2 -translate-y-1/2 for vertical center.
- Active state: Use teal-300 color and animate-pulse class.
- Mobile breakpoint: md:hidden for vertical, md:flex for horizontal bottom bar.
- Anchor IDs: Add id="home", id="about", etc. to section elements.
- Profile badge: Remove entirely.
- Animations: Pulse only for active state.
- Works section: Keep empty for now, focus on navbar first.

### Further Considerations
1. Any custom animations beyond pulse for active state? (Decided: No)
2. How to handle the Works section since it's currently empty? (Decided: Keep empty, work on after navbar)

### Next Steps
- Implement the VerticalNavbar component
- Add Contact section to Layout
- Test and refine mobile behavior
- Build out Works section with portfolio projects