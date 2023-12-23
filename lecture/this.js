
// global 아님
console.log(this);
console.log(this === module.exports);

function a() {
    console.log(this === global);
}

a();