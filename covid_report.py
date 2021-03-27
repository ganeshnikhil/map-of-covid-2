from covid import Covid 
import matplotlib.pyplot as plt
import pandas as pd 
country=[]
died=[]

covid = Covid() 
data=covid.get_data()
print(data)
for deaths in data:
    country.append(deaths['country'][0])
    print(deaths['country'],':',deaths['deaths'])
    died.append(deaths['deaths'])
#print(country)
#print(died)


country=pd.Series(country)
plt.figure(figsize=(10, 4))
x = country
y = died
plt.scatter(x, y, color='tab:red')
plt.xlabel('country', fontsize=14, color='blue')
plt.ylabel('deaths',fontsize=14, color='red')
plt.title('COVID- report')
plt.show()

plt.figure(figsize=(10, 4))
plt.plot(x, y,'r--', color='tab:red')
plt.xlabel('country', fontsize=14, color='blue')
plt.ylabel('deaths',fontsize=14, color='red')
plt.title('COVID- report')
plt.show()

x=list(x)
y=list(y)
Di=[]
Co=[]
for i in range(10):
    Di.append(x[i])
    Co.append(y[i])


fig1, ax1 = plt.subplots()
ax1.pie(Co,  labels=Di, autopct='%1.1f%%', shadow=True,radius=5, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
plt.show()
