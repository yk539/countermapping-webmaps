var config = {
    style: 'mapbox://styles/yk539/cl9uer1qz000315mt3uxbm8yy',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5MDdyZ2ppMHdmYTQwazR0NzV6YW9uYiJ9.nWSA2XNz2ZjtZusursxXcA',
    showMarkers: true,
    markerColor: 'red',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'NYC Housing Flood Risk',
    subtitle: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected.24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.With rising sea levels from climate change and the promise of more flooding, which areas and whowill likely be most affected? How is affordable housing construction responding to this?',
    byline: 'By Yeon Joo Kang (MRP)',
    footer: 'Source:https://www.gothamgazette.com/index.php/archives/1887-hurricane-sandy-and-red-hook,https://www.aiany.org/architecture/featured-projects/view/new-york-city-housing-authority-red-hook-houses-sandy-resiliency-renewal-program/, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook New Developments',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/red-hook-resilience-map-e1508942534547.png',
            description: 'According to the project, they have raised mechanical and electrical equipment above flood level, filled in the basement (which is crucial due to Red Hook shallow groundwater, and flood proofed other vulnerable areas, such as the water heating system, in order to account for Hurricane Sandy and potential flooding. The city requires that new or significantly renovated construction take flood concerns into consideration, which is in part an advantage of new construction.',
            location: {
                center: [-74.015242, 40.670610],
                zoom: 11.6,
                pitch: 60,
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
            title: 'What happened in Red Hook?',
            image: 'https://www.gothamgazette.com/images/Red-Hook-Sandy-lg.jpg',
            description: 'On a peninsula in southwest Brooklyn, the neighborhood of Red Hook lies in Zone A, a low-lying coastal region with the greatest danger of flooding during a hurricane-strength storm. There is no direct access to the neighborhood from the subway, which is made up of a mix of working waterfront, industrial sites, public housing, and modern projects, like IKEA. You can see the pioneer street sign pole during the Sandy..',
            location: {
                center: [-74.01118897638395,40.67903095328211],
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
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'https://www.aiany.org/wp-content/uploads/2018/04/NYCHA_Red_Hook_Houses_slope_green.jpg',
            description: 'Around 6,000 people live in Red Hook Houses, the largest NYCHA development in Brooklyn. This design and research strategy included community involvement at every stage using focus groups, interviews, surveys, and workshops, assuring the creation of a successful master plan that safeguarded and strengthened the community. Passive barriers, which automatically deploy in the event of high water, are added to the occupiable flood wall. ',
            location: {
                center: [-74.00798328521597, 40.67599367612261],
                zoom: 18,
                pitch: 50,
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
