import requests
import bs4


class KarallenData(object):

		
	def getMenu(self, currentDay):
		res = requests.get('https://eurest.mashie.com/public/menu/restaurang+k%C3%A5rallen/a4160fd5?country=se')
		soup =  bs4.BeautifulSoup(res.text, 'lxml')


		day = soup.find_all('div', {"class" : "container-fluid no-print"})
		dayChildren = day[currentDay].find_all('div', {"class" : "row no-print day-alternative-wrapper"})
		menu = []
		for i in range(0,5):
			temp = dayChildren[i].find('section', {"class" : "day-alternative"}).findChildren()
			#menu.append(temp[0].findChildren())
			temp2 = temp[0].findChildren()
			menu.append(temp2[0].text)

		return menu;