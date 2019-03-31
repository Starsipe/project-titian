from web_scraper import KarallenData
from pymongo import MongoClient 
  

a = KarallenData()
menu = a.getMenu(3)

for i in range (0, len(menu)):
    print(menu[i])
    print("------------------------------------")


  
try: 
    conn = MongoClient() #Default port 27017
    print("Connected successfully!!!") 
except:   
    print("Could not connect to MongoDB") 
  
# database 
db = conn.mydb 
  
# Created or Switched to collection names: my_gfg_collection 
collection = db.karallens
  
for item in menu:
    emp_rec1 = { 
        "name":item, 
        "restaurant":"Kårallen"
        }
    rec_id1 = collection.insert_one(emp_rec1) 
  
print("Data inserted with record ids",rec_id1) 
  
# Printing the data inserted 
cursor = collection.find() 
for record in cursor: 
    print(record)