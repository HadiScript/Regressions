y = b + mx

Equation for line and also for simple linear regression with one parameter/independent variables/feature

- y is the predicted value, dependent variable
- x is the input feature, independent variable
- m is the slope (weight) of the line,
- b is the y-intercept, when independent variable is 0.

Solve each for x = 0; x = 1; x = 2;

y = 1x + 1
y = 2x + 1
y = 3x + 1

y = β0 ​+ β1​x

- y is the predicted value, dependent variable
- x is the input feature, independent variable
- β1 is the slope (weight) of the line,
- β0 is the y-intercept, when independent variable is 0.

### simple linear regressions steps

Equation is
y = mx + b
or
y = β0 ​+ β1​x

# step 1-
# means of x and y
 
means of x = 3
means of y = 76

# step 2-
# calculate the slop --- Donated by B1 or m
B1= b₁ = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)²

in our example slop is -> 8.5
SLOP means --- lets say at one point x value is 50 and 1 step further x value would be 58.5 cause our slop is 8.5

# Step 3-
#  calculation of Y intercept β0
y = β0 ​+ β1​x
y -  β1​x = β0
so
β0 = y -  β1​x
   = 76 - 8.5 (3)
   = 76 - 25.5
   = 50.5


# now values are
means of x = 3
         y = 76   

Slop B1 = 8.5
Y Intercept B0 = 50.5 



y = β0 ​+ β1​x
y = 50.5 + 8.5 (x)

now need put X and will get Y

First 
y = 50.5 (x is zero so slop will be zero --> remember Y intercep when x is 0)

x = 0, y = 50.5
x = 1, y = 50.5 + 8.5 (1) = 59
and so on


## HOW OUR MODEL IS?

# Residuals (diff between actual and predicted values)
e = y - ŷ
acutal output (labeled) - predicted output (ŷᵢ)

eᵢ = yᵢ - ŷᵢ
eᵢ = yᵢ - b₀ - b₁xᵢ


# R-squared --- How well the independent variables predict the dependent variables
ranges from 0-1
1 --- indicates perfect prediction. Can be misleading high in models with many vairables.

R² = 1 - SSE/TSS
   = 1 - Sum of squre residuals / sum of squre
   = 1 - all sum (yᵢ - ŷᵢ)^2 / all sum squre of (y - avg of y) ^ 2


# MAE (Mean Absolute Error)
The Mean Absolute Error is a measure of differences between paired observations.

is particularly useful when you need a robust measure that can stand out outliers, i.e., few large errors will not skew the result too much, making it more reliable when the data contains many outliers.


MAE = 1/n sum (i=0, n) | yi - ŷ | 
i:e |-9| = 9

Example : MAE is 2.8 which indicates that on average, the model prediction deviate from the actual source by 2.8 points
 


# MSE
MSE measures the average of the squares of the errors—that is, the average squared difference between the estimated values and the actual value.

MSE = 1/n sum (i=0, n) (yi - ŷ)^2  


# When to Use Which?
MAE is particularly useful when you need a robust measure that can stand out outliers, i.e., few large errors will not skew the result too much, making it more reliable when the data contains many outliers.

R² is useful when you need to explain to a non-technical audience how well the variability in the response variable is being captured by the model. It is also more common for comparing the predictive quality of models on the same problem.

A lower MSE indicates a better fit of the model to the data. Unlike MAE, MSE gives a relatively high weight to large errors (due to the squaring of each term), making it useful when large errors are particularly undesirable.

