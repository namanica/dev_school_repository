function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let encodeStr = '';
        for ( let i = 0; i < str.length; i++) {
            let str_symbol = str[i];
            let key_symbol = key[i % key.length];
            if (abc.indexOf(str_symbol) >= 0) {
                encodeStr += abc[(abc.indexOf(str_symbol) + abc.indexOf(key_symbol)) % abc.length];
            }
            else encodeStr += str_symbol;
        }
        return encodeStr;
    };
    this.decode = function (str) {
        let decodeStr = '';
        for (let i = 0; i < str.length; i++) {
            let str_symbol = str[i];
            let key_symbol = key[i % key.length];
            if (abc.indexOf(str_symbol) >= 0) {
                let index = (abc.indexOf(str_symbol) + abc.length - abc.indexOf(key_symbol)) % abc.length;
                let char = abc[index];
                decodeStr += char;
            }
            else decodeStr += str_symbol;
        }
        return decodeStr;
    };
}