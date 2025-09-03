const strToArrayBuffer = (str: string) => {
    return new TextEncoder().encode(str);
}

const arrayBufferToStr = async (buffer: ArrayBuffer) => {
    return new TextDecoder().decode(buffer);
}

export const encrypt = async (text: string, publicKey: CryptoKey) => {
    const encryptedText = await crypto.subtle.encrypt(
        {name: "RSA-OAEP"},
        publicKey,
        strToArrayBuffer(text),
    )
    return btoa(String.fromCharCode(...new Uint8Array(encryptedText)));
};

const base64toArrayBuffer = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export const decrypt = async (cipherText: string, privateKey: CryptoKey) => {
    const decrypted = await crypto.subtle.decrypt(
        {name: "RSA-OAEP"},
        privateKey,
        base64toArrayBuffer(cipherText)
    );

    return await arrayBufferToStr(decrypted);
}
