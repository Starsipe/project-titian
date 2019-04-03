import datetime
import schedule
import time

from web_scraper import KarallenData
from web_scraper import ZenitData
from pymongo import MongoClient 



def getData():

    a = KarallenData()
    b = ZenitData()

    datetime.datetime.today()
    datetime.datetime(2012, 3, 23, 23, 24, 55, 173504)
    today = datetime.datetime.today().weekday() #Monday: 0; Sunday: 6

    karallenMenu = a.getMenu(today)
    zenitMenu = b.getMenu()

      
    try: 
        conn = MongoClient() #Default port 27017
        print("Connected successfully!!!") 
    except:   
        print("Could not connect to MongoDB") 
      
    # database 
    db = conn.mydb 
      
    # Created or Switched to collection names:
    collection = db.karallens
    db.karallens.delete_many({}) #töm tidigare data
      
    for item in karallenMenu:
        emp_rec1 = { 
            "name":item,
            "ratings": [0],
            "ratingAvg": 0,
            "restaurant":"Kårallen"
            }
        rec_id1 = collection.insert_one(emp_rec1) 
      
    print("Data inserted with record ids",rec_id1) 

    # Created or Switched to collection names:
    collection = db.zenits
    db.zenits.delete_many({}) #töm tidigare data

    for item in zenitMenu:
        emp_rec2 = { 
            "name":item,
            "ratings": [0],
            "ratingAvg": 0,
            "restaurant":"Zenit"
            }
        rec_id2 = collection.insert_one(emp_rec2)
      



schedule.every().day.at("10:12").do(getData)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute





    