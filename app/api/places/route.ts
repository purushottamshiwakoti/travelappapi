import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        
        // const places = [
        //     {
        //       name: "Mount Everest",
        //       price:"1008",
        //       description: "Mount Everest, standing at 8,848.86 meters (29,031.7 feet) above sea level, is the highest peak in the world. Located in the Himalayas on the border between Nepal and China's Tibet Autonomous Region, Everest is a pinnacle of human achievement and a magnet for adventurers and mountaineers from around the globe. The awe-inspiring views from Everest Base Camp and the challenging trekking routes to its summit make it a must-visit destination for those seeking adventure and natural beauty.",
        //       image: "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg"
        //     },
        //     {
        //       name: "Kathmandu Valley",
        //       price:"200",
        //       description: "Kathmandu Valley, nestled in the heart of Nepal, is a cultural and historical treasure trove. Home to seven UNESCO World Heritage Sites, including Durbar Squares in Kathmandu, Patan, and Bhaktapur, as well as iconic temples like Swayambhunath and Pashupatinath, the valley showcases the rich heritage and architecture of the ancient Newar civilization. Visitors can wander through narrow alleyways lined with traditional brick houses, explore centuries-old palaces and temples, and immerse themselves in the vibrant atmosphere of this bustling urban center.",
        //       image: "https://cdn.britannica.com/48/10548-004-B1063E67/Kathmandu-Nepal-Valley-background-Bairavkund-Range.jpg"
        //     },
        //     {
        //       name: "Pokhara",
        //       price:"300",
        //       description: "Pokhara, often referred to as the 'Gateway to the Annapurna Circuit,' is a picturesque city nestled in the lap of the Himalayas. Surrounded by snow-capped peaks and serene lakes, Pokhara is a paradise for nature lovers and adventure enthusiasts alike. Visitors can enjoy boating on Phewa Lake, paragliding over the Pokhara Valley, and trekking to nearby viewpoints like Sarangkot for stunning panoramic views of the Annapurna and Dhaulagiri ranges. With its tranquil ambiance and breathtaking vistas, Pokhara offers a perfect escape from the hustle and bustle of city life.",
        //       image: "https://cdn.getyourguide.com/img/tour/644a48af7225e.jpeg/97.jpg"
        //     },
        //     {
        //       name: "Chitwan National Park",
        //       price:"400",
        //       description: "Chitwan National Park, situated in the subtropical lowlands of southern Nepal, is a haven for wildlife enthusiasts and nature lovers. This UNESCO World Heritage Site is renowned for its rich biodiversity, including endangered species such as Bengal tigers, one-horned rhinoceroses, and Gharial crocodiles. Visitors can embark on jungle safaris, canoe rides along the Rapti River, and guided nature walks to spot exotic flora and fauna in their natural habitat. With its lush forests, grasslands, and wetlands, Chitwan offers a unique opportunity to experience the wonders of Nepal's wildlife up close.",
        //       image: "https://www.andbeyond.com/wp-content/uploads/sites/5/indian-elephant-chitwan-nepal.jpg"
        //     },
        //     {
        //       name: "Lumbini",
        //       price:"450",
        //       description: "Lumbini, located in the Rupandehi district of Nepal, is the birthplace of Siddhartha Gautama, the founder of Buddhism and the revered spiritual teacher known as Gautama Buddha. This sacred pilgrimage site attracts millions of visitors each year, who come to pay their respects at the Maya Devi Temple and explore the archaeological ruins and monastic complexes surrounding the birthplace. Lumbini is a place of profound spiritual significance and tranquility, where visitors can meditate under the Bodhi tree and reflect on the teachings of Buddha amidst serene surroundings.",
        //       image: "https://www.nepalsanctuarytreks.com/wp-content/uploads/2023/05/8F3FC504-8BE1-499F-BF4C-06EC99493224.jpg.webp"
        //     },
        //     {
        //       name: "Annapurna Circuit",
        //       price:"500",
        //       description: "The Annapurna Circuit is one of the most iconic trekking routes in the world, offering a mesmerizing journey through diverse landscapes, remote villages, and breathtaking mountain scenery. Starting from the lush foothills of the Himalayas, the trail ascends through rhododendron forests, alpine meadows, and high mountain passes, culminating in awe-inspiring views of the Annapurna and Dhaulagiri ranges. Along the way, trekkers encounter traditional Gurung and Thakali villages, ancient monasteries, and pristine natural beauty at every turn. Whether you're an experienced mountaineer or a novice trekker, the Annapurna Circuit promises an unforgettable adventure amidst the towering peaks of the Nepalese Himalayas.",
        //       image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/05/Hiker-800.jpg"
        //     },
        //     {
        //       name: "Bhaktapur",
        //       price:"200",
        //       description: "Bhaktapur, also known as Bhadgaon or the 'City of Devotees,' is an ancient city in the Kathmandu Valley renowned for its well-preserved medieval architecture, intricate wood carvings, and vibrant cultural heritage. With its cobbled streets, towering pagodas, and majestic palace squares, Bhaktapur exudes an aura of timeless charm and authenticity. Visitors can explore the Durbar Square, home to the 55-Window Palace and Nyatapola Temple, wander through traditional pottery and weaving workshops, and savor the local delicacies in cozy cafes and eateries. Bhaktapur offers a glimpse into Nepal's glorious past and a chance to experience its living cultural traditions.",
        //       image: "https://lp-cms-production.imgix.net/2019-06/4d089c9067149867a7055c28eb6c9650-nyatapola-temple.jpg"
        //     },
        //     {
        //       name: "Nagarkot",
        //       price:"250",
        //       description: "Nagarkot, perched on a ridge northeast of Kathmandu Valley, is a popular hill station renowned for its panoramic views of the Himalayas, including Mount Everest, Annapurna, and Langtang ranges. The hilltop town offers a tranquil retreat from the hustle and bustle of city life, with its cool climate, lush forests, and serene ambiance. Visitors can hike to nearby viewpoints like Nagarkot Tower or simply relax and soak in the stunning vistas of snow-capped peaks stretching across the horizon. Whether you're an avid photographer, nature enthusiast, or simply seeking a peaceful getaway, Nagarkot promises an unforgettable experience amidst the splendor of the Himalayas.",
        //       image: "https://media.sublimetrails.com/uploads/img/untitled-design--40-.webp"
        //     },
        //     {
        //       name: "Langtang National Park",
        //       price:"600",
        //       description: "Langtang National Park, located in the central Himalayas of Nepal, is a pristine wilderness area renowned for its breathtaking alpine scenery, diverse flora and fauna, and rich cultural heritage. The park is home to rare wildlife species such as red pandas, snow leopards, and Himalayan tahrs, as well as vibrant rhododendron forests, glacier-fed rivers, and towering peaks. Visitors can embark on trekking adventures to Langtang Valley, Kyanjin Gompa, and Tserko Ri for panoramic views of the Langtang Lirung and Ganesh Himal ranges. With its remote trails, tranquil monasteries, and awe-inspiring landscapes, Langtang offers an immersive wilderness experience unlike any other.",
        //       image: "https://www.holidaystonepal.com/media/files/Blogs/langtang-national-park-in-nepal.jpeg"
        //     },
        //     {
        //       name: "Rara Lake",
        //       price:"800",
        //       description: "Rara Lake, nestled in the remote wilderness of western Nepal's Rara National Park, is the largest and deepest freshwater lake in the country. Surrounded by pristine forests, snow-capped peaks, and alpine meadows, Rara Lake is a natural paradise for outdoor enthusiasts and nature lovers. Visitors can trek through rhododendron and pine forests, camp along the lakes",
        //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAjxvFjRzUgem8hyAg1pJbqxZXArLC9OHVCOmdownWw3OiA0kuKqlI2Btg1Nyg5YuB1E&usqp=CAU"
        //     }]  
            
          const place=  await db.places.findMany({
             
            })

            return NextResponse.json({message:"Successfully created places",place   },{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
        
    }
}