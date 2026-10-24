import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** Compact rows: [name, nameKa, capital, iso2, region, language, currency, population, aliases...] */
const RAW = [
  ["Afghanistan","ავღანეთი","Kabul","af","Asia","Dari / Pashto","Afghan afghani","41M","Afghanistan"],
  ["Albania","ალბანეთი","Tirana","al","Europe","Albanian","Lek","2.8M","Albania"],
  ["Algeria","ალჟირი","Algiers","dz","Africa","Arabic","Algerian dinar","45M","Algeria"],
  ["Andorra","ანდორა","Andorra la Vella","ad","Europe","Catalan","Euro","80K","Andorra"],
  ["Angola","ანგოლა","Luanda","ao","Africa","Portuguese","Kwanza","36M","Angola"],
  ["Antigua and Barbuda","ანტიგუა და ბარბუდა","Saint John's","ag","America","English","East Caribbean dollar","100K","Antigua and Barbuda"],
  ["Argentina","არგენტინა","Buenos Aires","ar","America","Spanish","Argentine peso","46M","Argentina"],
  ["Armenia","სომხეთი","Yerevan","am","Asia","Armenian","Dram","3M","Armenia"],
  ["Australia","ავსტრალია","Canberra","au","Oceania","English","Australian dollar","26M","Australia"],
  ["Austria","ავსტრია","Vienna","at","Europe","German","Euro","9.1M","Austria"],
  ["Azerbaijan","აზერბაიჯანი","Baku","az","Asia","Azerbaijani","Manat","10M","Azerbaijan"],
  ["Bahamas","ბაჰამის კუნძულები","Nassau","bs","America","English","Bahamian dollar","400K","Bahamas","The Bahamas"],
  ["Bahrain","ბაჰრეინი","Manama","bh","Asia","Arabic","Bahraini dinar","1.5M","Bahrain"],
  ["Bangladesh","ბანგლადეში","Dhaka","bd","Asia","Bengali","Taka","170M","Bangladesh"],
  ["Barbados","ბარბადოსი","Bridgetown","bb","America","English","Barbadian dollar","280K","Barbados"],
  ["Belarus","ბელარუსი","Minsk","by","Europe","Belarusian / Russian","Belarusian ruble","9.2M","Belarus"],
  ["Belgium","ბელგია","Brussels","be","Europe","Dutch / French / German","Euro","11.7M","Belgium"],
  ["Belize","ბელიზი","Belmopan","bz","America","English","Belize dollar","400K","Belize"],
  ["Benin","ბენინი","Porto-Novo","bj","Africa","French","West African CFA franc","13M","Benin"],
  ["Bhutan","ბუტანი","Thimphu","bt","Asia","Dzongkha","Ngultrum","780K","Bhutan"],
  ["Bolivia","ბოლივია","Sucre","bo","America","Spanish","Boliviano","12M","Bolivia"],
  ["Bosnia and Herzegovina","ბოსნია და ჰერცეგოვინა","Sarajevo","ba","Europe","Bosnian / Croatian / Serbian","Convertible mark","3.2M","Bosnia and Herzegovina"],
  ["Botswana","ბოტსვანა","Gaborone","bw","Africa","English / Tswana","Pula","2.4M","Botswana"],
  ["Brazil","ბრაზილია","Brasília","br","America","Portuguese","Brazilian real","215M","Brazil"],
  ["Brunei","ბრუნეი","Bandar Seri Begawan","bn","Asia","Malay","Brunei dollar","450K","Brunei","Brunei Darussalam"],
  ["Bulgaria","ბულგარეთი","Sofia","bg","Europe","Bulgarian","Lev","6.5M","Bulgaria"],
  ["Burkina Faso","ბურკინა-ფასო","Ouagadougou","bf","Africa","French","West African CFA franc","23M","Burkina Faso"],
  ["Burundi","ბურუნდი","Gitega","bi","Africa","Kirundi / French","Burundian franc","13M","Burundi"],
  ["Cabo Verde","კაბო-ვერდე","Praia","cv","Africa","Portuguese","Cape Verdean escudo","590K","Cabo Verde","Cape Verde"],
  ["Cambodia","კამბოჯა","Phnom Penh","kh","Asia","Khmer","Riel","17M","Cambodia"],
  ["Cameroon","კამერუნი","Yaoundé","cm","Africa","French / English","Central African CFA franc","28M","Cameroon"],
  ["Canada","კანადა","Ottawa","ca","America","English / French","Canadian dollar","40M","Canada"],
  ["Central African Republic","ცენტრალური აფრიკის რესპუბლიკა","Bangui","cf","Africa","French","Central African CFA franc","5.5M","Central African Republic"],
  ["Chad","ჩადი","N'Djamena","td","Africa","French / Arabic","Central African CFA franc","18M","Chad"],
  ["Chile","ჩილე","Santiago","cl","America","Spanish","Chilean peso","20M","Chile"],
  ["China","ჩინეთი","Beijing","cn","Asia","Mandarin Chinese","Chinese yuan","1.4B","China"],
  ["Colombia","კოლუმბია","Bogotá","co","America","Spanish","Colombian peso","52M","Colombia"],
  ["Comoros","კომორის კუნძულები","Moroni","km","Africa","Comorian / French / Arabic","Comorian franc","850K","Comoros"],
  ["Congo","კონგო","Brazzaville","cg","Africa","French","Central African CFA franc","6M","Congo","Republic of the Congo","Congo (Brazzaville)"],
  ["Democratic Republic of the Congo","კონგოს დემოკრატიული რესპუბლიკა","Kinshasa","cd","Africa","French","Congolese franc","100M","Democratic Republic of the Congo","Dem. Rep. Congo","Congo (Kinshasa)"],
  ["Costa Rica","კოსტა-რიკა","San José","cr","America","Spanish","Costa Rican colón","5.2M","Costa Rica"],
  ["Côte d'Ivoire","კოტ-დ’ივუარი","Yamoussoukro","ci","Africa","French","West African CFA franc","29M","Côte d'Ivoire","Ivory Coast"],
  ["Croatia","ხორვატია","Zagreb","hr","Europe","Croatian","Euro","3.9M","Croatia"],
  ["Cuba","კუბა","Havana","cu","America","Spanish","Cuban peso","11M","Cuba"],
  ["Cyprus","კვიპროსი","Nicosia","cy","Europe","Greek / Turkish","Euro","1.3M","Cyprus"],
  ["Czech Republic","ჩეხეთი","Prague","cz","Europe","Czech","Czech koruna","10.5M","Czech Republic","Czechia"],
  ["Denmark","დანია","Copenhagen","dk","Europe","Danish","Danish krone","5.9M","Denmark"],
  ["Djibouti","ჯიბუტი","Djibouti","dj","Africa","French / Arabic","Djiboutian franc","1.1M","Djibouti"],
  ["Dominica","დომინიკა","Roseau","dm","America","English","East Caribbean dollar","72K","Dominica"],
  ["Dominican Republic","დომინიკის რესპუბლიკა","Santo Domingo","do","America","Spanish","Dominican peso","11M","Dominican Republic"],
  ["Ecuador","ეკვადორი","Quito","ec","America","Spanish","US dollar","18M","Ecuador"],
  ["Egypt","ეგვიპტე","Cairo","eg","Africa","Arabic","Egyptian pound","110M","Egypt"],
  ["El Salvador","ელ-სალვადორი","San Salvador","sv","America","Spanish","US dollar","6.5M","El Salvador"],
  ["Equatorial Guinea","ეკვატორული გვინეა","Malabo","gq","Africa","Spanish / French / Portuguese","Central African CFA franc","1.7M","Equatorial Guinea"],
  ["Eritrea","ერიტრეა","Asmara","er","Africa","Tigrinya / Arabic","Nakfa","3.7M","Eritrea"],
  ["Estonia","ესტონეთი","Tallinn","ee","Europe","Estonian","Euro","1.3M","Estonia"],
  ["Eswatini","ესვატინი","Mbabane","sz","Africa","Swazi / English","Lilangeni","1.2M","Eswatini","Swaziland"],
  ["Ethiopia","ეთიოპია","Addis Ababa","et","Africa","Amharic","Birr","120M","Ethiopia"],
  ["Fiji","ფიჯი","Suva","fj","Oceania","English / Fijian","Fijian dollar","930K","Fiji"],
  ["Finland","ფინეთი","Helsinki","fi","Europe","Finnish / Swedish","Euro","5.6M","Finland"],
  ["France","საფრანგეთი","Paris","fr","Europe","French","Euro","68M","France"],
  ["Gabon","გაბონი","Libreville","ga","Africa","French","Central African CFA franc","2.4M","Gabon"],
  ["Gambia","გამბია","Banjul","gm","Africa","English","Dalasi","2.8M","Gambia","The Gambia"],
  ["Georgia","საქართველო","Tbilisi","ge","Asia","Georgian","Lari","3.7M","Georgia"],
  ["Germany","გერმანია","Berlin","de","Europe","German","Euro","84M","Germany"],
  ["Ghana","განა","Accra","gh","Africa","English","Ghanaian cedi","34M","Ghana"],
  ["Greece","საბერძნეთი","Athens","gr","Europe","Greek","Euro","10.7M","Greece"],
  ["Grenada","გრენადა","St. George's","gd","America","English","East Caribbean dollar","125K","Grenada"],
  ["Guatemala","გვატემალა","Guatemala City","gt","America","Spanish","Quetzal","18M","Guatemala"],
  ["Guinea","გვინეა","Conakry","gn","Africa","French","Guinean franc","14M","Guinea"],
  ["Guinea-Bissau","გვინეა-ბისაუ","Bissau","gw","Africa","Portuguese","West African CFA franc","2.1M","Guinea-Bissau"],
  ["Guyana","გაიანა","Georgetown","gy","America","English","Guyanese dollar","800K","Guyana"],
  ["Haiti","ჰაიტი","Port-au-Prince","ht","America","French / Haitian Creole","Gourde","12M","Haiti"],
  ["Honduras","ჰონდურასი","Tegucigalpa","hn","America","Spanish","Lempira","10M","Honduras"],
  ["Hungary","უნგრეთი","Budapest","hu","Europe","Hungarian","Forint","9.6M","Hungary"],
  ["Iceland","ისლანდია","Reykjavík","is","Europe","Icelandic","Icelandic króna","390K","Iceland"],
  ["India","ინდოეთი","New Delhi","in","Asia","Hindi / English","Indian rupee","1.4B","India"],
  ["Indonesia","ინდონეზია","Jakarta","id","Asia","Indonesian","Indonesian rupiah","275M","Indonesia"],
  ["Iran","ირანი","Tehran","ir","Asia","Persian","Iranian rial","89M","Iran","Iran (Islamic Republic of)"],
  ["Iraq","ერაყი","Baghdad","iq","Asia","Arabic / Kurdish","Iraqi dinar","44M","Iraq"],
  ["Ireland","ირლანდია","Dublin","ie","Europe","English / Irish","Euro","5.2M","Ireland"],
  ["Israel","ისრაელი","Jerusalem","il","Asia","Hebrew / Arabic","Israeli shekel","9.8M","Israel"],
  ["Italy","იტალია","Rome","it","Europe","Italian","Euro","60M","Italy"],
  ["Jamaica","იამაიკა","Kingston","jm","America","English","Jamaican dollar","2.8M","Jamaica"],
  ["Japan","იაპონია","Tokyo","jp","Asia","Japanese","Japanese yen","125M","Japan"],
  ["Jordan","იორდანია","Amman","jo","Asia","Arabic","Jordanian dinar","11M","Jordan"],
  ["Kazakhstan","ყაზახეთი","Astana","kz","Asia","Kazakh / Russian","Tenge","20M","Kazakhstan"],
  ["Kenya","კენია","Nairobi","ke","Africa","English / Swahili","Kenyan shilling","55M","Kenya"],
  ["Kiribati","კირიბატი","South Tarawa","ki","Oceania","English / Gilbertese","Australian dollar","130K","Kiribati"],
  ["North Korea","ჩრდილოეთ კორეა","Pyongyang","kp","Asia","Korean","North Korean won","26M","North Korea","Dem. Rep. Korea","Korea, Democratic People's Republic of"],
  ["South Korea","სამხრეთ კორეა","Seoul","kr","Asia","Korean","South Korean won","52M","South Korea","Korea","Korea, Republic of","Republic of Korea"],
  ["Kuwait","ქუვეითი","Kuwait City","kw","Asia","Arabic","Kuwaiti dinar","4.4M","Kuwait"],
  ["Kyrgyzstan","ყირგიზეთი","Bishkek","kg","Asia","Kyrgyz / Russian","Som","7M","Kyrgyzstan"],
  ["Laos","ლაოსი","Vientiane","la","Asia","Lao","Kip","7.5M","Laos","Lao PDR","Lao People's Democratic Republic"],
  ["Latvia","ლატვია","Riga","lv","Europe","Latvian","Euro","1.9M","Latvia"],
  ["Lebanon","ლიბანი","Beirut","lb","Asia","Arabic","Lebanese pound","5.5M","Lebanon"],
  ["Lesotho","ლესოთო","Maseru","ls","Africa","Sesotho / English","Loti","2.3M","Lesotho"],
  ["Liberia","ლიბერია","Monrovia","lr","Africa","English","Liberian dollar","5.3M","Liberia"],
  ["Libya","ლიბია","Tripoli","ly","Africa","Arabic","Libyan dinar","7M","Libya"],
  ["Liechtenstein","ლიხტენშტაინი","Vaduz","li","Europe","German","Swiss franc","40K","Liechtenstein"],
  ["Lithuania","ლიეტუვა","Vilnius","lt","Europe","Lithuanian","Euro","2.8M","Lithuania"],
  ["Luxembourg","ლუქსემბურგი","Luxembourg","lu","Europe","Luxembourgish / French / German","Euro","660K","Luxembourg"],
  ["Madagascar","მადაგასკარი","Antananarivo","mg","Africa","Malagasy / French","Malagasy ariary","30M","Madagascar"],
  ["Malawi","მალავი","Lilongwe","mw","Africa","English / Chichewa","Malawian kwacha","21M","Malawi"],
  ["Malaysia","მალაიზია","Kuala Lumpur","my","Asia","Malay","Malaysian ringgit","34M","Malaysia"],
  ["Maldives","მალდივები","Malé","mv","Asia","Dhivehi","Maldivian rufiyaa","520K","Maldives"],
  ["Mali","მალი","Bamako","ml","Africa","French","West African CFA franc","23M","Mali"],
  ["Malta","მალტა","Valletta","mt","Europe","Maltese / English","Euro","540K","Malta"],
  ["Marshall Islands","მარშალის კუნძულები","Majuro","mh","Oceania","Marshallese / English","US dollar","42K","Marshall Islands"],
  ["Mauritania","მავრიტანია","Nouakchott","mr","Africa","Arabic","Ouguiya","4.7M","Mauritania"],
  ["Mauritius","მავრიკი","Port Louis","mu","Africa","English / French","Mauritian rupee","1.3M","Mauritius"],
  ["Mexico","მექსიკა","Mexico City","mx","America","Spanish","Mexican peso","130M","Mexico"],
  ["Micronesia","მიკრონეზია","Palikir","fm","Oceania","English","US dollar","115K","Micronesia","Federated States of Micronesia"],
  ["Moldova","მოლდოვა","Chișinău","md","Europe","Romanian","Moldovan leu","2.5M","Moldova","Republic of Moldova"],
  ["Monaco","მონაკო","Monaco","mc","Europe","French","Euro","39K","Monaco"],
  ["Mongolia","მონღოლეთი","Ulaanbaatar","mn","Asia","Mongolian","Tögrög","3.4M","Mongolia"],
  ["Montenegro","მონტენეგრო","Podgorica","me","Europe","Montenegrin","Euro","620K","Montenegro"],
  ["Morocco","მაროკო","Rabat","ma","Africa","Arabic / Berber","Moroccan dirham","37M","Morocco"],
  ["Mozambique","მოზამბიკი","Maputo","mz","Africa","Portuguese","Mozambican metical","33M","Mozambique"],
  ["Myanmar","მიანმარი","Naypyidaw","mm","Asia","Burmese","Kyat","54M","Myanmar","Burma"],
  ["Namibia","ნამიბია","Windhoek","na","Africa","English","Namibian dollar","2.6M","Namibia"],
  ["Nauru","ნაურუ","Yaren","nr","Oceania","Nauruan / English","Australian dollar","13K","Nauru"],
  ["Nepal","ნეპალი","Kathmandu","np","Asia","Nepali","Nepalese rupee","30M","Nepal"],
  ["Netherlands","ნიდერლანდები","Amsterdam","nl","Europe","Dutch","Euro","18M","Netherlands"],
  ["New Zealand","ახალი ზელანდია","Wellington","nz","Oceania","English / Māori","New Zealand dollar","5.2M","New Zealand"],
  ["Nicaragua","ნიკარაგუა","Managua","ni","America","Spanish","Córdoba","7M","Nicaragua"],
  ["Niger","ნიგერი","Niamey","ne","Africa","French","West African CFA franc","27M","Niger"],
  ["Nigeria","ნიგერია","Abuja","ng","Africa","English","Nigerian naira","220M","Nigeria"],
  ["North Macedonia","ჩრდილოეთ მაკედონია","Skopje","mk","Europe","Macedonian","Macedonian denar","1.8M","North Macedonia","Macedonia"],
  ["Norway","ნორვეგია","Oslo","no","Europe","Norwegian","Norwegian krone","5.5M","Norway"],
  ["Oman","ომანი","Muscat","om","Asia","Arabic","Omani rial","5M","Oman"],
  ["Pakistan","პაკისტანი","Islamabad","pk","Asia","Urdu / English","Pakistani rupee","240M","Pakistan"],
  ["Palau","პალაუ","Ngerulmud","pw","Oceania","Palauan / English","US dollar","18K","Palau"],
  ["Palestine","პალესტინა","Ramallah","ps","Asia","Arabic","Israeli shekel","5.5M","Palestine","West Bank","Palestine, State of"],
  ["Panama","პანამა","Panama City","pa","America","Spanish","Balboa / USD","4.4M","Panama"],
  ["Papua New Guinea","პაპუა-ახალი გვინეა","Port Moresby","pg","Oceania","English / Tok Pisin","Papua New Guinean kina","10M","Papua New Guinea"],
  ["Paraguay","პარაგვაი","Asunción","py","America","Spanish / Guaraní","Guaraní","7.4M","Paraguay"],
  ["Peru","პერუ","Lima","pe","America","Spanish","Peruvian sol","34M","Peru"],
  ["Philippines","ფილიპინები","Manila","ph","Asia","Filipino / English","Philippine peso","115M","Philippines"],
  ["Poland","პოლონეთი","Warsaw","pl","Europe","Polish","Polish złoty","38M","Poland"],
  ["Portugal","პორტუგალია","Lisbon","pt","Europe","Portuguese","Euro","10M","Portugal"],
  ["Qatar","კატარი","Doha","qa","Asia","Arabic","Qatari riyal","3M","Qatar"],
  ["Romania","რუმინეთი","Bucharest","ro","Europe","Romanian","Romanian leu","19M","Romania"],
  ["Russia","რუსეთი","Moscow","ru","Europe","Russian","Russian ruble","144M","Russia","Russian Federation"],
  ["Rwanda","რუანდა","Kigali","rw","Africa","Kinyarwanda / English / French","Rwandan franc","14M","Rwanda"],
  ["Saint Kitts and Nevis","სენტ-კიტსი და ნევისი","Basseterre","kn","America","English","East Caribbean dollar","48K","Saint Kitts and Nevis"],
  ["Saint Lucia","სენტ-ლუსია","Castries","lc","America","English","East Caribbean dollar","180K","Saint Lucia"],
  ["Saint Vincent and the Grenadines","სენტ-ვინსენტი და გრენადინები","Kingstown","vc","America","English","East Caribbean dollar","110K","Saint Vincent and the Grenadines"],
  ["Samoa","სამოა","Apia","ws","Oceania","Samoan / English","Tala","220K","Samoa"],
  ["San Marino","სან-მარინო","San Marino","sm","Europe","Italian","Euro","34K","San Marino"],
  ["Sao Tome and Principe","სან-ტომე და პრინსიპი","São Tomé","st","Africa","Portuguese","Dobra","230K","Sao Tome and Principe","São Tomé and Príncipe"],
  ["Saudi Arabia","საუდის არაბეთი","Riyadh","sa","Asia","Arabic","Saudi riyal","36M","Saudi Arabia"],
  ["Senegal","სენეგალი","Dakar","sn","Africa","French","West African CFA franc","18M","Senegal"],
  ["Serbia","სერბეთი","Belgrade","rs","Europe","Serbian","Serbian dinar","6.7M","Serbia"],
  ["Seychelles","სეიშელის კუნძულები","Victoria","sc","Africa","English / French / Seychellois Creole","Seychellois rupee","100K","Seychelles"],
  ["Sierra Leone","სიერა-ლეონე","Freetown","sl","Africa","English","Leone","8.6M","Sierra Leone"],
  ["Singapore","სინგაპური","Singapore","sg","Asia","English / Malay / Mandarin / Tamil","Singapore dollar","5.9M","Singapore"],
  ["Slovakia","სლოვაკეთი","Bratislava","sk","Europe","Slovak","Euro","5.4M","Slovakia"],
  ["Slovenia","სლოვენია","Ljubljana","si","Europe","Slovenian","Euro","2.1M","Slovenia"],
  ["Solomon Islands","სოლომონის კუნძულები","Honiara","sb","Oceania","English","Solomon Islands dollar","740K","Solomon Islands"],
  ["Somalia","სომალი","Mogadishu","so","Africa","Somali / Arabic","Somali shilling","18M","Somalia"],
  ["South Africa","სამხრეთ აფრიკა","Pretoria","za","Africa","English / Afrikaans / Zulu","South African rand","60M","South Africa"],
  ["South Sudan","სამხრეთ სუდანი","Juba","ss","Africa","English","South Sudanese pound","11M","South Sudan"],
  ["Spain","ესპანეთი","Madrid","es","Europe","Spanish","Euro","47M","Spain"],
  ["Sri Lanka","შრი-ლანკა","Sri Jayawardenepura Kotte","lk","Asia","Sinhala / Tamil","Sri Lankan rupee","22M","Sri Lanka"],
  ["Sudan","სუდანი","Khartoum","sd","Africa","Arabic / English","Sudanese pound","48M","Sudan"],
  ["Suriname","სურინამი","Paramaribo","sr","America","Dutch","Surinamese dollar","620K","Suriname"],
  ["Sweden","შვედეთი","Stockholm","se","Europe","Swedish","Swedish krona","10.5M","Sweden"],
  ["Switzerland","შვეიცარია","Bern","ch","Europe","German / French / Italian","Swiss franc","8.9M","Switzerland"],
  ["Syria","სირია","Damascus","sy","Asia","Arabic","Syrian pound","22M","Syria","Syrian Arab Republic"],
  ["Tajikistan","ტაჯიკეთი","Dushanbe","tj","Asia","Tajik","Somoni","10M","Tajikistan"],
  ["Tanzania","ტანზანია","Dodoma","tz","Africa","Swahili / English","Tanzanian shilling","65M","Tanzania","United Republic of Tanzania"],
  ["Thailand","ტაილანდი","Bangkok","th","Asia","Thai","Thai baht","70M","Thailand"],
  ["Timor-Leste","ტიმორ-ლესტე","Dili","tl","Asia","Portuguese / Tetum","US dollar","1.4M","Timor-Leste","East Timor"],
  ["Togo","ტოგო","Lomé","tg","Africa","French","West African CFA franc","9M","Togo"],
  ["Tonga","ტონგა","Nukuʻalofa","to","Oceania","Tongan / English","Paʻanga","100K","Tonga"],
  ["Trinidad and Tobago","ტრინიდადი და ტობაგო","Port of Spain","tt","America","English","Trinidad and Tobago dollar","1.5M","Trinidad and Tobago"],
  ["Tunisia","ტუნისი","Tunis","tn","Africa","Arabic","Tunisian dinar","12M","Tunisia"],
  ["Turkey","თურქეთი","Ankara","tr","Asia","Turkish","Turkish lira","85M","Turkey","Türkiye"],
  ["Turkmenistan","თურქმენეთი","Ashgabat","tm","Asia","Turkmen","Manat","6.5M","Turkmenistan"],
  ["Tuvalu","ტუვალუ","Funafuti","tv","Oceania","Tuvaluan / English","Australian dollar","11K","Tuvalu"],
  ["Uganda","უგანდა","Kampala","ug","Africa","English / Swahili","Ugandan shilling","48M","Uganda"],
  ["Ukraine","უკრაინა","Kyiv","ua","Europe","Ukrainian","Ukrainian hryvnia","38M","Ukraine"],
  ["United Arab Emirates","არაბთა გაერთიანებული საამიროები","Abu Dhabi","ae","Asia","Arabic","UAE dirham","10M","United Arab Emirates"],
  ["United Kingdom","გაერთიანებული სამეფო","London","gb","Europe","English","Pound sterling","67M","United Kingdom","United Kingdom of Great Britain and Northern Ireland"],
  ["United States","ამერიკის შეერთებული შტატები","Washington, D.C.","us","America","English","US dollar","331M","United States","United States of America","USA","US"],
  ["Uruguay","ურუგვაი","Montevideo","uy","America","Spanish","Uruguayan peso","3.5M","Uruguay"],
  ["Uzbekistan","უზბეკეთი","Tashkent","uz","Asia","Uzbek","Uzbekistani som","36M","Uzbekistan"],
  ["Vanuatu","ვანუატუ","Port Vila","vu","Oceania","Bislama / English / French","Vatu","330K","Vanuatu"],
  ["Vatican City","წმინდა საყდარი (ვატიკანი)","Vatican City","va","Europe","Italian / Latin","Euro","800","Vatican City","Vatican","Holy See","Holy See (Vatican City)"],
  ["Venezuela","ვენესუელა","Caracas","ve","America","Spanish","Bolívar","28M","Venezuela"],
  ["Vietnam","ვიეტნამი","Hanoi","vn","Asia","Vietnamese","Vietnamese đồng","100M","Vietnam","Viet Nam"],
  ["Yemen","იემენი","Sana'a","ye","Asia","Arabic","Yemeni rial","34M","Yemen"],
  ["Zambia","ზამბია","Lusaka","zm","Africa","English","Zambian kwacha","20M","Zambia"],
  ["Zimbabwe","ზიმბაბვე","Harare","zw","Africa","English","Zimbabwean dollar","16M","Zimbabwe"],
]

const REGION_IMAGES = {
  Asia: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
  Europe: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
  Africa: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1200&h=700&fit=crop&auto=format",
  America: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
  Oceania: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
}

const FEATURED_IMAGES = {
  Japan: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&h=700&fit=crop&auto=format",
  Italy: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=700&fit=crop&auto=format",
  France: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&auto=format",
  Spain: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=700&fit=crop&auto=format",
  Thailand: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=700&fit=crop&auto=format",
  Greece: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&h=700&fit=crop&auto=format",
  "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=700&fit=crop&auto=format",
  Australia: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop&auto=format",
  Brazil: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&h=700&fit=crop&auto=format",
  Morocco: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&h=700&fit=crop&auto=format",
  Turkey: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=700&fit=crop&auto=format",
  Portugal: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=1200&h=700&fit=crop&auto=format",
  Georgia: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=700&fit=crop&auto=format",
  "United Kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=700&fit=crop&auto=format",
  Germany: "https://images.unsplash.com/photo-1467269204594-be2d87b333ae?w=1200&h=700&fit=crop&auto=format",
  Egypt: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&h=700&fit=crop&auto=format",
  India: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=700&fit=crop&auto=format",
  China: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=700&fit=crop&auto=format",
  "South Korea": "https://images.unsplash.com/photo-1538481199705-c710c4e965ba?w=1200&h=700&fit=crop&auto=format",
  Canada: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=700&fit=crop&auto=format",
  Mexico: "https://images.unsplash.com/photo-1518659526054-0473a713fbf3?w=1200&h=700&fit=crop&auto=format",
  "New Zealand": "https://images.unsplash.com/photo-1469521669194-babb455f259e?w=1200&h=700&fit=crop&auto=format",
}

const REGION_TAGS = {
  Asia: ["Culture", "Food", "History"],
  Europe: ["Culture", "History", "Food"],
  Africa: ["Nature", "Adventure", "Culture"],
  America: ["Nature", "Adventure", "Culture"],
  Oceania: ["Beach", "Nature", "Adventure"],
}

const SEASON = {
  Asia: "Oct–Apr",
  Europe: "May–Sep",
  Africa: "Jun–Oct",
  America: "Dec–Apr",
  Oceania: "Nov–Apr",
}

function isoToFlag(iso2) {
  return [...iso2.toUpperCase()].map((c) => String.fromCodePoint(127397 + c.charCodeAt(0))).join("")
}

function hashRating(name) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return Math.round((4.4 + (h % 50) / 100) * 10) / 10
}

if (RAW.length !== 195) {
  console.error(`Expected 195 countries, got ${RAW.length}`)
  process.exit(1)
}

const countries = RAW.map((row) => {
  const [name, nameKa, capital, iso2, region, language, currency, population, ...aliases] = row
  const uniqueAliases = [...new Set([name, ...aliases])]
  return {
    name,
    nameKa,
    capital,
    iso2,
    flag: isoToFlag(iso2),
    language,
    currency,
    population,
    rating: name === "Japan" ? 4.9 : hashRating(name),
    image: FEATURED_IMAGES[name] || REGION_IMAGES[region],
    region,
    tags: REGION_TAGS[region],
    tagline: `Discover ${name}`,
    about: `${name} is a destination in ${region}, with ${capital} as its capital. Travelers explore local culture, cuisine, and landscapes while planning stays, transport, and safety with TravelWorld.`,
    bestSeason: SEASON[region],
    emergency: "Local emergency services",
    aliases: uniqueAliases,
  }
})

// Japan richer copy
const japan = countries.find((c) => c.name === "Japan")
if (japan) {
  japan.tagline = "Land of Tradition and Innovation"
  japan.about =
    "Japan is an island nation in East Asia, renowned worldwide for its unique blend of ancient traditions and cutting-edge modernity. From the neon-lit streets of Tokyo to the serene Zen gardens of Kyoto, Japan offers an extraordinary range of experiences that captivate millions of visitors each year. The country's four distinct seasons — cherry blossoms in spring, festivals in summer, red foliage in autumn, and snow-capped mountains in winter — each offer their own spectacular beauty."
  japan.bestSeason = "Mar–May, Oct–Nov"
  japan.emergency = "110 (Police) / 119 (Ambulance & Fire)"
  japan.tags = ["Culture", "Food", "Nature"]
}

const out = `/* Auto-generated by scripts/generate-countries.mjs — ${countries.length} countries */
export type CountryRegion = "Asia" | "Europe" | "Africa" | "America" | "Oceania"

export type Country = {
  name: string
  nameKa: string
  capital: string
  iso2: string
  flag: string
  language: string
  currency: string
  population: string
  rating: number
  image: string
  region: CountryRegion
  tags: string[]
  tagline: string
  about: string
  bestSeason: string
  emergency: string
  aliases: string[]
}

export const COUNTRIES: Country[] = ${JSON.stringify(countries, null, 2)}

const aliasIndex = new Map<string, Country>()
for (const country of COUNTRIES) {
  for (const alias of country.aliases) {
    aliasIndex.set(alias.toLowerCase(), country)
  }
  aliasIndex.set(country.nameKa.toLowerCase(), country)
}

export function findCountry(query: string | undefined | null): Country | undefined {
  if (!query) return undefined
  return aliasIndex.get(query.trim().toLowerCase())
}

export function getCountryOrDefault(query: string | undefined | null): Country {
  return findCountry(query) ?? COUNTRIES.find((c) => c.name === "Japan") ?? COUNTRIES[0]
}
`

writeFileSync(join(__dirname, "..", "src", "data", "countries.ts"), out, "utf8")
console.log(`Wrote ${countries.length} countries to src/data/countries.ts`)
