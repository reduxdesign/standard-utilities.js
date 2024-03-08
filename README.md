# Standard Utilities JS

A collection of JavaScript utilities designed to streamline and enhance the development of web applications.

## Features

- **DOM Manipulation**: Simplified functions for querying and interacting with the DOM.
- **Event Handling**: Easy addition and removal of event listeners.
- **Data Formatting**: Utilities for formatting currencies and customizable date/time.
- **Validation**: Basic validation for email addresses.
- **Dynamic Date/Time**: Automatically updates elements with current or modified date/time information based on custom attributes.

## Installation

To use `standard-utilities.js` in your project, include the following script tag in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/reduxdesign/standard-utilities.js@f6f0afb94d75bef7bb42916d35b113df34196faf/standard-utilities.min.js"></script>
```


## Usage

### DOM Manipulation

```javascript
// Query a single element
const myElement = Utilities.getElement('#my-element');

// Query multiple elements
const myElements = Utilities.getElements('.my-class');
```

### Event Handling

```javascript
// Add an event listener
Utilities.on(document.getElementById('my-button'), 'click', () => alert('Button clicked!'));

// Remove an event listener
Utilities.off(document.getElementById('my-button'), 'click', someFunction);
```

### Data Formatting

```javascript
// Format a number as currency
console.log(Utilities.formatCurrency(1000)); // "$1,000.00"
```

### Validation

```javascript
// Check if an email is valid
console.log(Utilities.isEmail('test@example.com')); // true
```

## Dynamic Date/Time Manipulation

The `standard-utilities.js` script enhances your web applications with the ability to dynamically display date and time information. Utilize custom data attributes to automatically update elements with current or specifically modified date/time values.

### Using `data-date` for Current Date/Time

Specify the type of date/time information to display using the `data-date` attribute:

- `year`: Displays the current year.
- `month`: Displays the current month name.
- `date`: Displays today's date (day of the month).
- `time`: Displays the current time.

Example:

```html
<span data-date="year"></span> <!-- Displays the current year -->
```

### Custom Date/Time Formatting with `data-date-format`

For more granular control over the displayed date/time format, use the `data-date-format` attribute with a JSON string representing the desired format options:

```html
<span data-date-format='{"year": "numeric", "month": "long", "day": "numeric"}'></span> <!-- Displays date as "March 8, 2024" -->
```

### Dynamic Date Modifications with `data-date-modifier`

The `data-date-modifier` attribute allows for displaying modified date/time information, such as the next year, next month, or tomorrow. Supported modifiers include:

- `next-year`: Displays the next year.
- `next-month`: Displays the name of the next month.
- `tomorrow`: Displays tomorrow's date.

Example:

```html
<span data-date="year" data-date-modifier="next-year"></span> <!-- Displays the next year -->
<span data-date="month" data-date-modifier="next-month"></span> <!-- Displays the next month name -->
<span data-date="date" data-date-modifier="tomorrow"></span> <!-- Displays tomorrow's date -->
```

This functionality provides a powerful and flexible way to manage and display date/time information across your web applications, ensuring content remains dynamic and up-to-date with minimal effort.

## License

Distributed under the MIT License. See `LICENSE` for more information.
