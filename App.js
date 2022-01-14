import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image,ScrollView, SafeAreaView, TextInput, Button, FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>
            Bienvenido a la historia de los dispositivos moviles
          </Text>
          <Image
            style={{
                alignItems: 'center',
            }}
            source={{
              uri: 'https://www.moviles.com/fotos/blackberry-blackberrycurve8330-2048-g.jpg',
            }}
            style={{ width: 250, height: 350, marginTop: 30 }}
          />
        </View>
        <View>
          <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              BlackBerry
            </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'left',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'left', fontWeight: 'none' }}>
              1 de Julio del 2010
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'left',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'left', fontWeight: 'none' }}>
            En 2011, BlackBerry contaba con el 3% sobre todas las ventas de teléfonos móviles a nivel mundial, haciendo de su fabricante el sexto más famoso con la cuota de mercado del 25 % de todos los teléfonos inteligentes.
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              Este hibrido entre teclado y dispositivo movil acabó obsoletizado por las pantallas tactiles de ultima generacion con multitouch.
            </Text>
          </Text>
          <View
          style={{
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Samsung_Galaxy_S_White.png/330px-Samsung_Galaxy_S_White.png',
            }}
            style={{ width: 250, height: 450, marginTop: 30 }}
          />
          </View>
          <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Samsung Galaxy
            </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              2 de Marzo del 2010
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
            Este fue el primer teléfono inteligente Supersmart de la gama. El Galaxy S posee funciones que destaca sobre los otros teléfonos inteligentes Android pese a no tener muchos sensores. Sin embargo, posee una pantalla resistente a daños por su cristal Corning Gorilla Glass.
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              Fue el primer smartphone puntero de su marca, a la cual le dio un gran caché y tras su autosuperación ha hecho que sea el tope de gama siempre en dispositivos android.
            </Text>
          </Text>
          <View
          style={{
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Image
            source={{
              uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/apple-iphone-3g.png?itok=Cu3cXXk6',
            }}
            style={{ width: 250, height: 450, marginTop: 30 }}
          />
          </View>
          <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              iPhone 3G
            </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              9 de Enero del 2007
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              Fue el primer "ordenador de bolsillo" decente, aunque su precio fue desorvitado, este fue el primer smartphone TOP de la historia, superando por mucho en caracteristicas al Samsung Galaxy S el cual salió despues por ejemplo y dando pie a la mayor marca de smartphones de la historia cuyo porcentaje de mercado es del 27%.
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center', fontWeight: 'none' }}>
              Aun teniendo un SO propio y cerrado como BlackBerry consiguió llevarse el gato al agua con la mayor tasa de mercado, se podria decir que el legado de este smartphone es el mayor de todos gracias sobre todo a este primer arranque. 
            </Text>
          </Text>
          <View>
          <Text> </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function ListScreen({ navigation, route }) {
  const [instrumento, setInstrumento] = React.useState('');
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
      }}>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEWVpaX///93hITm6OiFkJCWpqaQoaF0gYHu8PD4+fnx8/N5hob8/PyOn5/Q19ecq6u0v7+7xcWksrLGzs7e4uKtublufHzh5eXW29vGy8uKmZl/i4uXoaGyubmhqqqpsbGSnJwc+TTUAAAN7klEQVR4nN2daYOjIAyGPaqo9ahXtdrr///KBbVTQVSOWNt9P87s7PQZIAlJAMPcVGEY+nYV52lZJsZYSVmmeVzZPv4X234EY6v/OPQDr4rTLIkiF8uYinw5ipIsjSsv8Dfj3IQwDOwiP2VGxCWbkkZGdsoLO9iEEp7Qt+v8lIjBUZjJKa9tH/zzABMG3dhJ0r0pu7EMYD8SJGFYpNieqNH9UWIblBaQ0xWO0MNWRQvuLWx9PLDPBUTo14ne2LFykxpoSUIQ+nbuwPJ1jE4OYnf0CYPipGhZVhndE4DZ0SX06nIjvp6xrHVXpB6hl5eatnOV0ShzPUYdQj/ONlh/E0Yni3XWowYh5tscrxdm3IGwyrYfvrfcrPowoZd+kq9jVA0ClAiDGNi/CyEmsZLrUCHEDvDjfB3jqfgIYbBFACOI6OTywyhNWJQ74fUqpYdRkjDMofYPqkpyya2VHKF32pmP6CRnVKUI691W4FiuU29E6MffwEfkyoRx4oSfd/LzknH/woTVvjaUVWlDE9bZ3kyMMtHFKEgY7+0kpkoE9xtihPneOFzlcISnaG8YrqITEGH4RUaUlpsKxDfrhEG6N8iC0vVIfJXwKwK1ea2HcGuEwXcDYsS1UVwhDL95ivZaW4srhN8PiBF1CHdKV8jJXXYai4T5d/pBVtGi618ijPf+6MJaCuAWCOvvi0XnlCyE4fOE9rftJpaUzW+mZgm979oPrqmc9fxzhP4v+Imx0rnExhzh1+RkROXOWZsZwvrXADHijLXhE3qfqgxCyuEvRS5h+BOxDCv3xI1QuYTfmbRYFze24REWv+PqaSW8sg2HMPgtTzhWydkscgh/dY4ScebplLD4RTv6kjOdpxPC4Cft6EvuNKkxIfy5YIbWNLRhCb1ftaMvJazfZwm/NvsrKpdN2zCE1a8DYsRqkfCXdr1zypYIfyczsyDG2FCE/v8whHgQ/VnC+Jed/VtOPEfo/R9DiAfRmyHM/48hxIOY8wl/LLu2pHHmbURY7/25AFXzCIPy9739S+5oo/gmLP4fQIxYTAn9n941sXJP/oTQ/p8AMaI9Icy3PNsTRUbiRt1x4A95JDdnCf2tfrPrlHlsdyriU9I0o2/12ub3Oj5DuE0a343KenxM2w+KRzMUlp0sjeu6jvPSiTb45X9J/hfhJlt7TtaEVLU6xHE/k51ucH4joQm9Df6KzlxNL7yRbmo3GVU1Q/juTtejCDeoFibxfKNL3R+aGjcz++CnANIxYQi/q1g+GOHduqmaj3dyxQnW2mXhiBC8UuHOV517BbfGdQyH6rwD7hEcqhjGJpPUzVZ7Bv1b22BE6nwIcGk9fROC12ImSUse4sM6YHNEVW590D7BPvzuCMEnqVAjfXhAx8ZIqNH27y7cYuynaUcIXG2abRpg5B0RaplWZu8A2GmWvwiBtxVcP89ViizreKAzuBfUQMWu/QaDEAJ3P3ErsVz5T4yIGvqLT3SAmqldpxQhBE5fiLSXD8oxoYXoNpH6bLVQM7XuCUPYjdNSFx0r70oG8U59DRsgq23Wf4+AXOKLDPCaaCZzPcCFEB5o33I6k9UJMVE7i4AJbVBf4YidZBlUHPA0PV6or9lk6lqtA8BIgntMWIB2AidSVwN4dzKID+prwbNDPALMrKgghNDLUO4OixMhvFI/4z86QuuovxjJQjSgvWE2x8LX5Uj8BRUDhZezNSDqfjLiEQ0zAPWGkyLzimqyEA+0+Y0HQvwNXc+IdwCG6cGgDRKN2F4qGjwlW9o61X+EFtl/aMnDhBWooZnr8pyTTcwKY0xHhHimaiFGFSaEbaCRHcOA+Px2nhB7Rp0wFX8cA/h0ITgh/q7GYnTT0ABO0SjNUpowTBFFqOU2MkwIu/tVszQUoX9jCAmi6jAmoeHDnm1ypYI2rrfoJi4jZbcR+YYNfHqrlCPsPP6T8vj2cQJooTZSQ4xsA7rPK5G7XKWP2qifuZynhMqL0a0M6G7LRPg6B6KARN4WFXmHz+kkVV+MbmxA1w0ld0/E0BypH/G4Q6jqNtzcAG+3VNgBUz/BsTN/wyhvM9zUAG+ikc9iUJO0mB1CtZlawhPKZKLiLhM1XrlBMz+ERNJuozTgS6Oy2cTr6CvhbZGPLEZJt7FF6XfU6bGiSzeEo7RHeGnXCKHycHoSzurjD3y+jZHXAUGyG9oSKT2ZJLtN5uioBJBzohmeDhB5OE1EkcrFrUvpv/8YwSTinh/G3dub3HJ1KfqdTXm+rZLXnIUJv2CmurxTZDQgnpHtfWRl6tP9eUSikPp5OG2Vi5nhgACOR7Cjri6PRpTxeNgdMavnPX9x72zK4Xq70EbJr/KrKKPqhgpM7vwVR5fjsOQQap8PJkDw6qvggtTMw2niRUlezVob306f5xek1T6ZSNavRY0OSIVKRU62flesf7kerddIPtkZfTmIIba7LMZE9Lpf+9a0A+P5WtGMwb0VYvy823CzXGKTTwZyYDyyq/aysssQRgSNvTGf5K3b3uU+2M7znXmapLoLTdSVDVUCuT90E5nx+2OMD/2mFx0utG3CTlNoGBfdBuQO2C0rtfdh7IEEHR/0TPVTsVB8qUJVAuZp1F8wCItmyF3cmcUYL+U03prPbrgpWK5NcMc0o+DRew7UMv+NIOLsYnRzoHypI3TR5pIGD4iOLKLYWkQzXUZuDJPzTiSrFTzVA+KBsVYXwW0x3224FUjdYinIFld17xGfTDC+mpx6qeHM1MiGqD2pv65By+sRrTuNGNxFN42HqduIfID6oVyPkAjijbbKlVh0Y/E8YwJQA3YUvPwsYp/SZzoXzFwkBddpshhJDVjXIcK9kGa+qqOoZabFQzyDQzc2kDq+bi+GZN1+TX43I6kcIwEX3Ex1f50xD+nF0OuncTSeKeLL7nZNVJ4YKxd0/OxM7fpptHqiZu/yU1fc+wxmjylsbCw6hvP0+tpWT8YoqUsMoyftYmuJQSR5uAGx62vT6E0UrzLJqPd/iLan/kLhlKMhhut7E9X7S+UK2uIqWibfT1RLEQ55uL6/VL1HWKqeLaOu6mbRxsabaWCYFcnD9T3Cyn3enJvDgNQXvxvaKcqYUyLU/vV5K/bqr1wyraWYBDGIHsTqIEdIZurQq6+4EN0t7Oggv2twp1ulAonA5jWMaahxZmbLIRwGkQlPL7KAlkVMofq5pw2H0Oy7ahC9jSrEQ7dhCJvCVD+7JvR4hoa6yOZI2TJPziWSv1Bgqp8/dAH3TFx1toa+VVa8Cj4QdqZK8QypeEeJqkiHInMiSqhTY6RD/Ecofw5YttlZXmG3xTjlI93kCIeEj+JZ7oVb3qHUR6fnkWS9Rd8vp3Ye391g18RKNBc8qzYeEUona8A3vlN5kquO1aupU+1eDKj84ZJ84STiDOHQ1Kl2t8latwyEwlRvmp4rilDufhrZA2pqWuylXVdr0oRSdwzB5594smVyM9MhfAW1SvdEObn9AdWye15a7D1RUnd9OYlx+IAEi05cvZvHVe9ra8TKervpnY1UvnMv0nRX22p0eFrj3kSxlp59dH7HzTp3X8ruSD8ndPU4hPLJDKfRsQWbapTJ1bqD1mm+czFSOSy9e4SdL7U34yyZ5l3QjiudxdxedBpS9z5vx2j2BproSIXNAHeyfxsiaubvZFereDvRd5lURO98IN5GcNxvsjfszVog71s4hlaUDCvmYi2wN0q+xvkzFxbBvTPzLfENatk8J9hbQU7zFZH4+cICAb739A3OnylXcQl13uzaH/E4zSCBvru2+2JEnCcQYd/O2xkRXTnlFOD3D/fdbLS8ihj0G5Z7bjYQt7UA/B3S/eIb5uq+RULNt2R3WoxHfk1zk/eAd9lsnGe67DZ503mPzcZ5rjlko3e5nU8jIvbE1Cqh7utPzoftzXO2sWCWUPuG6E/am777SZbQrDXPmnzO+aN24aWJBULt1xA/5/wvCy1oS4Rmrnsm6jOVDfboggShqXsBr6NVqBYUdQ2TLKH2wxcfyDQyF57LEobaiJs7/8dKe9YKoRlov6mxrb3hpC0kCU1PFxHvp7abqdw9ryQhxPs2mzl/9FjvxV4nNAFuGo42ArwLtEgKEGKnoesXsb3ZwG2cl92EDKH+QzQOfKYRWYuOXpLQjPWvQAFejKidZLe1CE2Al99gEZuFYFuJ0LS1L0GBrGygZyF63kOY0PS0TSqcvTnfxTvpxQlNX/uSEKhk6nn2njQ9QrwYHW3PCNDWgI65zIkkKUL9EA6gsiEQqGkQmqH2S5OalQ3Uyp5HkiQ0zULXpmotRnSVPo4kTWgGueZqVI9v0PEkfxpJnpA8GKprcJQWIzrfRb28LqEZxLrv9yq0beIwTenYqhIhgPuXtTcIPRSPyykSmmaVaTHK2RuEGuUDj8qEeL+RaVUZxSsb6NhoHEPSIMRhnBajoPNH1lPrtKMOIV6OeWloFMQF7A2yrgoeAo6Q3Ppbarxwv2Zv0Pkqe10oOCF2Hdg9KjMu2huEIxj9ew30CcnFxxphzuxm42w9CojTxhCEJrm+WTUG4NobhM7tBegwNRChSYKATGnf4bgMIrLawwPuoDEcIbloNS0TedvqGO3xPXjo8Hyo3/XKESShScxOfsoMWcszVDYQspr7LQa+NAWY0CR2p85PSSRDSY6lnM+H6y0v4A+JwxNihYHdjaUYputGRlamdeFtciHMJoREoR94VYytT4Q5uaTky1GUZGlceYG/2XU3mxH2CsPQt6s4T8uSNrRJWaZ5XNk+/hfbfoR/kpQKrwEXM/8AAAAASUVORK5CYII=',
        }}
        style={{ width: 50, height: 50, marginRight: 5 }}
      />
      <View>
        <Text
          style={{
            fontFamily: 'Gill Sans Extrabold',
          }}>
          {item.nombre}
        </Text>
        <Text
          style={{
            fontFamily: 'Comic',
            color: 'tomato',
          }}>
           {item.instrumento}
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 20,
        }}>
        <TextInput
          placeholder="             Escribe nombre del instrumento buscado"
          onChangeText={(x) => setInstrumento(x)}
          keyboardType="alphabetic"
          style={{
            fontSize: 15,
            paddingTop: 25,
            paddingBottom: 35,
            marginLeft: 5,
            borderColor: 'black',
            borderTopWidth: 1,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1,
          }}
        />
        <Button
          title="Buscar"
          color="#BEDAC3"
          onPress={() => navigation.navigate('Listado de Usuarios', { z: instrumento })}
        />
        <FlatList
          data={usuarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}>
          marginTop: 25
        </FlatList>
      </View>
    </ScrollView>
  );
}
function UserScreen({ route }) {
  const { z } = route.params;

  function funcionFiltrado({ item }) {
    if (item.instrumento == z) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={{ width: 50, height: 50, marginRight: 5 }}
          />
          <View>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Gill Sans Extrabold',
                marginVertical: 0.5,
              }}>
              {item.nombre}
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontFamily: 'Comic',
                color: 'gray',
              }}>
              <Text
              style={{
                color: 'black',
            }}>  
            Edad: </Text>{item.edad} 
            </Text>
            <Text
              style={{
                fontFamily: 'Comic',
                color: 'tomato',
                borderBottomColor: 'blue',
                borderBottomWidth: 1,
              }}>
            <Text
              style={{
                color: 'black',
            }}>  
            Instrumento: </Text>{item.instrumento}                                              |
            </Text>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params.numero}</Text>
      <FlatList
        data={usuarios}
        renderItem={funcionFiltrado}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#72DA81',
        inactiveBackgroundColor: '#91EF83',
      }}
      screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Historia"
        component={HomeScreen}
        options={{ headerStyle: { backgroundColor: '#72DA81' } }}
      />
      <Tab.Screen
        name="Musicos"
        component={ListScreen}
        options={{ headerStyle: { backgroundColor: '#72DA81' } }}
      />
    </Tab.Navigator>
  );
}

function ListStack() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Historia" component={HomeScreen} />
      <Tab.Screen name="Musicos" component={ListScreen} />
    </Tab.Navigator>
  );
}

const usuarios = 
[{ id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' },

{ id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' },

{ id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' },

{ id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' },

{ id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' },

{ id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' },

{ id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' },

{ id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' }];

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Musicos"
          component={ListStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Listado de Usuarios" 
        component={UserScreen} 
        options={{ headerStyle: { backgroundColor: '#72DA81' } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
