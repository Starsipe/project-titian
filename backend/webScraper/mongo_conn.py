# coding=utf-8
import datetime
import schedule
import time

from web_scraper import KarallenData
from web_scraper import ZenitData
from pymongo import MongoClient 


def inDB(item, foodCollection):
    #set available false for all 
#    foodCollection.updateMany({}, {$set: {available: false}})

    for foodItem in foodCollection.find():
        if item == foodItem['name']:
            return [1, foodItem]
    return [0, None]

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

    foodCollection = db.foods
  
    for item in karallenMenu:
#        x = inDB(item, foodCollection)
        x=[0]
        if x[0] == 1:
            emp_rec1 = x[1]
        else:
            emp_rec1 = { 
                "name":item,
                "ratings": [0],
                "ratingAvg": 0,
                "restaurant":"Kårallen",
                "available": True,
            }
        rec_id1 = collection.insert(emp_rec1) 
      
    print("Data inserted with record ids",rec_id1) 




    # Created or Switched to collection names:
    collection = db.zenits
    db.zenits.delete_many({}) #töm tidigare data

    for item in zenitMenu:
        x = inDB(item, foodCollection)
        if x[0] == 1:
            emp_rec2 = x[1]
        else:
            emp_rec2 = { 
                "name":item,
                "ratings": [0],
                "ratingAvg": 0,
                "restaurant":"Zenit",
                "available": True,
                }
        rec_id2 = collection.insert(emp_rec2)
      

getData()

schedule.every().day.at("10:00").do(getData)

while True:
    schedule.run_pending()
    time.sleep(60) # wait one minute





    
