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
  feelsLike: number      // 体感温度
  tempMin: number        // 最低温
  tempMax: number        // 最高温
  pressure: number       // 大气压 hPa
  humidity: number       // 湿度 %
  visibility: number     // 能见度，米
  windSpeed: number      // 风速 meter/sec
  windScale: number      // 风级
  wind360: number        // 风向360角度
  windDir: string        // 风向
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
      windScale : -1,
      wind360: -1,
      windDir: "",
      clouds: -1,
      dt: 0,
      sunrise: 0,
      sunset: 0,
    }
  }

  RealtimeWeatherAPI = "https://devapi.qweather.com/v7/weather/now?key=5d49aad9d7e24b75ad6c8269a99e7c2e&location=101250410"
  ForecastWeatherAPI = "https://devapi.qweather.com/v7/weather/3d?key=5d49aad9d7e24b75ad6c8269a99e7c2e&location=101250410"
  iconUrlPre = "/assets/qweather-icons/"
  iconUrlSuf = ".svg"

  timeSleep = 2;  // 超时重试时间

  syncButtonHandle() {
    this.setState({loading: true})
    this.getWeather()
  }

  getWeather() {
    fetch(this.RealtimeWeatherAPI).then(r => {
      return r.json()
    }).then(json => {
      console.log(json)

      this.setState({
        icon: json["now"]["icon"],
        temp: json["now"]["temp"],
        description: json["now"]["text"],
        feelsLike: json["now"]["feelsLike"],
        pressure: json["now"]["pressure"],
        humidity: json["now"]["humidity"],
        visibility: json["now"]["vis"],
        windSpeed: json["now"]["windSpeed"],
        wind360: json["now"]["wind360"],
        windDir: json["now"]["windDir"],
        clouds: json["now"]["cloud"],
        dt: json["now"]["obsTime"],
      })
      return fetch(this.ForecastWeatherAPI)
    }).then(r => {
      return r.json()
    }).then(json => {
      console.log(json)
      this.setState({
        sunrise: json["daily"][0]["sunrise"],
        sunset: json["daily"][0]["sunset"],
        tempMax: json["daily"][0]["tempMax"],
        tempMin: json["daily"][0]["tempMin"]
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
      visibility, windSpeed, wind360, clouds, dt, sunrise, sunset, windDir
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
              <img className={"smallIcon"} style={{transform: "rotate(" + wind360.toString() + "deg)"}} alt={""}
                   src={"/assets/weather-icons/production/line/all/compass.svg"}/>
              <Tooltip title="风向">
                <span>{windDir}</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/cloudy.svg"}/>
              <Tooltip title="云量">
                <span>{clouds} %</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""}
                   src={"/assets/weather-icons/production/line/all/not-available.svg"}/>
              <Tooltip title="数据观测时间">
                <span>{dt}</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/sunrise.svg"}/>
              <Tooltip title="日出时间">
                <span>{sunrise}</span>
              </Tooltip>
            </div>

            <div className={"contentItem"}>
              <img className={"smallIcon"} alt={""} src={"/assets/weather-icons/production/line/all/sunset.svg"}/>
              <Tooltip title="日落时间">
                <span>{sunset}</span>
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
              <span className={"weatherElem"}>{Math.round(temp)} ℃</span>
              <span className={"weatherElem"}>{description}</span>
            </div>}
          </div>
        </div>
      </Popover>
    )
  }
}
