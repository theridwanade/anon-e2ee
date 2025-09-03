import {bgBrightBlack} from "https://deno.land/std@0.224.0/fmt/colors.ts"
import {input} from "@libs/cli-utils";
import {KeyPair} from "@libs/crypto";
(async function main () {
    console.log(`Welcome to ${bgBrightBlack(" Anon-e2ee ")} CLI`);
    while (true) {
        console.log("1. Create a new key pair <Enter 1 to create new key pair>");
        console.log("2. Encrypt a message <Enter 2 to encrypt a message>");
        console.log("3. Decrypt a ciphertext <Enter 3 to decrypt a ciphertext>");
        console.log("4. Exit <Enter 4 to exit>");
        const choice = await input("> ");
        if (choice === "1") {
            console.log("Creating new key pair...");
            console.log("Key pair created");
            const keys = new KeyPair();
            await keys.newKeys();
            console.log(keys);
        } else if (choice === "2") {
            const message = await input("Enter message to encrypt: ");
            const publicKeyPEM = await input("Enter public key: ");
        } else if (choice === "3") {
            console.log("Decrypting...");
        } else if (choice === "4") {
            console.log("Exiting...");
            break;
        } else {
            console.log("Invalid choice");
        }
    }
})();