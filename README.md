# header_button

## Custom Web Component: `app-button`

This code is a simple implementation of a custom web component, `app-button`, using JavaScript's Web Components APIs.

### Overview

This custom component, `app-button`, when used in your HTML, creates a button styled with some CSS.

This was built with the intention of being used with Webex Contact Center Agent Desktop.

### How to use

Simply include the `app-button` tag in your HTML. The default text for the button is "Button A", but it can be overridden by providing content in the `app-button` tag.

For Agent Desktop usage please include this file in the administrator portal for Webex Contact Center : 
Example:

```html
<app-button>Click Me</app-button>
```

### Styling

The button is styled with the following CSS properties:

- Background Color: rgb(0, 145, 255)
- Text Color: white
- Border: none
- Border Radius: 15px
- Padding: 0 2rem
- Font: Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif
- Box Shadow: 0 4px 14px 0 rgb(0, 145, 255)

### Web Component Lifecycle

The `connectedCallback` lifecycle hook is used to append the button template to the shadow root of the component when it is connected to the DOM.

### Webpack

This code is wrapped in a function that is immediately invoked, a pattern often used in Webpack-generated code. This ensures that the code within this function is scoped and does not conflict with other code in your project.

Please note that the `app-button` custom element must be defined in your main JavaScript file or a module that is imported into your main file.

### Browser Support

This custom element uses the Shadow DOM v1 and Custom Elements v1 specifications, which are supported in most modern browsers, but not in Internet Explorer.

Please ensure that your target browsers support these specifications. If not, you may need to include polyfills for these APIs.
