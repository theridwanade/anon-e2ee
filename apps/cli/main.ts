import {generateKeyPair} from "@libs/crypto";

(async function main () {
    console.log((await generateKeyPair()).privateKeyPEM);
})();