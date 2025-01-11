# Key points


## VALUES TYPES AND OPERATORS

- Any Information can be reduced into zeros and ones therefore can be represented as bits
- Calculations on whole numbers(integers) are guaranted to be precised but fractions are generally not so. It is advisable to treat fractions as approximations rather than precise values.
- Values in Javascripts can be combined and transformed by the use of operators. These operators are of four types.

* Unary Operator(typeOf,!)
* Binary Operator(+, -,\*,/)
* tenary Operator(?:)
* Logical Operator(&&,||,??)

-Strings, which are texts in javascript also needs to be modeled by bits in order for them to exist inside the computer's memory.The way this is done is through the unicode standard of the text.unicode standard assigns numbers to every character in the world

-When comparing strings in javascript, javascript compares the characters of the text from left to right using their unicode codes one by one

-The only value in javascript that is not equal to itself is NaN

- Logical operators are operators used to perform operations on boolean value

-Type Coercion is concept in javascript where by javascript gives a type to a value that it thinks it needs when two values to be transformed are of different types.

-To prevent unneccessary type coercion, the use of three character comparison is your way to go.(=== or !==)

-In short circuiting logical operators, the || (or) operator will return the value to its left when that value can be converted to true and it will also return the value to right when that value can be converted to true.

- the rule for converting strings and numbers to boolean values states that empty string(""),0,NaN all count as false while the rest values are true.

- The nullish concealing operator (??) in short circuiting will return the value to its left if the value on its right is a null or Undefined else the right.

- The And (&&) operator in short circuiting works similarly to the || (or) operator but for this operator, it will return the value that can be converted to false

