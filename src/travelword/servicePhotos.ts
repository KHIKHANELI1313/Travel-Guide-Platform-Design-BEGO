// Photos for the regions map's service cards: Wikimedia Commons files picked per kind of service, each matched to
// services by name fragments (regionDirectory picks the one whose fragment comes earliest in the name). Services that
// match none show the category's own photo. `credit` is the author and licence shown on each card. Photos of
// Batumi and Adjara's own places are `only: "adjara"`; their neutral twins (`only: "elsewhere"`) and
// ELSEWHERE_COVERS stand in for them in the other regions.

/** Commons thumbnail at 960px (cards swap in the 500px step) */
const commons = (path: string, file: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/960px-${file}`

export interface ServicePhoto {
  photo: string
  credit: string
  /** fragments of the service names this photo stands for */
  match: string[]
  only?: "adjara" | "elsewhere"
}

export const SERVICE_PHOTOS: Record<string, ServicePhoto[]> = {
  taxi: [
    { photo: commons("e/e4", "MERCEDES-BENZ_S-CLASS_%28V222%29_China.jpg"), credit: "Dinkun Chen / CC BY-SA 4.0", match: ["პრემიუმ"] },
    { photo: commons("3/31", "Batumi_International_Airport.jpg"), credit: "Gaga.vaa / CC BY-SA 4.0", match: ["აეროპორტ", "სასტუმროს ტრანსფერი"], only: "adjara" },
    { photo: commons("c/c3", "Tbilisi_Airport%2C_Georgia_-_panoramio.jpg"), credit: "Otpusk.ru / CC BY-SA 3.0", match: ["აეროპორტ", "სასტუმროს ტრანსფერი"], only: "elsewhere" },
    { photo: commons("0/0c", "Tbilisi_MinibusMarshrutka.jpg"), credit: "Florian Höfer / CC BY-SA 3.0", match: ["მიკროავტობუს", "ტურისტული ტრანსპორტი"] },
    { photo: commons("7/72", "Tbilisi%27s_new_city_bus_-_MAN_Lion%27s_city_A21_CNG_%2808%29.jpg"), credit: "Giorgi Balakhadze / CC BY-SA 4.0", match: ["ავტობუს", "სკოლის", "კორპორაციული", "თანამშრომლ"] },
    { photo: commons("7/7f", "Decorated_wedding_limousines_P1020414.JPG"), credit: "Deror_avi / CC BY-SA 3.0", match: ["ლიმუზინ", "საქორწილო"] },
    { photo: commons("5/52", "Modern_child_car_seat_closeup.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["საბავშვო სავარძ"] },
    { photo: commons("7/78", "Wheelchair_Accessible_Taxi_hydraulic_platform_and_wheelchair_Hamilton_Place_Bowen_Hills_IMGP2940.jpg"), credit: "John Robert McPherson / CC BY-SA 4.0", match: ["შეზღუდული მობილობის"] },
  ],
  couriers: [
    { photo: commons("9/9d", "Skoteroj_de_kurieroj_de_Ta%C5%9Dir_Pico_%28Erevano%29.jpg"), credit: "RG72 / CC BY-SA 4.0", match: ["საკვების კურიერი", "სასურსათო", "მზა", "ონლაინ მაღაზიის", "იმავე დღეს", "ექსპრეს"] },
    { photo: commons("5/5a", "Attackfoto_-_In_the_photostudio_%2810246934063%29.jpg"), credit: "Susanne Nilsson / CC BY-SA 2.0", match: ["შეფუთვა", "შენახვა", "ამანათების გაგზავნა"] },
    { photo: commons("2/2a", "Rose_Flower_Bouquet_052.JPG"), credit: "Suyash Dwivedi / CC BY-SA 4.0", match: ["ყვავილ", "საჩუქრ"] },
    { photo: commons("0/0b", "Birthday_Cake_Bloomsburg%2C_Pennsylvania.jpg"), credit: "Tim-desser / CC0", match: ["ტორტ"] },
    { photo: commons("5/55", "8061Men_unloading_bags_of_animal_feeds_from_delivery_trucks_09.jpg"), credit: "JFVelasquez Floro / CC0", match: ["ტვირთ", "სამშენებლო მასალის", "ავეჯის მიტანა", "ტექნიკის მიტანა"] },
    { photo: commons("6/6e", "Hospital_Pharmacy.JPG"), credit: "User:Mattes / Public domain", match: ["აფთიაქ"] },
  ],
  shops: [
    { photo: commons("d/dc", "Aisle_in_L_Intermarche_supermarket_in_Quebec_City.jpg"), credit: "Wilfredor / CC BY-SA 4.0", match: ["სუპერმარკეტ", "მინიმარკეტ", "სასურსათო", "ქიმიის", "ჰიგიენ"] },
    { photo: commons("0/05", "Tbilisi%2C_Georgian_bread_and_eggplant%2C_Georgia.jpg"), credit: "Vyacheslav Argenberg / CC BY 4.0", match: ["საცხობ", "საკონდიტრო", "ტკბილეულ"] },
    { photo: commons("6/6d", "Interior_sports_clothing_store_Cala_Millor.jpg"), credit: "Steffen Mokosch / CC BY-SA 4.0", match: ["ტანსაცმ", "ფეხსაცმ", "ჩანთ", "სამკაულ", "საათ"] },
    { photo: commons("b/b1", "Smartphones_-_MediaMarkt_-_HUMA_Einkaufspark_2025_-_05.jpg"), credit: "HendrixHammer / CC0", match: ["მობილურ", "კომპიუტერ", "ელექტრონიკ", "ტექნიკის", "ელექტროსაქონ"] },
  ],
  food: [
    { photo: commons("d/d5", "Khinkali_-_Batumi.jpg"), credit: "Francesc Fort / CC BY-SA 4.0", match: ["ხინკ", "ქართული სამზარეულო", "რესტორანი"] },
    { photo: commons("5/5c", "Georgian_Feast_%287%29.jpg"), credit: "rugbyxm / CC BY 2.0", match: ["სუფრის", "საბანკეტო", "ქეითერინგ", "შეფმზარეული", "მომზადება"] },
    { photo: commons("f/f3", "Morning_coffee_and_fresh_pastries_served_on_a_wooden_table_at_a_cozy_cafe_in_the_city.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["კაფე", "ყავის"] },
    { photo: commons("7/71", "Seabass_%28levrek%29_and_a_grilled_potato.jpg"), credit: "E4024 / CC BY-SA 4.0", match: ["თევზ", "ზღვის"] },
    { photo: commons("4/4e", "Chenjeh.jpg"), credit: "مانفی / CC BY-SA 4.0", match: ["მწვადი"] },
    { photo: commons("d/da", "Pizza_basil.jpg"), credit: "jeffreyw / CC BY 2.0", match: ["პიცერ", "სწრაფი"] },
    { photo: commons("1/10", "Hamburger_i_restaurant.jpg"), credit: "John Cambrick / CC BY-SA 4.0", match: ["ბურგერ"] },
    { photo: commons("9/9e", "Shawarma_stand_in_central_Aleppo%2C_Syria.jpg"), credit: "Vyacheslav Argenberg / CC BY 4.0", match: ["შაურმ"] },
    { photo: commons("9/9c", "2007feb-sushi-odaiba-manytypes.jpg"), credit: "Nesnad / CC BY 2.5", match: ["სუშ", "აზიური"] },
    { photo: commons("3/3a", "Bowl_of_vegetable_salad_001.jpg"), credit: "Suyash Dwivedi / CC BY-SA 4.0", match: ["ვეგანური", "ვეგეტარიან", "დიეტური"] },
    { photo: commons("9/9d", "Sweet_Scoops_Ice_Cream_-_July_2023_-_Sarah_Stierch.jpg"), credit: "Missvain / CC BY 4.0", match: ["ნაყინ"] },
    { photo: commons("5/5a", "Juice_preparation_featuring_fresh_fruits_and_a_blender_on_a_modern_kitchen_countertop_in_bright_natural_lighting.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["წვენ", "სმუზ"] },
  ],
  "auto-service": [
    { photo: commons("d/db", "Mechanic_repairing_car_engine.jpg"), credit: "Bembety / CC0", match: ["მექანიკ", "ძრავ", "კოლოფ", "სავალ", "მუხრუჭ", "ელექტრიკოს", "დიაგნოსტ"] },
    { photo: commons("7/76", "Close_up_of_a_car_mechanic_pulling_the_oil_stick_from_the_car_and_checking_oil_levels.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["ზეთ", "ფილტრ", "აკუმულატორ"] },
    { photo: commons("7/7c", "2015_K%C5%82odzko%2C_ul._Dusznicka%2C_myjnia_samochodowa_02.jpg"), credit: "Jacek Halicki / CC BY-SA 4.0", match: ["გარეცხ", "ავტოსამრეცხაო", "ქიმწმენდა"] },
    { photo: commons("6/6a", "Mercedes-Benz%2C_Ribnitz-Damgarten_%2820251224-P1074731%29.jpg"), credit: "Matti Blume / CC BY-SA 4.0", match: ["ევაკუატორ"] },
    { photo: commons("8/8c", "Windshield%2BReplacement%2B%2810%29-1920w.jpg"), credit: "PhoenixAutoGlass / CC BY-SA 4.0", match: ["მინ"] },
  ],
  "home-repair": [
    { photo: commons("3/37", "Electrician_Working.jpg"), credit: "photo taken by flickr user editor B / CC BY 2.0", match: ["ელექტრიკოს"] },
    { photo: commons("7/77", "Fajar_Al_Eman_AC_Cooling_Experts_kuwait_%281%29.jpg"), credit: "Fajaralemanco / CC BY-SA 4.0", match: ["კონდიციონერ", "გათბობ", "მაცივრ", "სარეცხი", "ჭურჭლის", "გაზქურ", "ტელევიზორ"] },
    { photo: commons("9/9b", "Paris_-_Carpenter_workshop_-_4965.jpg"), credit: "Jorge Royan / CC BY-SA 3.0", match: ["ავეჯ", "ხის", "კარის", "ფანჯრ", "საკეტ", "ჟალუზ"] },
    { photo: commons("d/da", "Making_sparks_for_parts_%288625884%29.jpg"), credit: "U.S. Air Force photo by Senior Airman L… / Public domain", match: ["შემდუღებ", "ზეინკალ"] },
    { photo: commons("0/07", "Wall_painting.jpg"), credit: "Gorkaazk / Public domain", match: ["მღებავ", "მლესავ", "გიფსოკარდონ", "ჭერ"] },
    { photo: commons("9/93", "Cool_floor_tiles_-_Piedmont_Mall_Danville%2C_VA_%287377709480%29.jpg"), credit: "Mike Kalasnik from Fort Mill, USA / CC BY-SA 2.0", match: ["ფილ", "პარკეტ", "ლამინატ"] },
    { photo: commons("0/07", "Red_tile_roof_repair.jpg"), credit: "Downtowngal / CC BY-SA 3.0", match: ["სახურავ", "ჰიდროიზოლ"] },
  ],
  construction: [
    { photo: commons("7/7d", "Bathroom_of_Khan_Pool_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg"), credit: "Basile Morin / CC BY-SA 4.0", match: ["აბაზან", "კანალიზაც", "წყლის მილ"] },
    { photo: commons("f/f5", "Modern_kitchen_and_dining_area_with_stylish_furnishings_and_natural_light_in_a_contemporary_home_setting.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["სამზარეულო"] },
    { photo: commons("b/b4", "Architect%27s_drawings_of_the_proposed_Monkey_House_at_the_St._Louis_Zoo._-_DPLA_-_7e5d850b48e555a9ba5a216ca5b55ac4.jpg"), credit: "Saint Louis (Mo.). Department of Street… / No restrictions", match: ["არქიტექტ", "პროექტირ", "ზედამხედველ", "ექსტერიერ"] },
    { photo: commons("7/79", "Public_domain_image_-_underfloor_heating_installation.JPG"), credit: "Kiwiev / CC0", match: ["გათბობ", "ვენტილაც", "იზოლაც", "ელექტროგაყვანილ", "მზის"] },
    { photo: commons("f/f5", "StonemasonRoadPaving.jpg"), credit: "GabrielleMerk / CC BY-SA 4.0", match: ["ეზოს"] },
  ],
  moving: [
    { photo: commons("2/29", "A_moving_van_of_Art_Corporation.JPG"), credit: "Tokumeigakarinoaoshima / CC0", match: ["სატვირთო", "ტვირთ", "მაცივრიანი", "სამშენებლო მასალების", "სოფლის მეურნეობის"] },
    { photo: commons("2/23", "Self_storage_units.jpg"), credit: "Hankwang / CC BY-SA 3.0", match: ["საწყობ"] },
    { photo: commons("a/a4", "CAT_Radlader%2C_MAN_TGM_Lkw.%2C_Budapest_K%C3%B6z%C3%BAt%2C_Sz%C3%A9chenyi_Istv%C3%A1n_Platz%2C_2024_Lip%C3%B3tv%C3%A1ros.jpg"), credit: "Globetrotter19 / CC BY-SA 4.0", match: ["ნარჩენ", "ძველი ავეჯის"] },
    { photo: commons("c/cc", "Hatfield_Deliveryman.jpg"), credit: "Gsalamander / CC BY-SA 4.0", match: ["მოტოციკლ"] },
  ],
  cleaning: [
    { photo: commons("c/cc", "Grace_Shrock-Hurst_mops_floor_Our_Community_Place_in_Harrisonburg_VA_May_2008.jpg"), credit: "Artaxerxes / CC BY-SA 3.0", match: ["ბინის დასუფთავება", "სახლის", "მოკლევადიანი", "რემონტის შემდგომი"] },
    { photo: commons("6/6c", "Office_Premises_Cleaning_-_NCSM_-_Kolkata_20170814160425.jpg"), credit: "Biswarup Ganguly / CC BY 3.0", match: ["ოფის", "კომერციული", "სადარბაზო", "სასტუმრო"] },
    { photo: commons("5/51", "Carpet_Cleaning_Machine_Rug_Doctor.jpg"), credit: "Ingolfson / Public domain", match: ["ხალიჩ", "რბილი ავეჯ", "მატრას"] },
    { photo: commons("1/1f", "Water_flowing_steadily_into_a_vibrant_blue_swimming_pool_during_a_sunny_day.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["აუზ", "წყლის ავზ"] },
    { photo: commons("e/e1", "Man_spraying_mosquito_breeding_places.jpg"), credit: "Cecil Dzwowa / CC BY-SA 4.0", match: ["მავნებ", "მწერ", "მღრღნელ", "დეზინფექც"] },
    { photo: commons("d/dc", "Kitchen_design_at_a_store_in_NJ_3.jpg"), credit: "Tomwsulcer / CC0", match: ["სამზარეულოს", "ეზოს"] },
  ],
  "real-estate": [
    { photo: commons("4/49", "Modern_living_room_with_stylish_furniture_and_a_view_of_the_outdoors_in_a_cozy_apartment_setting.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["ბინის გაქირავება", "დღიურად", "ფოტოგადაღება", "ვიდეოტური", "ტექნიკური შემოწმება"] },
    { photo: commons("9/9d", "Traditional_Doukhobor_house_in_Tambovka%2C_Georgia_-_front_view.jpg"), credit: "FingerWiki / CC BY-SA 4.0", match: ["სახლის გაქირავება"] },
    { photo: commons("0/03", "Hotel_bed_with_lit_lamp_at_Hotel_Esplanade_in_October_2023.jpg"), credit: "JIP / CC BY-SA 4.0", match: ["სასტუმრო", "სტუმრ", "დაბინავება"] },
    { photo: commons("b/bf", "Land_for_sale%2C_off_Neil_Fox_Way_-_geograph.org.uk_-_8062075.jpg"), credit: "Christine Johnstone / CC BY-SA 2.0", match: ["მიწის"] },
  ],
  tourism: [
    { photo: commons("a/a4", "Batumi_Boulevard_Alley.jpg"), credit: "Sosotedrd / CC BY-SA 4.0", match: ["ბათუმის"], only: "adjara" },
    { photo: commons("d/de", "Waterfall_in_Mtirala_National_Park.JPG"), credit: "Philipp Weigell / CC BY 3.0", match: ["მტირალ", "სალაშქრო", "კემპინგ", "კარვ"], only: "adjara" },
    { photo: commons("8/8d", "Machakhela_National_Park_2023-09-01-4.jpg"), credit: "Alexey Komarov / CC BY-SA 4.0", match: ["მაჭახელ", "მთიანი აჭარის"], only: "adjara" },
    { photo: commons("7/75", "Sarpi_Beach%2C_Georgia.jpg"), credit: "Giorgi Balakhadze / CC BY-SA 4.0", match: ["სარფ"], only: "adjara" },
    { photo: commons("6/6b", "%D0%93%D1%83%D0%B4%D0%B0%D1%83%D1%80%D0%B8_-_panoramio_%2825%29.jpg"), credit: "Андрей Бобровский / CC BY 3.0", match: ["პარაპლან"] },
    { photo: commons("c/c8", "Batumi_Dec_2019_08_33_22_839000.jpeg"), credit: "Robot8A / CC BY-SA 4.0", match: ["კაიაკ", "საპსერფ", "ნავით", "იახტ", "სათევზაო"], only: "adjara" },
    { photo: commons("0/0d", "Man_kayaking_on_a_lake.jpg"), credit: "HappinessWithout / CC BY-SA 4.0", match: ["კაიაკ", "საპსერფ", "ნავით", "იახტ", "სათევზაო"], only: "elsewhere" },
    { photo: commons("d/d3", "BatumVelo_on_the_seashore.JPG"), credit: "Julien Cabardi / CC BY-SA 3.0", match: ["ველო", "სკუტერ"], only: "adjara" },
    { photo: commons("4/47", "Rental_bikes_by_Bore_hostel_ship%2C_Turku%2C_Finland.jpg"), credit: "Kotivalo / CC BY-SA 4.0", match: ["ველო", "სკუტერ"], only: "elsewhere" },
    { photo: commons("2/2b", "Georgian_Kvevri.jpg"), credit: "Levan Totosashvili / CC BY-SA 2.0", match: ["ღვინის", "გასტრონომ"] },
    { photo: commons("b/b6", "Sh44_in_Tusheti_NP_near_Khiso.jpg"), credit: "Jelger Groeneveld / CC BY 2.0", match: ["ჯიპ", "ფოტოტურ"] },
  ],
  "car-rental": [
    { photo: commons("e/e4", "MERCEDES-BENZ_S-CLASS_%28V222%29_China.jpg"), credit: "Dinkun Chen / CC BY-SA 4.0", match: ["პრემიუმ"] },
    { photo: commons("2/28", "Toyota_Land_Cruiser_Prado%2C_Baku_%28P1090223%29.jpg"), credit: "Matti Blume / CC BY-SA 4.0", match: ["ჯიპ"] },
    { photo: commons("1/1e", "MERCEDES-BENZ_VITO_%28W447%29_China_%283%29.jpg"), credit: "Dinkun Chen / CC BY-SA 4.0", match: ["მინივენ"] },
    { photo: commons("3/3a", "Cologne_Germany_Electric-Car-Charging-Point-at-TUV-Rheinland-01.jpg"), credit: "CEphoto, Uwe Aranas / CC BY-SA 3.0", match: ["ელექტრომობილ"] },
    { photo: commons("1/1f", "Car_keys_with_keychain.jpg"), credit: "MediaPhoto.Org / CC BY 3.0", match: ["მიწოდება", "დაბრუნების", "შეძენის", "გაყიდვის"] },
    { photo: commons("7/74", "Revisi%C3%B3n_T%C3%A9cnica_UVT_Maip%C3%BA_-_2.jpg"), credit: "Jorgebarrios / CC BY-SA 4.0", match: ["ტექნიკური შემოწმება", "ისტორიის", "ავტოპარკ"] },
  ],
  pets: [
    { photo: commons("5/58", "Dog_walking_woman.jpg"), credit: "Amin / CC BY-SA 4.0", match: ["გასეირნება", "მოვლა", "დროებითი"] },
    { photo: commons("0/06", "Grooming_Poodle.jpg"), credit: "daveynin / CC BY 2.0", match: ["გრუმინგ", "დაბანა"] },
    { photo: commons("f/f0", "Steve_Powell_Dog_Training_Space.jpg"), credit: "Greatmats / CC BY-SA 4.0", match: ["გაწვრთნა"] },
    { photo: commons("a/a5", "Fish_Tank%2C_Blue_Reef_Aquarium.jpg"), credit: "Tim Sheerman-Chase / CC BY 2.0", match: ["აკვარიუმ"] },
    { photo: commons("0/01", "Calico_cat%2C_-_Assisi%2C_Italy.jpg"), credit: "Terragio67 / CC BY-SA 4.0", match: ["სასტუმრო", "ფოტოგადაღება", "ტრანსპორტირება", "დაკარგული"] },
  ],
  beauty: [
    { photo: commons("f/f0", "Barbershop_In_Iran_04.jpg"), credit: "Mostafameraji / CC0", match: ["ბარბერ"] },
    { photo: commons("f/f9", "DZ6_0587_A_nail_technician_carefully_files_a_customers_nails_at_a_salon_surrounded_by_color_samples_and_manicure_tools.jpg"), credit: "PattayaPatrol / CC BY-SA 4.0", match: ["მანიკიურ", "პედიკიურ", "ფრჩხილ"] },
    { photo: commons("0/07", "Makeup_artist.jpg"), credit: "Fidelis ogunseri ocsfilms / CC BY-SA 4.0", match: ["მაკიაჟ", "წამწამ", "წარბ"] },
    { photo: commons("a/a4", "Spa_massage_parlor_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg"), credit: "Basile Morin / CC BY-SA 4.0", match: ["მასაჟ", "სპა", "საუნა"] },
    { photo: commons("7/71", "Vacker_shop_in_Fr%C3%B6lunda_Torg_2.jpg"), credit: "W.carter / CC0", match: ["პროდუქციის", "კოსმეტოლოგ", "ეპილაც", "სოლარიუმ"] },
  ],
  health: [
    { photo: commons("e/e3", "Doctor_working_in_her_office_while_using_a_computer_and_taking_notes_during_a_consultation_with_a_patient.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["ექიმ", "გამოძახება", "ფსიქოლოგ", "ლოგოპედ", "დიეტოლოგ", "სპორტული კვების"] },
    { photo: commons("9/92", "A_dental_chair_in_a_dentist_clinic_in_North_Carolina%2C_United_States.jpg"), credit: "Harrison Keely / CC BY 4.0", match: ["სტომატოლოგ"] },
    { photo: commons("9/9c", "Test_tubes_in_a_laboratory.jpg"), credit: "Sarka Na kopci / CC BY-SA 4.0", match: ["ლაბორატორ"] },
    { photo: commons("d/db", "MEDIMAX_Physiotherapy_Clinic_Tel_Aviv.jpg"), credit: "Hilahalumit / CC BY-SA 4.0", match: ["ფიზიოთერაპ", "რეაბილიტაც", "მასაჟის თერაპია"] },
    { photo: commons("f/f8", "Naam_Yoga_LA_Class.jpg"), credit: "Drmirshak / CC BY-SA 3.0", match: ["იოგ", "პილატეს"] },
    { photo: commons("c/c3", "Swimming_Pool_lanes_and_starting_blocks.jpg"), credit: "KeepActive Australia from Melbourne, VI… / CC BY-SA 4.0", match: ["ცურვ"] },
  ],
  kids: [
    { photo: commons("6/68", "Boxwood_PS_kindergarten_classroom.jpg"), credit: "ChinaFlag / Public domain", match: ["ბაღი", "განვითარების", "ძიძ", "მოვლა"] },
    { photo: commons("a/a6", "%D7%A4%D7%95%D7%98%D7%98%D7%95%D7%A1.jpg"), credit: "Abuka1012 / CC BY-SA 4.0", match: ["დაბადების", "ანიმატორ", "ფოტოგრაფ"] },
    { photo: commons("1/14", "School_bus_parked_outside_McDonald%27s%2C_Windsor%2C_Ontario%2C_2025-06-03.jpg"), credit: "Crisco 1492 / CC BY-SA 4.0", match: ["ტრანსპორტირება"] },
    { photo: commons("0/0f", "School_Pupils.jpg"), credit: "Amuzujoe / CC BY-SA 4.0", match: ["მასწავლებ", "მომზადება", "ფსიქოლოგ"] },
    { photo: commons("0/08", "Girls_in_a_ballet_class%3B_November_2006_%2802%29.jpg"), credit: "Tommy Wong / CC BY 2.0", match: ["ცეკვ"] },
    { photo: commons("7/70", "HK_QB_%E9%B0%82%E9%AD%9A%E6%B6%8C_Quarry_Bay_%E5%A4%AA%E5%8F%A4%E5%9F%8E%E4%B8%AD%E5%BF%83_%E5%95%86%E5%A0%B4_CityPlaza_Shopping_Mall_shop_%E7%AB%A5%E8%A3%9D_Chicco_children_clothing_pink_April_2023_Px3.jpg"), credit: "Hangfunzpnui / CC BY-SA 4.0", match: ["ტანსაცმ", "ნივთების"] },
  ],
  tech: [
    { photo: commons("a/a1", "USB_port_solder_points_on_laptop_motherboard.JPG"), credit: "Disk Depot Ltd. / CC BY-SA 4.0", match: ["კომპიუტერის შეკეთება", "ლეპტოპ", "მონაცემების", "პროგრამების", "ოპერაციული"] },
    { photo: commons("9/95", "North_Central_Telephone_Cooperative_Rural_Broadband_keeps_TN_and_KY_High-Speed_-_RUS_%2820180927-RD-LSC-0988%29.jpg"), credit: "USDAgov / Public domain", match: ["ქსელ", "Wi-Fi", "IT მხარდაჭერა", "სარეზერვო"] },
    { photo: commons("8/89", "Servicing_the_old_office_printer.jpg"), credit: "Shixart1985 / CC BY 2.0", match: ["პრინტერ"] },
    { photo: commons("4/46", "Video_Surveillance_Installation.jpg"), credit: "Artechvideo / CC BY-SA 4.0", match: ["ვიდეოკამერ", "უსაფრთხოების", "ჭკვიანი"] },
    { photo: commons("5/5a", "Programmer_at_work_%28Unsplash%29.jpg"), credit: "Crew crew / CC0", match: ["ვებსაიტ", "აპლიკაც", "პროგრამული"] },
  ],
  digital: [
    { photo: commons("8/83", "Fujikura_optic_fiber_at_Science_Museum.jpg"), credit: "Syced / CC0", match: ["ინტერნეტ", "სატელეკომ"] },
    { photo: commons("c/ce", "Pexels-photo-studio-245032.jpg"), credit: "Tranmautritam / CC0", match: ["დიზაინ", "ლოგო"] },
    { photo: commons("8/81", "2016_Operator_kamery_w_czasie_pracy.JPG"), credit: "Jacek Halicki / CC BY-SA 4.0", match: ["ვიდეო"] },
    { photo: commons("2/29", "Photo_studio_set_up_at_museum_to_photograph_objects-artifacts-02.jpg"), credit: "Myotus / CC BY 4.0", match: ["ფოტო"] },
    { photo: commons("e/e3", "Social_Media_App_Icons_On_The_Screen_of_A_Smartphone.jpg"), credit: "mikemacmarketing / CC BY 2.0", match: ["სოციალური", "მარკეტინგ", "რეკლამ", "ოპტიმიზაც"] },
  ],
  business: [
    { photo: commons("e/eb", "Analyzing_Financial_Data_%285099605109%29.jpg"), credit: "Dave Dugdale from Superior, USA / CC BY-SA 2.0", match: ["ბუღალტრ", "საგადასახადო"] },
    { photo: commons("8/87", "Books_on_Shelf_at_the_Ghalib_Chamber_Law_Library_2.jpg"), credit: "Energyme / CC BY-SA 4.0", match: ["იურიდიულ", "ნოტარიუს", "იურისტ", "რეგისტრაც"] },
    { photo: commons("1/1b", "Bank-of-georgia-headquarter.jpg"), credit: "TheadoreTwombly / CC BY-SA 4.0", match: ["საბანკო", "სესხ", "სადაზღვევო"] },
    { photo: commons("3/33", "%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B8%2C_MSC_Amanda_F_%D1%83_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE_%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%D0%B0.jpg"), credit: "Nikolai Bulykin / CC BY-SA 4.0", match: ["საბაჟო", "იმპორტ", "ექსპორტ"], only: "adjara" },
    { photo: commons("1/1c", "Seaforth_Container_Terminal_2022.jpg"), credit: "Niels Johannes / CC BY-SA 4.0", match: ["საბაჟო", "იმპორტ", "ექსპორტ"], only: "elsewhere" },
    { photo: commons("e/e6", "Heads_of_Delegation_meeting%2C_11_December_%2838130168095%29.jpg"), credit: "World Trade Organization from Switzerla… / CC BY-SA 2.0", match: ["თარჯიმნ", "ტენდერ"] },
  ],
  events: [
    { photo: commons("3/33", "Georgian_wedding.jpg"), credit: "Fabrice M from Paris, France / CC BY-SA 2.0", match: ["ქორწილ", "საქორწილო"] },
    { photo: commons("e/e5", "Birthday_party_decoration.jpg"), credit: "Abinayasekar357 / CC0", match: ["დაბადების", "ბუშტ"] },
    { photo: commons("a/a8", "DZ6_0468_Spacious_elegantly_lit_banquet_hall_set_up_with_rows_of_white-covered_chairs_facing_a_stage_ready_for_a_large_conference_or_formal_event.jpg"), credit: "PattayaPatrol / CC BY-SA 4.0", match: ["კორპორაციული", "წამყვანი"] },
    { photo: commons("a/a9", "HK_SYP_%E9%AB%98%E8%A1%97%E7%A4%BE%E5%8D%80%E6%9C%83%E5%A0%82_High_Street_Community_Hall_event_camera_December_2021_Px3_06.jpg"), credit: "Lionamzie meilaio 9092 / CC BY-SA 4.0", match: ["ფოტოგრაფ", "ვიდეოგრაფ", "ფოტოაპარატ"] },
    { photo: commons("d/d1", "Legant_table_setting_with_white_floral_centerpiece.jpg"), credit: "Bhullargraphic / CC BY-SA 4.0", match: ["ყვავილ", "დეკორაც", "კოსტიუმ", "გასართობი"] },
  ],
  garden: [
    { photo: commons("f/f2", "Lawn_mower_mowing_The_Ellipse_in_front_of_the_White_House%2C_Washington%2C_D.C.%2C_2007.jpg"), credit: "DimiTalen / CC0", match: ["გაზონ", "მებაღე"] },
    { photo: commons("5/58", "Tree_Pruning.jpg"), credit: "TreeMinion15 / CC BY-SA 4.0", match: ["ხეებ"] },
    { photo: commons("9/97", "Scenic_landscape_of_Cornfield_and_old_tractor_near_Lyons%2C_Georgia%2C_June_20%2C_2017_%2820170620-OSEC-PJK-2101%29.jpg"), credit: "USDAgov / Public domain", match: ["ტრაქტორ", "ტექნიკის", "ნიადაგ", "მოსავლ"] },
    { photo: commons("e/e4", "Seedlings_in_Green_House.jpg"), credit: "ProFlowers.com / CC BY 2.0", match: ["სასათბურე", "თესლ", "სასუქ"] },
    { photo: commons("8/81", "2026-05-24_Apiary_at_Passadi%C3%A7os_do_Mondego_2.jpg"), credit: "Alexkom000 / CC BY 4.0", match: ["თაფლ"] },
    { photo: commons("c/c4", "20180803-AMS-LSC-0773_%2828954597097%29.jpg"), credit: "U.S. Department of Agriculture Lance Ch… / Public domain", match: ["სოფლის პროდუქტ", "ყვავილ"] },
    { photo: commons("c/cf", "City_of_London_Cemetery_Memorial_Garden_sprinkler_9.jpg"), credit: "Acabashi / CC BY-SA 4.0", match: ["სარწყავ"] },
  ],
  energy: [
    { photo: commons("f/f6", "Caterpillar_%28Olympian%29_Generator_Set.jpg"), credit: "Gregsedits / CC BY-SA 3.0", match: ["გენერატორ"] },
    { photo: commons("5/54", "Car2Go_Charging_Station_Stuttgart_2013_01.jpg"), credit: "Julian Herzog (Website) / CC BY 4.0", match: ["ელექტრომობილ"] },
    { photo: commons("1/10", "Filterpatrone_Wasserfilter_Rost.JPG"), credit: "Hungchaka / CC BY-SA 4.0", match: ["ფილტრ", "ავზ", "ტუმბო"] },
    { photo: commons("8/8f", "Fuse_box_after_finishing.JPG"), credit: "Dmitry G / CC BY-SA 3.0", match: ["ელექტრიკოს"] },
    { photo: commons("b/b6", "Wall_mounted_boiler_in_kitchen.jpg"), credit: "Turbojet / CC BY-SA 4.0", match: ["ქვაბ", "ენერგოეფექტ"] },
    { photo: commons("5/59", "LKW_zur_Kanalreinigung_in_Deutschland_%281%29.JPG"), credit: "High Contrast / CC BY 3.0 de", match: ["კანალიზაც", "სეპტიკ"] },
  ],
  security: [
    { photo: commons("f/fc", "Security_Team.jpg"), credit: "Shahir Chundra / CC BY-SA 4.0", match: ["დაცვის სამსახური", "ოფისის უსაფრთხოების"] },
    { photo: commons("0/01", "Water_and_Carbon_Dioxide_fire_extinguishers_%2827160694827%29.jpg"), credit: "Eric Fischer / CC BY 2.0", match: ["სახანძრო"] },
    { photo: commons("8/87", "Honeywell_home_alarm.JPG"), credit: "BrokenSphere / CC BY-SA 3.0", match: ["სიგნალიზაც", "სახლის უსაფრთხოების"] },
    { photo: commons("a/a4", "Keys_to_the_Castle_%287395843%29.jpg"), credit: "U.S. Air Force photo by Tech. Sgt. Nich… / Public domain", match: ["კარის გაღება", "გასაღებ"] },
    { photo: commons("d/d7", "Roadside_Assistance_in_New_York.jpg"), credit: "Kenneth C. Zirkel / CC BY-SA 4.0", match: ["საგზაო", "დაქოქვა", "საბურავ", "საწვავ", "ავტომობილის კარის"] },
  ],
  everyday: [
    { photo: commons("3/3b", "Dry_cleaned_clothes_%28Unsplash%29.jpg"), credit: "m0851 m0851 / CC0", match: ["ქიმწმენდა"] },
    { photo: commons("7/7a", "African_tailor_sewing_a_leather_bag.jpg"), credit: "Wuzyprod / CC BY-SA 4.0", match: ["მკერავ", "ტანსაცმლის შეკეთება"] },
    { photo: commons("7/7a", "Capri_-_7224.jpg"), credit: "Jorge Royan / CC BY-SA 3.0", match: ["ფეხსაცმ"] },
    { photo: commons("4/41", "Key_cutting_%28Nizhny_Novgorod%2C_2007%29.jpg"), credit: "Godot13 / CC BY-SA 4.0", match: ["გასაღებ"] },
    { photo: commons("f/fb", "Printer_in_7-Eleven_in_Japan.jpg"), credit: "Ravi Dwivedi / CC BY-SA 4.0", match: ["ბეჭდვ", "სკანირ"] },
    { photo: commons("6/63", "Gift_wrapping_in_a_jewellery_shop_7.jpg"), credit: "W.carter / CC BY-SA 4.0", match: ["საჩუქრ"] },
    { photo: commons("a/a7", "NEA_recycling_bins%2C_Orchard_Road.JPG"), credit: "Terence Ong / CC BY 2.5", match: ["გადამუშავებ", "მეორადი", "ნივთების გაქირავება", "რიგში", "დაკარგული"] },
  ],
}

/** category photos for the regions outside Adjara, where the directory's own (taken in Batumi) would be out of place */
export const ELSEWHERE_COVERS: Record<string, { photo: string; alt: string; credit: string }> = {
  taxi: {
    photo: commons("3/3d", "SF_yellow_cab_01.jpg"),
    alt: "ყვითელი ტაქსი ქალაქის ქუჩაზე", credit: "Grandmaster Huon / CC0",
  },
  shops: {
    photo: commons("1/1e", "Shelves_in_a_Ralphs_grocery_store.jpg"),
    alt: "სასურსათო მაღაზიის თაროები", credit: "Downtowngal / CC BY-SA 3.0",
  },
  construction: {
    photo: commons("f/f6", "Crane_at_construction_site_-_geograph.org.uk_-_7593527.jpg"),
    alt: "ამწე სამშენებლო მოედანზე", credit: "Kevin Waterhouse / CC BY-SA 2.0",
  },
  "real-estate": {
    photo: commons("b/be", "Green_space_by_blocks_of_flats_at_the_%E2%80%9CBia%C5%82a_G%C3%B3ra%E2%80%9D_mines._From_the_left_a_block_of_flats_-_%C5%81ozi%C5%84skiego_1%2C_on_the_right_-_%C5%81ozi%C5%84skiego_2._Tomasz%C3%B3w_Mazowiecki_Gmina%2C_Tomaszowski_Poviat%2C_%C5%81%C3%B3d%C5%BA_Voivodeship._Poland.jpg"),
    alt: "საცხოვრებელი კორპუსები და ეზო", credit: "WrS.tm.pl / Public domain",
  },
  garden: {
    photo: commons("e/e3", "Vegetable_garden_%281246487595%29.jpg"),
    alt: "ბოსტანი სოფლის ეზოში", credit: "johnantoni from Toronto, Canada / CC BY-SA 2.0",
  },
}
