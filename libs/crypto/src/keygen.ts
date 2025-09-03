const keyPair = await crypto.subtle.generateKey(
    {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
);

const generateKeyPair = async () => {

    function toPEM(keyData: ArrayBuffer, type: "PUBLIC" | "PRIVATE") {
        const base64 = btoa(String.fromCharCode(...new Uint8Array(keyData)));
        const lines = base64.match(/.{1,64}/g)?.join("\n");
        return `-----BEGIN ${type} KEY-----\n${lines}\n-----END ${type} KEY-----`;
    }

    const publicKeyData = await crypto.subtle.exportKey("spki", keyPair.publicKey);
    const privateKeyData = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

    const publicKeyPEM = toPEM(publicKeyData, "PUBLIC");
    const privateKeyPEM = toPEM(privateKeyData, "PRIVATE");

    return {
        publicKeyPEM,
        privateKeyPEM
    }
};

export default generateKeyPair;