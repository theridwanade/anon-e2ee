import {bgBrightBlack} from "https://deno.land/std@0.224.0/fmt/colors.ts"
import {input} from "@libs/cli-utils";
import {generateKeyPair} from "@libs/crypto";
(async function main () {
    console.log(`Welcome to ${bgBrightBlack(" Anon-e2ee ")} CLI`);
    while (true) {
        console.log("1. Create a new key pair <Enter 1 to create new key pair>");
        console.log("2. Exit <Enter 2 to exit>");
        const choice = await input("> ");
        if (choice === "1") {
            console.log("Creating new key pair...");
            console.log("Key pair created");
            console.log(await generateKeyPair());
        } else if (choice === "2") {
            console.log("Exiting...");
            break;
        } else {
            console.log("Invalid choice");
        }
    }
})();