require("dotenv").config();
const db = require("../db");
const { Climb, Feature, User, SendLog } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
    const climbs = [
        new Climb({
            name: "freerider",
            type: "full ascent",
            grade: "5.13a",
            description:
                "Freerider is the Astroman of the new millennium. This route is climbing at its finest. The route follows complex crack systems up the southwest face of El Capitan. Essentially it is the Salathe wall with a few variations used (pioneered by Alex Huber) to avoid the numerous 5.13 crux pitches first freed by Paul Piana and Todd Skinner in the mid 80's. Famously free soloed by Alex Honnold in June 2017.",
            pitches: 30,
            length: 1000,
            images: [
                "https://i.natgeofe.com/n/e3759aac-18c0-4519-9b4f-3b80410abace/alex-honnold-free-solo-el-capitan-2016.jpg?w=1084.125&h=724.5",
                "https://www.planetmountain.com/img/1/48806.jpg",
                "https://images.squarespace-cdn.com/content/v1/5ee06f2bd2eb670e23f4559e/1592027611522-OD20M20WU85B1TR3ZEG0/A+-+Traverse++-+or+cover%3F.JPG",
            ],
            camera: {
                position: [-3, -1.4, 3.5],
                target: [-0.1, 0.1, 0.85],
            },
            points: [
                [-0.3, 1.65, 0.69],
                [-0.39, 1.56, 0.74],
                [-0.38, 1.15, 0.72],
                [-0.34, 1.15, 0.75],
                [-0.35, 1.03, 0.74],
                [-0.3, 0.9, 0.76],
                [-0.3, 0.78, 0.76],
                [-0.31, 0.58, 0.76],
                [-0.28, 0.54, 0.79],
                [-0.28, 0.04, 0.79],
                [-0.22, -0.38, 0.94],
                [-0.2, -0.3, 0.94],
                [-0.04, -0.42, 1.05],
                [0.01, -0.33, 1.1],
                [0.13, -0.6, 1.29],
                [0.11, -0.78, 1.35],
                [0.11, -1.38, 1.65],
            ],
        }),
        new Climb({
            name: "the nose",
            type: "full ascent",
            grade: "5.9",
            description:
                "El Capitan is home to numerous classic routes but 'The Nose' is the mega classic of them all. Towering nearly 3000' this route offers 31 pitches of superb climbing right up the middle of the wall. Often referred to as the 'best rock climb in the world' it is obvious why this route is one of the most sought after big walls in the valley and the world. Most of the pitches on this route are outstanding but with classics such as the 'Stovelegs', 'King Swing' and 'Great Roof' you'll wish it would never end. Although this is a great climb the route is still very demanding, sustained and exposed and not to be taken lightly. Here are a few tips that might improve a parties chances of success and enjoyment on the route. First if you and or your partner(s) can lead 5.10 solidly this will greatly speed up the amount of time it takes to climb this route as a large percentage of the climb is 5.10 or easier. Second study the topo carefully because there are numerous opportunities to either link or use alternate belays in order to skip pitches (a team of three can also skip hauling certain pitches with some good planning). Unavoidable factors are the number of parties on the route and the weather, both of which can make the route not so classic. For pitch by pitch info and topo's the 'Yosemite Big Walls Supertopo' guide book is highly recommended.",
            pitches: 31,
            length: 909,
            images: [
                "https://mountainproject.com/assets/photos/climb/115143916_medium_1535592682.jpg?cache=1683162934",
                "https://hardclimbs.info/wp-content/uploads/2023/07/nose-route.jpg",
                "https://mountainproject.com/assets/photos/climb/106933764_medium_1494152238.jpg?cache=1676684876",
            ],
            camera: {
                position: [0, -1.5, 4.5],
                target: [0.41, 0.03, 1.29],
            },
            points: [
                [0.38, 1.5, 1.17],
                [0.38, 1.48, 1.19],
                [0.4, 1.4, 1.21],
                [0.39, 1.3, 1.21],
                [0.41, 0.51, 1.22],
                [0.37, 0.53, 1.2],
                [0.39, 0.4, 1.22],
                [0.41, 0.03, 1.29],
                [0.55, 0.1, 1.23],
                [0.55, -0.27, 1.3],
                [0.46, -0.26, 1.34],
                [0.44, -0.76, 1.4],
                [0.49, -1.1, 1.46],
                [0.3, -1.33, 1.59],
            ],
        }),
        new Climb({
            name: "the dawn wall",
            type: "full ascent",
            grade: "5.14d",
            description:
                "The Dawn Wall, 5.14d, Grade VI, FA Tommy Caldwell and Kevin Jorgeson, January 2015. It’s had one repeat by Adam Ondra in eight days, November 2016. The hardest big wall climb in the world by far, and perhaps the hardest climb, if commitment, exposure and sustained difficulty are counted along with grades. You've all seen the movie. You all know the story. The Yosemite legend and the pebble wrestling apprentice working for years on the blankest big wall in the world. Tommy sends the traverses, Kevin keeps falling. Plenty of drama for cinema to milk. They send it. Voila, hardest big wall in the world. Obviously I haven't climbed this route, but I did some research on pitch-by-pitch stuff so we can all enjoy, dream, and imagine. There isn't much pitch-by-pitch beta to be found on the Internet, in Tommy's book, or elsewhere. Here's what I could piece together.P1 (5.12b) - It doesn't start easy. Begins on Mescalito for the first five pitches. Climb a blank, low-angle slab to a shallow crack. P2 (5.13a) - Continue on Mescalito up slabs that trend slowly steeper. P3 (5.13c) - Intermittent cracks/features on Mescalito. P4 (5.12b) - And so on. P5 (5.12d) - And so on. P6 (5.13c) - And.... so on. P7 (5.14a) - Leave Mescalito and begin following Adrift, a once-repeated aid route, at Anchorage Ledge. Follows an offset seam for a hundred feet. Protected by beaks only. P8 (5.13d) - Climb up and move right to join Mescalito again. P9 (5.13c) - Climb up and move right to join Mescalito again. P10 (5.14a) - Continue following Mescalito up the intermittent crack/dihedral system. P11 (5.13c) - Prepare for the Molar Traverse. P12 (5.14b) - The Molar Traverse. P13 (5.13b) - Preparing for the big-deal traverses. Climb off the flake up and left to the belay at the lighter-colored band. P14 (5.14d) - Traverse number one. Tiny pinches along the yellow band. P15 (5.14d) - Continuing to traverse along tiny edges and crimps until you're done! Oh wait.... P16 (5.14c) - Either the Loop Pitch (.14c) or the Dyno (.14d). Loop Pitch downclimbs, traverses, and loops around the blank 8-foot section that is otherwise done in a eight-foot double dyno to a two-hand edge. P17 (5.14a) - Up through some upward-facing flakes. P18 (5.13c) - Continues through an intermittent crack system. P19 (5.13c) - Ascend crossing New Dawn and traversing right. P20 (5.13c) - Climb up the 'features' to the left of the large dihedral in which New Dawn climbs. P21 (5.13c) - Keep on climbing up. P22 (5.12c) - To Wino Tower! P23 (5.9) - Easy pitch above Wino Tower P24 (5.11) - Long blank but moderate pitches heading up and right. P25 (5.11) - Continue as above. P26 (5.11d) - Up and around a flake, then traverse slightly right. P27 (5.11c) - Climb up then a longer traverse to join Mescalito once again. P28 (5.12c) - Joining Mescalito, and climbing higher in its crack system. P29 (5.12b) - Long pitch up to the Ship’s Bow. P30 (5.13a) - Begin a long traverse right, breaking away from Mescalito. P31 (5.12a) - Continue traversing. P32 (5.12b) - The final pitch, on the Tempest. You’re done!",
            pitches: 32,
            length: 758,
            images: [
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
                "https://api.time.com/wp-content/uploads/2015/01/el-capitan-climb.jpg",
                "https://cdn.climbing.com/wp-content/uploads/2016/12/pitch-14_dsf9581_gn-webjpg.jpg?width=730",
                "https://mountainproject.com/assets/photos/climb/109951921_medium_1494366127.jpg?cache=1616855320",
            ],
            camera: {
                position: [2.5, -1.4, 3.5],
                target: [0.85, 0.1, 1.05],
            },
            points: [
                [0.99, 1.45, 0.88],
                [1, 1.22, 0.95],
                [0.84, 1.28, 1.02],
                [0.76, 0.8, 1.06],
                [0.7, 0.42, 1.12],
                [0.65, 0.02, 1.17],
                [0.68, -0.04, 1.16],
                [0.72, 0.06, 1.12],
                [0.82, 0.06, 1.06],
                [0.92, -0.1, 1.02],
                [0.75, -0.32, 1.11],
                [0.7, -0.72, 1.2],
                [0.78, -1.08, 1.28],
                [0.87, -1.1, 1.35],
            ],
        }),
        new Climb({
            name: "lurking fear",
            type: "full ascent",
            grade: "5.13c",
            description:
                "Lurking Fear is the easiest aid climb on El Capitan. The aid is straight forward and the free climbing is excellent. The entire free climb checks in at 5.13c (FFA: Tommy Caldwell and Beth Rodden). Despite the moderate grade of this route, it doesn't see nearly as much traffic as The Nose or The Salathe. There is a fair amount of terrain that can be free climbed at a moderate grade and the aid on terrain harder than that tends to be mostly C1. The vast majority of the route seemed to haul easily. The SuperTopo warns about bad hauling on the upper pitches but we didn't find anything overly difficult or frustrating. There are few, good natural ledges on this route for bivying, besides Thanksgiving Ledge. The top of the route features seemingly endless slabs hence it is also popular to rap the route. This route is a good candidate for wall climbers looking for their first El Cap route. It would be difficult to give pitch-by-pitch beta so consult a topo such as the Yosemite Super Topo book.",
            pitches: 19,
            length: 606,
            images: [
                "https://mountainproject.com/assets/photos/climb/112043481_medium_1494318073.jpg?cache=1687582948",
                "https://images.bivy.com/fullsize/Lurking-Fear-5874316914720768.jpg",
                "https://mountainproject.com/assets/photos/climb/108875141_medium_1494298558.jpg?cache=1687977075",
            ],
            camera: {
                position: [-3.4, -1.4, 2.8],
                target: [-0.9, 0.5, 0.36],
            },
            points: [
                [-0.65, 1.65, 0.25],
                [-0.78, 1.45, 0.34],
                [-0.81, 1.45, 0.31],
                [-0.95, 1.15, 0.33],
                [-0.95, 0.8, 0.34],
                [-0.9, 0.5, 0.36],
                [-0.9, 0, 0.36],
                [-0.9, -0.48, 0.41],
                [-0.95, -0.68, 0.46],
            ],
        }),
        new Climb({
            name: "the west face",
            type: "full ascent",
            grade: "5.11c",
            description:
                "My Memory is a bit sketchy on some of the pitches....feel free to offer corrections... P1 11b slabby, bolt protected face crux starting off of a platform. P2 11b Thin, left arching crack undercling/layback. Lots of fixed gear P3 10a Slightly flaring thin corner, P4 Big Traverse. P5 10a Cool 10a arete/bulge move following by incredible 5.8 climbing, on atypically Yosemite sculpted jugs which turn out to be the trademark of the climb. Pay attention here, easy to get on the wrong crack.Link Pitches 6&7 with a 70m rope(68m)....but save some gear for the anchor! P6+P7 11c Long thin stemming corner with a oddly placed anchor at the crux. This will be the route crux for most. This anchor is not the end, keep going past the crux to the belay ledge above. With a 70m, you will have little rope to spare. P8 11c A fantastic short but strenous 30' (?) overhanging hand and finger crack; P9 7 Traverse to move belay. P10 10b Delicate 10 face moves to a nice 5.8 crack. P11 10b Incredibly beautiful pitch -- a lot of it steep. uncharacteristic well placed gigantic jugs and gorgeous rock.. P12 5.8 Easy climbing on face and cracks P13 9 Another fun jug-ridden pitch. -Link pitches 14 & 15 w 70m rope- P14 10d Great steep thin crack then delicate face. P15 7 classic long 5.7 corner pitch P16 2nd class move to the other end of the Thanksgiving ledge. P17 - 20 forgettable and rambling mid 5th....pick your poison The 'route' effectively is over after Thanksgiving Ledge....we soloed out.",
            pitches: 20,
            length: 545,
            images: [
                "https://mountainproject.com/assets/photos/climb/111219209_medium_1494343328.jpg?cache=1654288326",
                "https://flashpumped.com/wp-content/uploads/2023/07/west_face.jpg",
                "https://mountainproject.com/assets/photos/climb/113667622_medium_1507234967.jpg?cache=1574971022",
            ],
            camera: {
                position: [-4.4, 0, 0.3],
                target: [-0.97, 0.74, -0.3],
            },
            points: [
                [-0.59, 1.79, -0.35],
                [-0.73, 1.55, -0.45],
                [-0.84, 1.29, -0.38],
                [-0.87, 1.25, -0.34],
                [-1, 0.69, -0.16],
                [-0.97, 0.74, -0.3],
                [-1.05, 0.22, -0.22],
                [-1.1, 0.02, -0.3],
                [-1.14, -0.02, -0.3],
            ],
        }),
        new Climb({
            name: "north america wall",
            type: "full ascent",
            grade: "5.8",
            description:
                "An old school classic, the NA Wall was the first route to be climbed on the Southeast Face of El Cap, and skirts the large diorite blob resembling North America. This also means that it follows a rather wandering line up through the black diorite. There is loose rock, sketchy free climbing, and some funky aid, but all in all, this is a great line which visits some amazing places on the wall. Big Sur Ledge, Cyclops Eye, and the Igloo are all good bivies. Be prepared for many penjis and lower-outs, and have your free climbing hat on for many pitches. It's a bit heady in spots.",
            pitches: 28,
            length: 727,
            images: [
                "https://mountainproject.com/assets/photos/climb/110767234_medium_1494353506.jpg?cache=1574971026",
                "https://mountainproject.com/assets/photos/climb/118064105_medium_1574109934.jpg?cache=1574971026",
                "https://mountainproject.com/assets/photos/climb/120776331_medium_1622153377.jpg?cache=1651527068",
            ],
            camera: {
                position: [2.1, -1.5, 3.1],
                target: [1.32, 0.02, 0.81],
            },
            points: [
                [1.3, 1.31, 0.75],
                [1.32, 1.23, 0.8],
                [1.22, 0.99, 0.88],
                [1.32, 0.93, 0.86],
                [1.32, 0.81, 0.86],
                [1.19, 0.77, 0.86],
                [1.14, 0.8, 0.9],
                [1.1, 0.65, 0.92],
                [1.15, 0.64, 0.89],
                [1.07, 0.44, 0.92],
                [1.09, 0.31, 0.92],
                [1.16, 0.31, 0.87],
                [1.32, 0.02, 0.81],
                [1.29, -0.2, 0.86],
                [1.31, -0.4, 0.86],
                [1.29, -0.75, 0.88],
                [1.29, -0.78, 0.91],
            ],
        }),
        new Climb({
            name: "tangerine trip",
            type: "full ascent",
            grade: "5.9",
            description:
                "I'm not the person to describe this route, because I did it a zillion years ago when it had no piton scars (and we had no cams). Consult a recent topo. Nonetheless, I can say that, overall, the Tangerine Trip is a classic second generation El Cap route -- not an obvious line, but a honest, old-fashioned nail-up. The route ascends the most consistently overhanging part of El Cap, and there are no ledges. It's a good vertical adventure. One very important warning. There is a sharp edge toward the top of pitch two (see topo). Please be careful not to jumar with the rope hanging over this edge (see photo below). Unfortunately, while doing the Pacific Ocean Wall later in the spring of 1979, I watched Chris Robbins fall to his death when his rope was cut while jumaring.",
            pitches: 18,
            length: 758,
            images: [
                "https://mountainproject.com/assets/photos/climb/107927905_medium_1494251240.jpg?cache=1574971025",
                "https://images.bivy.com/fullsize/Tangerine-Trip-5786392323948544.jpg",
                "https://mountainproject.com/assets/photos/climb/107927900_medium_1494251239.jpg?cache=1574971025",
            ],
            camera: {
                position: [2.1, -1.5, 3.1],
                target: [2.08, 0.15, 0.82],
            },
            points: [
                [2.03, 1.03, 0.8],
                [2, 1, 0.83],
                [2.01, 0.9, 0.87],
                [1.98, 0.81, 0.87],
                [2.04, 0.78, 0.87],
                [2.08, 0.51, 0.84],
                [2.08, 0.15, 0.82],
                [2.17, 0, 0.82],
                [2.14, -0.2, 0.79],
                [2.24, -0.34, 0.78],
                [2.18, -0.33, 0.78],
                [2.1, -0.48, 0.74],
                [2.16, -0.51, 0.74],
                [2.16, -0.59, 0.74],
                [2.16, -0.62, 0.78],
            ],
        }),
        new Climb({
            name: "east buttress",
            type: "full ascent",
            grade: "5.10b",
            description:
                "The East Buttress of El Cap is a classic adventure up the right hand shoulder of El Cap. You don't get the feeling you're actually on El Cap, though you are afforded with great views of the tremendous southeast face. Of note, the route also serves as a convenient introduction to the East Slabs descent route which is very nearby upon topping out. As one of the more popular routes in the Valley, so be prepared for traffic jams and a long day, but because the crux comes early and most of the climbing is much more moderate, fast parties can usually finish the route in about half a day. Approach is typically via a slog up the ramp or the Moratorium. The latter adds four amazing (and more difficult) pitches to the East Buttress, but is somewhat out of character which is one of adventure.",
            pitches: 9,
            length: 364,
            images: [
                "https://mountainproject.com/assets/photos/climb/107524307_medium_1494195121.jpg?cache=1632797051",
                "https://mountainproject.com/assets/photos/climb/112148576_medium_1494323806.jpg?cache=1655389532",
                "https://mountainproject.com/assets/photos/climb/112148526_medium_1494323794.jpg?cache=1574971027",
            ],
            camera: {
                position: [3.4, -1.2, 3.5],
                target: [3.22, 0.19, 1.1],
            },
            points: [
                [3.18, 0.6, 0.93],
                [3.25, 0.45, 1.05],
                [3.26, 0.2, 1.1],
                [3.22, 0.19, 1.1],
                [3.33, -0.04, 1.16],
                [3.33, -0.29, 1.29],
                [3.37, -0.48, 1.39],
                [3.32, -0.51, 1.39],
            ],
        }),
    ];
    ///
    const climbMap = new Map(climbs.map((clm) => [clm.name, clm._id]));

    const features = [
        new Feature({
            name: "the dawn wall",
            climbID: climbMap.get("the dawn wall"),
            description: "Large flat surface... this needs work",
            images: [
                "https://i.pinimg.com/originals/b1/43/d8/b143d8635dde37df525587ac4d9968cd.jpg",
                "https://wp-cpr.s3.amazonaws.com/uploads/2019/05/tommy_caldwall_24_-_the_middle_of_the_dawn_wall_-_credit_brett_lowell_-_big_up_productions.jpg",
                "https://media.npr.org/assets/img/2018/11/20/action_tommy-climbing_-c-brettlowell-1-_custom-8c4bd69ff5b0219522be87f92b5216f7870ed588.jpg",
            ],
            camera: {
                position: [2.5, 2, 3.5],
                target: [0.85, 0.5, 1.05],
            },
            highlight: {
                position: [0.84, 0.72, 1.17],
            },
        }),
        new Feature({
            name: "the north america wall",
            climbID: climbMap.get("north america wall"),
            description: "big section of the wall that looks a bit like north america",
            images: [
                "https://mountainproject.com/assets/photos/climb/107781075_smallMed_1494210977.jpg?cache=1574971026",
                "https://i0.wp.com/www.climbingyosemite.com/wp-content/uploads/2015/06/Bissell_NA-wall-5.jpg?w=1300s",
                "https://i2.wp.com/www.climbingyosemite.com/wp-content/uploads/2015/06/Bissell_NA-wall-8.jpg?w=1300",
            ],
            camera: {
                position: [2.5, 1.2, 3.5],
                target: [1.4, 0.2, 0.75],
            },
            highlight: {
                position: [1.4, 0.2, 0.96],
            },
        }),
        new Feature({
            name: "the monster offwidth",
            climbID: climbMap.get("freerider"),
            description:
                "The Monster, probably the most notorious pitch on the route which involves about 50 meters of hideous offwidth climbing. The difficulty of this pitch will depend partly on cardiovascular fitness, the strength of your ankles, having a high pain threshold and skill in climbing wide cracks.",
            images: [
                "http://elcapreport.com/sites/default/files/10%20%20CACDSC_3476_0.jpg",
                "https://www.planetmountain.com/img/1/42085.jpg",
                "https://cdn.climbing.com/wp-content/uploads/2010/07/sorkin-squeezes-up-the-monster-offwidth.jpg",
                "https://dreaminvertical.files.wordpress.com/2009/10/elcapspire.jpg",
            ],
            camera: {
                position: [-1.2, 0.9, 2.2],
                target: [-0.28, 0.04, 0.79],
            },
            highlight: {
                position: [-0.31, 0.24, 0.89],
            },
        }),
        new Feature({
            name: "the heart ledge",
            climbID: climbMap.get("freerider"),
            description: "ledges on at the base of the feature known as the heart",
            images: [
                "https://www.rei.com/blog/wp-content/uploads/sites/4/2017/06/unicornhero.jpg?resize=1024%2C595",
                "https://mountainproject.com/assets/photos/climb/106284451_medium_1494094362.jpg?cache=1389916661",
                "https://www.rei.com/blog/wp-content/uploads/sites/4/2017/06/wakehonnold.jpg?resize=1024%2C602",
            ],
            camera: {
                position: [-1.3, 0.3, 2.3],
                target: [-0.04, -0.32, 1.05],
            },
            highlight: {
                position: [-0.08, -0.24, 1.07],
            },
        }),
        new Feature({
            name: "ribbon falls",
            description:
                "At 1,612ft, this towering, free-falling waterfall is said to be amongst the highest free-leaping waterfalls in the United States. Further inhibiting its notoriety is that it is a seasonal waterfall. Generally, its snow-fed watershed depletes by mid Summer. However, we’ve seen high snow pack years where it remained flowing pretty deep into late June and even July. Conversely, we’ve seen it in low snow pack years where it was almost a trickle by June.",
            images: [
                "https://images.world-of-waterfalls.com/Bridalveil_Fall_17_014_06162017-640x427.jpg",
                "https://images.world-of-waterfalls.com/Ribbon_Falls_004_04232004-640x480.jpg",
                "https://images.world-of-waterfalls.com/Bridalveil_Fall_17_020_06162017-427x640.jpg",
            ],
            camera: {
                position: [-2.8, 1.7, 2.5],
                target: [-2.94, 1, -0.87],
            },
            highlight: {
                position: [-2.94, 1.24, -0.87],
            },
        }),
        new Feature({
            name: "horsetail falls",
            description:
                "Horsetail Fall flows over the eastern edge of El Capitan in Yosemite Valley. This small waterfall usually flows only during winter and is easy to miss. On rare occasions during mid- to late February, it can glow orange when it's backlit by sunset. This unique lighting effect happens only on evenings with a clear sky when the waterfall is flowing. Even some haze or minor cloudiness can greatly diminish or eliminate the effect. Although entirely natural, the phenomenon is reminiscent of the human-caused Firefall that historically occurred from Glacier Point.",
            images: [
                "https://eloquentnature.files.wordpress.com/2020/01/c6g1760horsetailfall_screensaver.jpg",
                "https://4yosemite.com/wp-content/uploads/2023/02/Horsetail-Fall-Rockfall-b-scaled.jpg",
                "https://madera.objects.liquidweb.services/photos/14575-2017-02-16-firefall-day-3-0227-800x600.jpg",
            ],
            camera: {
                position: [3.7, 0.4, 3],
                target: [2.8, 0.4, 1.2],
            },
            highlight: {
                position: [2.8, 0.6, 1.2],
            },
        }),
    ];

    const users = [
        new User({
            name: "Andrew",
            email: "mullinsa428@gmail.com",
            gradePB: "5.11d",
            password: "letmeinplease",
        }),
        new User({
            name: "Stefano Ghisolfi",
            email: "climb@climbing.com",
            gradePB: "9b+",
            password: "letmeinplease",
        }),
    ];

    const sendLogs = [
        new SendLog({
            routeID: climbMap.get("the dawn wall"),
            userID: users[0]._id,
            grade: "5.impossible",
            description: "had a nice time checking it out from the ground",
        }),
    ];

    await Climb.insertMany(climbs);
    console.log("seeding climbs");

    await Feature.insertMany(features);
    console.log("seeding features");

    await User.insertMany(users);
    console.log("seeding users");

    await SendLog.insertMany(sendLogs);
    console.log("seeding sendlogs");
};

const run = async () => {
    await Climb.deleteMany({});
    await Feature.deleteMany({});
    await User.deleteMany({});
    await SendLog.deleteMany({});
    await main();
    db.close();
};

run();
