var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoieWs1MzkiLCJhIjoiY2w5dTZzY296MGZuejN1bGdiYXRtNndhNSJ9.2f7acJljLe_o1MCycP9IBA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By YJ Kang',
    para1:'Climate change is affecting the world in many ways and sizes. In the United States, major coastal communities are usually prepared for the potential of floods, but such safeguards are believed to be missing. Flooding is becoming increasingly common throughout the United States coastline. Since the 1950s, all sites measured have experienced increased coastal flooding. Most places along the east and gulf coasts are experiencing faster growth. The East Coast is seeing the most frequent coastal flooding and has seen the greatest rise in flood days overall.',
    para2:'Furthermore, recent droughts and floods have occurred in a row in bay locations such as San Francisco as a result of massive climate change. So, we looked at how the flooding appeared in San Francisco, Washington, DC, and New York City. In particular, many studies have shown that this area is expected to suffer severe or severe damage to areas with many socially disadvantaged groups such as low-income groups and immigrants, and that it appears to be an area with many affordable housing sectors.',
    footer: 'San Francisco News, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco',
            image: 'https://s.hdnux.com/photos/01/26/41/21/22680695/7/ratio3x2_1800.jpg',
            description: 'There have been countless floods in San Francisco; the photographs depict a rain-caused flood in July 2022. Rising sea levels are expected to submerge many coastal towns around San Francisco Bay by 2100, but a new study warns that sinking land — specifically, landfill compaction in locations like Treasure Island and Foster City — would exacerbate floods.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Washington D.C',
            image: 'https://dcist.com/wp-content/uploads/sites/3/2018/07/flooding_web-thumb-640xauto-1022467.jpg',
            description: 'In the summer of 2022, Many highways in the District of Columbia were closed due to flooding, and an isolated driver was rescued from a rush of water in the 600 block of Northeast Rhode Island Avenue.Rescue efforts were also carried out in Maryland Greenbelt neighborhood. Drivers who managed to escape the flood zone were evacuated to a safe location just as the engine stopped down due to the rising water.Power outages affected almost 8000 DC people, 3500 Alexandria residents, 600 Arlington citizens, 1600 Fairfax residents, and 1,400 Prince William County residents. The number of households without power in the Washington metropolitan region and Baltimore area was 6245.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
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
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'As climate change warms the earth, raises sea levels, and energizes hurricanes, the arsenal of hazardous impacts delivered by the powerful storms is projected to grow. Storm surge flooding is one of the most concerning. Rising seas and higher winds mean that the destructive waves pushed ashore by tropical storms and hurricanes will continue to make their way inland. This inland march would expose a bigger swath of the United States coast to the kind of floods unleashed by Hurricanes Katrina and Sandy, putting more people at risk of drowning, which is the main cause of mortality in hurricanes.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 14.84,
              pitch: 48,
              bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'New York City',
            image: 'https://media.npr.org/assets/img/2021/09/02/gettyimages-1235009695_custom-40d512cec06ae4e990fd3654619240c83f145271.jpg',
            description: 'September 2021, Hurricane Ida devastated New York and New Jersey, prompting New York to declare a state of emergency. Citizens were stranded at a flooded metro station, and nearly 500 cars were left stranded in the pouring rain. In New York alone, thirteen people died, and 11 of them were discovered to be living in semi-subterranean regions. Long-term solutions are required to limit flood damage. To delay the discharge of rainfall, reduce the quantity of floods, and restore rivers, accurate forecasting is required, as well as protecting and nurturing the trees upstream of the river.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
