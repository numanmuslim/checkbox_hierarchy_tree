const data = [
    {
        text: "Phones",
        type: "Product",
        children: [
        {
            text: "Apple",
            type: "Brand",
            children: [
            {
                text: "iphone 6",
                type: "Model",
                children: [
                {
                    text: "128GB",
                    type: "Variant",
                },
                {
                    text: "256GB",
                    type: "Variant",
                },
                {
                    text: "512GB",
                    type: "Variant",
                },
                ],
            },
            {
                text: "iphone 7",
                type: "Model",
                children: [
                {
                    text: "128GB",
                    type: "Variant",
                },
                {
                    text: "256GB",
                    type: "Variant",
                },
                {
                    text: "512GB",
                    type: "Variant",
                },
                ],
            },
            ],
        },
        {
            text: "Samsung",
            type: "Brand",
            children:[
                {
                    text: "Samsung s22",
                    type: "Model",
                    children: [
                    {
                        text: "128GB",
                        type: "Variant",
                    },
                    {
                        text: "256GB",
                        type: "Variant",
                    },
                    {
                        text: "512GB",
                        type: "Variant",
                    },
                    ],
                },
                {
                    text: "Samsung s23",
                    type: "Model",
                    children: [
                    {
                        text: "128GB",
                        type: "Variant",
                    },
                    {
                        text: "256GB",
                        type: "Variant",
                    },
                    {
                        text: "512GB",
                        type: "Variant",
                    },
                    ],
                },
                ],
        },
        ],
    },
    {
        text: "TVs",
        type: "Product",
        children: [
            {
                text: "Apple",
                type: "Brand",
                children: [
                {
                    text: "2nd Gen.",
                    type: "Model",
                    children: [
                    {
                        text: "32GB",
                        type: "Variant",
                    },
                    {
                        text: "64GB",
                        type: "Variant",
                    },
                    
                    ],
                },
                {
                    text: "3rd Gen.",
                    type: "Model",
                    children: [
                    {
                        text: "64GB",
                        type: "Variant",
                    },
                    {
                        text: "128GB",
                        type: "Variant",
                    },
                    ],
                },
                ],
            },
            {
                text: "Samsung",
                type: "Brand"
            }
            ],
    },
];

export default data;
