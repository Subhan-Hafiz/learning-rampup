import { hpe } from "grommet-theme-hpe";
import { deepMerge } from "grommet/utils";

export const customTheme = deepMerge(hpe, {
    global: {
        colors: {
            brand: 'accent-1', // Change the brand color
            'accent-1': 'light-1',
        },
        font: {
            family: 'Arial', // Change the font family
            size: '16px',
            height: '20px',
        },
    },
    button: {
        border: {
            radius: '12px', // Customize button border radius
        },
        primary: {
            color: 'accent-1',
        },
    },
    heading: {
        font: {
            family: 'Georgia',
        },
        nav: { a:{color: 'white'}},
        level: {
            1: {
                font: {
                    weight: '700',
                },
                small: {
                    size: '32px',
                    height: '38px',
                },
                medium: {
                    size: '48px',
                    height: '54px',
                },
                large: {
                    size: '64px',
                    height: '70px',
                },
            },
        },
    },
    dataTable: {
        header: {
            background: {
                color: 'accent-2',
                opacity: 'strong',
            },
            border: {
                side: 'bottom',
                size: 'small',
                color: 'brand',
            },
        },
        body: {
            hover: {
                background: {
                    color: 'accent-1',
                    opacity: 'medium',
                },
            },
        },
        footer: {
            background: {
                color: 'light-2',
                opacity: 'medium',
            },
        },
    },
    card: {
        container: {
            elevation: 'medium',
            round: 'small',
            background: 'light-1',
        },
        footer: {
            pad: { horizontal: 'medium', vertical: 'small' },
            background: 'light-3',
        },
    },
    formField: {
        label: {
            size: 'small',
            margin: { vertical: 'xsmall', horizontal: 'none' },
            weight: 600,
        },
        border: {
            color: 'brand',
            size: 'medium',
            position: 'outer',
        },
        error: {
            color: 'status-critical',
        },
    },
    menu: {
        background: 'light-2',
        item: {
            pad: { horizontal: 'medium', vertical: 'small' },
            hover: {
                background: 'accent-1',
                color: 'white',
            },
        },
    },
    // checkBox: {
    //     border: {
    //         color: 'accent-3',
    //         width: '2px',
    //     },
    //     check: {
    //         color: 'brand',
    //         size: '20px',
    //     },
    //     hover: {
    //         border: {
    //             color: 'brand',
    //         },
    //     },
    // },

});
