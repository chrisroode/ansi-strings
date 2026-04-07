const __a = `\x1b[38;5;`;
const __b = `\x1b[48;5;`;
const __c = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
const table = {
	rr:`\x1b[36;0m`,
	bold:`\x1b[1m`,
	faint:`\x1b[2m`,
	italic:`\x1b[3m`,
	underline:`\x1b[4m`,
	a0:`\x1b[30m`,
	a1:`\x1b[31m`,
	a2:`\x1b[32m`,
	a3:`\x1b[33m`,
	a4:`\x1b[34m`,
	a5:`\x1b[35m`,
	a6:`\x1b[36m`,
	a7:`\x1b[37m`,
	a8:`\x1b[90m`,
	a9:`\x1b[91m`,
	a10:`\x1b[92m`,
	a11:`\x1b[93m`,
	a12:`\x1b[94m`,
	a13:`\x1b[95m`,
	a14:`\x1b[96m`,
	a15:`\x1b[97m`,
	_a0:`\x1b[40m`,
	_a1:`\x1b[41m`,
	_a2:`\x1b[42m`,
	_a3:`\x1b[43m`,
	_a4:`\x1b[44m`,
	_a5:`\x1b[45m`,
	_a6:`\x1b[46m`,
	_a7:`\x1b[47m`,
	_a8:`\x1b[100m`,
	_a9:`\x1b[101m`,
	_a10:`\x1b[102m`,
	_a11:`\x1b[103m`,
	_a12:`\x1b[104m`,
	_a13:`\x1b[105m`,
	_a14:`\x1b[106m`,
	_a15:`\x1b[107m`,
};


for (let r=0; r<6; r++) {
	for (let g=0; g<6; g++) {
		for (let b=0; b<6;b++) {
			const num = 16+r*36+g*6+b;
			table[`${__c[r]}${__c[g]}${__c[b]}`] = `${__a}${num}m`;
			table[`_${__c[r]}${__c[g]}${__c[b]}`] = `${__b}${num}m`;
		}
	}
}
for (let g=0; g<24; g++) {
	const num = g+232;
	table[`${__c[g]}`] = `${__a}${num}m`;
	table[`_${__c[g]}`] = `${__b}${num}m`;
}

module.exports = table;