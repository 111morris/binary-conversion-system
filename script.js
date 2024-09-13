selectFrom = document.querySelector('#selectFrom');
selectTo = document.querySelector('#selectTo');
convertBtn = document.querySelector('#convertBtn');
inputFrom = document.querySelector('#inputFrom');
output = document.querySelector('#output');

convertBtn.addEventListener('click', () => {
 if (selectFrom.value === 'Decimal') {
  if (selectTo.value === 'Binary') {

   convBinOct(inputFrom.value, 2);

  } else if (selectTo.value === 'Octadecimal') {

   convBinOct(inputFrom.value, 8);
   
  } else if (selectTo.value === 'Hexadecimal') {

   hex(inputFrom.value, 16);

  }
 } else if (selectFrom.value === 'Binary') {
  if (selectTo.value === 'Decimal') {
   console.log('this value is been converted from binary to decimal ');

  } else if (selectTo.value === 'Octadecimal') {
   console.log('this value is been converted from binary to Octaldecimal ');
  } else if (selectTo.value === 'Hexadecimal') {
   console.log('this value is been converted from binary to hexadecimal')
  }
 } else if (selectFrom.value === 'Octadecimal') {
  if (selectTo.value === 'Decimal') {
   console.log('this value is been converted from octadecimal to decimal ');

  } else if (selectTo.value === 'Binary') {
   console.log('this value is been converted from Octaldecimal to binary');
  } else if (selectTo.value === 'Hexadecimal') {
   console.log('this value is been converted from octaldecimal to hexadecimal')
  }
 } else {
  if (selectTo.value === 'Decimal') {
   console.log('this value is been converted from hex to decimal ');

  } else if (selectTo.value === 'Binary') {
   console.log('this value is been converted from hex to binary');
  } else if (selectTo.value === 'Octadecimal') {
   console.log('this value is been converted from hex to octadecimal')
  }
 }
})


function convBinOct(decimal, radix) {
 if (decimal === 0) return '0'; // Handle the case for 0 specifically

 let binary = ''; // String to store the binary result

 while (decimal > 0) {
  // Get the remainder when dividing by 2 (binary digit)
  const remainder = decimal % radix;
  // Prepend the remainder to the binary result
  binary = remainder + binary;
  // Perform integer division by 2 to move to the next bit
  decimal = Math.floor(decimal / radix);
 }
 output.value = binary;
}

function hex(decimal, radix) {
 if (decimal === 0) return '0'; // Handle the case for 0 specifically

 const hexDigits = '0123456789ABCDEF'; // Possible hexadecimal digits
 let hex = ''; // String to store the hex result

 while (decimal > 0) {
  const remainder = decimal % radix; // Get the remainder when dividing by 16
  hex = hexDigits[remainder] + hex; // Prepend the corresponding hex digit
  decimal = Math.floor(decimal / radix); // Perform integer division by 16
 }
 output.value = hex;
}
