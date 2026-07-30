
let text = $state('');

export function getToastText() {
    return text;
}

export function setToastText(value) {
    text = value;
}