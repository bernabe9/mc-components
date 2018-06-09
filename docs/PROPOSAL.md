# MasterClass Components Library
### Goal
We build our UI using components. A web application is merely collections of components.

:a: + :b: ➟ :ab:

The goal of this library is to provide reusable components.


### Reusable Component
A component is composed by three things:
- Structure (HTML)
- Logic 🧠(Javascript)
- Style :nail_care:(CSS)

A component is consider reusable if it's usable in more than one context, or even better in any context.
However the component should be capable to be modified by the context(e.g: change the color of the button).

Non-reusable components won't be included in this library.

### Problems we want solve
- Duplicated components
- Versioning
- Inconsistency
- Nested components
- Slow UI implementation

### Impact
- Implement UI faster(even for developers that are not great at React) :zap:
- Update UI faster with versioning
- Less bugs :bug:
- Remove shared code from the main repository :recycle:

The impact will depend on how many reusable components we have.

To calculate this library's impact:

UI components = components + reusable-components
er
**impact** = UI components / reusable-components

### Downsides
- Slower component implementation
- Mantain repository
- Set up repository (done with mc-components)
- Publish it via npm (done with mc-components)

## Styling
- #### Inline styles
  - Modular :thumbsup:
  - Style limitations :thumbsdown: :thumbsdown:
- #### CSS-in-JS
  - Modular :thumbsup:
  - Lose css cascade (maybe good) 
  - No need to import CSS file :thumbsup:
  - Javascript flexibility :thumbsup:
  - No SCSS :thumbsdown:
- #### CSS with preprocesor SASS
  - SCSS advantages :thumbsup:
  - Devs used to SCSS :thumbsup:
  - Legacy SCSS styles :thumbsup:
  - Not modular :thumbsdown:

### Local vs External styles
If we decide to go with SCSS, then we need to decide if we add the styles locally or use an external library for styles:
- #### Local styles:
  - Faster component implementation
  - Only components related styles
  - Export styles to be used for anyone

- #### External library:
  - Difficult to keep both libraries syncronized
  - Encapsulate ONLY styles in a library
  - External library could have components styles + other styles
  - Legacy styles


## Development

### When I should add a component to this library?
- Used more than once
- Doesn't depend on others non-reusable components

### Storybook
If we implement awesome components but we dont have a great documentation no one is going to find them.

Storybook is a tool to display the component in different contexts or stories.


### Testing

## Versioning

## Usage
This section explains how is going to be the usage of this library

### Overriding Styles
