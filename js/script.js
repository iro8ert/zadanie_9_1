function getTriangleArea(a, h) {
	if (a > 0, h > 0) {
		return  a * h / 2
	}
	else {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangleArea(10, 6));

var getTriangle1Area = getTriangleArea(10, 15);
var getTriangle2Area = getTriangleArea(20, 18);
var getTriangle3Area = getTriangleArea(0, 0);

console.log(getTriangle1Area);
console.log(getTriangle2Area);
console.log(getTriangle3Area); //tutaj będzie użycie ELSE z function getTriangleArea