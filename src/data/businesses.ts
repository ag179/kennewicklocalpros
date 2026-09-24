// Local business listings shown on service pages (e.g. /catering, /pestcontrol)
// and on one profile page per business (/pestcontrol/<slug>).
// Source: Google Maps export (Outscraper, Sept 2026). Rendered at build time so everything is in the static HTML.
// Order within each list = display order (ranked by rating weighted by review count).

export interface LocalBusiness {
  name: string;
  slug: string;
  phone: string | null;
  website: string | null;
  address: string;
  street: string | null;
  postalCode: string | null;
  city: string;
  lat: number;
  lng: number;
  rating: number | null;
  reviews: number;
  reviewsPerScore: Record<string, number> | null;
  hours: string | null;
  weeklyHours: { day: string; hours: string }[] | null;
  services: string[];
  attributes: Record<string, string[]>;
  verified: boolean;
  mapsUrl: string | null;
  reviewsUrl: string | null;
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
      "mapsUrl": "https://www.google.com/maps/place/Tsunami+Catering/@46.2118835,-119.1929006,14z/data=!4m8!1m2!2m1!1sTsunami+Catering!3m4!1s0x549879a867d420e9:0x53d18e8e039832d5!8m2!3d46.2118835!4d-119.1929006",
      "street": "5215 W Clearwater Ave #102",
      "postalCode": "99336",
      "lat": 46.2118835,
      "lng": -119.1929006,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "Closed"
        },
        {
          "day": "Tuesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–4pm"
        },
        {
          "day": "Friday",
          "hours": "9am–4pm"
        },
        {
          "day": "Saturday",
          "hours": "9am–4pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 52
      },
      "services": [
        "Catering"
      ],
      "attributes": {
        "Service options": [
          "Delivery",
          "On-site services"
        ],
        "Accessibility": [
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards"
        ],
        "Parking": [
          "Free parking lot",
          "On-site parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Tsunami+Catering/@46.2118835,-119.1929006,13.99z/data=!4m16!1m7!3m6!1s0x549879a867d420e9:0x53d18e8e039832d5!2sTsunami+Catering!8m2!3d46.2118835!4d-119.1929006!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879a867d420e9:0x53d18e8e039832d5!8m2!3d46.2118835!4d-119.1929006!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Castle+Event+Catering/@46.2862389,-119.28168269999999,14z/data=!4m8!1m2!2m1!1sCastle+Event+Catering!3m4!1s0x54987acf99385fd1:0x5812d6126283d9dc!8m2!3d46.2862389!4d-119.28168269999999",
      "street": "706 Williams Blvd",
      "postalCode": "99354",
      "lat": 46.2862389,
      "lng": -119.2816827,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–4pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–4pm"
        },
        {
          "day": "Friday",
          "hours": "9am–4pm"
        },
        {
          "day": "Saturday",
          "hours": "9am–4pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 2,
        "3": 0,
        "4": 2,
        "5": 39
      },
      "services": [
        "Catering"
      ],
      "attributes": {
        "Service options": [
          "Delivery",
          "On-site services"
        ],
        "Accessibility": [
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards",
          "Mobile payments (NFC)"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Castle+Event+Catering/@46.2862389,-119.28168269999999,13.99z/data=!4m16!1m7!3m6!1s0x54987acf99385fd1:0x5812d6126283d9dc!2sCastle+Event+Catering!8m2!3d46.2862389!4d-119.28168269999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987acf99385fd1:0x5812d6126283d9dc!8m2!3d46.2862389!4d-119.28168269999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "hours": "Open 24 hours",
      "mapsUrl": "https://www.google.com/maps/place/Red+Mountain+Kitchen/@46.2088744,-119.12068719999999,14z/data=!4m8!1m2!2m1!1sRed+Mountain+Kitchen!3m4!1s0x54987959dd26698d:0xe09de5193034c693!8m2!3d46.2088744!4d-119.12068719999999",
      "street": "212 W Kennewick Ave Ste",
      "postalCode": "99336",
      "lat": 46.2088744,
      "lng": -119.1206872,
      "weeklyHours": null,
      "reviewsPerScore": {
        "1": 1,
        "2": 0,
        "3": 2,
        "4": 4,
        "5": 40
      },
      "services": [
        "Catering",
        "British restaurant",
        "Event venue",
        "Kids' parties",
        "Cooking classes",
        "Event planning",
        "Kitchen supply",
        "Restaurant"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ],
        "Amenities": [
          "Restroom"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards",
          "Mobile payments (NFC)"
        ],
        "Parking": [
          "Free street parking",
          "Free parking lot",
          "On-site parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Red+Mountain+Kitchen/@46.2088744,-119.12068719999999,13.99z/data=!4m16!1m7!3m6!1s0x54987959dd26698d:0xe09de5193034c693!2sRed+Mountain+Kitchen!8m2!3d46.2088744!4d-119.12068719999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987959dd26698d:0xe09de5193034c693!8m2!3d46.2088744!4d-119.12068719999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Villa%E2%80%99s+Catering/@46.221851099999995,-119.23017329999999,14z/data=!4m8!1m2!2m1!1sVilla%E2%80%99s+Catering!3m4!1s0x549879002264ab0b:0xe5d878c159bc9129!8m2!3d46.221851099999995!4d-119.23017329999999",
      "street": "1030 N Center Pkwy ste N313",
      "postalCode": "99336",
      "lat": 46.2218511,
      "lng": -119.2301733,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–8pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–8pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–8pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–8pm"
        },
        {
          "day": "Friday",
          "hours": "8am–8pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 3
      },
      "services": [
        "Catering"
      ],
      "attributes": {
        "Service options": [
          "Delivery"
        ],
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Villa%E2%80%99s+Catering/@46.221851099999995,-119.23017329999999,13.99z/data=!4m16!1m7!3m6!1s0x549879002264ab0b:0xe5d878c159bc9129!2sVilla%E2%80%99s+Catering!8m2!3d46.221851099999995!4d-119.23017329999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879002264ab0b:0xe5d878c159bc9129!8m2!3d46.221851099999995!4d-119.23017329999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Fresh+Choice+Catering/@46.2081637,-119.2798787,14z/data=!4m8!1m2!2m1!1sFresh+Choice+Catering!3m4!1s0x549877344acd7b1f:0x18a9d2108c2941cc!8m2!3d46.2081637!4d-119.2798787",
      "street": "2798 Katie Rd",
      "postalCode": "99338",
      "lat": 46.2081637,
      "lng": -119.2798787,
      "weeklyHours": null,
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 2
      },
      "services": [
        "Catering"
      ],
      "attributes": {
        "Service options": [
          "Delivery"
        ]
      },
      "verified": false,
      "reviewsUrl": "https://www.google.com/maps/place/Fresh+Choice+Catering/@46.2081637,-119.2798787,13.99z/data=!4m16!1m7!3m6!1s0x549877344acd7b1f:0x18a9d2108c2941cc!2sFresh+Choice+Catering!8m2!3d46.2081637!4d-119.2798787!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549877344acd7b1f:0x18a9d2108c2941cc!8m2!3d46.2081637!4d-119.2798787!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Catering+to+You/@46.2086803,-119.1457854,14z/data=!4m8!1m2!2m1!1sCatering+to+You!3m4!1s0x5498791e0dea4945:0x4e9c3747ba3cedf9!8m2!3d46.2086803!4d-119.1457854",
      "street": "2001 W Kennewick Ave",
      "postalCode": "99336",
      "lat": 46.2086803,
      "lng": -119.1457854,
      "weeklyHours": null,
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 1
      },
      "services": [
        "Catering"
      ],
      "attributes": {
        "Service options": [
          "Delivery"
        ],
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": false,
      "reviewsUrl": "https://www.google.com/maps/place/Catering+to+You/@46.2086803,-119.1457854,13.99z/data=!4m16!1m7!3m6!1s0x5498791e0dea4945:0x4e9c3747ba3cedf9!2sCatering+to+You!8m2!3d46.2086803!4d-119.1457854!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498791e0dea4945:0x4e9c3747ba3cedf9!8m2!3d46.2086803!4d-119.1457854!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/The+Local+Bite+%26+Tropic+Hunger+Food+Truck/@46.21226,-119.11160029999999,14z/data=!4m8!1m2!2m1!1sThe+Local+Bite+%26+Tropic+Hunger+Food+Truck!3m4!1s0x54c0132d8cf2c437:0x6bcce35e1034ba43!8m2!3d46.21226!4d-119.11160029999999",
      "street": "325 E Columbia Dr",
      "postalCode": "99336",
      "lat": 46.21226,
      "lng": -119.1116003,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "11am–2pm"
        },
        {
          "day": "Tuesday",
          "hours": "11am–2pm"
        },
        {
          "day": "Wednesday",
          "hours": "11am–2pm"
        },
        {
          "day": "Thursday",
          "hours": "11am–2pm"
        },
        {
          "day": "Friday",
          "hours": "Closed"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 4,
        "2": 1,
        "3": 2,
        "4": 5,
        "5": 44
      },
      "services": [
        "Catering",
        "Takeout",
        "Hawaiian food",
        "Delivery",
        "Sandwiches"
      ],
      "attributes": {
        "Service options": [
          "Outdoor seating",
          "Delivery",
          "Takeout"
        ],
        "Highlights": [
          "Live music",
          "Fast service"
        ],
        "Popular for": [
          "Lunch",
          "Dinner",
          "Solo dining"
        ],
        "Accessibility": [
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking"
        ],
        "Offerings": [
          "Alcohol",
          "Quick bites",
          "Comfort food",
          "Coffee",
          "Small plates"
        ],
        "Dining options": [
          "Catering"
        ],
        "Amenities": [
          "Restroom"
        ],
        "Atmosphere": [
          "Trendy",
          "Casual"
        ],
        "Crowd": [
          "Family-friendly",
          "Students",
          "Tourists"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards",
          "Mobile payments (NFC)"
        ],
        "Children": [
          "Kids' menu",
          "Good for kids"
        ],
        "Parking": [
          "Free street parking",
          "Free parking lot",
          "Parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/The+Local+Bite+%26+Tropic+Hunger+Food+Truck/@46.21226,-119.11160029999999,13.99z/data=!4m16!1m7!3m6!1s0x54c0132d8cf2c437:0x6bcce35e1034ba43!2sThe+Local+Bite+%26+Tropic+Hunger+Food+Truck!8m2!3d46.21226!4d-119.11160029999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54c0132d8cf2c437:0x6bcce35e1034ba43!8m2!3d46.21226!4d-119.11160029999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Porter%27s+Real+Barbecue/@46.2207289,-119.223615,14z/data=!4m8!1m2!2m1!1sPorter%27s+Real+Barbecue!3m4!1s0x549879f313e303ef:0xed517119c337b46c!8m2!3d46.2207289!4d-119.223615",
      "street": "1022 N Columbia Center Blvd",
      "postalCode": "99336",
      "lat": 46.2207289,
      "lng": -119.223615,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "11am–8pm"
        },
        {
          "day": "Tuesday",
          "hours": "11am–8pm"
        },
        {
          "day": "Wednesday",
          "hours": "11am–8pm"
        },
        {
          "day": "Thursday",
          "hours": "11am–8pm"
        },
        {
          "day": "Friday",
          "hours": "11am–9pm"
        },
        {
          "day": "Saturday",
          "hours": "11am–9pm"
        },
        {
          "day": "Sunday",
          "hours": "11am–8pm"
        }
      ],
      "reviewsPerScore": {
        "1": 38,
        "2": 40,
        "3": 81,
        "4": 151,
        "5": 698
      },
      "services": [
        "Catering",
        "Barbecue"
      ],
      "attributes": {
        "Service options": [
          "Outdoor seating",
          "Delivery",
          "On-site services",
          "Takeout",
          "Dine-in"
        ],
        "Highlights": [
          "Fast service",
          "Local specialties"
        ],
        "Popular for": [
          "Lunch",
          "Dinner",
          "Solo dining"
        ],
        "Accessibility": [
          "Wheelchair-accessible seating",
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ],
        "Offerings": [
          "Alcohol",
          "Quick bites",
          "Comfort food",
          "Small plates",
          "Beer"
        ],
        "Dining options": [
          "Catering",
          "Counter service",
          "Dessert",
          "Seating"
        ],
        "Amenities": [
          "Restroom",
          "Wi-Fi"
        ],
        "Atmosphere": [
          "Trendy",
          "Casual"
        ],
        "Crowd": [
          "Family-friendly",
          "Groups",
          "Students",
          "Tourists"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards",
          "Mobile payments (NFC)"
        ],
        "Children": [
          "High chairs",
          "Good for kids"
        ],
        "Parking": [
          "Free street parking",
          "Free parking lot",
          "Parking"
        ],
        "Pets": [
          "Dogs allowed outside"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Porter%27s+Real+Barbecue/@46.2207289,-119.223615,13.99z/data=!4m16!1m7!3m6!1s0x549879f313e303ef:0xed517119c337b46c!2sPorter%27s+Real+Barbecue!8m2!3d46.2207289!4d-119.223615!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879f313e303ef:0xed517119c337b46c!8m2!3d46.2207289!4d-119.223615!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Fiesta%27s+Catering+%26+Event+Center/@46.227976,-119.23739599999999,14z/data=!4m8!1m2!2m1!1sFiesta%27s+Catering+%26+Event+Center!3m4!1s0x54987a1b7d64a825:0xd01ae248b4fae83e!8m2!3d46.227976!4d-119.23739599999999",
      "street": "8524 W Gage Blvd #130",
      "postalCode": "99336",
      "lat": 46.227976,
      "lng": -119.237396,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "11am–8:30pm"
        },
        {
          "day": "Tuesday",
          "hours": "11am–8:30pm"
        },
        {
          "day": "Wednesday",
          "hours": "11am–8:30pm"
        },
        {
          "day": "Thursday",
          "hours": "11am–8:30pm"
        },
        {
          "day": "Friday",
          "hours": "11am–9pm"
        },
        {
          "day": "Saturday",
          "hours": "11am–9pm"
        },
        {
          "day": "Sunday",
          "hours": "11am–8:30pm"
        }
      ],
      "reviewsPerScore": {
        "1": 58,
        "2": 40,
        "3": 64,
        "4": 180,
        "5": 520
      },
      "services": [
        "Food & drink catering",
        "Event venue"
      ],
      "attributes": {
        "From the business": [
          "Latino-owned"
        ],
        "Accessibility": [
          "Wheelchair-accessible seating",
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ],
        "Amenities": [
          "Restroom"
        ],
        "Payments": [
          "Debit cards",
          "Credit cards"
        ],
        "Parking": [
          "Free parking lot",
          "On-site parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Fiesta%27s+Catering+%26+Event+Center/@46.227976,-119.23739599999999,13.99z/data=!4m16!1m7!3m6!1s0x54987a1b7d64a825:0xd01ae248b4fae83e!2sFiesta%27s+Catering+%26+Event+Center!8m2!3d46.227976!4d-119.23739599999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987a1b7d64a825:0xd01ae248b4fae83e!8m2!3d46.227976!4d-119.23739599999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/CG+Public+House+and+Catering/@46.205207699999995,-119.2460594,14z/data=!4m8!1m2!2m1!1sCG+Public+House+and+Catering!3m4!1s0x5498775ea9481665:0x6358d52cbfb891f0!8m2!3d46.205207699999995!4d-119.2460594",
      "street": "9221 W Clearwater Ave A",
      "postalCode": "99336",
      "lat": 46.2052077,
      "lng": -119.2460594,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "Closed"
        },
        {
          "day": "Tuesday",
          "hours": "7am–9pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–9pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–9pm"
        },
        {
          "day": "Friday",
          "hours": "7am–9pm"
        },
        {
          "day": "Saturday",
          "hours": "7am–9pm"
        },
        {
          "day": "Sunday",
          "hours": "7am–3pm"
        }
      ],
      "reviewsPerScore": {
        "1": 75,
        "2": 71,
        "3": 76,
        "4": 213,
        "5": 531
      },
      "services": [
        "Catering",
        "American restaurant",
        "Bar",
        "Brunch",
        "Restaurant",
        "Cocktail bar",
        "Event venue",
        "Family restaurant"
      ],
      "attributes": {
        "From the business": [
          "LGBTQ+ owned",
          "Women-owned"
        ],
        "Service options": [
          "Outdoor seating",
          "Curbside pickup",
          "Delivery",
          "On-site services",
          "Takeout",
          "Dine-in"
        ],
        "Highlights": [
          "Great coffee",
          "Great desserts",
          "Great cocktails",
          "Fireplace",
          "Fast service",
          "Local specialties",
          "Sports",
          "Great wine list",
          "Great beer selection"
        ],
        "Popular for": [
          "Breakfast",
          "Lunch",
          "Dinner",
          "Solo dining"
        ],
        "Accessibility": [
          "Wheelchair-accessible seating",
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ],
        "Offerings": [
          "Alcohol",
          "Vegetarian options",
          "Hard liquor",
          "Cocktails",
          "Happy hour drinks",
          "Happy hour food",
          "Comfort food",
          "Coffee",
          "Private dining room",
          "Small plates",
          "Healthy options",
          "Wine",
          "Beer"
        ],
        "Dining options": [
          "Brunch",
          "Catering",
          "Counter service",
          "Dessert",
          "Seating",
          "Table service"
        ],
        "Amenities": [
          "Bar onsite",
          "Restroom",
          "Wi-Fi"
        ],
        "Atmosphere": [
          "Cozy",
          "Quiet",
          "Casual"
        ],
        "Crowd": [
          "Family-friendly",
          "Groups",
          "LGBTQ+ friendly",
          "Transgender safespace"
        ],
        "Planning": [
          "Accepts reservations"
        ],
        "Payments": [
          "Debit cards",
          "Mobile payments (NFC)",
          "Credit cards"
        ],
        "Children": [
          "Kids' menu",
          "High chairs",
          "Good for kids",
          "Changing table"
        ],
        "Parking": [
          "Free parking lot",
          "Parking"
        ],
        "Pets": [
          "Dogs allowed",
          "Dogs allowed outside"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/CG+Public+House+and+Catering/@46.205207699999995,-119.2460594,13.99z/data=!4m16!1m7!3m6!1s0x5498775ea9481665:0x6358d52cbfb891f0!2sCG+Public+House+and+Catering!8m2!3d46.205207699999995!4d-119.2460594!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498775ea9481665:0x6358d52cbfb891f0!8m2!3d46.205207699999995!4d-119.2460594!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Eden+Advanced+Pest+Technologies/@46.2233555,-119.2344241,14z/data=!4m8!1m2!2m1!1sEden+Advanced+Pest+Technologies!3m4!1s0x549879303b6eca97:0x2b430d9466511da1!8m2!3d46.2233555!4d-119.2344241",
      "street": "8350 W Grandridge Blvd Ste 200",
      "postalCode": "99336",
      "lat": 46.2233555,
      "lng": -119.2344241,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Tuesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Wednesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Thursday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Friday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Saturday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Sunday",
          "hours": "Open 24 hours"
        }
      ],
      "reviewsPerScore": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 7,
        "5": 354
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ],
        "From the business": [
          "LGBTQ+ friendly",
          "Veteran-owned"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Eden+Advanced+Pest+Technologies/@46.2233555,-119.2344241,13.99z/data=!4m16!1m7!3m6!1s0x549879303b6eca97:0x2b430d9466511da1!2sEden+Advanced+Pest+Technologies!8m2!3d46.2233555!4d-119.2344241!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879303b6eca97:0x2b430d9466511da1!8m2!3d46.2233555!4d-119.2344241!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Kennewick/@46.213208599999994,-119.1723957,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Kennewick!3m4!1s0x54987908fd67d29f:0xdd0ead79d47263c9!8m2!3d46.213208599999994!4d-119.1723957",
      "street": "3902 W Clearwater Ave Ste 109",
      "postalCode": "99336",
      "lat": 46.2132086,
      "lng": -119.1723957,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "7am–6pm"
        },
        {
          "day": "Tuesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–6pm"
        },
        {
          "day": "Friday",
          "hours": "7am–6pm"
        },
        {
          "day": "Saturday",
          "hours": "8am–5pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 23,
        "2": 4,
        "3": 11,
        "4": 94,
        "5": 3160
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Kennewick/@46.213208599999994,-119.1723957,13.99z/data=!4m16!1m7!3m6!1s0x54987908fd67d29f:0xdd0ead79d47263c9!2sPointe+Pest+Control+-+Kennewick!8m2!3d46.213208599999994!4d-119.1723957!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987908fd67d29f:0xdd0ead79d47263c9!8m2!3d46.213208599999994!4d-119.1723957!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Richland/@46.2337829,-119.21856129999999,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Richland!3m4!1s0x54987a2603092183:0xf1e536a74705936d!8m2!3d46.2337829!4d-119.21856129999999",
      "street": "1900 Fowler St Ste D",
      "postalCode": "99352",
      "lat": 46.2337829,
      "lng": -119.2185613,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "7am–6pm"
        },
        {
          "day": "Tuesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–6pm"
        },
        {
          "day": "Friday",
          "hours": "7am–6pm"
        },
        {
          "day": "Saturday",
          "hours": "8am–5pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 23,
        "2": 12,
        "3": 8,
        "4": 51,
        "5": 2175
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Richland/@46.2337829,-119.21856129999999,13.99z/data=!4m16!1m7!3m6!1s0x54987a2603092183:0xf1e536a74705936d!2sPointe+Pest+Control+-+Richland!8m2!3d46.2337829!4d-119.21856129999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987a2603092183:0xf1e536a74705936d!8m2!3d46.2337829!4d-119.21856129999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Pasco/@46.227215199999996,-119.1188437,14z/data=!4m8!1m2!2m1!1sPointe+Pest+Control+-+Pasco!3m4!1s0x54987f7745f74987:0x9ffb3d0690f288b4!8m2!3d46.227215199999996!4d-119.1188437",
      "street": "2021 W A St",
      "postalCode": "99301",
      "lat": 46.2272152,
      "lng": -119.1188437,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "7am–6pm"
        },
        {
          "day": "Tuesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–6pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–6pm"
        },
        {
          "day": "Friday",
          "hours": "7am–6pm"
        },
        {
          "day": "Saturday",
          "hours": "8am–5pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 18,
        "2": 4,
        "3": 7,
        "4": 61,
        "5": 1861
      },
      "services": [
        "Pest control"
      ],
      "attributes": {},
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Pointe+Pest+Control+-+Pasco/@46.227215199999996,-119.1188437,13.99z/data=!4m16!1m7!3m6!1s0x54987f7745f74987:0x9ffb3d0690f288b4!2sPointe+Pest+Control+-+Pasco!8m2!3d46.227215199999996!4d-119.1188437!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987f7745f74987:0x9ffb3d0690f288b4!8m2!3d46.227215199999996!4d-119.1188437!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Proterra+Pest+Control/@46.2121427,-119.2039866,14z/data=!4m8!1m2!2m1!1sProterra+Pest+Control!3m4!1s0x549879c7dc5d4c07:0x50163ba6bee4e154!8m2!3d46.2121427!4d-119.2039866",
      "street": "6201 W Clearwater Ave",
      "postalCode": "99336",
      "lat": 46.2121427,
      "lng": -119.2039866,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–5pm"
        },
        {
          "day": "Friday",
          "hours": "8am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 21,
        "2": 2,
        "3": 6,
        "4": 56,
        "5": 1532
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Proterra+Pest+Control/@46.2121427,-119.2039866,13.99z/data=!4m16!1m7!3m6!1s0x549879c7dc5d4c07:0x50163ba6bee4e154!2sProterra+Pest+Control!8m2!3d46.2121427!4d-119.2039866!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879c7dc5d4c07:0x50163ba6bee4e154!8m2!3d46.2121427!4d-119.2039866!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Bamboo+Pest+Control+Servicing/@46.2125518,-119.1979224,14z/data=!4m8!1m2!2m1!1sBamboo+Pest+Control+Servicing!3m4!1s0x549879c332e7ee8b:0x313cb450c5d4b470!8m2!3d46.2125518!4d-119.1979224",
      "street": "5628 W Clearwater Ave STE D-1",
      "postalCode": "99336",
      "lat": 46.2125518,
      "lng": -119.1979224,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–5pm"
        },
        {
          "day": "Friday",
          "hours": "9am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 14,
        "2": 2,
        "3": 0,
        "4": 20,
        "5": 862
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Bamboo+Pest+Control+Servicing/@46.2125518,-119.1979224,13.99z/data=!4m16!1m7!3m6!1s0x549879c332e7ee8b:0x313cb450c5d4b470!2sBamboo+Pest+Control+Servicing!8m2!3d46.2125518!4d-119.1979224!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879c332e7ee8b:0x313cb450c5d4b470!8m2!3d46.2125518!4d-119.1979224!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Sprague+Pest+Solutions/@46.2520606,-119.07433619999999,14z/data=!4m8!1m2!2m1!1sSprague+Pest+Solutions!3m4!1s0x54987e66cf651c7b:0x3c3fa41fb4080842!8m2!3d46.2520606!4d-119.07433619999999",
      "street": "2138 N Commercial Ave",
      "postalCode": "99301",
      "lat": 46.2520606,
      "lng": -119.0743362,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–5pm"
        },
        {
          "day": "Friday",
          "hours": "8am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 4,
        "2": 0,
        "3": 0,
        "4": 8,
        "5": 417
      },
      "services": [
        "Pest control",
        "Bird control"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "On-site services"
        ],
        "Accessibility": [
          "Wheelchair-accessible parking"
        ],
        "Amenities": [
          "Gender-neutral restroom"
        ],
        "Crowd": [
          "LGBTQ+ friendly",
          "Transgender safespace"
        ],
        "Parking": [
          "Free street parking",
          "Free parking lot",
          "On-site parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Sprague+Pest+Solutions/@46.2520606,-119.07433619999999,13.99z/data=!4m16!1m7!3m6!1s0x54987e66cf651c7b:0x3c3fa41fb4080842!2sSprague+Pest+Solutions!8m2!3d46.2520606!4d-119.07433619999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987e66cf651c7b:0x3c3fa41fb4080842!8m2!3d46.2520606!4d-119.07433619999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Duo+Pest+Control/@46.276238,-119.2757594,14z/data=!4m8!1m2!2m1!1sDuo+Pest+Control!3m4!1s0x5498653ca4519393:0x17771c994e8a596c!8m2!3d46.276238!4d-119.2757594",
      "street": "713 Jadwin Ave Rm 6",
      "postalCode": "99352",
      "lat": 46.276238,
      "lng": -119.2757594,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–8pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–8pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–8pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–8pm"
        },
        {
          "day": "Friday",
          "hours": "9am–8pm"
        },
        {
          "day": "Saturday",
          "hours": "9am–8pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 4,
        "2": 1,
        "3": 0,
        "4": 3,
        "5": 178
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ],
        "Parking": [
          "Free parking lot",
          "On-site parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Duo+Pest+Control/@46.276238,-119.2757594,13.99z/data=!4m16!1m7!3m6!1s0x5498653ca4519393:0x17771c994e8a596c!2sDuo+Pest+Control!8m2!3d46.276238!4d-119.2757594!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498653ca4519393:0x17771c994e8a596c!8m2!3d46.276238!4d-119.2757594!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Alta+Pest+Control/@46.3257445,-119.3048931,14z/data=!4m8!1m2!2m1!1sAlta+Pest+Control!3m4!1s0x54986556deb38d67:0xea8abe30af49590e!8m2!3d46.3257445!4d-119.3048931",
      "street": "2513 Logan St #103",
      "postalCode": "99354",
      "lat": 46.3257445,
      "lng": -119.3048931,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "5am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "5am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "5am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "5am–5pm"
        },
        {
          "day": "Friday",
          "hours": "5am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "6am–2pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 47,
        "2": 5,
        "3": 7,
        "4": 51,
        "5": 1222
      },
      "services": [
        "Pest control",
        "Building inspection"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "On-site services"
        ],
        "Accessibility": [
          "Wheelchair-accessible seating",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ],
        "Amenities": [
          "Gender-neutral restroom"
        ],
        "Crowd": [
          "LGBTQ+ friendly",
          "Transgender safespace"
        ],
        "Planning": [
          "Appointment required"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Alta+Pest+Control/@46.3257445,-119.3048931,13.99z/data=!4m16!1m7!3m6!1s0x54986556deb38d67:0xea8abe30af49590e!2sAlta+Pest+Control!8m2!3d46.3257445!4d-119.3048931!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54986556deb38d67:0xea8abe30af49590e!8m2!3d46.3257445!4d-119.3048931!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/EnviroGuard+Pest+Control/@46.2125518,-119.1979224,14z/data=!4m8!1m2!2m1!1sEnviroGuard+Pest+Control!3m4!1s0x68cd23cd4ef99423:0xc4f3f27974fe3ead!8m2!3d46.2125518!4d-119.1979224",
      "street": "5628 W Clearwater Ave Suite C16",
      "postalCode": "99336",
      "lat": 46.2125518,
      "lng": -119.1979224,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–4pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–4pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–4pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–4pm"
        },
        {
          "day": "Friday",
          "hours": "8am–4pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 29,
        "2": 9,
        "3": 12,
        "4": 39,
        "5": 815
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/EnviroGuard+Pest+Control/@46.2125518,-119.1979224,13.99z/data=!4m16!1m7!3m6!1s0x68cd23cd4ef99423:0xc4f3f27974fe3ead!2sEnviroGuard+Pest+Control!8m2!3d46.2125518!4d-119.1979224!16s%2Fg%2F11ckvg1dmb!3m7!1s0x68cd23cd4ef99423:0xc4f3f27974fe3ead!8m2!3d46.2125518!4d-119.1979224!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Insight+Pest+Solutions/@46.2312236,-119.2320283,14z/data=!4m8!1m2!2m1!1sInsight+Pest+Solutions!3m4!1s0x54987bbd7d45e821:0x30391753bc2a41cc!8m2!3d46.2312236!4d-119.2320283",
      "street": "1333 Tapteal Dr #106",
      "postalCode": "99352",
      "lat": 46.2312236,
      "lng": -119.2320283,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "6am–6pm"
        },
        {
          "day": "Tuesday",
          "hours": "6am–6pm"
        },
        {
          "day": "Wednesday",
          "hours": "6am–6pm"
        },
        {
          "day": "Thursday",
          "hours": "6am–6pm"
        },
        {
          "day": "Friday",
          "hours": "6am–6pm"
        },
        {
          "day": "Saturday",
          "hours": "7am–4pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 17,
        "2": 3,
        "3": 4,
        "4": 38,
        "5": 622
      },
      "services": [
        "Pest control"
      ],
      "attributes": {},
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Insight+Pest+Solutions/@46.2312236,-119.2320283,13.99z/data=!4m16!1m7!3m6!1s0x54987bbd7d45e821:0x30391753bc2a41cc!2sInsight+Pest+Solutions!8m2!3d46.2312236!4d-119.2320283!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987bbd7d45e821:0x30391753bc2a41cc!8m2!3d46.2312236!4d-119.2320283!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Bee+Team/@46.2087959,-119.27751699999999,14z/data=!4m8!1m2!2m1!1sBee+Team!3m4!1s0x5498778a91dc47db:0x1a0192cadc2a1c1a!8m2!3d46.2087959!4d-119.27751699999999",
      "street": "212 Sarah Rd",
      "postalCode": "99338",
      "lat": 46.2087959,
      "lng": -119.277517,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–9pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–9pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–9pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–9pm"
        },
        {
          "day": "Friday",
          "hours": "8am–9pm"
        },
        {
          "day": "Saturday",
          "hours": "8am–9pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 25
      },
      "services": [
        "Bee relocation"
      ],
      "attributes": {},
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Bee+Team/@46.2087959,-119.27751699999999,13.99z/data=!4m16!1m7!3m6!1s0x5498778a91dc47db:0x1a0192cadc2a1c1a!2sBee+Team!8m2!3d46.2087959!4d-119.27751699999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498778a91dc47db:0x1a0192cadc2a1c1a!8m2!3d46.2087959!4d-119.27751699999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Essential+Pest+Control/@46.2553663,-119.1815949,14z/data=!4m8!1m2!2m1!1sEssential+Pest+Control!3m4!1s0x54987b4f88d71a65:0x4c295c8b94841b3b!8m2!3d46.2553663!4d-119.1815949",
      "street": "6908 W Argent Rd",
      "postalCode": "99301",
      "lat": 46.2553663,
      "lng": -119.1815949,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–5pm"
        },
        {
          "day": "Friday",
          "hours": "9am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "9am–12pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 24
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Service options": [
          "On-site services",
          "Language assistance"
        ],
        "Crowd": [
          "LGBTQ+ friendly",
          "Transgender safespace"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Essential+Pest+Control/@46.2553663,-119.1815949,13.99z/data=!4m16!1m7!3m6!1s0x54987b4f88d71a65:0x4c295c8b94841b3b!2sEssential+Pest+Control!8m2!3d46.2553663!4d-119.1815949!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987b4f88d71a65:0x4c295c8b94841b3b!8m2!3d46.2553663!4d-119.1815949!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Complete+Pest+Prevention/@46.2233555,-119.2344241,14z/data=!4m8!1m2!2m1!1sComplete+Pest+Prevention!3m4!1s0x54987baaf437b433:0xa2087b8535ab69a9!8m2!3d46.2233555!4d-119.2344241",
      "street": "8350 W Grandridge Blvd #406",
      "postalCode": "99336",
      "lat": 46.2233555,
      "lng": -119.2344241,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "7am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "7am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–5pm"
        },
        {
          "day": "Friday",
          "hours": "7am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 3,
        "2": 0,
        "3": 0,
        "4": 3,
        "5": 70
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Complete+Pest+Prevention/@46.2233555,-119.2344241,13.99z/data=!4m16!1m7!3m6!1s0x54987baaf437b433:0xa2087b8535ab69a9!2sComplete+Pest+Prevention!8m2!3d46.2233555!4d-119.2344241!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987baaf437b433:0xa2087b8535ab69a9!8m2!3d46.2233555!4d-119.2344241!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Senske+Lawn+Care+Services+-+Kennewick/@46.2135343,-119.20830289999999,14z/data=!4m8!1m2!2m1!1sSenske+Lawn+Care+Services+-+Kennewick!3m4!1s0x549879944e3f92f1:0xf78b4e764d0bf9c5!8m2!3d46.2135343!4d-119.20830289999999",
      "street": "410 N Quay St",
      "postalCode": "99336",
      "lat": 46.2135343,
      "lng": -119.2083029,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "7am–8pm"
        },
        {
          "day": "Tuesday",
          "hours": "7am–8pm"
        },
        {
          "day": "Wednesday",
          "hours": "7am–8pm"
        },
        {
          "day": "Thursday",
          "hours": "7am–8pm"
        },
        {
          "day": "Friday",
          "hours": "7am–8pm"
        },
        {
          "day": "Saturday",
          "hours": "8am–4pm"
        },
        {
          "day": "Sunday",
          "hours": "8am–4pm"
        }
      ],
      "reviewsPerScore": {
        "1": 131,
        "2": 32,
        "3": 29,
        "4": 108,
        "5": 1952
      },
      "services": [
        "Pest control",
        "Sprinkler systems",
        "Outdoor lighting",
        "Lawn & garden care",
        "Tree planting & care"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "On-site services",
          "Language assistance"
        ],
        "Accessibility": [
          "Wheelchair-accessible seating",
          "Wheelchair-accessible entrance",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible restroom"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Senske+Lawn+Care+Services+-+Kennewick/@46.2135343,-119.20830289999999,13.99z/data=!4m16!1m7!3m6!1s0x549879944e3f92f1:0xf78b4e764d0bf9c5!2sSenske+Lawn+Care+Services+-+Kennewick!8m2!3d46.2135343!4d-119.20830289999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879944e3f92f1:0xf78b4e764d0bf9c5!8m2!3d46.2135343!4d-119.20830289999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Fox+Pest+Control+Kennewick/@46.2100369,-119.21018389999999,14z/data=!4m8!1m2!2m1!1sFox+Pest+Control+Kennewick!3m4!1s0x549879f92d264cad:0x11187cd237516def!8m2!3d46.2100369!4d-119.21018389999999",
      "street": "6713 W Clearwater Ave # F",
      "postalCode": "99336",
      "lat": 46.2100369,
      "lng": -119.2101839,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Tuesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Wednesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Thursday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Friday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Saturday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Sunday",
          "hours": "Open 24 hours"
        }
      ],
      "reviewsPerScore": {
        "1": 53,
        "2": 3,
        "3": 8,
        "4": 35,
        "5": 793
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Fox+Pest+Control+Kennewick/@46.2100369,-119.21018389999999,13.99z/data=!4m16!1m7!3m6!1s0x549879f92d264cad:0x11187cd237516def!2sFox+Pest+Control+Kennewick!8m2!3d46.2100369!4d-119.21018389999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879f92d264cad:0x11187cd237516def!8m2!3d46.2100369!4d-119.21018389999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Rose+Hart+Pest+Control/@46.2569423,-119.301149,14z/data=!4m8!1m2!2m1!1sRose+Hart+Pest+Control!3m4!1s0x5498719071a72ea7:0xce04197b8465ae4d!8m2!3d46.2569423!4d-119.301149",
      "street": "20 Valley View Cir",
      "postalCode": "99352",
      "lat": 46.2569423,
      "lng": -119.301149,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8am–5pm"
        },
        {
          "day": "Tuesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Wednesday",
          "hours": "8am–5pm"
        },
        {
          "day": "Thursday",
          "hours": "8am–5pm"
        },
        {
          "day": "Friday",
          "hours": "8am–5pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 11
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Rose+Hart+Pest+Control/@46.2569423,-119.301149,13.99z/data=!4m16!1m7!3m6!1s0x5498719071a72ea7:0xce04197b8465ae4d!2sRose+Hart+Pest+Control!8m2!3d46.2569423!4d-119.301149!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498719071a72ea7:0xce04197b8465ae4d!8m2!3d46.2569423!4d-119.301149!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/TriGuard+Pest+Control/@46.2313075,-119.2317825,14z/data=!4m8!1m2!2m1!1sTriGuard+Pest+Control!3m4!1s0x46dcc0f68a9b6e63:0x3ce08c0095abe4a0!8m2!3d46.2313075!4d-119.2317825",
      "street": "1333 Tapteal Dr #114",
      "postalCode": "99352",
      "lat": 46.2313075,
      "lng": -119.2317825,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "8:30am–5:30pm"
        },
        {
          "day": "Tuesday",
          "hours": "8:30am–5:30pm"
        },
        {
          "day": "Wednesday",
          "hours": "8:30am–5:30pm"
        },
        {
          "day": "Thursday",
          "hours": "8:30am–5:30pm"
        },
        {
          "day": "Friday",
          "hours": "8:30am–5:30pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 7,
        "2": 1,
        "3": 0,
        "4": 4,
        "5": 112
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/TriGuard+Pest+Control/@46.2313075,-119.2317825,13.99z/data=!4m16!1m7!3m6!1s0x46dcc0f68a9b6e63:0x3ce08c0095abe4a0!2sTriGuard+Pest+Control!8m2!3d46.2313075!4d-119.2317825!16s%2Fg%2F11ckvg1dmb!3m7!1s0x46dcc0f68a9b6e63:0x3ce08c0095abe4a0!8m2!3d46.2313075!4d-119.2317825!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Birch%27s+Lawn+Care%2C+LLC/@46.2144294,-119.2053897,14z/data=!4m8!1m2!2m1!1sBirch%27s+Lawn+Care%2C+LLC!3m4!1s0x5498788acef39203:0xeade347021b227bc!8m2!3d46.2144294!4d-119.2053897",
      "street": "6223 W Deschutes Ave #216",
      "postalCode": "99336",
      "lat": 46.2144294,
      "lng": -119.2053897,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–4pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–4pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–4pm"
        },
        {
          "day": "Friday",
          "hours": "9am–4pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 3,
        "2": 2,
        "3": 0,
        "4": 1,
        "5": 69
      },
      "services": [
        "Pest control",
        "Lawn & garden care"
      ],
      "attributes": {
        "Accessibility": [
          "Wheelchair-accessible parking"
        ],
        "From the business": [
          "Veteran-owned"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Birch%27s+Lawn+Care%2C+LLC/@46.2144294,-119.2053897,13.99z/data=!4m16!1m7!3m6!1s0x5498788acef39203:0xeade347021b227bc!2sBirch%27s+Lawn+Care%2C+LLC!8m2!3d46.2144294!4d-119.2053897!16s%2Fg%2F11ckvg1dmb!3m7!1s0x5498788acef39203:0xeade347021b227bc!8m2!3d46.2144294!4d-119.2053897!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Bass+Spray+Services/@46.2514539,-119.1814024,14z/data=!4m8!1m2!2m1!1sBass+Spray+Services!3m4!1s0x54987be85fdfc35b:0x9d6a0363b56f7592!8m2!3d46.2514539!4d-119.1814024",
      "street": "6904 W Franklin Rd",
      "postalCode": "99301",
      "lat": 46.2514539,
      "lng": -119.1814024,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Tuesday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Wednesday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Thursday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Friday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Saturday",
          "hours": "6:15am–8:30pm"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 7
      },
      "services": [
        "Pest control"
      ],
      "attributes": {},
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Bass+Spray+Services/@46.2514539,-119.1814024,13.99z/data=!4m16!1m7!3m6!1s0x54987be85fdfc35b:0x9d6a0363b56f7592!2sBass+Spray+Services!8m2!3d46.2514539!4d-119.1814024!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987be85fdfc35b:0x9d6a0363b56f7592!8m2!3d46.2514539!4d-119.1814024!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/All+Safe+Pest+Control/@46.222101699999996,-119.09441629999999,14z/data=!4m8!1m2!2m1!1sAll+Safe+Pest+Control!3m4!1s0x54987ed8bd3a5fd1:0x7aa76c1dc84abbf7!8m2!3d46.222101699999996!4d-119.09441629999999",
      "street": "620 W Ainsworth St",
      "postalCode": "99301",
      "lat": 46.2221017,
      "lng": -119.0944163,
      "weeklyHours": null,
      "reviewsPerScore": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 1,
        "5": 13
      },
      "services": [
        "Pest control",
        "Lawn & garden care"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "Language assistance"
        ],
        "Accessibility": [
          "Wheelchair-accessible parking"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/All+Safe+Pest+Control/@46.222101699999996,-119.09441629999999,13.99z/data=!4m16!1m7!3m6!1s0x54987ed8bd3a5fd1:0x7aa76c1dc84abbf7!2sAll+Safe+Pest+Control!8m2!3d46.222101699999996!4d-119.09441629999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987ed8bd3a5fd1:0x7aa76c1dc84abbf7!8m2!3d46.222101699999996!4d-119.09441629999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Brooks+%26+Hart+Pest+Control/@46.259699399999995,-119.30296059999999,14z/data=!4m8!1m2!2m1!1sBrooks+%26+Hart+Pest+Control!3m4!1s0x549871a2c485f939:0x67695453d80e30fd!8m2!3d46.259699399999995!4d-119.30296059999999",
      "street": "106 Skyline Dr",
      "postalCode": "99352",
      "lat": 46.2596994,
      "lng": -119.3029606,
      "weeklyHours": null,
      "reviewsPerScore": {
        "1": 1,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 9
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "Language assistance"
        ],
        "Crowd": [
          "LGBTQ+ friendly"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Brooks+%26+Hart+Pest+Control/@46.259699399999995,-119.30296059999999,13.99z/data=!4m16!1m7!3m6!1s0x549871a2c485f939:0x67695453d80e30fd!2sBrooks+%26+Hart+Pest+Control!8m2!3d46.259699399999995!4d-119.30296059999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549871a2c485f939:0x67695453d80e30fd!8m2!3d46.259699399999995!4d-119.30296059999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Orkin/@46.2466715,-119.0776281,14z/data=!4m8!1m2!2m1!1sOrkin!3m4!1s0x54987995d4b8ee83:0xdfec54792aac2e40!8m2!3d46.2466715!4d-119.0776281",
      "street": "1931 E Superior St B",
      "postalCode": "99301",
      "lat": 46.2466715,
      "lng": -119.0776281,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Tuesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Wednesday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Thursday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Friday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Saturday",
          "hours": "Open 24 hours"
        },
        {
          "day": "Sunday",
          "hours": "Open 24 hours"
        }
      ],
      "reviewsPerScore": {
        "1": 66,
        "2": 5,
        "3": 17,
        "4": 57,
        "5": 543
      },
      "services": [
        "Pest control"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "On-site services"
        ],
        "Accessibility": [
          "Wheelchair-accessible entrance"
        ],
        "Planning": [
          "Appointment required"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Orkin/@46.2466715,-119.0776281,13.99z/data=!4m16!1m7!3m6!1s0x54987995d4b8ee83:0xdfec54792aac2e40!2sOrkin!8m2!3d46.2466715!4d-119.0776281!16s%2Fg%2F11ckvg1dmb!3m7!1s0x54987995d4b8ee83:0xdfec54792aac2e40!8m2!3d46.2466715!4d-119.0776281!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
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
      "mapsUrl": "https://www.google.com/maps/place/Epic+Lawn+Care+%26+Pest+Control/@46.2027603,-119.17981789999999,14z/data=!4m8!1m2!2m1!1sEpic+Lawn+Care+%26+Pest+Control!3m4!1s0x549879addaf53c0f:0x1d9df54dba5c68ff!8m2!3d46.2027603!4d-119.17981789999999",
      "street": "705 S Union St",
      "postalCode": "99336",
      "lat": 46.2027603,
      "lng": -119.1798179,
      "weeklyHours": [
        {
          "day": "Monday",
          "hours": "9am–4:30pm"
        },
        {
          "day": "Tuesday",
          "hours": "9am–4:30pm"
        },
        {
          "day": "Wednesday",
          "hours": "9am–4:30pm"
        },
        {
          "day": "Thursday",
          "hours": "9am–4:30pm"
        },
        {
          "day": "Friday",
          "hours": "9am–12pm"
        },
        {
          "day": "Saturday",
          "hours": "Closed"
        },
        {
          "day": "Sunday",
          "hours": "Closed"
        }
      ],
      "reviewsPerScore": {
        "1": 36,
        "2": 1,
        "3": 3,
        "4": 5,
        "5": 210
      },
      "services": [
        "Pest control",
        "Irrigation supplies",
        "Lawn & garden care",
        "Snow removal"
      ],
      "attributes": {
        "Service options": [
          "Online estimates",
          "On-site services"
        ]
      },
      "verified": true,
      "reviewsUrl": "https://www.google.com/maps/place/Epic+Lawn+Care+%26+Pest+Control/@46.2027603,-119.17981789999999,13.99z/data=!4m16!1m7!3m6!1s0x549879addaf53c0f:0x1d9df54dba5c68ff!2sEpic+Lawn+Care+%26+Pest+Control!8m2!3d46.2027603!4d-119.17981789999999!16s%2Fg%2F11ckvg1dmb!3m7!1s0x549879addaf53c0f:0x1d9df54dba5c68ff!8m2!3d46.2027603!4d-119.17981789999999!9m1!1b1!16s%2Fg%2F11ckvg1dmb?entry=ttu"
    }
  ]
};

/** Straight-line distance in miles between two coordinates. */
export function milesBetween(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 3958.8;
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
