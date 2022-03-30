const {src, watch} = require("gulp");
const {dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function tarea(done){
    console.log("Hola amigos");
    done();
}
function css(done){
    src("src/scss/app.scss") //Identifica el archivo scss a compilar
        .pipe( sass() ) //Compila el archivo scss a css
        .pipe( dest("build/css") ); //Almacena en el destino la nueva hija css compilada
    done();
}
function dev(done){
    watch("src/scss/**/*.scss", css);
    done();

}

exports.tarea = tarea;
exports.css = css;
exports.dev = dev;