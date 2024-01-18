import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Box, Image, } from 'native-base'


const Index = (_props: any) => {
    const isCarousel = React.useRef(null)

    const quickAccessItems = [
        {
            id: 1,
            title: 'Support',
            image: require('../../assets/Images/slider-1.png'),
            subtitle: 'Inspiring Independence, Providing Care',
            //  onPress: 'handleSupportPress'
        },
        {
            id: 2,
            title: 'EmergencyCare',
            image: require('../../assets/Images/slider-2.png'),
            subtitle: 'Urgent Care for Our Elders, Always There',
            //  onPress:handleEmergencyCarePress
        },
        {
            id: 3,
            title: 'HelplineCare',
            image: require('../../assets/Images/slider-3.png'),
            subtitle: 'Helping our seniors through life little challenges',
            //  onPress: handleHelplineCarePress
        }
    ];

    const renderItem = ({ item }: { item: { id: number; title: string; image: number; subtitle: string; } }) => (

        <Box  >
            <Image  resizeMode='center' width={'100'} source={item.image}  h={'64'} alt='image' />
        </Box>


    );

    return (
        <View  >
            <Carousel
                ref={isCarousel}
                data={quickAccessItems}
                renderItem={renderItem}
                sliderWidth={500}
                itemWidth={800}
                loop={true}
                autoplay={true}
                inactiveSlideOpacity={0}
            />

        </View>
    );
};

export default Index;