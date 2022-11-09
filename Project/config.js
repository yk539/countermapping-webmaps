var config = {
    style: 'mapbox://styles/yk539/cla7m7hxd000014s19b9kmzt8',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5MDdyZ2ppMHdmYTQwazR0NzV6YW9uYiJ9.nWSA2XNz2ZjtZusursxXcA',
    showMarkers: false,
    markerColor: 'red',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Revealing the invisible challenges of pedestrians with disability',
    subtitle: '  Focusing on Seoul, the Republic of Korea',
    byline: 'By Yeon Joo Kang and Duxixi(Ada) Shen (MRP23)',
    footer: 'description',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Seoul',
            image: 'https://cdn.gukjenews.com/news/photo/202211/2587479_2595809_80.jpg',
            description: 'In 2004, the movement in the Seoul metropolitan area to abolish discrimination against people with disabilities related to the occupation of subways and buses was successful in installing elevators in 90% of the subways in the city. Yet, people with disabilities still do not have safe and stable access to bus, taxi, and subway platforms. Many disabled people groups have consistently raised their voices on this issue, but in reality, little has changed, and protests started again in December 2021. Throughout the Seoul metropolitan area, Solidarity Against Disability Discrimination,SADD, has been holding protests at subway stations to increase awareness of the mobility rights of people with disabilities.',
            location: {
                center: [126.9875215578272, 37.55136970793704],
                zoom: 9,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Which District has more individual with disabilities?',
            //image: 'https://www.gothamgazette.com/images/Red-Hook-Sandy-lg.jpg',
            description: '',
            location: {
                center: [126.9875215578272, 37.55136970793704],
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
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Counter mapping examples by Seoul Metropolitan Government',
            image: 'https://www.aiany.org/wp-content/uploads/2018/04/NYCHA_Red_Hook_Houses_slope_green.jpg',
            description: 'Around 6,000 people live in Red Hook Houses, the largest NYCHA development in Brooklyn. This design and research strategy included community involvement at every stage using focus groups, interviews, surveys, and workshops, assuring the creation of a successful master plan that safeguarded and strengthened the community. Passive barriers, which automatically deploy in the event of high water, are added to the occupiable flood wall. ',
            location: {
                center: [126.9875215578272, 37.55136970793704],
                zoom: 22,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Counter mapping examples by Disability Advocacy Groups',
            image: 'https://mediahub.seoul.go.kr/uploads/mediahub/2022/04/zeBfCjZolnhnHRkdGTalmzyxwVyAWbpP.png',
            description: '----',
            location: {
                center: [126.9875215578272, 37.55136970793704],
                zoom: 22,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'https://www.aiany.org/wp-content/uploads/2018/04/NYCHA_Red_Hook_Houses_slope_green.jpg',
            description: 'Around 6,000 people live in Red Hook Houses, the largest NYCHA development in Brooklyn. This design and research strategy included community involvement at every stage using focus groups, interviews, surveys, and workshops, assuring the creation of a successful master plan that safeguarded and strengthened the community. Passive barriers, which automatically deploy in the event of high water, are added to the occupiable flood wall. ',
            location: {
                center: [126.9875215578272, 37.55136970793704],
                zoom: 22,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
