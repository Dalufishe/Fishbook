export function returnFileSize(number) {
    if (number < 1024) {
        return `${number} bytes`;
    } if (number > 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`;
    } if (number > 1048576) {
        return `${(number / 1048576).toFixed(1)} MB`;
    }
}