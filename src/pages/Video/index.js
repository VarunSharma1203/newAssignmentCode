
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image, FlatList, Alert, Modal, ActivityIndicator, platform, Platform

} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './styles';
import { imagePath } from '../../config'
import { ListItem, SearchInput } from '../../component';
import { getBlockPhone } from '../../reduxStore/action'
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import RNFetchBlob from 'rn-fetch-blob';


var mediaJSON = {
    "categories": [{
        "name": "Movies",
        "videos": [


            {
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],


                "subtitle": "By Blender Foundation",


                "thumb": "images/BigBuckBunny.jpg",


                "title": "Big Buck Bunny"


            },


            {
                "description": "The first Blender Open Movie from 2006",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],


                "subtitle": "By Blender Foundation",


                "thumb": "images/ElephantsDream.jpg",


                "title": "Elephant Dream"


            },


            {
                "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"],


                "subtitle": "By Google",


                "thumb": "images/ForBiggerBlazes.jpg",


                "title": "For Bigger Blazes"


            },


            {
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],


                "subtitle": "By Google",


                "thumb": "images/ForBiggerEscapes.jpg",


                "title": "For Bigger Escape"


            },


            {
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],


                "subtitle": "By Google",


                "thumb": "images/ForBiggerFun.jpg",


                "title": "For Bigger Fun"


            },


            {
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],


                "subtitle": "By Google",


                "thumb": "images/ForBiggerJoyrides.jpg",


                "title": "For Bigger Joyrides"


            },


            {
                "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],


                "subtitle": "By Google",


                "thumb": "images/ForBiggerMeltdowns.jpg",


                "title": "For Bigger Meltdowns"


            },


            {
                "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],


                "subtitle": "By Blender Foundation",


                "thumb": "images/Sintel.jpg",


                "title": "Sintel"


            },


            {
                "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],


                "subtitle": "By Garage419",


                "thumb": "images/SubaruOutbackOnStreetAndDirt.jpg",


                "title": "Subaru Outback On Street And Dirt"


            },


            {
                "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],


                "subtitle": "By Blender Foundation",


                "thumb": "images/TearsOfSteel.jpg",


                "title": "Tears of Steel"


            },


            {
                "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],


                "subtitle": "By Garage419",


                "thumb": "images/VolkswagenGTIReview.jpg",


                "title": "Volkswagen GTI Review"


            },


            {
                "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],


                "subtitle": "By Garage419",


                "thumb": "images/WeAreGoingOnBullrun.jpg",


                "title": "We Are Going On Bullrun"


            },


            {
                "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",


                "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],


                "subtitle": "By Garage419",


                "thumb": "images/WhatCarCanYouGetForAGrand.jpg",


                "title": "What care can you get for a grand?"


            }


        ]
    }]
};

var selectTitles = []
export default function App() {

    const dispatch = useDispatch();
    const [number, setnumber] = useState([]);
    const [selectTitle, setselectTitle] = useState([]);
    const [update, setupdate] = useState('');
    const [selectitem, setselectitem] = useState('');
    const [load, setload] = useState(false)
    const [play, setPlay] = useState(false)

    useEffect(() => {


        NetInfo.fetch().then(state => {

            if (state.isConnected) {

            } else {
                alert('Lost internet connection')
            }

        });
        setnumber(mediaJSON.categories[0].videos)
        updatedata(mediaJSON.categories[0].videos)



    }, []);

    const updatedata = (data) => {


        data.map((item) => {
            updateitem(item.title)
        })
        // Read(item)
    }
    const CheckFilePermissions = async (platform) => {
        if (platform === 'android') {
            try {
                const granted = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                ]);
                if (granted['android.permission.READ_EXTERNAL_STORAGE'] && granted['android.permission.WRITE_EXTERNAL_STORAGE']) {
                    // user granted permissions
                    return true;
                } else {
                    // user didn't grant permission... handle with toastr, popup, something...
                    return false;
                }
            } catch (err) {
                // unexpected error
                return false;
            }
        } else {
            // platform is iOS
            return true;
        }
    };
    const Dowload = (item) => {
        NetInfo.fetch().then(state => {

            if (state.isConnected) {
                setload(true)
                RNFetchBlob
                    .config({
                        // response data will be saved to this path if it has access right.
                        path: RNFetchBlob.fs.dirs.DocumentDir + '/videoDatas/' + item.title + '.mp4'
                    })
                    .fetch('GET', item.sources[0], {
                        //some headers ..
                    })
                    .then((res) => {
                    
                        setload(false)
                        Read(item.title)
                    }).catch((e) => {
                        alert(e)
                    });
            } else {
                alert('Lost internet connection')
            }

        });

    }

    const Read = (item) => {

        let dirs = RNFetchBlob.fs.dirs.DocumentDir + '/videoDatas/' + item + '.mp4'

        RNFetchBlob.fs.exists(dirs).then((isDir) => {
            if (isDir) {

                var selectTitles = [...selectTitle] // clone state

                if (selectTitles.includes(item)) {

                    selectTitles = selectTitles.filter(item => item !== item)
                } else {

                    selectTitles.push(item)
                    setselectTitle(selectTitles)

                }
            } else {

            }



        })

    }
    const updateitem = (item) => {

        let dirs = RNFetchBlob.fs.dirs.DocumentDir + '/videoDatas/' + item + '.mp4'

        RNFetchBlob.fs.exists(dirs).then((isDir) => {
            if (isDir) {
                selectTitles.push(item)
                setselectTitle(selectTitles)


            }

        })

    }



    return (

        <View style={styles.contain}>
            {load ? <Modal transparent={true}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator size={"large"} style={{ width: 40, height: 40 }} />
                </View>

            </Modal> : null}
            {play ? <Modal transparent={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: '100%', width: '100%' }}>
                    <TouchableOpacity
                        onPress={() => {
                            setPlay(false)
                            setselectitem('')
                        }}
                        style={{ width: 60, height: 60, position: 'absolute', top: 10, right: 10, zIndex: 9999 }}>
                        <Text style={{ fontSize: 18, color: 'red' }} resizeMode='contain'>Close</Text>
                    </TouchableOpacity>
                    <Video source={{ uri: selectitem }}   // Can be a URL or a local file.
                        controls={true}
                        fullscreen={true}
                        style={{

                            height: '100%',
                            width: '100%',

                        }} />
                </View>

            </Modal> : null}
            <ImageBackground style={styles.background}>
                <View style={styles.viewGraph}>
                    <Image style={{ width: 60, height: 60 }} resizeMode='contain' source={imagePath.headerIcon} />

                </View>
                <View style={styles.viewGraphtwo}>
                    <View>

                    </View>
                    <FlatList
                        data={number}
                        renderItem={({ item, index }) => <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, width: '100%', flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, flexDirection: 'row', backgroundColor: '#FCFCFC', borderWidth: 1, width: '96%', borderColor: '#0000001a', borderRadius: 10 }}>

                                <View style={{ flex: .7, justifyContent: 'center', marginLeft: 10 }}>
                                    <Image style={{ width: 120, height: 120, borderRadius: 60 }} resizeMode='cover' source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/" + item.thumb }} />
                                </View>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontSize: 18, color: 'red' }} resizeMode='contain'>{item.title}</Text>
                                    <Text numberOfLines={1} style={{ fontSize: 14, color: '#000' }} resizeMode='contain'>{item.description}</Text>
                                    <TouchableOpacity
                                        onPress={() => {

                                            if (selectTitle.includes(item.title)) {
                                                setPlay(true)
                                                let dirs = RNFetchBlob.fs.dirs.DocumentDir + '/videoDatas/' + item.title + '.mp4'
                                                setselectitem(dirs)
                                            } else {
                                                if (CheckFilePermissions(Platform.OS)) {
                                                    Dowload(item)
                                                }


                                            }

                                        }}
                                        style={{ flexDirection: 'row', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                                        {selectTitle.includes(item.title) ? <Text style={{ fontSize: 18, color: 'green' }} >play</Text> : <Text style={{ fontSize: 18, color: 'green' }} >Download</Text>
                                        }
                                    </TouchableOpacity>

                                </View>


                            </View>
                        </View>

                        }
                    />


                </View>
            </ImageBackground>

        </View>

    );

}



