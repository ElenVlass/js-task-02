/* #7/mod 5*/
function StringBuilder (baseValue) {
  this.value = baseValue;
  };
  StringBuilder.prototype.getValue = function () {
  return this.value;};
  StringBuilder.prototype.padEnd = function (str) {
    return this.value += str;}
    StringBuilder.prototype.padStart = function (str) {
      return this.value = str + this.value;}
      StringBuilder.prototype.padBoth = function (str) {
        return this.value = str + this.value + str;}
  // Пиши код выше этой строки
  const builder = new StringBuilder('.');
  console.log(builder.getValue()); // '.'
  builder.padStart('^');
  console.log(builder.getValue()); // '
  builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='