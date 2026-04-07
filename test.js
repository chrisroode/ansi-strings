const c = require('./index.js');


console.log(`ansi-strings test file!
${c.ffa}Welcome to the ${c.afa}${c.bold}${c.underline}Ansi-Strings${c.rr}${c.ffa} Test File!${c.rr}

Open test.js for good usage examples.  Examine the output below to see if it makes sense and look for bugs.

Also, you can just run this test to get the list of keys and what they do.

Recommended usage, use the slant quote syntax (\`) to allow for easier concation:
Example:
${c.ccf}const c = require('ansi-strings');
const myRedString = \`Hello, this text is \${c.faa}Red\${c.rr}.\`;${c.rr}

should output:
${`Hello, this text is ${c.faa}Red${c.rr}.`}

`)




const sectionKeys = {
    sixteenColors:[
        ['a0','a1','a2','a3','a4','a5','a6','a7'],
        ['a8','a9','a10','a11','a12','a13','a14','a15'],
    ],
    twoFiftySixGreyscale:[
        ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'],
    ],
    twoFiftySixNeutrals:[
        ['aaa','bbb','ccc','ddd','eee','fff'],
    ],
    textEffects:[
        ['bold','italic','underline','faint'],
    ],
    twoFiftySixColorPalette:[
        ['cbb','dbb','dcb','ddb','ccb','bcb','bdb','bdc','bdd','bcc','bbc','bbd','cbd','dbd','cbc'],
        ['ebb','edb','eeb','ceb','cdb','beb','bed','bee','bce','bcd','bbe','dbc','dbe','ebe','ebc'],
        ['ecc','ecb','edc','eec','deb','cec','bec','ced','bde','cee','cce','cbe','dce','ebd','ece'],
        ['edd','dcc','eed','ddc','dec','ded','cdc','dee','cdd','cde','dde','ccd','ede','dcd','ecd'],
        ['fee','fec','ffe','fed','efd','efe','dfe','eff','cfd','def','eef','dcf','fef','edf','fde'],
        ['fdd','fdc','ffd','efc','dfc','dfd','cfe','dff','cef','cdf','ddf','ecf','fdf','fce','fcd'],
        ['fcc','fdb','ffc','feb','dfb','cfc','bfc','cff','bfe','bdf','ccf','cbf','fcf','ebf','fbd'],
        ['fbb','fcb','ffb','efb','cfb','bfb','bfd','bff','bef','bcf','bbf','dbf','fbf','fbe','fbc'],
        ['faa','fca','fea','efa','cfa','afa','afc','afe','aef','acf','aaf','caf','eaf','fae','fac'],
        ['fba','fda','ffa','dfa','bfa','afb','afd','aff','adf','abf','baf','daf','faf','fad','fab'],
        ['eba','eda','eea','cea','aea','aeb','aed','aee','ace','aae','bae','dae','eae','eac','eaa'],
        ['eca','dea','bda','bea','ada','aec','ade','abd','abe','aad','cae','ead','dab','eab','daa'],
        ['dba','dca','dda','cda','aca','adb','adc','add','acd','aac','bad','cad','dad','dac','caa'],
        ['cba','bba','cca','bca','aba','acb','abb','acc','abc','aab','bac','bab','cac','cab','baa'],

    ],
};






const underlines = [
    'sixteenColors',
    'twoFiftySixGreyscale',
    'twoFiftySixColorPalette',
    'twoFiftySixNeutrals',
]


const keys = [
];



const lines = [];
const bgLines = [];
const coverage = {};

Object.keys(c).forEach((key) => {
    coverage[key] = false;
});

Object.keys(sectionKeys).forEach((section) => {
    lines.push('',`${c.underline}${section}${c.rr}`);
    let maxLength = 0;
    sectionKeys[section].forEach((e) => {
        e.forEach((f) => {
            if (f !== null) {
                maxLength = Math.max(maxLength,f.length);
            }
        });
    });
    sectionKeys[section].forEach((e) => {
        const line = [];
        e.forEach((f) => {
            if (f === null) {
                //line.push(``.padEnd(maxLength));
                return;
            }
            coverage[f] = true;
            if (f === 'aaa' || f === 'a') {
                line.push(`${c._ccc}${c[f]}${f.padEnd(maxLength)}${c.rr}`);
            }
            else {
                line.push(`${c[f]}${f.padEnd(maxLength)}${c.rr}`);
            }
        });
        lines.push(line.join(' '));
    });
    if (underlines.includes(section) === true) {
        sectionKeys[section].forEach((e) => {
        const line = [];
        e.forEach((f) => {
            if (f === null) {
                //line.push(``.padEnd(maxLength));
                return;
            }
            coverage[`_${f}`] = true;
            if (f === 'aaa' || f === 'a') {
                line.push(`${c._ccc}${c[`_${f}`]}_${f.padEnd(maxLength)}${c.rr}`);
            }
            else {
                line.push(`${c[`_${f}`]}${c[f]}x${c.a}_${f.padEnd(maxLength)}${c.rr}`);
            }
        });
        lines.push(line.join(''));
    });
    }
});






keys.forEach((e) => {
    if (Array.isArray(e) === true) {
        const line = [];
        e.forEach((f) => {
            coverage[f] = true;
            if (f === 'aaa') {
                line.push(`${c._ccc}${c[f]}${f}${c.rr}`);
            }
            else {
                line.push(`${c[f]}${f}${c.rr}`);
            }
        });
        lines.push(line.join(' '));
    }
})

let count = 0;
coverage.rr = true; //See opening console.log().

Object.keys(coverage).forEach((key) => {
    if (coverage[key] === true) {
        count++;
    }
});

const score = count/Object.keys(coverage).length;

function printScore(color = '') {
    console.log(`This test covered ${color}${c.bold}${c.underline}${(score*100).toFixed(2)}${c.rr}${c.bold}${color} %${c.rr} of the objects in ansi-strings`);
}

if (score === 1) {
    printScore(c.afa);
} else if (score > 0.8) {
    printScore(c.ffa);
} else if (score > 0.6) {
    printScore(c.fca);
} else {
    printScore(c.faa);
}


console.log(lines.join('\n'),bgLines.join('\n'));

const missedKeys = [];
Object.keys(coverage).forEach((key) => {
    if (coverage[key] === false) {
        missedKeys.push(key);
    }
});
if (missedKeys.length > 0) {
    console.log(`Missed keys\n'${missedKeys.join(', ')}'`)
}

console.log(`Test Completed Successfully\n\n\n`)