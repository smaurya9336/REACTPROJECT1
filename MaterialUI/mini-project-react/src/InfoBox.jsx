import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    const INIT_Image = "https://plus.unsplash.com/premium_photo-1673415819372-e57ae96bb202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    const COLD_URL = "https://media.istockphoto.com/id/1181599019/photo/empty-panoramic-winter-background.jpg?s=1024x1024&w=is&k=20&c=Ig1-HKRP2-lBxQeDZdKhWp-oxIP3Xz90h7wgmNqhESo=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
        <div>
           <br></br>
           <br />
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
          info.humidity > 80 
          ? <ThunderstormIcon/>
          : info.temp > 15
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div>Temprature = {info.temp}&deg;C</div>
        <div>Humitidy  = {info.humidity} </div>
        <div>Min Temp = {info.tempMin} </div>
        <div>Max Temp = {info.tempMax} </div>
        <p>The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}