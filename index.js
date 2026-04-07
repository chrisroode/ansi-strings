/* twoFiftySix.  A small and compact RGB color selector for ANSI 256 output.

1) import it how you want
2) use the code for a color.  RGB values range from a-f.
        aaa is black.
        faa is red
        ffa is yellow
        aaf is blue
        fca is orange. get the picture?
3) an underscore before the name sets the background.
        _faa is a red background.
4) use 'rr' to reset the cursor.
5) a single letter sets the greyscale values.  They range from a-x.

Concate them into your strings and you're good to go!
Example usage:

const c = require('./twoFiftySix')
console.log(`hello! This text is ${c.faa}red${c.rr} and this text is ${c.caf}purple${c.rr}.`);

*/

//Forground colors: RGB
exports.aaa = `\x1b[38;5;16m`;
exports.aab = `\x1b[38;5;17m`;
exports.aac = `\x1b[38;5;18m`;
exports.aad = `\x1b[38;5;19m`;
exports.aae = `\x1b[38;5;20m`;
exports.aaf = `\x1b[38;5;21m`;
exports.aba = `\x1b[38;5;22m`;
exports.abb = `\x1b[38;5;23m`;
exports.abc = `\x1b[38;5;24m`;
exports.abd = `\x1b[38;5;25m`;
exports.abe = `\x1b[38;5;26m`;
exports.abf = `\x1b[38;5;27m`;
exports.aca = `\x1b[38;5;28m`;
exports.acb = `\x1b[38;5;29m`;
exports.acc = `\x1b[38;5;30m`;
exports.acd = `\x1b[38;5;31m`;
exports.ace = `\x1b[38;5;32m`;
exports.acf = `\x1b[38;5;33m`;
exports.ada = `\x1b[38;5;34m`;
exports.adb = `\x1b[38;5;35m`;
exports.adc = `\x1b[38;5;36m`;
exports.add = `\x1b[38;5;37m`;
exports.ade = `\x1b[38;5;38m`;
exports.adf = `\x1b[38;5;39m`;
exports.aea = `\x1b[38;5;40m`;
exports.aeb = `\x1b[38;5;41m`;
exports.aec = `\x1b[38;5;42m`;
exports.aed = `\x1b[38;5;43m`;
exports.aee = `\x1b[38;5;44m`;
exports.aef = `\x1b[38;5;45m`;
exports.afa = `\x1b[38;5;46m`;
exports.afb = `\x1b[38;5;47m`;
exports.afc = `\x1b[38;5;48m`;
exports.afd = `\x1b[38;5;49m`;
exports.afe = `\x1b[38;5;50m`;
exports.aff = `\x1b[38;5;51m`;
exports.baa = `\x1b[38;5;52m`;
exports.bab = `\x1b[38;5;53m`;
exports.bac = `\x1b[38;5;54m`;
exports.bad = `\x1b[38;5;55m`;
exports.bae = `\x1b[38;5;56m`;
exports.baf = `\x1b[38;5;57m`;
exports.bba = `\x1b[38;5;58m`;
exports.bbb = `\x1b[38;5;59m`;
exports.bbc = `\x1b[38;5;60m`;
exports.bbd = `\x1b[38;5;61m`;
exports.bbe = `\x1b[38;5;62m`;
exports.bbf = `\x1b[38;5;63m`;
exports.bca = `\x1b[38;5;64m`;
exports.bcb = `\x1b[38;5;65m`;
exports.bcc = `\x1b[38;5;66m`;
exports.bcd = `\x1b[38;5;67m`;
exports.bce = `\x1b[38;5;68m`;
exports.bcf = `\x1b[38;5;69m`;
exports.bda = `\x1b[38;5;70m`;
exports.bdb = `\x1b[38;5;71m`;
exports.bdc = `\x1b[38;5;72m`;
exports.bdd = `\x1b[38;5;73m`;
exports.bde = `\x1b[38;5;74m`;
exports.bdf = `\x1b[38;5;75m`;
exports.bea = `\x1b[38;5;76m`;
exports.beb = `\x1b[38;5;77m`;
exports.bec = `\x1b[38;5;78m`;
exports.bed = `\x1b[38;5;79m`;
exports.bee = `\x1b[38;5;80m`;
exports.bef = `\x1b[38;5;81m`;
exports.bfa = `\x1b[38;5;82m`;
exports.bfb = `\x1b[38;5;83m`;
exports.bfc = `\x1b[38;5;84m`;
exports.bfd = `\x1b[38;5;85m`;
exports.bfe = `\x1b[38;5;86m`;
exports.bff = `\x1b[38;5;87m`;
exports.caa = `\x1b[38;5;88m`;
exports.cab = `\x1b[38;5;89m`;
exports.cac = `\x1b[38;5;90m`;
exports.cad = `\x1b[38;5;91m`;
exports.cae = `\x1b[38;5;92m`;
exports.caf = `\x1b[38;5;93m`;
exports.cba = `\x1b[38;5;94m`;
exports.cbb = `\x1b[38;5;95m`;
exports.cbc = `\x1b[38;5;96m`;
exports.cbd = `\x1b[38;5;97m`;
exports.cbe = `\x1b[38;5;98m`;
exports.cbf = `\x1b[38;5;99m`;
exports.cca = `\x1b[38;5;100m`;
exports.ccb = `\x1b[38;5;101m`;
exports.ccc = `\x1b[38;5;102m`;
exports.ccd = `\x1b[38;5;103m`;
exports.cce = `\x1b[38;5;104m`;
exports.ccf = `\x1b[38;5;105m`;
exports.cda = `\x1b[38;5;106m`;
exports.cdb = `\x1b[38;5;107m`;
exports.cdc = `\x1b[38;5;108m`;
exports.cdd = `\x1b[38;5;109m`;
exports.cde = `\x1b[38;5;110m`;
exports.cdf = `\x1b[38;5;111m`;
exports.cea = `\x1b[38;5;112m`;
exports.ceb = `\x1b[38;5;113m`;
exports.cec = `\x1b[38;5;114m`;
exports.ced = `\x1b[38;5;115m`;
exports.cee = `\x1b[38;5;116m`;
exports.cef = `\x1b[38;5;117m`;
exports.cfa = `\x1b[38;5;118m`;
exports.cfb = `\x1b[38;5;119m`;
exports.cfc = `\x1b[38;5;120m`;
exports.cfd = `\x1b[38;5;121m`;
exports.cfe = `\x1b[38;5;122m`;
exports.cff = `\x1b[38;5;123m`;
exports.daa = `\x1b[38;5;124m`;
exports.dab = `\x1b[38;5;125m`;
exports.dac = `\x1b[38;5;126m`;
exports.dad = `\x1b[38;5;127m`;
exports.dae = `\x1b[38;5;128m`;
exports.daf = `\x1b[38;5;129m`;
exports.dba = `\x1b[38;5;130m`;
exports.dbb = `\x1b[38;5;131m`;
exports.dbc = `\x1b[38;5;132m`;
exports.dbd = `\x1b[38;5;133m`;
exports.dbe = `\x1b[38;5;134m`;
exports.dbf = `\x1b[38;5;135m`;
exports.dca = `\x1b[38;5;136m`;
exports.dcb = `\x1b[38;5;137m`;
exports.dcc = `\x1b[38;5;138m`;
exports.dcd = `\x1b[38;5;139m`;
exports.dce = `\x1b[38;5;140m`;
exports.dcf = `\x1b[38;5;141m`;
exports.dda = `\x1b[38;5;142m`;
exports.ddb = `\x1b[38;5;143m`;
exports.ddc = `\x1b[38;5;144m`;
exports.ddd = `\x1b[38;5;145m`;
exports.dde = `\x1b[38;5;146m`;
exports.ddf = `\x1b[38;5;147m`;
exports.dea = `\x1b[38;5;148m`;
exports.deb = `\x1b[38;5;149m`;
exports.dec = `\x1b[38;5;150m`;
exports.ded = `\x1b[38;5;151m`;
exports.dee = `\x1b[38;5;152m`;
exports.def = `\x1b[38;5;153m`;
exports.dfa = `\x1b[38;5;154m`;
exports.dfb = `\x1b[38;5;155m`;
exports.dfc = `\x1b[38;5;156m`;
exports.dfd = `\x1b[38;5;157m`;
exports.dfe = `\x1b[38;5;158m`;
exports.dff = `\x1b[38;5;159m`;
exports.eaa = `\x1b[38;5;160m`;
exports.eab = `\x1b[38;5;161m`;
exports.eac = `\x1b[38;5;162m`;
exports.ead = `\x1b[38;5;163m`;
exports.eae = `\x1b[38;5;164m`;
exports.eaf = `\x1b[38;5;165m`;
exports.eba = `\x1b[38;5;166m`;
exports.ebb = `\x1b[38;5;167m`;
exports.ebc = `\x1b[38;5;168m`;
exports.ebd = `\x1b[38;5;169m`;
exports.ebe = `\x1b[38;5;170m`;
exports.ebf = `\x1b[38;5;171m`;
exports.eca = `\x1b[38;5;172m`;
exports.ecb = `\x1b[38;5;173m`;
exports.ecc = `\x1b[38;5;174m`;
exports.ecd = `\x1b[38;5;175m`;
exports.ece = `\x1b[38;5;176m`;
exports.ecf = `\x1b[38;5;177m`;
exports.eda = `\x1b[38;5;178m`;
exports.edb = `\x1b[38;5;179m`;
exports.edc = `\x1b[38;5;180m`;
exports.edd = `\x1b[38;5;181m`;
exports.ede = `\x1b[38;5;182m`;
exports.edf = `\x1b[38;5;183m`;
exports.eea = `\x1b[38;5;184m`;
exports.eeb = `\x1b[38;5;185m`;
exports.eec = `\x1b[38;5;186m`;
exports.eed = `\x1b[38;5;187m`;
exports.eee = `\x1b[38;5;188m`;
exports.eef = `\x1b[38;5;189m`;
exports.efa = `\x1b[38;5;190m`;
exports.efb = `\x1b[38;5;191m`;
exports.efc = `\x1b[38;5;192m`;
exports.efd = `\x1b[38;5;193m`;
exports.efe = `\x1b[38;5;194m`;
exports.eff = `\x1b[38;5;195m`;
exports.faa = `\x1b[38;5;196m`;
exports.fab = `\x1b[38;5;197m`;
exports.fac = `\x1b[38;5;198m`;
exports.fad = `\x1b[38;5;199m`;
exports.fae = `\x1b[38;5;200m`;
exports.faf = `\x1b[38;5;201m`;
exports.fba = `\x1b[38;5;202m`;
exports.fbb = `\x1b[38;5;203m`;
exports.fbc = `\x1b[38;5;204m`;
exports.fbd = `\x1b[38;5;205m`;
exports.fbe = `\x1b[38;5;206m`;
exports.fbf = `\x1b[38;5;207m`;
exports.fca = `\x1b[38;5;208m`;
exports.fcb = `\x1b[38;5;209m`;
exports.fcc = `\x1b[38;5;210m`;
exports.fcd = `\x1b[38;5;211m`;
exports.fce = `\x1b[38;5;212m`;
exports.fcf = `\x1b[38;5;213m`;
exports.fda = `\x1b[38;5;214m`;
exports.fdb = `\x1b[38;5;215m`;
exports.fdc = `\x1b[38;5;216m`;
exports.fdd = `\x1b[38;5;217m`;
exports.fde = `\x1b[38;5;218m`;
exports.fdf = `\x1b[38;5;219m`;
exports.fea = `\x1b[38;5;220m`;
exports.feb = `\x1b[38;5;221m`;
exports.fec = `\x1b[38;5;222m`;
exports.fed = `\x1b[38;5;223m`;
exports.fee = `\x1b[38;5;224m`;
exports.fef = `\x1b[38;5;225m`;
exports.ffa = `\x1b[38;5;226m`;
exports.ffb = `\x1b[38;5;227m`;
exports.ffc = `\x1b[38;5;228m`;
exports.ffd = `\x1b[38;5;229m`;
exports.ffe = `\x1b[38;5;230m`;
exports.fff = `\x1b[38;5;231m`;

//Forground Greyscale
exports.a = `\x1b[38;5;232m`;
exports.b = `\x1b[38;5;233m`;
exports.c = `\x1b[38;5;234m`;
exports.d = `\x1b[38;5;235m`;
exports.e = `\x1b[38;5;236m`;
exports.f = `\x1b[38;5;237m`;
exports.g = `\x1b[38;5;238m`;
exports.h = `\x1b[38;5;239m`;
exports.i = `\x1b[38;5;240m`;
exports.j = `\x1b[38;5;241m`;
exports.k = `\x1b[38;5;242m`;
exports.l = `\x1b[38;5;243m`;
exports.m = `\x1b[38;5;244m`;
exports.n = `\x1b[38;5;245m`;
exports.o = `\x1b[38;5;246m`;
exports.p = `\x1b[38;5;247m`;
exports.q = `\x1b[38;5;248m`;
exports.r = `\x1b[38;5;249m`;
exports.s = `\x1b[38;5;250m`;
exports.t = `\x1b[38;5;251m`;
exports.u = `\x1b[38;5;252m`;
exports.v = `\x1b[38;5;253m`;
exports.w = `\x1b[38;5;254m`;
exports.x = `\x1b[38;5;255m`;


//Background Color RGB
exports._aaa = `\x1b[48;5;16m`;
exports._aab = `\x1b[48;5;17m`;
exports._aac = `\x1b[48;5;18m`;
exports._aad = `\x1b[48;5;19m`;
exports._aae = `\x1b[48;5;20m`;
exports._aaf = `\x1b[48;5;21m`;
exports._aba = `\x1b[48;5;22m`;
exports._abb = `\x1b[48;5;23m`;
exports._abc = `\x1b[48;5;24m`;
exports._abd = `\x1b[48;5;25m`;
exports._abe = `\x1b[48;5;26m`;
exports._abf = `\x1b[48;5;27m`;
exports._aca = `\x1b[48;5;28m`;
exports._acb = `\x1b[48;5;29m`;
exports._acc = `\x1b[48;5;30m`;
exports._acd = `\x1b[48;5;31m`;
exports._ace = `\x1b[48;5;32m`;
exports._acf = `\x1b[48;5;33m`;
exports._ada = `\x1b[48;5;34m`;
exports._adb = `\x1b[48;5;35m`;
exports._adc = `\x1b[48;5;36m`;
exports._add = `\x1b[48;5;37m`;
exports._ade = `\x1b[48;5;38m`;
exports._adf = `\x1b[48;5;39m`;
exports._aea = `\x1b[48;5;40m`;
exports._aeb = `\x1b[48;5;41m`;
exports._aec = `\x1b[48;5;42m`;
exports._aed = `\x1b[48;5;43m`;
exports._aee = `\x1b[48;5;44m`;
exports._aef = `\x1b[48;5;45m`;
exports._afa = `\x1b[48;5;46m`;
exports._afb = `\x1b[48;5;47m`;
exports._afc = `\x1b[48;5;48m`;
exports._afd = `\x1b[48;5;49m`;
exports._afe = `\x1b[48;5;50m`;
exports._aff = `\x1b[48;5;51m`;
exports._baa = `\x1b[48;5;52m`;
exports._bab = `\x1b[48;5;53m`;
exports._bac = `\x1b[48;5;54m`;
exports._bad = `\x1b[48;5;55m`;
exports._bae = `\x1b[48;5;56m`;
exports._baf = `\x1b[48;5;57m`;
exports._bba = `\x1b[48;5;58m`;
exports._bbb = `\x1b[48;5;59m`;
exports._bbc = `\x1b[48;5;60m`;
exports._bbd = `\x1b[48;5;61m`;
exports._bbe = `\x1b[48;5;62m`;
exports._bbf = `\x1b[48;5;63m`;
exports._bca = `\x1b[48;5;64m`;
exports._bcb = `\x1b[48;5;65m`;
exports._bcc = `\x1b[48;5;66m`;
exports._bcd = `\x1b[48;5;67m`;
exports._bce = `\x1b[48;5;68m`;
exports._bcf = `\x1b[48;5;69m`;
exports._bda = `\x1b[48;5;70m`;
exports._bdb = `\x1b[48;5;71m`;
exports._bdc = `\x1b[48;5;72m`;
exports._bdd = `\x1b[48;5;73m`;
exports._bde = `\x1b[48;5;74m`;
exports._bdf = `\x1b[48;5;75m`;
exports._bea = `\x1b[48;5;76m`;
exports._beb = `\x1b[48;5;77m`;
exports._bec = `\x1b[48;5;78m`;
exports._bed = `\x1b[48;5;79m`;
exports._bee = `\x1b[48;5;80m`;
exports._bef = `\x1b[48;5;81m`;
exports._bfa = `\x1b[48;5;82m`;
exports._bfb = `\x1b[48;5;83m`;
exports._bfc = `\x1b[48;5;84m`;
exports._bfd = `\x1b[48;5;85m`;
exports._bfe = `\x1b[48;5;86m`;
exports._bff = `\x1b[48;5;87m`;
exports._caa = `\x1b[48;5;88m`;
exports._cab = `\x1b[48;5;89m`;
exports._cac = `\x1b[48;5;90m`;
exports._cad = `\x1b[48;5;91m`;
exports._cae = `\x1b[48;5;92m`;
exports._caf = `\x1b[48;5;93m`;
exports._cba = `\x1b[48;5;94m`;
exports._cbb = `\x1b[48;5;95m`;
exports._cbc = `\x1b[48;5;96m`;
exports._cbd = `\x1b[48;5;97m`;
exports._cbe = `\x1b[48;5;98m`;
exports._cbf = `\x1b[48;5;99m`;
exports._cca = `\x1b[48;5;100m`;
exports._ccb = `\x1b[48;5;101m`;
exports._ccc = `\x1b[48;5;102m`;
exports._ccd = `\x1b[48;5;103m`;
exports._cce = `\x1b[48;5;104m`;
exports._ccf = `\x1b[48;5;105m`;
exports._cda = `\x1b[48;5;106m`;
exports._cdb = `\x1b[48;5;107m`;
exports._cdc = `\x1b[48;5;108m`;
exports._cdd = `\x1b[48;5;109m`;
exports._cde = `\x1b[48;5;110m`;
exports._cdf = `\x1b[48;5;111m`;
exports._cea = `\x1b[48;5;112m`;
exports._ceb = `\x1b[48;5;113m`;
exports._cec = `\x1b[48;5;114m`;
exports._ced = `\x1b[48;5;115m`;
exports._cee = `\x1b[48;5;116m`;
exports._cef = `\x1b[48;5;117m`;
exports._cfa = `\x1b[48;5;118m`;
exports._cfb = `\x1b[48;5;119m`;
exports._cfc = `\x1b[48;5;120m`;
exports._cfd = `\x1b[48;5;121m`;
exports._cfe = `\x1b[48;5;122m`;
exports._cff = `\x1b[48;5;123m`;
exports._daa = `\x1b[48;5;124m`;
exports._dab = `\x1b[48;5;125m`;
exports._dac = `\x1b[48;5;126m`;
exports._dad = `\x1b[48;5;127m`;
exports._dae = `\x1b[48;5;128m`;
exports._daf = `\x1b[48;5;129m`;
exports._dba = `\x1b[48;5;130m`;
exports._dbb = `\x1b[48;5;131m`;
exports._dbc = `\x1b[48;5;132m`;
exports._dbd = `\x1b[48;5;133m`;
exports._dbe = `\x1b[48;5;134m`;
exports._dbf = `\x1b[48;5;135m`;
exports._dca = `\x1b[48;5;136m`;
exports._dcb = `\x1b[48;5;137m`;
exports._dcc = `\x1b[48;5;138m`;
exports._dcd = `\x1b[48;5;139m`;
exports._dce = `\x1b[48;5;140m`;
exports._dcf = `\x1b[48;5;141m`;
exports._dda = `\x1b[48;5;142m`;
exports._ddb = `\x1b[48;5;143m`;
exports._ddc = `\x1b[48;5;144m`;
exports._ddd = `\x1b[48;5;145m`;
exports._dde = `\x1b[48;5;146m`;
exports._ddf = `\x1b[48;5;147m`;
exports._dea = `\x1b[48;5;148m`;
exports._deb = `\x1b[48;5;149m`;
exports._dec = `\x1b[48;5;150m`;
exports._ded = `\x1b[48;5;151m`;
exports._dee = `\x1b[48;5;152m`;
exports._def = `\x1b[48;5;153m`;
exports._dfa = `\x1b[48;5;154m`;
exports._dfb = `\x1b[48;5;155m`;
exports._dfc = `\x1b[48;5;156m`;
exports._dfd = `\x1b[48;5;157m`;
exports._dfe = `\x1b[48;5;158m`;
exports._dff = `\x1b[48;5;159m`;
exports._eaa = `\x1b[48;5;160m`;
exports._eab = `\x1b[48;5;161m`;
exports._eac = `\x1b[48;5;162m`;
exports._ead = `\x1b[48;5;163m`;
exports._eae = `\x1b[48;5;164m`;
exports._eaf = `\x1b[48;5;165m`;
exports._eba = `\x1b[48;5;166m`;
exports._ebb = `\x1b[48;5;167m`;
exports._ebc = `\x1b[48;5;168m`;
exports._ebd = `\x1b[48;5;169m`;
exports._ebe = `\x1b[48;5;170m`;
exports._ebf = `\x1b[48;5;171m`;
exports._eca = `\x1b[48;5;172m`;
exports._ecb = `\x1b[48;5;173m`;
exports._ecc = `\x1b[48;5;174m`;
exports._ecd = `\x1b[48;5;175m`;
exports._ece = `\x1b[48;5;176m`;
exports._ecf = `\x1b[48;5;177m`;
exports._eda = `\x1b[48;5;178m`;
exports._edb = `\x1b[48;5;179m`;
exports._edc = `\x1b[48;5;180m`;
exports._edd = `\x1b[48;5;181m`;
exports._ede = `\x1b[48;5;182m`;
exports._edf = `\x1b[48;5;183m`;
exports._eea = `\x1b[48;5;184m`;
exports._eeb = `\x1b[48;5;185m`;
exports._eec = `\x1b[48;5;186m`;
exports._eed = `\x1b[48;5;187m`;
exports._eee = `\x1b[48;5;188m`;
exports._eef = `\x1b[48;5;189m`;
exports._efa = `\x1b[48;5;190m`;
exports._efb = `\x1b[48;5;191m`;
exports._efc = `\x1b[48;5;192m`;
exports._efd = `\x1b[48;5;193m`;
exports._efe = `\x1b[48;5;194m`;
exports._eff = `\x1b[48;5;195m`;
exports._faa = `\x1b[48;5;196m`;
exports._fab = `\x1b[48;5;197m`;
exports._fac = `\x1b[48;5;198m`;
exports._fad = `\x1b[48;5;199m`;
exports._fae = `\x1b[48;5;200m`;
exports._faf = `\x1b[48;5;201m`;
exports._fba = `\x1b[48;5;202m`;
exports._fbb = `\x1b[48;5;203m`;
exports._fbc = `\x1b[48;5;204m`;
exports._fbd = `\x1b[48;5;205m`;
exports._fbe = `\x1b[48;5;206m`;
exports._fbf = `\x1b[48;5;207m`;
exports._fca = `\x1b[48;5;208m`;
exports._fcb = `\x1b[48;5;209m`;
exports._fcc = `\x1b[48;5;210m`;
exports._fcd = `\x1b[48;5;211m`;
exports._fce = `\x1b[48;5;212m`;
exports._fcf = `\x1b[48;5;213m`;
exports._fda = `\x1b[48;5;214m`;
exports._fdb = `\x1b[48;5;215m`;
exports._fdc = `\x1b[48;5;216m`;
exports._fdd = `\x1b[48;5;217m`;
exports._fde = `\x1b[48;5;218m`;
exports._fdf = `\x1b[48;5;219m`;
exports._fea = `\x1b[48;5;220m`;
exports._feb = `\x1b[48;5;221m`;
exports._fec = `\x1b[48;5;222m`;
exports._fed = `\x1b[48;5;223m`;
exports._fee = `\x1b[48;5;224m`;
exports._fef = `\x1b[48;5;225m`;
exports._ffa = `\x1b[48;5;226m`;
exports._ffb = `\x1b[48;5;227m`;
exports._ffc = `\x1b[48;5;228m`;
exports._ffd = `\x1b[48;5;229m`;
exports._ffe = `\x1b[48;5;230m`;
exports._fff = `\x1b[48;5;231m`;

//Background Greyscale
exports._a = `\x1b[48;5;232m`;
exports._b = `\x1b[48;5;233m`;
exports._c = `\x1b[48;5;234m`;
exports._d = `\x1b[48;5;235m`;
exports._e = `\x1b[48;5;236m`;
exports._f = `\x1b[48;5;237m`;
exports._g = `\x1b[48;5;238m`;
exports._h = `\x1b[48;5;239m`;
exports._i = `\x1b[48;5;240m`;
exports._j = `\x1b[48;5;241m`;
exports._k = `\x1b[48;5;242m`;
exports._l = `\x1b[48;5;243m`;
exports._m = `\x1b[48;5;244m`;
exports._n = `\x1b[48;5;245m`;
exports._o = `\x1b[48;5;246m`;
exports._p = `\x1b[48;5;247m`;
exports._q = `\x1b[48;5;248m`;
exports._r = `\x1b[48;5;249m`;
exports._s = `\x1b[48;5;250m`;
exports._t = `\x1b[48;5;251m`;
exports._u = `\x1b[48;5;252m`;
exports._v = `\x1b[48;5;253m`;
exports._w = `\x1b[48;5;254m`;
exports._x = `\x1b[48;5;255m`;

//Reset colors
exports.rr = `\x1b[36;0m`;


exports.bold = `\x1b[1m`;
exports.faint = `\x1b[2m`;
exports.italic = `\x1b[3m`;
exports.underline = `\x1b[4m`;


exports.a0 = `\x1b[30m`;
exports.a1 = `\x1b[31m`;
exports.a2 = `\x1b[32m`;
exports.a3 = `\x1b[33m`;
exports.a4 = `\x1b[34m`;
exports.a5 = `\x1b[35m`;
exports.a6 = `\x1b[36m`;
exports.a7 = `\x1b[37m`;
exports.a8 = `\x1b[90m`;
exports.a9 = `\x1b[91m`;
exports.a10 = `\x1b[92m`;
exports.a11 = `\x1b[93m`;
exports.a12 = `\x1b[94m`;
exports.a13 = `\x1b[95m`;
exports.a14 = `\x1b[96m`;
exports.a15 = `\x1b[97m`;


exports._a0 = `\x1b[40m`;
exports._a1 = `\x1b[41m`;
exports._a2 = `\x1b[42m`;
exports._a3 = `\x1b[43m`;
exports._a4 = `\x1b[44m`;
exports._a5 = `\x1b[45m`;
exports._a6 = `\x1b[46m`;
exports._a7 = `\x1b[47m`;
exports._a8 = `\x1b[100m`;
exports._a9 = `\x1b[101m`;
exports._a10 = `\x1b[102m`;
exports._a11 = `\x1b[103m`;
exports._a12 = `\x1b[104m`;
exports._a13 = `\x1b[105m`;
exports._a14 = `\x1b[106m`;
exports._a15 = `\x1b[107m`;


/*
1	Bold or increased intensity	As with faint, the color change is a PC (SCO / CGA) invention.[26][better source needed]
2	Faint, decreased intensity, or dim	May be implemented as a light font weight like bold.[27]
3	Italic	Not widely supported. Sometimes treated as inverse or blink.[26]
4	Underline


30	40	Black	0, 0, 0	12, 12, 12	0, 0, 0	1, 1, 1	0, 0, 0
31	41	Red	196, 0, 0	128, 0, 0	205, 49, 49	197, 15, 31	153, 0, 0	187, 0, 0	127, 0, 0	205, 0, 0	222, 56, 43	205, 0, 0
32	42	Green	0, 196, 0	0, 128, 0	13, 188, 121	19, 161, 14	0, 166, 0	0, 187, 0	0, 147, 0	0, 205, 0	57, 181, 74	0, 205, 0
33	43	Yellow	196, 126, 0	128, 128, 0	238, 237, 240	229, 229, 16	193, 156, 0	153, 153, 0	187, 187, 0	252, 127, 0	205, 205, 0	255, 199, 6	205, 205, 0
34	44	Blue	0, 0, 196	0, 0, 128	36, 114, 200	0, 55, 218	0, 0, 178	0, 0, 187	0, 0, 127	0, 0, 238[34]	0, 111, 184	0, 0, 238
35	45	Magenta	196, 0, 196	128, 0, 128	1, 36, 86	188, 63, 188	136, 23, 152	178, 0, 178	187, 0, 187	156, 0, 156	205, 0, 205	118, 38, 113	205, 0, 205
36	46	Cyan	0, 196, 196	0, 128, 128	17, 168, 205	58, 150, 221	0, 166, 178	0, 187, 187	0, 147, 147	0, 205, 205	44, 181, 233	0, 205, 205
37	47	White	196, 196, 196	192, 192, 192	229, 229, 229	204, 204, 204	191, 191, 191	187, 187, 187	210, 210, 210	229, 229, 229	204, 204, 204	229, 229, 229
90	100	Bright Black (Gray)	78, 78, 78	128, 128, 128	102, 102, 102	118, 118, 118	102, 102, 102	85, 85, 85	127, 127, 127	127, 127, 127	128, 128, 128	0, 0, 0
91	101	Bright Red	220, 78, 78	255, 0, 0	241, 76, 76	231, 72, 86	230, 0, 0	255, 85, 85	255, 0, 0
92	102	Bright Green	78, 220, 78	0, 255, 0	35, 209, 139	22, 198, 12	0, 217, 0	85, 255, 85	0, 252, 0	0, 255, 0
93	103	Bright Yellow	243, 243, 78	255, 255, 0	245, 245, 67	249, 241, 165	230, 230, 0	255, 255, 85	255, 255, 0
94	104	Bright Blue	78, 78, 220	0, 0, 255	59, 142, 234	59, 120, 255	0, 0, 255	85, 85, 255	0, 0, 252	92, 92, 255[35]	0, 0, 255	92, 92, 255
95	105	Bright Magenta	243, 78, 243	255, 0, 255	214, 112, 214	180, 0, 158	230, 0, 230	255, 85, 255	255, 0, 255
96	106	Bright Cyan	78, 243, 243	0, 255, 255	41, 184, 219	97, 214, 214	0, 230, 230	85, 255, 255	0, 255, 255
97	107	Bright White	255, 255, 255	229, 229, 229	242, 242, 242	230, 230, 230	255, 255, 255

*/