var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-UKYYAAI3.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: " Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 7,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: " Nosotros"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 10,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/tienda",
        className: location.pathname === "/tienda" ? "active" : "",
        children: " Tienda"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: " Post"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "GuitarrasPanchito" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 4
  }, this);
}
var header_default = header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 6,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
      "Todos los derechos reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 7,
      columnNumber: 12
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return [{
    charset: "utf8",
    title: "GuitarLa-Remix",
    viewport: "width=device-width, initial-scale=1"
  }];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "html",
    {
      lang: "es",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/root.jsx",
      lineNumber: 63,
      columnNumber: 5
    },
    this
  );
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  if ((0, import_react4.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "heading", children: "Lo siento, ocurrio un error" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
        "Status: ",
        error.status
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
        "Mensaje: ",
        error.statusText
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras regresar a la p\xE1gina principal" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 94,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 90,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this);
  let errorMessage = "Unknown error";
  return isDefinitelyAnError(error) && (errorMessage = error.message), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "heading", children: "Uh oh ..." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 110,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: "Something went wrong." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: errorMessage }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras regresar a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 113,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 109,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras.$guitarraUrl.jsx
var guitarras_guitarraUrl_exports = {};
__export(guitarras_guitarraUrl_exports, {
  default: () => guitarras_guitarraUrl_default,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_react5 = require("@remix-run/react");

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-7VEDCE2E.css";

// app/routes/guitarras.$guitarraUrl.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader(params) {
  let { guitarraUrl } = await params.params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return guitarra;
}
function meta2(data) {
  return data ? [
    {
      title: `GuitarraLA ${data.data.data[0].attributes.nombre}`,
      description: `Guitarras, venta de guitarras,  ${data.data.data[0].nombre}`
    }
  ] : {
    title: "GuitarraLA -- Guitarra no encontrada",
    description: "Guitarra no encontrada"
  };
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Guitarra() {
  let guitarraUrl = (0, import_react5.useLoaderData)(), { nombre, precio, descripcion, imagen } = guitarraUrl.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "contenedor guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `imagen de la guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "heading", children: nombre }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
var guitarras_guitarraUrl_default = Guitarra;

// app/routes/posts.$blogUrl.jsx
var posts_blogUrl_exports = {};
__export(posts_blogUrl_exports, {
  default: () => Blog,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react6 = require("@remix-run/react");

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return fechaNueva.toLocaleDateString("es-Es", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-NAJDYNDC.css";

// app/routes/posts.$blogUrl.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta3(data) {
  return data ? [
    {
      title: `GuitarraLA ${data.data.data[0].attributes.titulo}`,
      description: `Guitarras, Entrada de Blog,  ${data.data.data[0].titulo}`
    }
  ] : {
    title: "GuitarraLA -- Entrada no encontrada",
    description: "Entrada no encontrada"
  };
}
async function loader2(params) {
  let { blogUrl } = await params.params, post = await getPost(blogUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada de blog no encontrada"
    });
  return post;
}
function Blog() {
  let post = (0, import_react6.useLoaderData)();
  console.log(post);
  let { titulo, contenido, imagen, createdAt } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { className: "contenedor post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: imagen.data.attributes.url, alt: `blog entrada ${titulo}` }, void 0, !1, {
      fileName: "app/routes/posts.$blogUrl.jsx",
      lineNumber: 56,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/routes/posts.$blogUrl.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/posts.$blogUrl.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "fecha", children: formatearFecha(createdAt) }, void 0, !1, {
        fileName: "app/routes/posts.$blogUrl.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$blogUrl.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$blogUrl.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links4,
  meta: () => meta4
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-DO3QURDW.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    }
  ];
}
function meta4() {
  return [
    {
      title: "GuitarLA-Nosotros",
      description: "Guitarras, m\xFAsica, ventas"
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: nosotros_default, alt: "imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan ultricies viverra. Vestibulum dapibus nibh in tellus lobortis, a hendrerit metus iaculis. Pellentesque laoreet orci nunc, non accumsan velit scelerisque at. Proin gravida id ligula sit amet auctor. Phasellus vulputate leo at dignissim faucibus. Aliquam placerat nec metus ac molestie." }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/tienda.jsx
var tienda_exports = {};
__export(tienda_exports, {
  default: () => tienda_default,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta5
});
var import_react8 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { nombre, descripcion, precio, url, imagen } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 8,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var guitarra_default = Guitarra2;

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "heading", children: "Nuestra Collecci\xF3n" }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 7,
      columnNumber: 3
    }, this),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      guitarra_default,
      {
        guitarra: guitarra == null ? void 0 : guitarra.attributes
      },
      guitarra == null ? void 0 : guitarra.id,
      !1,
      {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 12,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 6,
    columnNumber: 3
  }, this);
}
var listado_guitarras_default = ListadoGuitarras;

// app/routes/tienda.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function links5() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function meta5() {
  return [{
    title: "GuitarLA-productos",
    description: "Guitarras, m\xFAsica, ventas"
  }];
}
async function loader3() {
  return (await getGuitarras()).data;
}
function Tienda() {
  let guitarras = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    listado_guitarras_default,
    {
      guitarras
    },
    void 0,
    !1,
    {
      fileName: "app/routes/tienda.jsx",
      lineNumber: 36,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/tienda.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
var tienda_default = Tienda;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  loader: () => loader4,
  meta: () => meta6
});

// app/models/cursos.server.js
async function getCursos() {
  return await (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/routes/_index.tsx
var import_react10 = require("@remix-run/react");

// app/components/post.jsx
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Post({ post }) {
  let { titulo, contenido, imagen, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { src: imagen.data.attributes.formats.small.url, alt: `blog guitarra ${post.titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "fecha", children: [
        "Fecha: ",
        formatearFecha(publishedAt)
      ] }, void 0, !0, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Post" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/listado-posts.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "heading", children: "Posts" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "blog", children: posts.map(
      (post) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        Post,
        {
          post: post.attributes
        },
        post.id,
        !1,
        {
          fileName: "app/components/listado-posts.jsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var listado_posts_default = ListadoPosts;

// app/components/curso.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Curso({ cursos }) {
  let { titulo, contenido, imagen, createdAt } = cursos;
  return console.log(imagen), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("style", { jsx: "true", children: `.curso { 
                background-image:linear-gradient(to right, rgb(0 0 0 /.55), rgb(0 0 0 /0.7)),url(${imagen.data.attributes.url})
                }` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "fecha", children: formatearFecha(createdAt) }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/curso.jsx",
    lineNumber: 7,
    columnNumber: 4
  }, this);
}
var curso_default = Curso;

// app/routes/_index.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function meta6() {
}
async function loader4() {
  let [guitarras, posts, cursos] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCursos()
  ]);
  return { guitarras: guitarras.data, posts: posts.data, cursos: cursos.data };
}
function Index() {
  let { guitarras, posts, cursos } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      listado_guitarras_default,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      curso_default,
      {
        cursos: cursos.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      listado_posts_default,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 3
  }, this);
}
var index_default = Index;

// app/routes/admin/index.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default
});
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "Desde index dentro de admin" }, void 0, !1, {
    fileName: "app/routes/admin/index.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var admin_default = index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links6,
  loader: () => loader5
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader5() {
  return (await getPosts()).data;
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog2() {
  let posts = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    listado_posts_default,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/blog.jsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-POQHIS2G.js", imports: ["/build/_shared/chunk-UYLQZWUZ.js", "/build/_shared/chunk-4QJKEWZT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AWEBTKT7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-R2JAX4UN.js", imports: ["/build/_shared/chunk-BRSZ4NG7.js", "/build/_shared/chunk-CIQOY6VE.js", "/build/_shared/chunk-CPI2MCG6.js", "/build/_shared/chunk-23PR3UTZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-D3C3Y73G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-GSF63CRV.js", imports: ["/build/_shared/chunk-HAHIIC5F.js", "/build/_shared/chunk-BRSZ4NG7.js", "/build/_shared/chunk-CIQOY6VE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrl": { id: "routes/guitarras.$guitarraUrl", parentId: "root", path: "guitarras/:guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrl-6TG5EPBO.js", imports: ["/build/_shared/chunk-LGEOXQ6S.js", "/build/_shared/chunk-23PR3UTZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-M44XYRGM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$blogUrl": { id: "routes/posts.$blogUrl", parentId: "root", path: "posts/:blogUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$blogUrl-DUABUTGZ.js", imports: ["/build/_shared/chunk-HAHIIC5F.js", "/build/_shared/chunk-CIQOY6VE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tienda": { id: "routes/tienda", parentId: "root", path: "tienda", index: void 0, caseSensitive: void 0, module: "/build/routes/tienda-Z5IO2VA2.js", imports: ["/build/_shared/chunk-LGEOXQ6S.js", "/build/_shared/chunk-CPI2MCG6.js", "/build/_shared/chunk-23PR3UTZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "24bcf942", hmr: void 0, url: "/build/manifest-24BCF942.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrl": {
    id: "routes/guitarras.$guitarraUrl",
    parentId: "root",
    path: "guitarras/:guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrl_exports
  },
  "routes/posts.$blogUrl": {
    id: "routes/posts.$blogUrl",
    parentId: "root",
    path: "posts/:blogUrl",
    index: void 0,
    caseSensitive: void 0,
    module: posts_blogUrl_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/tienda": {
    id: "routes/tienda",
    parentId: "root",
    path: "tienda",
    index: void 0,
    caseSensitive: void 0,
    module: tienda_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
