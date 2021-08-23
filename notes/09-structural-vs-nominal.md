# 09 :: Structural VS. Nominal Types

> Notes/Talking Points

* stepping back, how do we categorize type systems? static/dynamic/duck/etc.
  * what does it all mean, and what is TS
* type-checking is answering a question, "what is this thing"
  * eval the question of compatibility or type equivalence
  * it's a comparison -- when using function `foo`, does what we're passing in meet the expectations of that function? 
  * applies when assigning variables, passing arguments, on return types, etc.
  
## Different Type Systems

* static VS. dynamic
  * *static* type systems have you write types right in your code
    * Java
    * C++
    * C#
    * Python with type-hints'ish (not much enforcement)
    * TypeScript!
  * *dynamic* type systems perform type equivalence checks at runtime
    * no type declarations in code, simply a declared variable. `let myVar = 'my val';`
* nominal VS. structural
  * TS is structural but just about every other lang is nominal
  * *nominal* systems are all about names
    * type check basically asks, "Did `thisThing` come from a constructor named `thatThing`?"
    * everything is all about the name of your class
    * not great for JS, because a whole slew of data structures out there that aren't constructor-/class-based
  * *structural* type systems are all about shape
    * using the car example, structural type checks only care about if you have `make`, `model`, and `year` props
    * could be a class instance, simple object, a function with properties hanging off of it, whatever
  * *duck* typing gets its name from the duck-test (looks like/walks like/quacks like)
    * close neighbor to dynamic typing
    * just care about what you need; no concern if came from a class or is an object literal
* strong VS. weak types
  * not really consensus on using these words to describe languages ... mostly internet discussion fodder
  * when people say *strong* types they usually mean static
  * when people say *weak* types they usually mean dynamic
