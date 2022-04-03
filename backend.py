import csv
import numpy
import sklearn
import pandas
from sklearn import linear_model


df = pandas.read_csv(r'C:\Users\yugan\OneDrive\Desktop\Unnamed App\fitness\assets\fitness_data - Sheet1.csv')
x = df[['Weight', 'Reps', 'Fatigue']]
y = df[['Sugg Weight', 'Sugg Reps']]

regr = linear_model.LinearRegression()
regr.fit(x, y)
predictedValues = regr.predict([[180, 12, 2]])


print(int(predictedValues[0][0]))
print(int(predictedValues[0][1]))
