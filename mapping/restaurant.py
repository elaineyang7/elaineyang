import folium
map = folium.Map(location=[37.45, -121.93],
                 zoom_start=10,
                 tiles="cartodbpositron",
                 dragging=False)

fg = folium.FeatureGroup(name="My Map")

picture = ['joyheart.jpg', "taiwan.jpg", "burma.jpg"]
project_name = ["Joyheart Cafe", "Taiwan Cafe", "Burma Ruby Burmese Cuisine"]
location = [[37.387774, -121.899910], [37.436172, -121.909914], [37.446460, -122.160893]]
address = ["1344 Ridder Park Dr, San Jose, CA", "568 N Abel St, Milpitas, CA", "326 University Ave, Palo Alto, CA"]
joyheart_p = "Joyheart Café is a fusion of Heartland market and healthy vegan restaurant. It is also the first oversea branch originated from Taiwan. Ingredients are handpicked for enriching good health, green nature, and happy life. Hope customers come and enjoy a hearty meal."
taiwan_p = "Authentic Taiwanese food!"
burma_p = "Located on University Ave in downtown Palo Alto, bringing outrageously good Burmese food to to the Bay Area. With accomplished chefs proficient in all of the specialties that make Asian-Burmese cuisine sought after by food aficionados, Burma Ruby is fast striking a chord with diners looking for a fresh, modern approach to one of Asia's most popular cuisines."
paragraph = [joyheart_p, taiwan_p, burma_p]


def createPopupHTML(pic, name, address, paragragh):
    popupHTML = """
        <style type="text/css">
        .container {
            max-width: 600px;
        	display: flex;
        	overflow: auto;
        	justify-content: center;
            margin: auto;
	        float: none;
        }
        .pic{
            max-width: 200px;
            width: 30%;
            float: left;
            margin: 0 auto;
            position: relative;
        }
        .text{
           max-width: 300px;
           width: 65%;
           float: left;
           margin: auto;
           position: relative;
        }
        img{
            width: 200px;
            height: 200px;
        }

        </style>

        <div class="container">
            <div class="pic">

        """
    img = '<img src="images/' + pic + '">'
    popupHTML += img + '</div>' + '<div class="text">' + '<h3>' + name + '</h3>' + '<p>' + address + '</p>' + '<hr>' + '<p>' + paragragh + '</p>' + '</div>' + '</div>'

    return popupHTML

for pic, name, loc, add, p in zip(picture, project_name, location, address, paragraph):
    popupHTML = createPopupHTML(pic, name, add, p)
    fg.add_child(folium.Marker(location=loc,
                               popup=folium.Popup(popupHTML, max_width=620, max_height=350, show=False, sticky=False),
                               icon=folium.Icon(color='blue', icon='home', icon_color="white", prefix='fa')))


#fg.add_child(folium.Marker(location=[37.415531, -122.089768],
#    popup=folium.Popup(htmlFortuna, max_width=630, show=False, sticky=False),
#    icon=folium.Icon(color='blue', icon='home', icon_color="white", prefix='fa')))
#fg.add_child(folium.Marker(location=[37.352058, -121.957700],
#    popup=folium.Popup(htmlAnantara, max_width=630, show=False, sticky=False),
#    icon=folium.Icon(color='blue', icon='home', icon_color="white", prefix='fa')))

map.add_child(fg)
map.save("restaurant.html")
