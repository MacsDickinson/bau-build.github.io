hljs.registerLanguage("cs", function(b) {
    var a = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
    return {
        k: a,
        c: [{
                cN: "comment",
                b: "///",
                e: "$",
                rB: true,
                c: [{
                    cN: "xmlDocTag",
                    b: "///|<!--|-->"
                }, {
                    cN: "xmlDocTag",
                    b: "</?",
                    e: ">"
                }]
            },
            b.CLCM, b.CBLCLM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            },
            b.ASM, b.QSM, b.CNM, {
                bK: "protected public private internal",
                e: /[{;=]/,
                k: a,
                c: [{
                    bK: "class namespace interface",
                    starts: {
                        c: [b.TM]
                    }
                }, {
                    b: b.IR + "\\s*\\(",
                    rB: true,
                    c: [b.TM]
                }]
            }
        ]
    }
});