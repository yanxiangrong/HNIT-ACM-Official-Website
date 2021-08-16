import React from "react";
import "./Weather.css"
import {Button, Popover, Skeleton, Spin, Tooltip} from 'antd';
import {LoadingOutlined, SyncOutlined} from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>

interface State {
  loading: boolean       // 加载中
  icon: string           // 图标
  temp: number           // 温度，℃
  description: string    // 详细天气  阴，多云
  feelsLike: number     // 体感温度
  tempMin: number       // 最低温
  tempMax: number        // 最高温
  pressure: number       // 大气压 hPa
  humidity: number       // 湿度 %
  visibility: number     // 能见度，米
  windSpeed: number      // 风速 meter/sec
  windDeg: number        // 风向
  clouds: number         // 云层 %
  dt: number             // 计算时间
  sunrise: number        // 日出
  sunset: number         // 日落
}

export default class Weather extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.getWeather = this.getWeather.bind(this)
    this.syncButtonHandle = this.syncButtonHandle.bind(this)
    this.state = {
      loading: true, icon: "not-available", temp: -1, description: "",
      feelsLike: -1,
      tempMin: -1,
      tempMax: -1,
      pressure: -1,
      humidity: -1,
      visibility: -1,
      windSpeed: -1,
      windDeg: -1,
      clouds: -1,
      dt: 0,
      sunrise: 0,
      sunset: 0,
    }
  }

  weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=26.88&lon=112.68&appid=17e9e9ff665a13acc18f429036786c17&units=metric&lang=zh_cn"
  iconUrlPre = "/assets/weather-icons/"
  iconUrlSuf = ".svg"

  timeSleep = 2;

  syncButtonHandle() {
    this.setState({loading: true})
    this.getWeather()
  }

  getWeather() {
    fetch(this.weatherAPI).then(r => {
      return r.json()
    }).then(json => {
      console.log(json)

      this.setState({
        icon: json["weather"][0]["icon"],
        temp: json["main"]["temp"],
        description: json["weather"][0]["description"],
        feelsLike: json["main"]["feels_like"],
        tempMin: json["main"]["temp_min"],
        tempMax: json["main"]["temp_max"],
        pressure: json["main"]["pressure"],
        humidity: json["main"]["humidity"],
        visibility: json["visibility"],
        windSpeed: json["wind"]["speed"],
        windDeg: json["wind"]["deg"],
        clouds: json["clouds"]["all"],
        dt: json["dt"],
        sunrise: json["sys"]["sunrise"],
        sunset: json["sys"]["sunset"],
      })
    }).catch(e => {
      console.log(e)
      setTimeout(this.getWeather, this.timeSleep * 1000)
      this.timeSleep *= 2
    })
      .finally(() => this.setState({loading: false}))
  }

  convertTimestamp(timestamp: number) {
    let d = new Date(timestamp * 1000)
    return d.getHours() + ":" + d.getMinutes()
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const {
      loading, icon, temp, description, feelsLike, tempMin, tempMax, pressure, humidity,
      visibility, windSpeed, windDeg, clouds, dt, sunrise, sunset
    } = this.state
    const iconUrl = this.iconUrlPre + icon + this.iconUrlSuf

    const cardContent = (
      <div className={"cardContentStyle"}>
        {loading && <Skeleton active/>}
        {!loading &&
        <div style={{display: "flex", flexDirection: "row"}}>
          <div className={"bigIcon"}>
            <img style={{height: 128, width: 128}} src={iconUrl} alt={icon}/>
            <span style={{fontSize: "32px"}}>{temp} ℃</span>
            <span style={{fontSize: "24px"}}>{description}</span>
          </div>

          <div className={"contentSpace"}>
            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""}
                   src={"/assets/weather-icons/production/line/all/thermometer-celsius.svg"}/>
              <Tooltip title="温度">
                <span>{temp} ℃</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/humidity.svg"}/>
              <Tooltip title="湿度">
                <span>{humidity} %</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/barometer.svg"}/>
              <Tooltip title="大气压">
                <span>{pressure} hPa</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/celsius.svg"}/>
              <Tooltip title="体感温度">
                <span>{feelsLike} ℃</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""}
                   src={"/assets/weather-icons/production/line/all/thermometer-colder.svg"}/>
              <Tooltip title="最低温度">
                <span>{tempMin} ℃</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""}
                   src={"/assets/weather-icons/production/line/all/thermometer-warmer.svg"}/>
              <Tooltip title="最高温度">
                <span>{tempMax} ℃</span>
              </Tooltip>
            </div>


            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/mist.svg"}/>
              <Tooltip title="能见度">
                <span>{visibility} m</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/wind-beaufort-" +
              Math.round(Math.pow((windSpeed / 0.836), 2.0 / 3.0)).toString() + ".svg"}/>
              <Tooltip title="风速">
                <span>{windSpeed} m/s</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} style={{transform: "rotate(" + windDeg.toString() + "deg)"}} alt={""}
                   src={"/assets/weather-icons/production/line/all/compass.svg"}/>
              <Tooltip title="风向">
                <span>{windDeg} °</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/cloudy.svg"}/>
              <Tooltip title="云层清晰度">
                <span>{clouds} %</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""}
                   src={"/assets/weather-icons/production/line/all/not-available.svg"}/>
              <Tooltip title="数据计算时间">
                <span>{this.convertTimestamp(dt)}</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/sunrise.svg"}/>
              <Tooltip title="日出时间">
                <span>{this.convertTimestamp(sunrise)}</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/sunset.svg"}/>
              <Tooltip title="日落时间">
                <span>{this.convertTimestamp(sunset)}</span>
              </Tooltip>
            </div>

          </div>
        </div>
        }
      </div>
    )

    return (
      <Popover placement="bottom" title={
        <div className={"popoverTitle"}>
          <h3>衡阳</h3>
          <Button shape="circle" type="text" onClick={this.syncButtonHandle}><SyncOutlined spin={loading}/></Button>
        </div>
      } content={cardContent}>
        <div className={"weatherSpace"}>
          <img className={"weatherIcon"} src={iconUrl} alt={icon}/>
          <div className={"weatherTextSpace"}>
            {loading && <Spin indicator={antIcon}/>}
            {!loading &&
            <div className={"weatherText"}>
              <span className={"weatherElem"}>{temp} ℃</span>
              <span className={"weatherElem"}>{description}</span>
            </div>}
          </div>
        </div>
      </Popover>
    )
  }
}