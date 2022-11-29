var config = {
    style: 'mapbox://styles/yk539/cla7m7hxd000014s19b9kmzt8',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5MDdyZ2ppMHdmYTQwazR0NzV6YW9uYiJ9.nWSA2XNz2ZjtZusursxXcA',
    showMarkers: false,
    markerColor: 'red',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Revealing the invisible challenges of pedestrians with disability',
    para1: "Since December 2021, throughout the Seoul metropolitan area, Solidarity Against Disability Discrimination (SADD) has been holding protests at subway stations to increase awareness of the mobility rights of people with disabilities. The Seoul metropolitan area, covering 12.6 percent of the Republic of Korea's land area, is home to 50.25 percent of the country’s population. People with disabilities are increasingly seen as particularly vulnerable pedestrians in this area, according to statistics. Being among the most vulnerable pedestrians, this study focused on the rights to mobility for those with disabilities. It investigated at the circumstances under which they might lead a stable and safe life in the urban area. Twenty people with disabilities participated in semi-structured in-depth interviews for qualitative research in order to conduct a current situation assessment and learn directly about the challenges of the most vulnerable pedestrians in the Seoul metropolitan area.",
    subtitle: '  Focusing on Seoul, the Republic of Korea',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen',
    footer: 'Source',
    chapters: [
        {
            id: '1-1Chapter',
            alignment: 'center',
            hidden: false,
            title: 'Why Seoul?',
            image: '',
            description: 'Seoul is the capital city of South Korea with high population density. The number of people with disabilities in this area was point forty-five million (453,031) in 2001, but it has more than doubled to one milion1,082,077 in 2018. More than 8.46 thousand people with disabilities live in the deep blue areas.',
            location: {
                center: [127.00313, 37.56275],
                zoom: 9.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'Routes',
                opacity: 0,
            },
            {
                layer: 'Quick Charger - wheelchair',
                opacity: 0,
            },
            {
                layer: 'Elevator-subway',
                opacity: 0,
            },
            {
                layer: 'Iso_Lift',
                opacity: 0,
            },
            {
                layer: 'Iso_Elvt',
                opacity: 0,
            },
            {
                layer: 'Seoul -number of PWD',
                opacity: 0.7,
            }
            ],
            onChapterExit: [
            {
                layer: 'Routes',
                opacity: 0,
            },
            {
                layer: 'Quick Charger - wheelchair',
                opacity: 0,
            },
            {
                layer: 'Elevator-subway',
                opacity: 0,
            },
            {
                layer: 'Iso_Lift',
                opacity: 0,
            },
            {
                layer: 'Iso_Elvt',
                opacity: 0.7,
            },
            {
                layer: 'Seoul -number of PWD',
                opacity: 0.7,
            }
            ]
        },
        {
            id: '1-2',
            alignment: 'left',
            hidden: false,
            title: 'Why Seoul?',
            image:'https://cdn.gukjenews.com/news/photo/202211/2587479_2595809_80.jpg',
            description: 'In 2004, the movement in the Seoul metropolitan area to abolish discrimination against people with disabilities related to the occupation of subways and buses was successful in installing elevators in 90% of the subways in the city. Yet, people with disabilities still do not have safe and stable access to bus, taxi, and subway platforms. Many disabled people groups have consistently raised their voices on this issue, but in reality, little has changed, and protests started again in December 2021. Throughout the Seoul metropolitan area, Solidarity Against Disability Discrimination,SADD, has been holding protests at subway stations to increase awareness of the mobility rights of people with disabilities. Among the 25 districts in Seoul, Gangbuk-gu has the highest proportion of persons with disabilities over 2.5% of the total population.',
            location: {
                center: [126.87380, 37.53757],
                zoom: 10.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'Routes',
                opacity: 0,
            },
            {
                layer: 'Quick Charger - wheelchair',
                opacity: 0,
            },
            {
                layer: 'Elevator-subway',
                opacity: 0,
            },
            {
                layer: 'Iso_Lift',
                opacity: 0,
            },
            {
                layer: 'Iso_Elvt',
                opacity: 0.7,
            },
            {
                layer: 'Seoul -number of PWD',
                opacity: 0.7,
            }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1-1-1 Chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://flexible.img.hani.co.kr/flexible/normal/640/427/imgdb/original/2022/0802/20220802502814.jpg',
            description: '<b> Disability Rights Activists Protesting in front of Seoul Metropolitan Police Agency <b> <p>Seoul is the capital city of South Korea with high population density. The number of people with disabilities in this area was point forty-five million (453,031) in 2001, but it has more than doubled to one milion1,082,077 in 2018.More than 8.46 thousand people with disabilities live in the deep blue areas.',
            location: {
                center: [126.97224, 37.57427],
                zoom: 16.95,
                pitch: 73.25,
                bearing: 47.01
            },
           mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1-3',
            alignment: 'right',
            hidden: false,
            title: 'Seoul Geographical Characteristics',
           image: 'http://www.travelnbike.com/news/photo/201510/13970_14165_357.jpg',
            //image: 'http://img.tvchosun.com/sitedata/image/201911/29/2019112990109_thumb.jpg',
            description: 'The diagram is a road slope in Seoul. In Seoul, 8 out of 25 autonomous districts had a slope of 7% or higher, and 9 were flat areas with a slope of less than 3%.I n addition, it was investigated that 42 large and small mountains were located in Seoul.',
            location: {
                center: [126.980, 37.588],
                zoom: 16.37,
                pitch: 60,
                //bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-4',
            alignment: 'right',
            hidden: false,
            //title: 'Seoul Geographical Characteristics',
           image: 'http://img.tvchosun.com/sitedata/image/201911/29/2019112990109_thumb.jpg',
            description: ' Due to these topographical characteristics, there are alleys that are difficult for even people without disabilities to climb, and wheelchair rollover accidents are constantly occurring.',
            location: {
                center: [126.9256461490327, 37.56968371629236],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-9',
            alignment: 'left',
            hidden: false,
            title: 'Current Situation of Subway Accessibility',
            image: 'images/Picture2.jpg',
            description: 'When the shortest distance to the entrance of the subway station was summarized, Seocho-gu and Gangnam-gu, the districts with a significantly lower ratio of persons with disabilities than the average in Seoul, showed the smallest distance. In addition, the districts that take the longest from the station are Guro-gu and Geumcheon-gu, which are blue, and these two districts have a high proportion of people with disabilities. As such, urban transportation infrastructure such as subway stations is not distributed throughout, and accessibility is different.',
            location: {
                center: [127.03879, 37.49874],
                zoom: 12.04,
                pitch: 45,
                bearing: -40.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-5',
            alignment: 'left',
            hidden: false,
            //title: 'Current Situation of Subway Accessibility',
            //image: 'LEGEND',
            description: '<b>Subway Station Accessibility<b><p>5, 10 min with wheelchair.Map explanation ',
            location: {
                ccenter: [126.96993, 37.55371],
                zoom: 16.05,
                pitch: 51.90,
                bearing: 17.68
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: 'Current State in SMA',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/WHY.png?raw=true',
            //image-height: '10vh',
            description: "The growing number of people with disabilities <p> Lack of effectiveness of laws and regulations <p> Research on people with disabilities is slow<p>SADD subway protests increase negative image",
            location: {
                center: [127.00313, 37.56275],
                zoom: 10.00,
                //pitch: 12.50,
                //bearing: 0.00
                //bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-7',
            alignment: 'center',
            hidden: false,
            title: 'Research Question',
            description: "• What challenges do pedestrians with disabilities encounter that aren't depicted on the current maps? <p> • What distinctive difficulties do various categories of people with disabilities face?",
            location: {
                center: [127.00313, 37.56275],
                zoom: 11.00,
                //pitch: 12.50,
                //bearing: 0.00
                //bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '1-8',
            alignment: 'center',
            hidden: false,
            title: 'Methodology',
            description: "•",
            location: {
                center: [127.00313, 37.56275],
                zoom: 11.00,
                //pitch: 12.50,
                //bearing: 0.00
                //bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-0',
            alignment: 'center',
            hidden: false,
            title: 'Interviews with the people with disability',
            image: 'https://raw.githubusercontent.com/yk539/countermapping-webmaps/main/Project/images/IMG_2028.JPG',
            description: 'There have been 20 interviews with individuals with disabilities so far. Most of them were visually imapired, two were physically impaired with electric wheelchair, and one was a combined vision and hearing loss person. And the interviews were conducted by their  travel bevaior in Seoul metropolitan area.Moreover, the go-along interviews ware followed with three individuals with disability.',
            location: {
                center: [126.87380, 37.7757],
                zoom: 10.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-1',
            alignment: 'center',
            hidden: false,
            title: 'Planning a trip',
            image: 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
            description: "<i>It's a little disappointing that I have to ‘investigate’ and plan everything in advance even if I just want to go out and play on the spur of the moment. (So-Hyeon, 22)</i> <p> Planning for mobility and transportation is more necessary for the individuals with disabilities than for people without disabilities.Because there are numerous considerations from the existence of accessible ramps to provide any guide services. </P>",
            location: {
                center: [126.87380, 37.53757],
                zoom: 10.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-2',
            alignment: 'left',
            hidden: false,
            //title: 'Planning a trip',
            image : 'https://img.freepik.com/premium-vector/disabled-people-community-service-vector-illustration-flat-people-character-help-each-other-talk-support-together-man-with-leg-prosthesis_109722-3216.jpg',
            description: '<b> Source of Travel Information<b><p> When asked where they get their information, many interviewers indicate they rely on others around them. They understand how to use the app, but the information is frequently out of date, so they check with their colleagues first. And wheelchair users checked the street view about whether the slope is steep or if there is any ramps to enter the buildings.',
            location: {
                center: [126.87380, 37.53757],
                zoom: 10.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-1-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Planning a trip',
            description: '<b> Source of Travel Information<b> <p> Mobility Instructor <P> A walking instructor is also used by those who walk alone or where walking is vital. They inspect the new environment with freshman students or persons who have begun working and moved to other areas, informing them of potentially dangerous spots like drains in the picture. This is provided by some local welfare center.',
            image : 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
            location: {
               center: [127.16920, 37.55083],
               zoom: 17.00,
               pitch: 60.00,
               bearing: -52.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-1-identifier',
            alignment: 'left',
            hidden: false,
            description: '<b>Why do people with disabilities must plan<b> <p> Barriers : Uncertainty, Safety issues <P> Lack of resources :  Information, Networks, Economic <p>But what if they have problems getting this information? For example. The older people with disabilities get, the more difficult it is to participate in these networks and to use maps or other tools. As the proportion of those aged 65 and over among registered disabled people is rapidly increasing, this problem is urgent In the planning trips process, there are so many considerations concerning unpredictability and safety, as well as so many other restrictions# that they frequently become increasingly isolated.',
            //image : 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
           location: {
           center: [126.981090, 37.52394],
           zoom: 12.52,
           pitch: 60.50,
           bearing: 0.00
       },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5-2-identifier',
            alignment: 'center',
            hidden: false,
            title: 'On a trip',
            //image: 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
            description: 'We devided into <b> Walk/Roll, Subway and Paratransit taxi<b>.<p> From this part, we will use the semi-structured interviews and go-along interviews materials.<p> In addition to public transportation such as cars (63%), intercity and express buses (10.7%), and trains (8.1%), disabled taxis (8.1%) and special transportation (5.3%) were also highly used.',
            location: {
                center: [126.87380, 37.53757],
                zoom: 10.00,
                pitch: 12.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2-2',
            alignment: 'left',
            hidden: false,
            title: 'Minho, 30 ',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/IMG_1917.JPG?raw=true',
            description: 'Minho, is visually impaired and this route was his way home from work. He is using the cane but needs accompany who can guide him for the right direction. This time, he was with his father but usually with the personal assist service person. I walked from the subway station to the house. The same route, map says takes 9 mins but we spent our time walking 15mins.',
            location: {
                center: [126.97176, 37.57629],
                zoom: 15.86,
                pitch: 55.50,
                bearing: -35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Minho, 30 ',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/7db110f48d7c2e97fe37736476af226e33c95a3c/Project/images/IMG_1920.MP4?raw=true',
            description: 'TBD with Video',
            location: {
                center: [126.97176, 37.57629],
                zoom: 15.86,
                pitch: 55.50,
                bearing: -35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: '7-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/IMG_1956.JPG?raw=true',
            description: 'Jaewoo has visual impairments but he was accompanied by his guide dog. He was on his way to work using paratransit taxi. He frequently goes at work very early. Because there is a scarcity of quantity, people must wait till uncertain times. This time, we spent around 40 mins from his house to his workplace.',
            location: {
                center: [126.97750, 37.49277],
                zoom: 12.08,
                pitch: 66.14,
                bearing: -10.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            //image: 'images/IMG_1956.jpg',
            description: 'TBD with video',
            location: {
                center: [126.97750, 37.49277],
                zoom: 12.08,
                pitch: 66.14,
                bearing: -10.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/7db110f48d7c2e97fe37736476af226e33c95a3c/Project/images/IMG_2052.MP4?raw=true',
            description: 'Mi-young rides the subway in an electric wheelchair. She says she almost usually follows her assistant service person. It shows how she tagged the card. From kakaomap, the route is only take 30 mins but we took 45mins.Also, she mentioned that the subway elevators were always full with people without disability and lift was not functioning very well in the subway station',
            location: {
              center: [126.92288, 37.50216],
              zoom: 14.33,
              pitch: 65.13,
              bearing: 50.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mi-Young, 53',
            //image: 'images/IMG_2042.gif',
            description: 'TBD with Video',
            location: {
              center: [126.92288, 37.50216],
              zoom: 14.33,
              pitch: 65.13,
              bearing: 50.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Whats Next?',
            //image: 'images/IMG_2042.gif',
            description: 'They are restricted from traveling alone due to information and economic restrictions and uncountable considerations. So they should have accompany for many reasons.Even while there are some changes in physical situations, the system is not keeping up.This leads to the third point. According to the research, paratransit cab drivers, station staff, and service providers have little understanding of individuals with disabilities. Last but not least, because of these constraints, it is critical to investigate and develop more dependable and personalized alternatives for all types of disability.',
            location: {
              center: [127.17867, 37.52585],
              zoom: 8.86,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
