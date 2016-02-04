module.exports = {

    "rules": {

        // Color
        "color-hex-case": [ 2, "lower" ],
        "color-hex-length": [ 2, "short" ],
        "color-no-invalid-hex": 2,

        // Numbers
        "number-leading-zero": [ 2, "always" ],
        "number-no-trailing-zeros": 2,
        "number-zero-length-no-unit": 2,
        "number-max-precision": [2, 4],

        // Function
        "function-calc-no-unspaced-operator": 2,
        "function-comma-space-after": [ 2, "always-multi-line" ],
        "function-comma-space-before": [ 2, "never" ],
        "function-parentheses-space-inside": [ 2, "never" ],
        //"function-space-after": [ 2, "always-single-line" ],
        "function-url-quotes": [ 2, "double" ],
        "function-linear-gradient-no-nonstandard-direction": 2,

        // Value lists

        "value-list-comma-newline-before": [2, "never"],
        "value-list-comma-newline-after": [ 2, "always-multi-line" ],
        "value-list-comma-space-after": [ 2, "always-single-line" ],
        "value-list-comma-space-before": [ 2, "never" ],


        "string-quotes": [0, "double"],
        // Indentation must be 4 spaces
        "indentation": [ 2, 4, {
            ignore: ["value"] //ignores indentation of values
        }],

        // At rules must not be vendor prefixed

        // General Vendor prefixing

        "at-rule-no-vendor-prefix": 2,
        "value-no-vendor-prefix": 2,

        // Block

        "block-closing-brace-newline-after": [ 2, "always" ],
        "block-closing-brace-newline-before": [ 2, "always-multi-line" ],
        "block-closing-brace-space-before": [ 2, "always-single-line" ],
        "block-no-empty": 2,
        "block-opening-brace-newline-after": [ 2, "always-multi-line" ],
        "block-opening-brace-space-after": [ 2, "always-single-line" ],
        "block-opening-brace-space-before": [ 2, "always" ],

        // Commenting

        //There must always be an empty line before a comment
        "comment-empty-line-before": [ 2, "always" ],

        //Declaration
        "declaration-bang-space-after": [ 2, "never" ],
        "declaration-bang-space-before": [ 2, "always" ],
        "declaration-block-semicolon-newline-after": [ 2, "always-multi-line" ],
        "declaration-block-semicolon-space-after": [ 2, "always-single-line" ],
        "declaration-block-semicolon-space-before": [ 2, "never" ],
        "declaration-colon-space-after": [ 2, "always" ],
        "declaration-colon-space-before": [ 2, "never" ],

        // Media Query
        "media-feature-colon-space-after": [ 2, "always" ],
        "media-feature-colon-space-before": [ 2, "never" ],

        "media-feature-name-no-vendor-prefix": 1,

        "media-feature-range-operator-space-after": [ 2, "always" ],
        "media-feature-range-operator-space-before": [ 2, "always" ],

        "media-query-list-comma-newline-after": [ 2, "always-multi-line" ],
        "media-query-list-comma-space-after": [ 2, "always-single-line" ],
        "media-query-list-comma-space-before": [ 2, "never" ],
        "media-query-parentheses-space-inside": [ 2, "never" ],

        "no-eol-whitespace": 2,
        "no-missing-eof-newline": 0,
        // "no-multiple-empty-lines": 0,

        "property-no-vendor-prefix": 1,
        "property-unit-blacklist": [2, {
            "line-height": ["px", "rem", "em"],
        }],
        "property-unit-whitelist": [2, {
            "font-size": ["px", "em", "rem", "%"]
        }],
        "root-no-standard-properties": 2,

        //Rules

        //Our ordering of properties is alphabetical
        //"rule-properties-order": [ 2, "alphabetical" ],

        //Rules should never be on a single line
        //"rule-no-single-line": 2,

        //we want double notation on pseudo elements
        "selector-pseudo-element-colon-notation": [ 2, "double" ],

        //rules should always end with a trailing semicolon
        "rule-trailing-semicolon": [ 2, "always" ],

        //there must always be an empty line before non nested rules
        "rule-non-nested-empty-line-before": [ 2, "always-multi-line", {
            ignore: ["after-comment"],
        } ],
        "rule-no-shorthand-property-overrides": 2,

        //there must always be an empty line before if it's nested, except for the first

        "rule-nested-empty-line-before": [ 2, "always-multi-line", {
            except: ["first-nested"],
            ignore: ["after-comment"]
        } ],

        // Selectors

        "selector-combinator-space-after": [ 2, "always" ],
        "selector-combinator-space-before": [ 2, "always" ],

        "selector-list-comma-newline-after": [ 2, "always" ],
        "selector-list-comma-space-before": [ 2, "never" ],

        "selector-no-vendor-prefix": 1,
        "selector-root-no-composition": 2,



    },
};