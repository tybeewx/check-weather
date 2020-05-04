import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "e2b1d852493aff328dfcf64cef7a431d";


class App extends React.Component {
    state ={ 
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();

        if (city && country){
            if (data.cod == 404){
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                wind: undefined,
                error: "Input doesn't match any known location. Please try again."
            })
        } else{
            this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    wind: data.wind.speed,
                    error: ""
                })}}};
render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className= "row">
                                <div className="col-xs-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather ={this.getWeather} />
                                    <Weather 
                                        temperature ={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        wind={this.state.wind}
                                        error={this.state.error}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default App;