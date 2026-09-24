// Local business listings shown on service pages (e.g. /catering, /pestcontrol).
// Source: Google Maps export (Outscraper, Sept 2026). Rendered at build time so listings are in the static HTML.
// Order within each list = display order (ranked by rating weighted by review count).

export interface LocalBusiness {
  name: string;
  slug: string;
  phone: string | null;
  website: string | null;
  address: string;
  city: string;
  rating: number | null;
  reviews: number;
  hours: string | null;
  mapsUrl: string | null;
}

export const businessesByService: Record<string, LocalBusiness[]> = {
  "catering": [
    {
      "name": "Tsunami Catering",
      "slug": "tsunami-catering",
      "phone": "509-301-8441",
      "website": "https://www.tsunamicatering.com/",
      "address": "5215 W Clearwater Ave #102, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 52,
      "hours": "Tue–Sat 9am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/Tsunami+Catering/@46.2118835,-119.1929006,14z/data=!4m8!1m2!2m1!1sTsunami+Catering!3m4!1s0x549879a867d420e9:0x53d18e8e039832d5!8m2!3d46.2118835!4d-119.1929006"
    },
    {
      "name": "Castle Event Catering",
      "slug": "castle-event-catering",
      "phone": "509-375-4000",
      "website": "http://castleeventcatering.com/",
      "address": "706 Williams Blvd, Richland, WA 99354",
      "city": "Richland",
      "rating": 4.8,
      "reviews": 43,
      "hours": "Mon–Sat 9am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/Castle+Event+Catering/@46.2862389,-119.28168269999999,14z/data=!4m8!1m2!2m1!1sCastle+Event+Catering!3m4!1s0x54987acf99385fd1:0x5812d6126283d9dc!8m2!3d46.2862389!4d-119.28168269999999"
    },
    {
      "name": "Red Mountain Kitchen",
      "slug": "red-mountain-kitchen",
      "phone": "509-430-1438",
      "website": "http://www.redmountainkitchen.com/",
      "address": "212 W Kennewick Ave Ste, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.7,
      "reviews": 47,
      "hours": null,
      "mapsUrl": "https://www.google.com/maps/place/Red+Mountain+Kitchen/@46.2088744,-119.12068719999999,14z/data=!4m8!1m2!2m1!1sRed+Mountain+Kitchen!3m4!1s0x54987959dd26698d:0xe09de5193034c693!8m2!3d46.2088744!4d-119.12068719999999"
    },
    {
      "name": "Villa's Catering",
      "slug": "villa-s-catering",
      "phone": "509-596-1508",
      "website": "https://www.villacaterings.com/",
      "address": "1030 N Center Pkwy ste N313, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 3,
      "hours": "Mon–Fri 8am–8pm",
      "mapsUrl": "https://www.google.com/maps/place/Villa%E2%80%99s+Catering/@46.221851099999995,-119.23017329999999,14z/data=!4m8!1m2!2m1!1sVilla%E2%80%99s+Catering!3m4!1s0x549879002264ab0b:0xe5d878c159bc9129!8m2!3d46.221851099999995!4d-119.23017329999999"
    },
    {
      "name": "Fresh Choice Catering",
      "slug": "fresh-choice-catering",
      "phone": "509-987-1889",
      "website": null,
      "address": "2798 Katie Rd, Kennewick, WA 99338",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 2,
      "hours": null,
      "mapsUrl": "https://www.google.com/maps/place/Fresh+Choice+Catering/@46.2081637,-119.2798787,14z/data=!4m8!1m2!2m1!1sFresh+Choice+Catering!3m4!1s0x549877344acd7b1f:0x18a9d2108c2941cc!8m2!3d46.2081637!4d-119.2798787"
    },
    {
      "name": "Catering to You",
      "slug": "catering-to-you",
      "phone": "509-845-2501",
      "website": "http://www.catering-2-you.com/",
      "address": "2001 W Kennewick Ave, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 1,
      "hours": null,
      "mapsUrl": "https://www.google.com/maps/place/Catering+to+You/@46.2086803,-119.1457854,14z/data=!4m8!1m2!2m1!1sCatering+to+You!3m4!1s0x5498791e0dea4945:0x4e9c3747ba3cedf9!8m2!3d46.2086803!4d-119.1457854"
    },
    {
      "name": "The Local Bite & Tropic Hunger Food Truck",
      "slug": "the-local-bite-tropic-hunger-food-truck",
      "phone": "509-802-5741",
      "website": "http://tropic-hunger-llc.square.site/",
      "address": "325 E Columbia Dr, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.5,
      "reviews": 56,
      "hours": "Mon–Thu 11am–2pm",
      "mapsUrl": "https://www.google.com/maps/place/The+Local+Bite+%26+Tropic+Hunger+Food+Truck/@46.21226,-119.11160029999999,14z/data=!4m8!1m2!2m1!1sThe+Local+Bite+%26+Tropic+Hunger+Food+Truck!3m4!1s0x54c0132d8cf2c437:0x6bcce35e1034ba43!8m2!3d46.21226!4d-119.11160029999999"
    },
    {
      "name": "Porter's Real Barbecue",
      "slug": "porter-s-real-barbecue",
      "phone": "509-579-0255",
      "website": "http://portersrealbbq.com/",
      "address": "1022 N Columbia Center Blvd, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.4,
      "reviews": 1008,
      "hours": "Mon–Thu 11am–8pm · Fri–Sat 11am–9pm · Sun 11am–8pm",
      "mapsUrl": "https://www.google.com/maps/place/Porter%27s+Real+Barbecue/@46.2207289,-119.223615,14z/data=!4m8!1m2!2m1!1sPorter%27s+Real+Barbecue!3m4!1s0x549879f313e303ef:0xed517119c337b46c!8m2!3d46.2207289!4d-119.223615"
    },
    {
      "name": "Fiesta's Catering & Event Center",
      "slug": "fiesta-s-catering-event-center",
      "phone": "509-586-4456",
      "website": "https://www.fiestarestaurant.com/eventcenter",
      "address": "8524 W Gage Blvd #130, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.2,
      "reviews": 862,
      "hours": "Mon–Thu 11am–8:30pm · Fri–Sat 11am–9pm · Sun 11am–8:30pm",
      "mapsUrl": "https://www.google.com/maps/place/Fiesta%27s+Catering+%26+Event+Center/@46.227976,-119.23739599999999,14z/data=!4m8!1m2!2m1!1sFiesta%27s+Catering+%26+Event+Center!3m4!1s0x54987a1b7d64a825:0xd01ae248b4fae83e!8m2!3d46.227976!4d-119.23739599999999"
    },
    {
      "name": "CG Public House and Catering",
      "slug": "cg-public-house-and-catering",
      "phone": "509-783-0128",
      "website": "https://www.cgpublichouseandcatering.com/",
      "address": "9221 W Clearwater Ave A, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.1,
      "reviews": 966,
      "hours": "Tue–Sat 7am–9pm · Sun 7am–3pm",
      "mapsUrl": "https://www.google.com/maps/place/CG+Public+House+and+Catering/@46.205207699999995,-119.2460594,14z/data=!4m8!1m2!2m1!1sCG+Public+House+and+Catering!3m4!1s0x5498775ea9481665:0x6358d52cbfb891f0!8m2!3d46.205207699999995!4d-119.2460594"
    }
  ],
  "pestcontrol": [
    {
      "name": "Eden Advanced Pest Technologies",
      "slug": "eden-advanced-pest-technologies",
      "phone": "509-257-4553",
      "website": "https://edenspokane.com/",
      "address": "8350 W Grandridge Blvd Ste 200, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 362,
      "hours": "Open 24 hours",
      "mapsUrl": "https://www.google.com/maps/place/Eden+Advanced+Pest+Technologies/@46.2233555,-119.2344241,14z/data=!4m8!1m2!2m1!1sEden+Advanced+Pest+Technologies!3m4!1s0x549879303b6eca97:0x2b430d9466511da1!8m2!3d46.2233555!4d-119.2344241"
    },
    {
      "name": "Pointe Pest Control - Kennewick",
      "slug": "pointe-pest-control-kennewick",
      "phone": "509-591-0555",
      "website": "https://pointepest.com/service-area/washington/pest-control-in-kennewick/",
      "address": "3902 W Clearwater Ave Ste 109, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.9,
      "reviews": 3292,
      "hours": "Mon–Fri 7am–6pm · Sat 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Kennewick/@46.213208599999994,-119.1723957,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Kennewick!3m4!1s0x54987908fd67d29f:0xdd0ead79d47263c9!8m2!3d46.213208599999994!4d-119.1723957"
    },
    {
      "name": "Pointe Pest Control - Richland",
      "slug": "pointe-pest-control-richland",
      "phone": "509-588-7144",
      "website": "https://pointepest.com/richland-wa-pest-control/",
      "address": "1900 Fowler St Ste D, Richland, WA 99352",
      "city": "Richland",
      "rating": 4.9,
      "reviews": 2269,
      "hours": "Mon–Fri 7am–6pm · Sat 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Richland/@46.2337829,-119.21856129999999,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Richland!3m4!1s0x54987a2603092183:0xf1e536a74705936d!8m2!3d46.2337829!4d-119.21856129999999"
    },
    {
      "name": "Pointe Pest Control - Pasco",
      "slug": "pointe-pest-control-pasco",
      "phone": "509-688-0973",
      "website": "https://pointepest.com/service-area/washington/pest-control-in-pasco/",
      "address": "2021 W A St, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 4.9,
      "reviews": 1951,
      "hours": "Mon–Fri 7am–6pm · Sat 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Pasco/@46.227215199999996,-119.1188437,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Pasco!3m4!1s0x54987f7745f74987:0x9ffb3d0690f288b4!8m2!3d46.227215199999996!4d-119.1188437"
    },
    {
      "name": "Proterra Pest Control",
      "slug": "proterra-pest-control",
      "phone": "509-572-3383",
      "website": "https://proterrapc.com/washington/kennewick/",
      "address": "6201 W Clearwater Ave, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.9,
      "reviews": 1617,
      "hours": "Mon–Fri 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Proterra+Pest+Control/@46.2121427,-119.2039866,14z/data=!4m8!1m2!2m1!1sProterra+Pest+Control!3m4!1s0x549879c7dc5d4c07:0x50163ba6bee4e154!8m2!3d46.2121427!4d-119.2039866"
    },
    {
      "name": "Bamboo Pest Control Servicing",
      "slug": "bamboo-pest-control-servicing",
      "phone": "509-581-0503",
      "website": "https://bambooservicing.com/",
      "address": "5628 W Clearwater Ave STE D-1, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.9,
      "reviews": 898,
      "hours": "Mon–Fri 9am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Bamboo+Pest+Control+Servicing/@46.2125518,-119.1979224,14z/data=!4m8!1m2!2m1!1sBamboo+Pest+Control+Servicing!3m4!1s0x549879c332e7ee8b:0x313cb450c5d4b470!8m2!3d46.2125518!4d-119.1979224"
    },
    {
      "name": "Sprague Pest Solutions",
      "slug": "sprague-pest-solutions",
      "phone": "509-582-5455",
      "website": "https://www.spraguepest.com/location/pasco/",
      "address": "2138 N Commercial Ave, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 4.9,
      "reviews": 429,
      "hours": "Mon–Fri 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Sprague+Pest+Solutions/@46.2520606,-119.07433619999999,14z/data=!4m8!1m2!2m1!1sSprague+Pest+Solutions!3m4!1s0x54987e66cf651c7b:0x3c3fa41fb4080842!8m2!3d46.2520606!4d-119.07433619999999"
    },
    {
      "name": "Duo Pest Control",
      "slug": "duo-pest-control",
      "phone": "509-362-9769",
      "website": "http://www.duopest.com/",
      "address": "713 Jadwin Ave Rm 6, Richland, WA 99352",
      "city": "Richland",
      "rating": 4.9,
      "reviews": 186,
      "hours": "Mon–Sat 9am–8pm",
      "mapsUrl": "https://www.google.com/maps/place/Duo+Pest+Control/@46.276238,-119.2757594,14z/data=!4m8!1m2!2m1!1sDuo+Pest+Control!3m4!1s0x5498653ca4519393:0x17771c994e8a596c!8m2!3d46.276238!4d-119.2757594"
    },
    {
      "name": "Alta Pest Control",
      "slug": "alta-pest-control",
      "phone": "509-350-4302",
      "website": "https://www.altapestcontrol.com/locations/washington-wa/tri-cities-pest-control",
      "address": "2513 Logan St #103, Richland, WA 99354",
      "city": "Richland",
      "rating": 4.8,
      "reviews": 1332,
      "hours": "Mon–Fri 5am–5pm · Sat 6am–2pm",
      "mapsUrl": "https://www.google.com/maps/place/Alta+Pest+Control/@46.3257445,-119.3048931,14z/data=!4m8!1m2!2m1!1sAlta+Pest+Control!3m4!1s0x54986556deb38d67:0xea8abe30af49590e!8m2!3d46.3257445!4d-119.3048931"
    },
    {
      "name": "EnviroGuard Pest Control",
      "slug": "enviroguard-pest-control",
      "phone": "509-223-2539",
      "website": "https://www.envirogpc.com/",
      "address": "5628 W Clearwater Ave Suite C16, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.8,
      "reviews": 904,
      "hours": "Mon–Fri 8am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/EnviroGuard+Pest+Control/@46.2125518,-119.1979224,14z/data=!4m8!1m2!2m1!1sEnviroGuard+Pest+Control!3m4!1s0x68cd23cd4ef99423:0xc4f3f27974fe3ead!8m2!3d46.2125518!4d-119.1979224"
    },
    {
      "name": "Insight Pest Solutions",
      "slug": "insight-pest-solutions",
      "phone": "509-215-9159",
      "website": "https://insightpestnorthwest.com/richland/pest-control-richland/",
      "address": "1333 Tapteal Dr #106, Richland, WA 99352",
      "city": "Richland",
      "rating": 4.8,
      "reviews": 684,
      "hours": "Mon–Fri 6am–6pm · Sat 7am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/Insight+Pest+Solutions/@46.2312236,-119.2320283,14z/data=!4m8!1m2!2m1!1sInsight+Pest+Solutions!3m4!1s0x54987bbd7d45e821:0x30391753bc2a41cc!8m2!3d46.2312236!4d-119.2320283"
    },
    {
      "name": "Bee Team",
      "slug": "bee-team",
      "phone": "509-366-8344",
      "website": "http://beeteamtricities.com/",
      "address": "212 Sarah Rd, Kennewick, WA 99338",
      "city": "Kennewick",
      "rating": 5.0,
      "reviews": 25,
      "hours": "Mon–Sat 8am–9pm",
      "mapsUrl": "https://www.google.com/maps/place/Bee+Team/@46.2087959,-119.27751699999999,14z/data=!4m8!1m2!2m1!1sBee+Team!3m4!1s0x5498778a91dc47db:0x1a0192cadc2a1c1a!8m2!3d46.2087959!4d-119.27751699999999"
    },
    {
      "name": "Essential Pest Control",
      "slug": "essential-pest-control",
      "phone": "509-827-7438",
      "website": "https://app.squareup.com/appointments/book/3zpjlm4irgpyva/LVVBYWRDDWW67/start",
      "address": "6908 W Argent Rd, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 5.0,
      "reviews": 24,
      "hours": "Mon–Fri 9am–5pm · Sat 9am–12pm",
      "mapsUrl": "https://www.google.com/maps/place/Essential+Pest+Control/@46.2553663,-119.1815949,14z/data=!4m8!1m2!2m1!1sEssential+Pest+Control!3m4!1s0x54987b4f88d71a65:0x4c295c8b94841b3b!8m2!3d46.2553663!4d-119.1815949"
    },
    {
      "name": "Complete Pest Prevention",
      "slug": "complete-pest-prevention",
      "phone": "509-627-5211",
      "website": "http://completepest.com/",
      "address": "8350 W Grandridge Blvd #406, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.8,
      "reviews": 76,
      "hours": "Mon–Fri 7am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Complete+Pest+Prevention/@46.2233555,-119.2344241,14z/data=!4m8!1m2!2m1!1sComplete+Pest+Prevention!3m4!1s0x54987baaf437b433:0xa2087b8535ab69a9!8m2!3d46.2233555!4d-119.2344241"
    },
    {
      "name": "Senske Lawn Care Services - Kennewick",
      "slug": "senske-lawn-care-services-kennewick",
      "phone": "509-374-5000",
      "website": "https://senske.com/kennewick/",
      "address": "410 N Quay St, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.7,
      "reviews": 2252,
      "hours": "Mon–Fri 7am–8pm · Sat–Sun 8am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/Senske+Lawn+Care+Services+-+Kennewick/@46.2135343,-119.20830289999999,14z/data=!4m8!1m2!2m1!1sSenske+Lawn+Care+Services+-+Kennewick!3m4!1s0x549879944e3f92f1:0xf78b4e764d0bf9c5!8m2!3d46.2135343!4d-119.20830289999999"
    },
    {
      "name": "Fox Pest Control Kennewick",
      "slug": "fox-pest-control-kennewick",
      "phone": "509-581-6412",
      "website": "https://fox-pest.com/locations/washington/kennewick/",
      "address": "6713 W Clearwater Ave # F, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.7,
      "reviews": 892,
      "hours": "Open 24 hours",
      "mapsUrl": "https://www.google.com/maps/place/Fox+Pest+Control+Kennewick/@46.2100369,-119.21018389999999,14z/data=!4m8!1m2!2m1!1sFox+Pest+Control+Kennewick!3m4!1s0x549879f92d264cad:0x11187cd237516def!8m2!3d46.2100369!4d-119.21018389999999"
    },
    {
      "name": "Rose Hart Pest Control",
      "slug": "rose-hart-pest-control",
      "phone": "509-586-1500",
      "website": "https://rosehartpestwa.com/",
      "address": "20 Valley View Cir, Richland, WA 99352",
      "city": "Richland",
      "rating": 5.0,
      "reviews": 11,
      "hours": "Mon–Fri 8am–5pm",
      "mapsUrl": "https://www.google.com/maps/place/Rose+Hart+Pest+Control/@46.2569423,-119.301149,14z/data=!4m8!1m2!2m1!1sRose+Hart+Pest+Control!3m4!1s0x5498719071a72ea7:0xce04197b8465ae4d!8m2!3d46.2569423!4d-119.301149"
    },
    {
      "name": "TriGuard Pest Control",
      "slug": "triguard-pest-control",
      "phone": "509-554-5999",
      "website": "https://www.triguardpestcontrol.com/tri-cities/",
      "address": "1333 Tapteal Dr #114, Richland, WA 99352",
      "city": "Richland",
      "rating": 4.7,
      "reviews": 124,
      "hours": "Mon–Fri 8:30am–5:30pm",
      "mapsUrl": "https://www.google.com/maps/place/TriGuard+Pest+Control/@46.2313075,-119.2317825,14z/data=!4m8!1m2!2m1!1sTriGuard+Pest+Control!3m4!1s0x46dcc0f68a9b6e63:0x3ce08c0095abe4a0!8m2!3d46.2313075!4d-119.2317825"
    },
    {
      "name": "Birch's Lawn Care, LLC",
      "slug": "birch-s-lawn-care-llc",
      "phone": "509-910-6318",
      "website": "http://www.birchslawncare.com/",
      "address": "6223 W Deschutes Ave #216, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.7,
      "reviews": 75,
      "hours": "Mon–Fri 9am–4pm",
      "mapsUrl": "https://www.google.com/maps/place/Birch%27s+Lawn+Care%2C+LLC/@46.2144294,-119.2053897,14z/data=!4m8!1m2!2m1!1sBirch%27s+Lawn+Care%2C+LLC!3m4!1s0x5498788acef39203:0xeade347021b227bc!8m2!3d46.2144294!4d-119.2053897"
    },
    {
      "name": "Bass Spray Services",
      "slug": "bass-spray-services",
      "phone": "509-366-7340",
      "website": "http://basssprayservices.com/",
      "address": "6904 W Franklin Rd, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 5.0,
      "reviews": 7,
      "hours": "Mon–Sat 6:15am–8:30pm",
      "mapsUrl": "https://www.google.com/maps/place/Bass+Spray+Services/@46.2514539,-119.1814024,14z/data=!4m8!1m2!2m1!1sBass+Spray+Services!3m4!1s0x54987be85fdfc35b:0x9d6a0363b56f7592!8m2!3d46.2514539!4d-119.1814024"
    },
    {
      "name": "All Safe Pest Control",
      "slug": "all-safe-pest-control",
      "phone": "509-545-5124",
      "website": "http://allsafe-pest.com/",
      "address": "620 W Ainsworth St, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 4.7,
      "reviews": 15,
      "hours": null,
      "mapsUrl": "https://www.google.com/maps/place/All+Safe+Pest+Control/@46.222101699999996,-119.09441629999999,14z/data=!4m8!1m2!2m1!1sAll+Safe+Pest+Control!3m4!1s0x54987ed8bd3a5fd1:0x7aa76c1dc84abbf7!8m2!3d46.222101699999996!4d-119.09441629999999"
    },
    {
      "name": "Brooks & Hart Pest Control",
      "slug": "brooks-hart-pest-control",
      "phone": "541-701-8585",
      "website": "https://brooksandhartpestsolutions.com/",
      "address": "106 Skyline Dr, Richland, WA 99352",
      "city": "Richland",
      "rating": 4.6,
      "reviews": 10,
      "hours": null,
      "mapsUrl": "https://www.google.com/maps/place/Brooks+%26+Hart+Pest+Control/@46.259699399999995,-119.30296059999999,14z/data=!4m8!1m2!2m1!1sBrooks+%26+Hart+Pest+Control!3m4!1s0x549871a2c485f939:0x67695453d80e30fd!8m2!3d46.259699399999995!4d-119.30296059999999"
    },
    {
      "name": "Orkin",
      "slug": "orkin",
      "phone": "509-591-9482",
      "website": "https://www.orkin.com/locations/washington-wa/pasco-pest-control/branch-857",
      "address": "1931 E Superior St B, Pasco, WA 99301",
      "city": "Pasco",
      "rating": 4.5,
      "reviews": 688,
      "hours": "Open 24 hours",
      "mapsUrl": "https://www.google.com/maps/place/Orkin/@46.2466715,-119.0776281,14z/data=!4m8!1m2!2m1!1sOrkin!3m4!1s0x54987995d4b8ee83:0xdfec54792aac2e40!8m2!3d46.2466715!4d-119.0776281"
    },
    {
      "name": "Epic Lawn Care & Pest Control",
      "slug": "epic-lawn-care-pest-control",
      "phone": "509-783-1896",
      "website": "http://www.epiclawns.com/",
      "address": "705 S Union St, Kennewick, WA 99336",
      "city": "Kennewick",
      "rating": 4.4,
      "reviews": 255,
      "hours": "Mon–Thu 9am–4:30pm · Fri 9am–12pm",
      "mapsUrl": "https://www.google.com/maps/place/Epic+Lawn+Care+%26+Pest+Control/@46.2027603,-119.17981789999999,14z/data=!4m8!1m2!2m1!1sEpic+Lawn+Care+%26+Pest+Control!3m4!1s0x549879addaf53c0f:0x1d9df54dba5c68ff!8m2!3d46.2027603!4d-119.17981789999999"
    }
  ]
};
