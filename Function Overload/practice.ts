//Function Overloading

function createDate(timeStamp: number): Date;
function createDate(day: number, month: number, year: number): Date;

function createDate(dayOrTimeStamp: number, month?: number, year?: number) {
    return month === undefined || year === undefined
    ? new Date(dayOrTimeStamp)
    : new Date(year, month, dayOrTimeStamp);
}