export const encrypt = async (text: string, publicKey: CryptoKey) => {
    const encryptedText = await crypto.subtle.encrypt(
        {name: "RSA-OAEP"},
        publicKey,
        strToArrayBuffer(text),
    )
    return btoa(String.fromCharCode(...new Uint8Array(encryptedText)));
};

const strToArrayBuffer = (str: string) => {
    return new TextEncoder().encode(str);
}
