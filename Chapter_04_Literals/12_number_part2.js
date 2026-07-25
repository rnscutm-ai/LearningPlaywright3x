// 3. Numeric separators

let billion = 1_000_000_000; // 1 billion

let million = 1_000_000; // 1 million
let binarySeparator = 0b1010_0001_1000_0101; // binary number with separators
let hexSeparator = 0xA0_B0_C0; // hexadecimal number with separators
 console.log(billion); // Output: 1000000000
 console.log(million); // Output: 1000000
 console.log(binarySeparator); // Output: 16805
 console.log(hexSeparator); // Output: 1056720

 //bigint literals
 let bigIntLiteral = 1234567890123456789012345678901234567890n;
 let anotherBigIntLiteral = 0x1fffffffffffffn; // hexadecimal bigint literal
 console.log(bigIntLiteral);
 console.log(anotherBigIntLiteral);

 // special numeric values
 let positiveInfinity = Infinity;
 let negativeInfinity = -Infinity;
 let notANumber = NaN;
 console.log(positiveInfinity);
 console.log(negativeInfinity);
 console.log(notANumber);
 