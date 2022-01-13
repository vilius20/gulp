const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const minify = require("gulp-minify");
const imageminJpegtran = require("imagemin-jpegtran");
const webp = require("gulp-webp");

function html() {
  return src("src/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(dest("ready"));
}

function scss() {
  return src("src/style/**.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(dest("ready"));
}

// img folderio nuotraukos
function pic() {
  return src("src/img/**.{jpeg,jpg,gif,png}").pipe(dest("ready/img"));
}

// section 2 Nuotraukos
function section_2() {
  return src("src/img/section-2/**.{jpeg,jpg,gif,png}").pipe(
    dest("ready/img/section-2")
  );
}

// section 4 nuotraukos
function section_4() {
  return src("src/img/section-4/**.{jpeg,jpg,gif,png}").pipe(
    dest("ready/img/section-4")
  );
}

// section 6 nuotraukos
function section_6() {
  return src("src/img/section-6/**.{jpeg,jpg,gif,png}").pipe(
    dest("ready/img/section-6")
  );
}

// Delete Funkcija
async function clear() {
  del("ready");
}

// JavaScript failu suspaudimas
function jsmini() {
  return src("src/js/*.js", "src/js/*.mjs")
    .pipe(
      minify({
        noSource: true,
      })
    )
    .pipe(dest("ready/js"));
}

// Nuotrauku Optimizavimas Ir Perkėlimas
// async function fotomini() {
//   const imagemin = (await import("imagemin")).default;
//   const files = await imagemin(["img/*.{jpg,png}"], {
//     destination: "ready/img",
//     plugins: [imageminJpegtran()],
//   });
// }

// WebP Konvertavimas
// function fotowebp() {
//   return src("ready/img/*.{jpeg,jpg,png}").pipe(webp()).pipe(dest("ready/img"));
// }

function serve() {
  sync.init({
    server: "./ready",
  });

  watch("src/**.html", series(html)).on("change", sync.reload);
  watch("src/parts/**.html", series(html)).on("change", sync.reload);
  watch("src/style/**.scss", series(scss)).on("change", sync.reload);
  watch("src/js/**.js", series(jsmini)).on("change", sync.reload);
  watch("src/img/**.{jpeg,jpg,gif}", series(pic)).on("change", sync.reload);
  watch("src/img/section-4/**.{jpeg,jpg,gif}", series(pic)).on(
    "change",
    sync.reload
  );
  watch("src/img/section-6/**.{jpeg,jpg,gif}", series(pic)).on(
    "change",
    sync.reload
  );
  watch("src/img/section-2/**.{jpeg,jpg,gif}", series(section_2)).on(
    "change",
    sync.reload
  );
}

exports.start = series(
  clear,
  html,
  jsmini,
  scss,
  pic,
  section_2,
  section_4,
  section_6,
  // fotomini,
  // fotowebp,
  serve
);

exports.reload = series(
  html,
  scss,
  jsmini,
  pic,
  section_2,
  section_4,
  section_6,
  // fotomini,
  // fotowebp,
  serve
);

exports.delete = series(clear);
