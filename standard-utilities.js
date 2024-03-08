// standard-utilities.js

const Utilities = (() => {
    // DOM manipulation utilities
    const getElement = (selector) => document.querySelector(selector);
    const getElements = (selector) => document.querySelectorAll(selector);

    // Event handling utilities
    const on = (element, event, handler) => {
        if (element && event && handler) {
            element.addEventListener(event, handler);
        }
    };
    const off = (element, event, handler) => {
        if (element && event && handler) {
            element.removeEventListener(event, handler);
        }
    };

    // Formatting utilities
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    // Validation utilities
    const isEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    // Automatically executed functions
    const autoInit = () => {
        updateDateElements();
    };

    // Function to calculate modified date based on the modifier
    const calculateDate = (modifier) => {
        const now = new Date();
        switch (modifier) {
            case 'next-year':
                return new Date(now.setFullYear(now.getFullYear() + 1));
            case 'next-month':
                return new Date(now.setMonth(now.getMonth() + 1));
            case 'tomorrow':
                return new Date(now.setDate(now.getDate() + 1));
            default:
                return now; // No modifier or unrecognized modifier returns current date
        }
    };

    // Function to update elements with custom date/time information
    function updateDateElements() {
        const dateElements = document.querySelectorAll('[data-date], [data-date-format]');
        dateElements.forEach((elem) => {
            const format = elem.getAttribute('data-date');
            const customFormat = elem.getAttribute('data-date-format');
            const locale = elem.getAttribute('data-date-locale') || 'default';
            const modifier = elem.getAttribute('data-date-modifier');

            const dateToFormat = calculateDate(modifier);

            if (customFormat) {
                const options = JSON.parse(customFormat);
                elem.textContent = dateToFormat.toLocaleString(locale, options);
            } else {
                switch (format) {
                    case 'year':
                        elem.textContent = dateToFormat.getFullYear();
                        break;
                    case 'month':
                        elem.textContent = dateToFormat.toLocaleString(locale, { month: 'long' });
                        break;
                    case 'date':
                        elem.textContent = dateToFormat.getDate();
                        break;
                    case 'time':
                        elem.textContent = dateToFormat.toLocaleTimeString(locale);
                        break;
                    default:
                        console.error('Unsupported date format');
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInit);
    } else {
        autoInit();
    }

    return {
        getElement,
        getElements,
        on,
        off,
        formatCurrency,
        isEmail,
        // Optionally expose other functions if needed
    };
})();
