import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { Avatar, BackgroundImage, Help } from '@/constants/images';
import { EraserIcon, NotificationIcon } from '@/constants/icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreenBackground from '@/components/HomeScreenBackground';
import { Link } from 'expo-router';
import { COLORS } from '@/constants/colors';

const Home = () => {
  return (
    // <HomeScreenBackground>

    <SafeAreaView className='bg-homeBg flex-1'>
      <ImageBackground source={BackgroundImage} tintColor={COLORS.primary}>
        <View className='p-5 mt-10'>
          <View className='flex-row justify-between items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <View className='flex-row  justify-between items-center'>
              <View className='flex-row px-5 py-2 rounded-full justify-between border-white border mr-1.5'>
                <EraserIcon fontSize={10} />
                <Text>0</Text>
              </View>
              <View className='flex-row px-5 py-2 bg-lightBlue rounded-full justify-between items-center'>
                <Text className='text-darkBlue text-base font-semibold mr-1'>
                  N5,000.00
                </Text>
                <AntDesign
                  name='pluscircleo'
                  size={10}
                  color={COLORS.primary}
                />
              </View>
              <NotificationIcon />
            </View>
          </View>
          <Text className='text-white font-semibold text-2xl mt-3'>
            Hello John 👋
          </Text>
          <Text className='text-white font-regular text-lg mt-1'>
            Let's play and Earn
          </Text>
        </View>
        <View className='bg-white self-center items-center rounded-xl mx-5'>
          <Image
            source={Help}
            className='bg-helpColor rounded-full self-end mr-5 mt-5 w-5 h-5'
            resizeMode='center'
            style={{ tintColor: 'white' }}
          />
          <View className='p-5 items-center'>
            <Text className='text-darkBlue text-lg font-semibold text-center'>
              Game Prize
            </Text>
            <Text className='text-darkBlue text-5xl font-bold mt-3'>
              1,000,000
            </Text>
            <Text className='font-semibold text-center mt-1'>
              Next Game: Tomorrow, 8PM
            </Text>
          </View>
          <View className='mt-5 bg-primary w-full rounded-b-xl p-5 flex-row justify-between items-center'>
            <Link href='/Game' asChild>
              <Pressable
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 15,
                }}
              >
                <Text className='font-semibold text-primary'>Join Game</Text>
              </Pressable>
            </Link>
            <Text className='text-white'>Entry Fee N100.00</Text>
          </View>
        </View>
      </ImageBackground>
      <View className='p-5'>
        <Text className='text-black font-semibold'>Top Gamer of the Day</Text>
        <View className='flex-row justify-between mt-5'>
          <View className='items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <Text>Joe</Text>
            <Text className='text-primary'>N5,000</Text>
          </View>
          <View className='items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <Text>Sarah</Text>
            <Text className='text-primary'>N5,000</Text>
          </View>
          <View className='items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <Text>Hanax</Text>
            <Text className='text-primary'>N5,000</Text>
          </View>
          <View className='items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <Text>Inioluwa</Text>
            <Text className='text-primary'>N5,000</Text>
          </View>
          <View className='items-center'>
            <Image
              source={Avatar}
              className='bg-white rounded-full p-5'
              resizeMode='contain'
            />
            <Text>Liz</Text>
            <Text className='text-primary'>N5,000</Text>
          </View>
        </View>
      </View>
      <View className='items-start bg-primary m-5 p-5 py-7 rounded-lg'>
        <Text className='text-white text-xl font-semibold'>
          Refer & Earn with your Friends
        </Text>
        <Text className='text-white font-base w-4/6 mt-2'>
          Share with your friends and loved ones to come and play
        </Text>
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: 'white',
            marginTop: 7,
          }}
        >
          <Text className='text-white'>Invite Friends</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    // </HomeScreenBackground>
  );
};

export default Home;
