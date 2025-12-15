/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];

    const paths = path.split("/");

    for (const path of paths) {
        if (path === "" || path === ".") continue;

        if (path === "..") {
            stack.pop();
        } else {
            stack.push(path);
        }
    }

    return "/" + stack.join("/");
};