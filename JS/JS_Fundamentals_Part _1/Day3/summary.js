let , var , const
---------------
Why we use vars?
=> They re used to store date
1]automatically 
2]var
3]let
4]const
-----------------------------------------------------------------------------

The let keyword was introduced in ES6 (2015)

Variables defined with let cannot be Redeclared
 
Variables defined with let must be Declared before use

Variables defined with let have Block Scope
-----------------------------------------------------------------------------
Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
-----------------------------------------------------------------------------

Difference Between var, let and const
**************************************
Scope    	Redeclare	Reassign	Hoisted	  Binds   this
var	        No	        Yes	        Yes	      Yes	  Yes
let	        Yes	        No	        Yes	      No	  No
const   	Yes	        No	        No	      No	  No


What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.



When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

Basic operators
---------------


+,-,/,*

>,< , =
++
--

Operator precedence
------------------

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

