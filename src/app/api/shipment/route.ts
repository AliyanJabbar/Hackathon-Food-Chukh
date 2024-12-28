// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const API_TOKEN = process.env.SHIPPO_API_TOKEN;

//   if (!API_TOKEN) {
//     return NextResponse.json({ error: "API token is missing" }, { status: 400 });
//   }

//   const shipmentData = {
//     address_from: {
//       name: "Sender Name",
//       company: "Sender Company",
//       street1: "1234 Sender St",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94107",
//       country: "US",
//       phone: "+1234567890",
//       email: "sender@example.com",
//     },
//     address_to: {
//       name: "Receiver Name",
//       company: "Receiver Company",
//       street1: "5678 Receiver St",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90001",
//       country: "US",
//       phone: "+0987654321",
//       email: "receiver@example.com",
//     },
//     parcels: [
//       {
//         length: 10,
//         width: 5,
//         height: 5,
//         distance_unit: "in",
//         weight: 2,
//         mass_unit: "lb",
//       },
//     ],
//     async: false,  // Change this to `true` if you want asynchronous processing
//   };

//   try {
//     const response = await fetch("https://api.goshippo.com/shipments/", {
//       method: "POST",
//       headers: {
//         Authorization: `ShippoToken ${API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(shipmentData),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       return NextResponse.json({ error }, { status: response.status });
//     }

//     const data = await response.json();
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
