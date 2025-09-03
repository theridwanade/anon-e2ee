class KeyPair {
    publicKey: string | CryptoKey;
    privateKey: string | CryptoKey;

    constructor() {
        this.publicKey = null;
        this.privateKey = null;
    }

    newKeys = async () => {
        const keyPair = await crypto.subtle.generateKey(
            {name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt"],
        )

        this.publicKey = keyPair.publicKey;
        this.privateKey = keyPair.privateKey;
    }


}

export {KeyPair};