var config = {
    style: 'mapbox://styles/yk539/cla7m7hxd000014s19b9kmzt8',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5MDdyZ2ppMHdmYTQwazR0NzV6YW9uYiJ9.nWSA2XNz2ZjtZusursxXcA',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Revealing the invisible challenges of pedestrians with disability',
    para1: "Since December 2021, throughout the Seoul metropolitan area, Solidarity Against Disability Discrimination (SADD) has been holding protests at subway stations to increase awareness of the mobility rights of people with disabilities. The Seoul metropolitan area, covering 12.6 percent of the Republic of Korea's land area, is home to 50.25 percent of the country’s population. People with disabilities are increasingly seen as particularly vulnerable pedestrians in this area, according to statistics. Being among the most vulnerable pedestrians, this study focused on the rights to mobility for those with disabilities. It investigated at the circumstances under which they might lead a stable and safe life in the urban area. Twenty people with disabilities participated in semi-structured in-depth interviews for qualitative research in order to conduct a current situation assessment and learn directly about the challenges of the most vulnerable pedestrians in the Seoul metropolitan area.",
    subtitle: 'Focusing on Seoul, the Republic of Korea',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen',
    footer: 'Source: Oh, Y.-J., & Yun, K.-S. (2012). Urban Planning Factors for Socially Underprivileged Groups- Focused on the Urban Planning Code in the National Land Planning and Use Act. Journal of the Urban Design Institute of Korea, 13(4), 51–64. DBPIA.<p>Seoul  Amenities for People with Disabilities Statistics. (2022, April 11). <p>Seoul Government. (2022, July 20). Status of Disabled Persons in Seoul (By Type/Neighborhood) Statistics. <p>Seoul launches 3D map “S-Map” mobile version... Lost cultural assets and tourist attractions in VR: Smart City Comprehensive Portal. (2021, October 27). SMART CITY KOREA',
    chapters: [
//             {
//             id: 'Chapter0_0',
//             alignment: 'center',
//             hidden: false,
//             title: 'Seoul',
//             //image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/Seoul%20population.png?raw=true',
//             //description: 'Seoul is the capital city of South Korea with high population density. About one fifth of the total population lives on 0.6% of the land.<p> This is the hub of socioeconomic development, and the city agglomeration was carried out in collaboration with the Gyeonggi-do and Incheon-si. As such, the transportation infrastructure is also very developed.',
//             location: {
//                 center: [126.67407, 36.59867],
// zoom: 6.85,
// pitch: 0.00,
// bearing: 0.00
//             }
//            },
            {
            id: 'Chapter1_0',

            alignment: 'left',
            hidden: false,
            title: 'Seoul',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/Seoul%20population.png?raw=true',
            description: 'Seoul is the capital city of South Korea with high population density. About one fifth of the total population lives on 0.6% of the land.<p> This is the hub of socioeconomic development, and the city agglomeration was carried out in collaboration with the Gyeonggi-do and Incheon-si. As such, the transportation infrastructure is also very developed.',
            location: {
                center: [125.07462, 36.50732],
                zoom: 5.99,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
           { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }]
 
           } ,

            {
            id: 'Chapter1-1',
            alignment: 'center',
            hidden: false,
            title: 'Why Seoul?',
            image: '',
            description: 'The number of people with disabilities in this area was point forty-five million (453,031) in 2001, but it has more than doubled to one milion1,082,077 in 2018. More than 8.46 thousand people with disabilities live in the deep blue areas.',
            location: {
               center: [126.77232, 37.55733],
                zoom: 9.52,
                pitch: 0.00,
                bearing: 0.00
            },
             mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }]
 
        },
        {
            id: 'Chapter1_2',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/Seoul%20disability.png?raw=true',
            description: 'Over 42 percent of people with disabilities nationwide live in Seoul. Also, the number of people with disabilities over the age of 65 is rapidly increasing.',
            location: {
                 center: [126.77232, 37.55733],
                zoom: 9.52,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 }
            ]
        },
        { id: 'Chapter1_3',
            alignment: 'left',
            hidden: false,
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/legend.png?raw=true',
            description: "Among the 25 districts in Seoul, Gangbuk-gu has the highest proportion of persons with disabilities over 2.5% of the total population",
            location: {
                 center: [126.77232, 37.55733],
                zoom: 9.52,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },  
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0 }
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0}
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
                 center: [126.77232, 37.55733],
                zoom: 9.52,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:  [
            { layer: 'interview', opacity: 0 },  
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0 }
                ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0 }            
            ]
        },
// combine + chunk + no map        {
//             id: '1-1-1 Chapter',
//             alignment: 'left',
//             hidden: false,
//             title: '',
//             image: 'https://flexible.img.hani.co.kr/flexible/normal/640/427/imgdb/original/2022/0802/20220802502814.jpg',
//             description: '<b> Disability Rights Activists Protesting in front of Seoul Metropolitan Police Agency <b> <p>Seoul is the capital city of South Korea with high population density. The number of people with disabilities in this area was point forty-five million (453,031) in 2001, but it has more than doubled to one milion1,082,077 in 2018.More than 8.46 thousand people with disabilities live in the deep blue areas.',
//             location: {
//                 center: [126.97224, 37.57427],
//                 zoom: 16.95,
//                 pitch: 73.25,
//                 bearing: 47.01
//             },
//            mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [
//      { layer: 'interview', opacity: 0 },                     
//        { layer: 'jae-woo-test1', opacity: 0 },    
//             { layer: 'min-ho-test1', opacity: 0 },
//             { layer: 'mi-young-test1', opacity: 0 },
//             { layer: 'iso-elvt-merged', opacity: 0 },
//             { layer: 'elevator-subway', opacity: 0 },
//             { layer: 'two-districts', opacity: 0 },
//             { layer: 'number-of-PWD', opacity: 0.7 },
//             { layer: 'Seoul', opacity: 0 }  
//             ],
//             onChapterExit: [
//      { layer: 'interview', opacity: 0 },                     
//        { layer: 'jae-woo-test1', opacity: 0 },    
//             { layer: 'min-ho-test1', opacity: 0 },
//             { layer: 'mi-young-test1', opacity: 0 },
//             { layer: 'iso-elvt-merged', opacity: 0 },
//             { layer: 'elevator-subway', opacity: 0 },
//             { layer: 'two-districts', opacity: 0 },
//             { layer: 'number-of-PWD', opacity: 0.7 },
//             { layer: 'Seoul', opacity: 0 }  
//             ]
//         },

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
            onChapterEnter: [
             { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.1 },
            { layer: 'Seoul', opacity: 0 }  
            ],
            onChapterExit: [
             { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.1 },
            { layer: 'Seoul', opacity: 0 }              
            ]
        },
        {
            id: '1-4',
            alignment: 'right',
            hidden: false,
            //title: 'Seoul Geographical Characteristics-only pic',
           image: 'http://img.tvchosun.com/sitedata/image/201911/29/2019112990109_thumb.jpg',
            description: ' Due to these topographical characteristics, there are alleys that are difficult for even people without disabilities to climb, and wheelchair rollover accidents are constantly occurring.',
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
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },           
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.1 },
            { layer: 'Seoul', opacity: 0 }     
            ],
            onChapterExit: [
               { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0.8 },
            { layer: 'number-of-PWD', opacity: 0.1 },
            { layer: 'Seoul', opacity: 0 }     
            ]
        },
        {
            id: '1-9',
            alignment: 'left',
            hidden: false,
            title: 'Current Situation of Subway Accessibility',
            image: 'images/Picture2.jpg',
            description: 'When the shortest distance to the entrance of the subway station was summarized, Seocho-gu and Gangnam-gu, the districts with a significantly lower ratio of persons with disabilities than the average in Seoul, showed the smallest distance. In addition, the districts that take the longest from the station are Guro-gu and Geumcheon-gu, which are blue, and these two districts have a high proportion of people with disabilities. As such, urban transportation infrastructure such as subway stations is not distributed throughout, and accessibility is different.',
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },              
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0.8 },
            { layer: 'number-of-PWD', opacity: 0.8 },
            { layer: 'Seoul', opacity: 0 }             
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },             
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0.7 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.8 },
            { layer: 'Seoul', opacity: 0.85 } 
            ]
        },
        {
            id: 'Chapter1-17',
            alignment: 'left',
            hidden: false,
            //title: 'Current Situation of Subway Accessibility-isochorne',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/legend1.png?raw=true',
            description: ' <b>Subway Station Accessibility<b><p> With OSR isochrone features, we may see the accessibility of subway facilities with wheelcair in 5, 10, and 15 minutes. ',
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0.7 },
            { layer: 'elevator-subway', opacity: 0.7 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 } 
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 },  
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0.7 },
            { layer: 'elevator-subway', opacity: 0.7 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 } 
            ]
        },
         {
            id: 'Chapter1_10',
            //alignment: 'center',
            hidden: false,
            title: 'Current Seoul Situation',
            //image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/WHY.png?raw=true',
            description: "The growing number of people with disabilities  <p> Topographical challenges with hills and mountains <p>SADD subway protests increase negative image.",
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0.7 },
            { layer: 'elevator-subway', opacity: 0.7 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.85 } 
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ]
        },
        {
            id: '1-5-1',
            alignment: 'left',
            hidden: false,
           title: 'Local governments Trials to improve mobility rights',
            image: 'https://image.news1.kr/system/photos/2019/8/20/3783358/article.jpg/dims/optimize',
            description: "Government's own map showing slope <p> Eunpyeong-gu, Seoul, is the first municipality in the country to generate a pedestrian safety road name address guide and web that includes slope information for each road section in order to support safe movement routes for the transportation vulnerable by using data constructed with land slope information at 10m intervals across all road sections within the jurisdiction.",
            location: {
            center: [126.91233, 37.60061],
                zoom: 15.32,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ]
        },
           
        {
            id: 'interlude_2',
            alignment: 'center',
            hidden: false,
            title: 'Research Direction',
            description: "<b>Question</b><p>• What challenges do pedestrians with disabilities encounter that aren't depicted on the current maps? <p> • What distinctive difficulties do various categories of people with disabilities face?<p><b>Methodology: Qualitative></b><p> Participant observation, interviews, and news analysis <p>First-hand information was collected through participant observation of PWD’s daily lives in Seoul, and interviews with the disabled communities. Accordingly, we will use their footage that has already been featured in the news or other media in a manner that preserves their copyright. We want to supplement the missing information in the data-oriented mapping process, especially the invisible challenges of vulnerable pedestrians which cannot be presented by data.</p>",
            location: {
                center: [126.91233, 37.60061],
                zoom: 14.32,
                pitch: 0.00,
                bearing: 0.00
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
            onChapterEnter: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ],
            onChapterExit: [
           { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ]
        },
        {
            id: 'Chapter2_0',
            alignment: 'left',
            hidden: false,
            title: 'Interviews with the people with disability',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/interview%20guide.png?raw=true',
            description: 'There have been 20 interviews with individuals with disabilities so far. Most of them have visually imapairment, two have physically impairment d with electric wheelchair, and one was a combined vision and hearing loss person. And the interviews were conducted by their  travel behavior in Seoul metropolitan area.Moreover, the go-along interviews ware followed with three individuals with disability.',
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'interview', opacity: 0.8 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.2 } 
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0.8 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.2 } 
                // same, opacity: 0
            ]
        },
        {
            id: 'Chapter2-1',
            alignment: 'center',
            hidden: false,
            title: 'Planning a trip',
            //image: 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
            description: "<i>It's a little disappointing that I have to ‘investigate’ and plan everything in advance even if I just want to go out and play on the spur of the moment. (So-Hyeon, 22)<p>I use Street View function in map apps to spot the building's lamp or call the restaurant directly to clarify. (Min-Gyu, 30) </i> <p> Planning for mobility and transportation is more necessary for the individuals with disabilities than for people without disabilities. Because there are numerous considerations from the existence of accessible ramps to provide any guide services. </P>",
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             { layer: 'interview', opacity: 0.8 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.2} 
            ],
            onChapterExit: [
             { layer: 'interview', opacity: 0.8 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.2 } 
            ]
        },
        {
            id: 'Chapter2-4',
            alignment: 'center',
            hidden: false,
            //title: 'Planning a trip',
            image : 'https://img.freepik.com/premium-vector/disabled-people-community-service-vector-illustration-flat-people-character-help-each-other-talk-support-together-man-with-leg-prosthesis_109722-3216.jpg',
            description: '<b> Source of Travel Information<b><p> When asked where they get their information, many interviewers indicate they rely on others around them. They understand how to use the app, but the information is frequently out of date, so they check with their colleagues first. And wheelchair users checked the street view about whether the slope is steep or if there is any ramps to enter the buildings.',
                showMarkers: true,
    markerColor: '#000080',
            location: {
                center: [126.87411, 37.56492],
                zoom: 9.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.3 } 
            ],
            onChapterExit: [
             { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.3 } 
            ]
        },
        {
            id: 'identifier-5-1',
            alignment: 'left',
            hidden: false,
            //title: 'Planning a trip',
            description: '<b> Source of Travel Information<b> <p> Mobility Instructor <P> A walking instructor is also used by those who walk alone or where walking is vital. They inspect the new environment with freshman students or persons who have begun working and moved to other areas, informing them of potentially dangerous spots like drains in the picture. This is provided by some local welfare center. The majority of participants with visual impairments have engaged with this Sang-il-dong local welfare centers because they provide these services.',
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
            onChapterEnter: [
             { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0 } 
                //png to highlight the building
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0 } 
                //png to highlight the building
                
            ]
        },
//         {
//             id: '5-1-identifier',
//             alignment: 'left',
//             hidden: false,
//             description: '<b>Why do people with disabilities must plan<b> <p> Barriers : Uncertainty, Safety issues <P> Lack of resources :  Information, Networks, Economic <p>But what if they have problems getting this information? For example. The older people with disabilities get, the more difficult it is to participate in these networks and to use maps or other tools. As the proportion of those aged 65 and over among registered disabled people is rapidly increasing, this problem is urgent In the planning trips process, there are so many considerations concerning unpredictability and safety, as well as so many other restrictions# that they frequently become increasingly isolated.',
//             //image : 'http://www.hsb.or.kr/up_fd/photo/31/org/201313011213918876.jpg',
//            location: {
//            center: [126.981090, 37.52394],
//            zoom: 12.52,
//            pitch: 60.50,
//            bearing: 0.00
//        },
//             mapAnimation: 'flyTo',
//             rotateAnimation: false,
//             callback: '',
//             onChapterEnter: [],
//             onChapterExit: []
//         },
        {
            id: 'identifier-5-2',
            alignment: 'center',
            hidden: false,
            title: 'On a trip',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/Graph.png?raw=true',
            description: "We divided into <b> Walk/Roll, Subway and Paratransit taxi<b>. <p> According to data from Korea's Ministry of Land, Infrastructure, and Transport from last August, the transportation vulnerable in Seoul, including the people with disabilities, use the modes of transportation depicted in the graph above.<p>From this part, we will use the semi-structured interviews and go-along interviews materials.",
            location: {
               center: [126.98155, 37.50045],
                zoom: 11.99,
                pitch: 49.48,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.7 } 
            ],
            onChapterExit: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0.7 },
            { layer: 'Seoul', opacity: 0.7 } 
            ]
        },
        {
            id: 'Chpater3-10',
            alignment: 'left',
            hidden: false,
            title: 'Minho, 30 ',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/IMG_1917.JPG?raw=true',
            description: 'Minho, is visually impaired and this route was his way home from work. He is using the cane but needs accompany who can guide him for the right direction. I walked from the subway station to the house. The same route, map says takes 9 mins but we spent our time walking 15mins',
            location: {
               center: [126.96331, 37.57973],
                zoom: 14.29,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'interview', opacity: 0 }, 
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 } 
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 }, 
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }]
        },
        {
            id: '6-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Minho, 30 ',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-mh1.mp4?raw=true',
            description: 'This time, he was with his father but usually with the personal assist service person.During the interview, he mentioned the tactile blaocks problems of not being able to locate effectively, as well as the concerns with shared bicycles being dumped on the sidewalks',
            location: {
                center: [126.973, 37.578],
                zoom: 16.44,
                pitch: 55.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ]
        },
        {
            id: 'chapter1-16',
            alignment: 'left',
            hidden: false,
            //title: 'Minho, 30 ',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/cycle.png?raw=true',
            description: "<b>Electric scooters and shared bicycles are routinely on the sidewalk</b><p>This is a recent issue that has been discussed the most during the interview. With the advancement of technology, it has become simpler for people without disabilities to travel, but for those with disabilities, it is a source of concern and anxiety.It's not just a problem while driving, it's dumped on the road after driving on the sidewalk, causing damage to both the visually and the physically impaired. Not only in physical danger but also emotionally exhausted.",
            location: {
                center: [126.973, 37.578],
                zoom: 16.44,
                pitch: 55.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
                { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ]
        },
        {
            id: '9-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my3.mp4?raw=true',
            description: 'Mi-young rides the subway in an electric wheelchair. Her commute is usually consisted of <b> Rolling, Taking Elevator, and Taking Subway</b> She says even the vollard in the sidewalk is sometimes annyoing to avoid. The electric wheelchair may be seen being rocked by urban structures such as braille blocks.',
            location: {
              center: [126.96965, 37.52132],
                zoom: 12.39,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.8 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }]
        },
        {
            id: '8-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my1.mp4?raw=true',
            description: ' She says she almost usually follows her assistant service person. It shows how she tagged the card. From kakaomap, the route is only take 30 mins but we took 45mins.',
            location: {
              center: [126.91833, 37.52820],
              zoom: 14.41,
                pitch: 0.00,
                bearing: 8.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.8 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }            
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.8 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }   
            ]
        },
                {
            id: '8-identifier',
            alignment: 'right',
            hidden: false,
            //title: 'Mi-Young, 53',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-my2.mp4?raw=true',
            description: 'She mentioned that the subway elevators were always full with people without disability and lift was not functioning very well in the subway station. Even she points out using the lift in subway is uncomfortable because it makes very loud sound or extremally dangerous. There are several cases about the accidents (https://youtu.be/3QhlZcUmNQs).',
            location: {
              center: [126.92288, 37.50216],
              zoom: 14.33,
              pitch: 65.13,
              bearing: 50.90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.8 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }   
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }   
            ]
        },
         {
            id: 'Chapter4-1',
            alignment: 'center',
            hidden: false,
            title: 'Paratransit taxi',
            description: ' Currently we have three different types of paratransit taxis. One for wheelchair users and two for other types but mostly for riders with visually impairment. Eventhough they would like to take usual taxis sometimes, some drivers refused to take them. Also, the Reason why they choose this paratransit taxi or cab system is safety. Not only on the car but also before and after, driver tends to guide them to the entrance and exit of the location on foot. But, there are some incidents of overcharging according to few participants. Consequently, they must pay attention to the real-time location data from apps when using earphones.',
            location: {
               center: [126.93316, 37.58357],
                zoom: 15.18,
                pitch: 56.98,
                bearing: -16.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }  
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }  
            ]
        },
        {
            id: '7-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/paratransit.jpg?raw=true',
                //memo - upload photos
            description: 'Jaewoo has visual impairments but he was accompanied by his guide dog. He was on his way to work using paratransit taxi.',
            location: {
                center: [126.93316, 37.58357],
                zoom: 15.18,
                pitch: 56.98,
                bearing: -16.52
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }  
            ]
        },
            
        {
            id: 'Chapter4-11',
            alignment: 'left',
            hidden: false,
            title: 'Jae-Woo, 24',
            video: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/video-jw1.mp4?raw=true',
            description: "We call this 'Welfare call taxi for the disabled'. It is quite smaller but enough room for two people and a guide dog.He frequently goes at work very early. Because there is a scarcity of quantity, people must wait till uncertain times. This time, we spent around 40 mins from his house to his workplace.",
            location: {
                center: [126.87428, 37.54888],
                zoom: 11.58,
                pitch: 1.89,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }  
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0 }  
            ]
        },
         {
            id: 'sumup',
            alignment: 'center',
            hidden: false,
            title: 'Hightlights of interviews',
            //image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/IMG_1956.JPG?raw=true',
            description: 'It was found that their emotional and mental elements could become a major barrier, away from the fact that these disabilities only hindered the expansion of the travel experience due to physical and environmental limitations.',
            location: {
                center: [126.98720, 37.51853],
                zoom: 9.94,
                pitch: 37.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0.8 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0.8 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6 }  
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0.8 },
            { layer: 'jae-woo-test1', opacity: 0.8 },    
            { layer: 'min-ho-test1', opacity: 0.8 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6 }  
            ]
        },
        {
            id: 'discussion-1',
            alignment: 'center',
            hidden: false,
            title: 'For Future Trips',
            //image: 'https://t1.daumcdn.net/news/201803/09/hankooki/20180309044458075clls.jpg',
            description: '<b> How they Pursue Travel for All</b> <p> In the movements that citizens respond to this, they use various approaches from the hard method of protesting to a technical approach.</p>',
            location: {
              center: [126.98720, 37.51853],
                zoom: 9.94,
                pitch: 37.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
            { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6 } 
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6 }  
            ]
        },
              {
             id:'discussion-2',
            alignment: 'center',
            hidden: false,
            title: 'Counter mapping',
            image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/samgakji%20station.jpg?raw=true',
            description: '<b> Braille Map </b> <p>Thanks to the efforts of the Sillim Welfare Center’s members, the Samkak-ji station has the one shows entire Seoul subway system. However, many visually impaired people are unaware of this. In one of the interviews, Su Chan said that it is disappointing that not many stations carry it. </p>',
            location: {
            center: [126.98436, 37.53664],
            zoom: 14.98,
            pitch: 0.00,
            bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.9 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6}  
            ],
            onChapterExit: [ { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.0 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.9}  ]
        },
            {
             id:'discussion-3',
            alignment: 'center',
            hidden: false,
            title: 'Counter mapping',
             image: 'https://github.com/yk539/countermapping-webmaps/blob/main/Project/images/muui-2.jpg?raw=true',
            description: "<b> Muui Transfer Map </b> <p> The first is a 'Muui' transfer and tour map. They illustrate the most efficient approach to transfer and travel between stations. People with and without mobility disabilities collaborate to report and write down findings from the monitoring stage.(https://www.wearemuui.com/265051462286-1) </p>",
            location: {
              center: [127.03943, 37.56182],
                zoom: 18.07,
                pitch: 28.00,
                bearing: -36.80
          },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0.5 },
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6}  
            ],
            onChapterExit: [
                { layer: 'interview', opacity: 0 },
             { layer: 'jae-woo-test1', opacity: 0 },    
            { layer: 'min-ho-test1', opacity: 0 },
            { layer: 'mi-young-test1', opacity: 0 },
            { layer: 'iso-elvt-merged', opacity: 0 },
            { layer: 'elevator-subway', opacity: 0},
            { layer: 'two-districts', opacity: 0 },
            { layer: 'number-of-PWD', opacity: 0 },
            { layer: 'Seoul', opacity: 0.6}]
        },
        {
            id: 'conclusion-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Whats Next?',
            description: 'The government must conduct detailed qualitative study, not just quantitative research, on the transportation disadvantaged. Furthermore, these consideration must be included in the transportation evaluation measures established by the local administration. And, by actively fostering counter-mapping efforts like these, the government should reflect their views as well. Last but not least, because of these constraints, it is critical to investigate and develop more dependable and personalized alternatives for all types of disability.',
            location: {
                center: [126.98720, 37.51853],
                zoom: 9.94,
                pitch: 37.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'limitation-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Next research plan',
            description: 'We could tell there was a difference in perspective between the visually impaired and wheelchair users, and each favored mode of mobility and had slightly different opinions. We need to figure out how to display these elements with more mapping and have them reflect in the end output.',
            location: {
                center: [126.98720, 37.51853],
                zoom: 9.94,
                pitch: 37.00,
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
