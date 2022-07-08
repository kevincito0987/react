import './App.css';
import Card from './components/card1'
import { Box } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
        <main>
        <Box fontSize='1.5rem'>
        <strong><em><h1>The Most Played Video Games Worldwide.</h1></em></strong>
        </Box>
        <Card
          imagen='/apex.png'
          titulo='Apex Legends.'
          contenido='  It was released for Microsoft Windows, PlayStation 4 and Xbox One on February 4, 2019. In July 2020 it was announced that the title would arrive on Steam at the end of 2020, along with cross-play between platforms. On March 9, 2021, the game came to Nintendo Switch. An advertising campaign focused on YouTubers and professional players, managed to attract 1 million unique players in eight hours, 2.5 million on the first day and 50 million in three days. On March 7, 2022 the game would be released in "limited regional release" format for smartphones in some selected countries, and would subsequently be released globally, this port is developed by Tencent although it is supervised by Respawn itself.
          '
          color='red'
        />
        <Card
          imagen='/codm.png'
          titulo='Call Of Duty Mobile.'
          contenido=' Call of Duty: Mobile is a first-person shooter video game developed by Activision and Tencent Games TiMi Studios for the Android and IOS platform. It was released on October 1, 2019. In its first month the game had more than 148 million downloads and generated nearly $54 million in revenue. By the end of 2019, the game already garnered over 180 million downloads in just three months after launch, becoming the most downloaded game of the fourth quarter and the most downloaded game of the year. It is available in several languages, except for voices, which are only found in English.'
          color='#243B0B'
          />
        <Card
          imagen='/call.png'
          titulo='Call Of Duty Warzone.'
          contenido='Call of Duty: Warzone is a free-to-play First Person Shooter video game released on March 10, 2020 for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, and Microsoft Windows. The game mode is available on these platforms and is part of the 2019 video game, Call of Duty: Modern Warfare, but does not require purchase and was introduced during season 2 of Modern Warfare content.Call of Duty: Warzone was developed by Infinity Ward and Raven Software and published by Activision. Warzone allows online multiplayer combat between 150 players, although some limited-time game modes support 200 players. The game features both cross-platform play and cross-platform progression between three games.
          '
          color='#8A2908'
        />
      </main>
    </div>
  );
}

export default App;
