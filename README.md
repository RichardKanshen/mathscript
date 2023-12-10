# mathscript
mathscript is a javascript library for converting simple mathscript expressions into MathML HTML elements.

---
this is originally a school project for maths class, and it is going to be far from perfect for a long time. i will try to keep maintaining this script, but i cannot guarantee updates until the end of time :)
thanks for understanding!

## how to import
**import in html <script>**

```<script src="https://cdn.jsdelivr.net/gh/RichardKanshen/mathscript/mathscript.js"></script>```

---
## how to use
### basic operations
`25 + 17 - 8`  ›››  <math><mn>25</mn> <mo>+</mo> <mn>17</mn> <mo>-</mo> <mn>8</mn></math><br>
`50 / 4 * 6` or `50 ÷ 4 × 6`  ›››  <math><mn>50</mn> <mo>÷</mo> <mn>4</mn> <mo>×</mo> <mn>6</mn></math>
### variables
`a + 3`  ›››  <math><mi>a</mi> <mo>+</mo> <mn>3</mn></math><br>
`b - 25`  ›››  <math><mi>b</mi> <mo>-</mo> <mn>25</mn></math>
### brackets
`(10 + 3) * 5` or `(10 + 3) × 5`  ›››  <math><mrow><mo>(</mo><mn>10</mn> <mo>+</mo> <mn>3</mn><mo>)</mo></mrow> <mo>×</mo> <mn>5</mn></math><br>
`((8 - 4) / (6 + 2))` or `((8 - 4) ÷ (6 + 2))`  ›››  <math><mrow><mo>(</mo><mrow><mo>(</mo><mn>8</mn> <mo>-</mo> <mn>4</mn><mo>)</mo></mrow> <mo>÷</mo> <mrow><mo>(</mo><mn>6</mn> <mo>+</mo> <mn>2</mn><mo>)</mo></mrow><mo>)</mo></mrow></math>
### fractions
`FRAC{3:FRAC:5}FRAC + FRAC{1:FRAC:2}FRAC`  ›››  ![richard kanshen click_mathscript_ (3)](https://github.com/RichardKanshen/mathscript/assets/73738591/e1937dd7-6dcc-4c22-8bd6-6975a3fad4bf)<br>
`FRAC{7:FRAC:4}FRAC - FRAC{2:FRAC:3}FRAC`  ›››  ![richard kanshen click_mathscript_ (4)](https://github.com/RichardKanshen/mathscript/assets/73738591/568030c1-8398-46af-9f6f-7ea3e3832901)<br>
### roots
`ROOT{2:ROOT:64}ROOT + ROOT{3:ROOT:125}ROOT`  ›››  ![richard kanshen click_mathscript_ (5)](https://github.com/RichardKanshen/mathscript/assets/73738591/9a7deea5-e99e-454d-95c0-1aa77d1766bf)<br>
`ROOT{4:ROOT:256}ROOT - ROOT{5:ROOT:243}ROOT`  ›››  ![richard kanshen click_mathscript_ (6)](https://github.com/RichardKanshen/mathscript/assets/73738591/6f444f60-3139-4a94-b709-324571554552)<br>
### powers
`POW{m:POW:3}POW`  ›››  ![richard kanshen click_mathscript_ (7)](https://github.com/RichardKanshen/mathscript/assets/73738591/2b6b9fe2-264e-4507-bc06-c90ab25aea53)<br>
`POW{x:POW:5}POW`  ›››  ![richard kanshen click_mathscript_ (8)](https://github.com/RichardKanshen/mathscript/assets/73738591/5d759301-3f92-49b9-9a6b-83e2e7e00e5a)<br>
# usage example:
![richard kanshen click_mathscript_ (9)](https://github.com/RichardKanshen/mathscript/assets/73738591/605219c7-0d64-4306-ab8e-49e5e0e4edb6)<br>
`FRAC{2:FRAC:(ROOT{3:ROOT:POW{(a + 3):POW:2}POW}ROOT * 5)}FRAC - (b - 4) / 2`<br><br>
![richard kanshen click_mathscript_ (10)](https://github.com/RichardKanshen/mathscript/assets/73738591/a1e9b474-5421-4391-bb48-cfb239042c55)<br>
`FRAC{POW{(a + 2):POW:2}POW:FRAC:ROOT{4:ROOT:9}}FRAC - 3 * (b - 5) / 2`<br>
