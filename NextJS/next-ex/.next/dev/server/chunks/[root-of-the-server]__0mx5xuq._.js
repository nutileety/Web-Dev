module.exports = [
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/user/details/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET(req) {
    try {
        // Prisma 8 style mutation method: .insert() wrapping a 'data' map object
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.User.select("id", "username", "password").limit(2).all();
        console.log(user);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Database Insert Failure:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const { username, password } = await req.json();
        // Validate that parameters exist
        if (!username || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing fields"
            }, {
                status: 400
            });
        }
        // Prisma 8 style mutation method: .insert() wrapping a 'data' map object
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.User.create({
            username,
            password
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            id: user.id,
            username: user.username
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Database Insert Failure:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "db",
    ()=>db
]);
// src/lib/prisma.ts
// Import the generated contract file straight from your local build directory
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/contract.json.[json].cjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const globalForPrisma = globalThis;
const db = globalForPrisma.db ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    url: process.env.DATABASE_URL
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.db = db;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/prisma/contract.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "schemaVersion": "1",
    "targetFamily": "sql",
    "target": "postgres",
    "profileHash": "3916f444a8a17ad749191acf9e08dad97d1a327b88c2f1d45d12f240296aa8b2",
    "roots": {
        "user": {
            "model": "User",
            "namespace": "public"
        }
    },
    "domain": {
        "namespaces": {
            "public": {
                "models": {
                    "User": {
                        "fields": {
                            "id": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/int4@1",
                                    "kind": "scalar"
                                }
                            },
                            "password": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            },
                            "username": {
                                "nullable": false,
                                "type": {
                                    "codecId": "pg/text@1",
                                    "kind": "scalar"
                                }
                            }
                        },
                        "relations": {},
                        "storage": {
                            "fields": {
                                "id": {
                                    "column": "id"
                                },
                                "password": {
                                    "column": "password"
                                },
                                "username": {
                                    "column": "username"
                                }
                            },
                            "namespaceId": "public",
                            "table": "user"
                        }
                    }
                }
            }
        }
    },
    "storage": {
        "namespaces": {
            "public": {
                "entries": {
                    "table": {
                        "user": {
                            "columns": {
                                "id": {
                                    "codecId": "pg/int4@1",
                                    "default": {
                                        "expression": "autoincrement()",
                                        "kind": "function"
                                    },
                                    "nativeType": "int4",
                                    "nullable": false
                                },
                                "password": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                },
                                "username": {
                                    "codecId": "pg/text@1",
                                    "nativeType": "text",
                                    "nullable": false
                                }
                            },
                            "foreignKeys": [],
                            "indexes": [],
                            "primaryKey": {
                                "columns": [
                                    "id"
                                ]
                            },
                            "uniques": [
                                {
                                    "columns": [
                                        "username"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "id": "public",
                "kind": "postgres-schema"
            }
        },
        "storageHash": "9c8af6e6d7232b501506778285028107f7993d96469108b8ef54249907d764cd"
    },
    "capabilities": {
        "postgres": {
            "distinctOn": true,
            "jsonAgg": true,
            "lateral": true,
            "limit": true,
            "orderBy": true,
            "returning": true
        },
        "sql": {
            "checkConstraint": true,
            "defaultInInsert": true,
            "enums": true,
            "lateral": true,
            "returning": true,
            "scalarList": true
        }
    },
    "extensions": {},
    "meta": {},
    "_generated": {
        "warning": "⚠️  GENERATED FILE - DO NOT EDIT",
        "message": "This file is automatically generated by \"prisma contract emit\".",
        "regenerate": "To regenerate, run: prisma contract emit"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mx5xuq._.js.map