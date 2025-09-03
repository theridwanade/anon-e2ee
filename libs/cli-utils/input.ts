export const input = async (question: string): Promise<string> => {
    await Deno.stdout.write(new TextEncoder().encode(question));
    const buf = new Uint8Array(1024);
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
};
