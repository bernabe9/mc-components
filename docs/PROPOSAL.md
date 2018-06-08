# MasterClass Components Library

### Vision
We build our UI using components. A web application is merely collections of components.

The goal of this library is to provide reusable components.

### Reusable Component
A component is composed by three things:
- Structure (HTML)
- Logic (Javascript)
- Style (CSS)

A component is consider reusable if it's usable in more than one context, or even better in any context.
However the component should be capable to be modified by the context(e.g: change the color of the button).

Non-reusable components won't be included in this library.

### Problems we want solve
- Duplicated components
- Versioning
- Inconsistency
- Nested components

### Impact
- Implement UI faster(even for developers that are not great at react)
- Update UI faster
- Less bugs
- Remove shared code from the main repository

The impact will depend on how many reusable components we have.

To calculate this library's impact:

UI components = components + reusable-components

**impact** = UI components / reusable-components

### Downsides
- Slow component implementation
- Mantain repository
- Set up repository (done with mc-components)
- Publish it via npm (done with mc-components)

## Development

### When I should add a component to this library?
- Used more than once
- Doesn't depend on others non-reusable components

### Storybook
If we implement awesome components but we dont have a great documentation no one is going to use them.

Storybook is a tool to display the component in different contexts or stories.

### Styling
- Inline styles
- CSS-in-JS
- CSS with preprocesor SASS

### Overriding Styles

### Testing

## Versioning
