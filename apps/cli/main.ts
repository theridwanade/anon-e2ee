import {input} from "@libs/cli-utils";

const main = async () => {
    const a = await  input("What's your name? ");
    console.log(`Hello, ${a}!`);
}
main();