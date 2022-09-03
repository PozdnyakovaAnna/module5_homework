let x = 1;
const result = typeof(x);
alert (result);
switch (result) {
    case "number":
        console.log('х = число');
        break;
    case "string":
        console.log('х = строка');
        break;
    case "boolean":
        console.log('x = логический тип');
        break;
    default:
        console.log('Тип x не определён');
}
