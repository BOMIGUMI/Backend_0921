console.log('process.env:', process.env);       // 환경 설정
console.clear();
console.log(process.env.COMPUTERNAME);

console.log('process.version:', precess.version);   // NodeJS Version
console.log('process.arch:', precess.arch);
console.log('process.platform:', precess.platform);
console.log('process.argv:', precess.argv);

process.exit();

console.log('프로세스');        // unreachable

// Hoisting
function aa () {
    let a = 2;
    return a;
    let b = 3;                 //unreachable
}