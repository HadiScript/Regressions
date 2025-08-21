here we will have two or more independent variable means x

const studyHrs = [1, 2, 3, 4, 5];
const sleepHrs = [6, 2, 1, 5, 7];
const score = [60, 55, 50, 70, 85];


EXAMPLE for two x

y = b0 + b1x1 + b2x2 + e

FIRST STEP

Using Matrix 

Input values will be in one matric and Y in other
but in input values we will B as 1 in first column

[ [ 1, 1, 6 ], [ 1, 2, 2 ], [ 1, 3, 1 ], [ 1, 4, 5 ], [ 1, 5, 7 ] ] x [60, 55, 50, 70, 85]

SECOND STEP
xT . x => x Transform multiply by x
xT is transform matrix means column will become row


    1 1 6
    1 2 2
x = 1 3 1
    1 4 5
    1 5 7

    1 1 1 1 1
xT= 1 2 3 4 5 
    6 2 1 5 7

      5   15   21
xTx = 15  55   68
      21  68   115


THIRD STEP

xT.y = 
   
    1 1 1 1 1     60
    1 2 3 4 5  x  55
    6 2 1 5 7     50
                  70
                  85

   
    =
 
    320
    1025
    1464


FOURTH STEP


B = (xTx)^-1 . xTy
// (xTx)^-1 inserve 

      5   15   21
xTx = 15  55   68
      21  68   115

Now we need to inserse this
   

               1
(xTx)^-1 = ---------- . adjugate(xTx)
            det(xTx) 



For Example: 

a =  a b   = det (a) = ad - cb   (for determinant multiply diagonals) 
     c d     

| a  b  c |
| d  e  f |  =  det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
| g  h  i |


Alternative methods:

Rule of Sarrus: Write the first two columns again to the right, then calculate products of diagonals
LU decomposition: For larger matrices or computational efficiency
Row operations: Reduce to upper triangular form and multiply diagonal elements

The determinant tells you if the matrix is invertible (non-zero determinant) and can represent scaling factors in geometric transformations.

Cofactor expension: 

A = 
| a  b  c |
| d  e  f | 
| g  h  i |

det (A) = a.det e f  - b.det a f  + c.det d e
                h i          g i          g h


        = a (ei -fh) - b(ai - fg) + c(dh - eg) :. same as above

remember;
      5   15   21
xTx = 15  55   68
      21  68   115


det(xTx) =  5(55.115 - 68.68) - 15(15.115 - 68.21) + 21 (15.68 - 55.21)
         =  1215

1/det(xTx) = 1/1215 


NOW:  adjugate(xTx)

Example
C = | C₁₁  C₁₂  C₁₃ |
    | C₂₁  C₂₂  C₂₃ |
    | C₃₁  C₃₂  C₃₃ |


 c11 = (-1)^ r+c . (c22.c33 - c23.c32)
     = (-1)^ 1+1 . (c22.c33 - c23.c32)     
     = (-1)^ 2 . (c22.c33 - c23.c32)

  c12 = -1 ^ 3 . C₂₁C₃₃ - C₂₃C₃₁        

  so on...


now for real
            5   15   21
Adj (xTx) = 15  55   68
            21  68   115

c11 = 55.115-68.68 = 6325 = 1701  
c12 = -297
c13 = -135
c21 = -297
c22 = 134
c23 = -25
c31 = -135
c32 = -25
c33 = 50



C =  | 1701  -297  -135 |
     | -297   134    25 |
     | -135   -25    50 |

adj(xTx) = cT
         = | 1701  -297  -135 |
           | -297   134    25 |
           | -135   -25    50 |

1/det(xTx) = 1/1215 


(xTx)^-1 = 1/1215 . | 1701  -297  -135 |
                    | -297   134    25 |
                    | -135   -25    50 |

        
        = | 1701/1215  -297/1215  -135/1215 |
          | -297/1215   134/1215    25/1215 |
          | -135/1215   -25/1215    50/1215 |




B = (xTx)^-1 . xTy = 
| 1701/1215  -297/1215  -135/1215 |   |320 |
| -297/1215   134/1215    25/1215 | x |1025|
| -135/1215   -25/1215    50/1215 |   |1464|


B = |  34.67 | = | B0 |
    |  4.68  |   | B1 |
    |  3.64  |   | B2 |


FINAL FORMULA

Y = X.B + e

y =  B0 + b1x1 + b2x2 

for example 

x1=3, x2=7 now predict Y

y = 34.67 + 4.68 x 3 + 7x 3.64
y = scrore will be 74.19