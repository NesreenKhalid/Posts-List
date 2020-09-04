import React from 'react';
import { View, Text, FlatList,Image } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';





export default function Posts({ navigation }) {

  const [posts, setPosts] = React.useState([]);
  const [img, setImg] = React.useState('');

  React.useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        res.json().then((data) => { setPosts(data) });
      } catch (err) {
        console.log(err);
      }
    }

    getPosts();
  }, []);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' , padding: 20}}>

      <FlatList
        data={posts}
        renderItem={({ item }) => {
          setImg("https://source.unsplash.com/random?sig=" + Math.random())

          return (
            <View>
              <Image 
              style={{width:300, height: 150, borderRadius: 20, margin: 20}}
              source={img}/>
              <Text
                style={{marginBottom: 20, fontWeight: "bold" }}
                onPress={() => navigation.navigate('postDetails', { item , img })}
              >{item.title}</Text>

            </View>
          )
        }}
      />

    </View>
  )
}

