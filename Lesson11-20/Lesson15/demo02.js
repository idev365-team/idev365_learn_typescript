function padLeft(value, padding) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number,got " + padding + ".");
}
console.log("1234567890");
console.log(padLeft("Hello World", true));