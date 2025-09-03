import {green} from "https://deno.land/std@0.224.0/fmt/colors.ts";
const input = async (question: string): Promise<string> => {
    await Deno.stdout.write(new TextEncoder().encode(question));
    const buf = new Uint8Array(1024);
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
};

async function main() {
    console.log(green("Welcome to anon-e2ee-chat!"));
    console.log("Basic Encryption/Decryption Demo");
    console.log("Type 'exit' to quit.");
    console.log("1. New user <Enter 1 to create a new user>");
    const choice = await input("> ");
    if (choice === "1") {
        console.log("New user created!");
    }
}

main();
