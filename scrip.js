function convertToArabicNumber() {
  var input = document.getElementById("phone");
  var input1 = document.getElementById("price");
  var input2 = document.getElementById("quantity");
  var inputValue = input.value;
  var inputValue1 = input1.value;
  var inputValue2 = input2.value;
  var arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  for (var i = 0; i < 10; i++) {
    var englishDigit = i.toString();
    var arabicDigit = arabicDigits[i];
    var regex = new RegExp(englishDigit, "g");
    inputValue = inputValue.replace(regex, arabicDigit);
    inputValue1 = inputValue1.replace(regex, arabicDigit);
    inputValue2 = inputValue2.replace(regex, arabicDigit);
  }

  input.value = inputValue;
  input1.value = inputValue1;
  input2.value = inputValue2;
}
function printForm() {
  var productName = document.getElementById("product").value;
  var productPrice = document.getElementById("price").value;
  var productQuantity = document.getElementById("quantity").value;
  var Phone = document.getElementById("phone").value;

  var printContent = `
    اسم المنتج: ${productName}
    السعر: ${productPrice} ريال
    الكمية: ${productQuantity} قطعة
    رقم الهاتف: ${Phone} 
  `;

  var printWindow = window.open("", "_blank");
  printWindow.document.write(
    "<html><head><title>تفاصيل المنتج</title></head><body>"
  );
  printWindow.document.write("<pre>" + printContent + "</pre>");
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
}
