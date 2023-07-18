export type TreeTableNode = {
    VerticalSpan: number;
    Color: string;
    Value: string;
    Children: TreeTableNode[];
};

export type TreeTable = {
    Name: string;
    Children: TreeTableNode[];
};

// TreeTable without spans
export const simpleTreeTable: TreeTable = {
    Name: "Table",
    Children: [
        {
            VerticalSpan: 1, Color: "Orange", Value: "1",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "5",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "9", Children: [] }],
                },
            ],
        },
        {
            VerticalSpan: 1, Color: "Orange", Value: "2",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "6",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "10", Children: [] }]
                }
            ],
        },
        {
            VerticalSpan: 1, Color: "Orange", Value: "3",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "7",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "11", Children: [] }]
                },
            ],
        },
        {
            VerticalSpan: 1, Color: "Orange", Value: "4",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "8",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "12", Children: [] }]
                },
            ],
        },
    ]
};

// TreeTable with spans
export const complexTreeTable: TreeTable = {
    Name: "Table",
    Children: [
        {
            VerticalSpan: 1, Color: "Orange", Value: "1",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "5",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "10", Children: [] }],
                },
                {
                    VerticalSpan: 1, Color: "Green", Value: "6",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "11", Children: [] }],
                },
            ],
        },
        {
            VerticalSpan: 1, Color: "Orange", Value: "2",
            Children: [{ VerticalSpan: 2, Color: "Green", Value: "7", Children: [] }],
        },
        {
            VerticalSpan: 2, Color: "Orange", Value: "3",
            Children: [
                { VerticalSpan: 1, Color: "Purple", Value: "12", Children: [] },
                { VerticalSpan: 1, Color: "Purple", Value: "13", Children: [] },
            ],
        },
        {
            VerticalSpan: 1, Color: "Orange", Value: "4",
            Children: [
                {
                    VerticalSpan: 1, Color: "Green", Value: "8",
                    Children: [
                        { VerticalSpan: 1, Color: "Purple", Value: "14", Children: [] },
                        { VerticalSpan: 1, Color: "Purple", Value: "15", Children: [] },
                    ],
                },
                {
                    VerticalSpan: 1, Color: "Green", Value: "9",
                    Children: [{ VerticalSpan: 1, Color: "Purple", Value: "16", Children: [] }],
                },
            ],
        },

    ]
};
