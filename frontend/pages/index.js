
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Image from "next/image";
import CountUp from 'react-countup';
import { Chart as GoogleChart } from "react-google-charts";
import { toPng } from 'html-to-image';
import { NextSeo } from "next-seo";
import DatePicker from "react-datepicker";
import SortableTable from "@/components/SortableTable";
import { capitalizeFirstLetter } from "@/helpers/string";
import SolidSvg from "@/components/SolidSvg";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import "react-datepicker/dist/react-datepicker.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  {
    id: 'vertical-line',
    afterDraw: function (chart, easing) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#dddddd88';
        ctx.stroke();
        ctx.restore();
      }
    }
  }
);

// Tooltip follows mouse position
Tooltip.positioners.custom = function(elements, eventPosition) {
  return {
      x: eventPosition.x,
      y: eventPosition.y
  };
};

const continents = ["World", "Asia", "Europe", "Africa", "North America", "South America", "Antarctica", "Oceania"]
const chartOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    tooltip: {
      enabled: true,
      position: 'custom',
      animation: {
        duration: 0
      },
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 6
      }
    }
  },
  animation: false
};

export default function Home({ ranking, worldStatistics }) {
  const [statisticsLoading, setStatisticsLoading] = useState(true)
  const [statisticsType, setStatisticsType] = useState("chart")
  const [selectedCountries, setSelectedCountries] = useState(["World"])
  const [cachedStatistics, setCachedStatistics] = useState(worldStatistics)
  const [chartColors, setChartColors] = useState({ "World": "#EF4444" })
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  const [geoMapData, setGeoMapData] = useState([])
  const [tableData, setTableData] = useState([])
  const [sortedRanking, setSortedRanking] = useState([...ranking.sort((a, b) => b.total_cases - a.total_cases)])
  const [selectedCardStatistic, setSelectedCardStatistic] = useState("cases")
  const [cardStatistics, setCardStatistics] = useState({
    today_cases: 0,
    total_cases: 0,
    today_deaths: 0,
    total_deaths: 0
  })
  const statisticsContainerRef = useRef(null);
  const [statisticsTimeSpan, setStatisticsTimeSpan] = useState({ 
    from: new Date("5/7/2022").getTime(), 
    to: Date.now()
  })
  
  const handleCountryClick = (country) => {
    if (selectedCountries.includes(country)) {
      // If it is already in and more than one is selected, remove it
      if (selectedCountries.length !== 1) {
        setSelectedCountries(prev => prev.filter(item => item !== country))
      }
    } else {
      // Add to countries if not already in it
      setSelectedCountries(prev => [...prev, country])
    }
  }

  const fetchStatistics = async(countries) => {
    // Check if countries are already cached
    const missingCountryStatistics = [];
    const missingChartColors = {}
    countries.forEach(country => {
      if (!cachedStatistics[country]) {
        missingCountryStatistics.push(country)

        // Gernerate chart color for that country
        const randomHexColor = "#" + Math.random().toString(16).substr(-6)
        missingChartColors[country] = randomHexColor;
      }
    });

    if (missingCountryStatistics.length === 0)
      return;

    setChartColors(prev => ({ ...prev, ...missingChartColors }))
    setStatisticsLoading(true)

    // Fetch statistics for non-cached countries
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_URL}/diseases/monkeypox?countries=${missingCountryStatistics.join(",")}`)
      const data = await res.json()

      // Check if it is not initial fetch, then fill up possible missing timeframes from world dates, as world gets updated each day
      if (missingCountryStatistics[0] !== "World") {
        for (let key of Object.keys(data.statistics)) {
          let lastAvailableStatistic = data.statistics[key]?.at(-1);
          let missingDays = cachedStatistics["World"].length - data.statistics[key].length;
          
          if (missingDays <= 0)
            continue;

          while (missingDays !== 0) {
            data.statistics[key].push({
              date: cachedStatistics["World"].at(cachedStatistics["World"].length - missingDays)?.date,
              today_cases: 0,
              total_cases: lastAvailableStatistic.total_cases,
              today_deaths: 0,
              total_deaths: lastAvailableStatistic.total_deaths  
            })

            missingDays--;
          }
        }
      }
      
      setCachedStatistics(prev => ({ ...prev, ...data.statistics }))
    } catch (error) {
      console.log(error)
    } finally {
      setStatisticsLoading(false)
    }
  }

  const refreshCardStatistics = () => {
    if (selectedCountries.includes("World")) {
      setCardStatistics({
        today_cases: cachedStatistics["World"]?.at(-1)?.new_cases || 0,
        total_cases: cachedStatistics["World"]?.at(-1)?.total_cases || 0,
        today_deaths: cachedStatistics["World"]?.at(-1)?.new_deaths || 0,
        total_deaths: cachedStatistics["World"]?.at(-1)?.total_deaths || 0
      })

      return;
    }

    // Sum up all selected country statistics
    const selectedCountriesCardStatistics = {
      today_cases: 0,
      total_cases: 0,
      today_deaths: 0,
      total_deaths: 0
    }

    selectedCountries.forEach(country => {
      if (!cachedStatistics[country])
        return;

      selectedCountriesCardStatistics.today_cases += cachedStatistics[country]?.at(-1)?.new_cases || 0;
      selectedCountriesCardStatistics.total_cases += cachedStatistics[country]?.at(-1)?.total_cases || 0;
      selectedCountriesCardStatistics.today_deaths += cachedStatistics[country]?.at(-1)?.new_deaths || 0;
      selectedCountriesCardStatistics.total_deaths += cachedStatistics[country]?.at(-1)?.total_deaths || 0;
    })

    setCardStatistics(selectedCountriesCardStatistics)
  }

  const refreshChart = () => {
    const datasets = []
    let dateLabels;

    selectedCountries.forEach((country) => {
      const countryStatistics = cachedStatistics[country]   
      
      // If still loading
      if (!countryStatistics)
        return;
      
      const filteredData = countryStatistics.filter((entry) => entry.date >= statisticsTimeSpan.from && entry.date <= statisticsTimeSpan.to)
      const formattedData = selectedCardStatistic === "cases" ? filteredData.map((entry) => entry.total_cases) : filteredData.map((entry) => entry.new_deaths)
      const formattedDates = filteredData.map(entry => new Date(entry.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short", 
        day: "numeric"
      }))

      datasets.push({
        label: country, 
        data: formattedData,
        borderColor: chartColors[country],
        backgroundColor: chartColors[country],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3, 
        pointHoverBackgroundColor: chartColors[country], 
      })

      if (!dateLabels)
        dateLabels = formattedDates
    })

    setChartData({
      datasets,
      labels: dateLabels
    })
  }

  const sortRanking = () => {
    if (selectedCardStatistic === "cases")
      setSortedRanking([...ranking.sort((a, b) => b.total_cases - a.total_cases)]);
    else if (selectedCardStatistic === "deaths")
      setSortedRanking([...ranking.sort((a, b) => b.total_deaths - a.total_deaths)]);
  }

  const refreshGeoMapData = () => {
    setGeoMapData([
      ["Country", capitalizeFirstLetter(selectedCardStatistic)],
      ...ranking.filter(r => !continents.includes(r.country)).map((r) => [r.country, selectedCardStatistic === "cases" ? r.total_cases : r.total_deaths])
    ])
  }

  const refreshTableData = () => {
    // Check if everything loaded
    if (statisticsLoading || selectedCountries.some(country => !cachedStatistics[country]))
      return;

    
    setTableData(selectedCountries.map(country => {
      // Find entries matching the date (time exclusive)
      let startEntry = cachedStatistics[country]?.find(item => 
        new Date(item.date).toDateString() === new Date(statisticsTimeSpan.from).toDateString()
      );
  
      let endEntry = cachedStatistics[country]?.find(item => 
        new Date(item.date).toDateString() === new Date(statisticsTimeSpan.to).toDateString()
      );

      // statisticsTimeSpan date's can be higher than the actual data
      if (!startEntry)
        startEntry = cachedStatistics[country].at(0)
      if (!endEntry)
        endEntry = cachedStatistics[country].at(-1)
  
      // Extract and calculate count & change
      const startCount = selectedCardStatistic === "cases" ? startEntry.total_cases : startEntry.total_deaths
      const endCount = selectedCardStatistic === "cases" ? endEntry.total_cases : endEntry.total_deaths

      const absoluteChange = endCount - startCount;
      const relativeChange = startCount !== 0 ? (absoluteChange / startCount) * 100 : 0;  

      return {
        country,
        startCount,
        endCount,
        absoluteChange,
        relativeChange
      }
    }))
  }

  const saveStatisticsAsPng = () => {
    toPng(statisticsContainerRef.current, { 
      cacheBust: false, 
      backgroundColor: "#fff", 
      filter: (node) => {
        return !node.classList?.contains("screenshot-ignore");
      }
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "mpox-statistics.png";
        link.href = dataUrl;
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(worldStatistics)
    fetchStatistics(selectedCountries)
  }, [selectedCountries])

  useEffect(() => {
    refreshCardStatistics()
  }, [selectedCountries, cachedStatistics])
  
  useEffect(() => {
    refreshTableData()
    refreshChart()
  }, [statisticsTimeSpan, selectedCardStatistic, selectedCountries, cachedStatistics])

  useEffect(() => {
    sortRanking();
    refreshGeoMapData();
  }, [selectedCardStatistic])

  return (
    <>
      <NextSeo 
				title="Mpox Statistics, Info, Prevention: Everything You Need to Know" 
				description="Gain valuable insights into monkeypox statistics, information, and prevention measures. Stay informed and protected with comprehensive resources on this infectious disease."
			/>

      <main className="container mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row h-full lg:max-h-[68vh] py-5 px-4 gap-8 mb-8">
          <div className="flex flex-col lg:w-[80%]">
            <div className="flex justify-between mb-8">
              <h1 className="text-3xl font-bold">Mpox statistics</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div aria-label="Click for case statistics" onClick={() => setSelectedCardStatistic("cases")} className="flex-1 flex-col items-center border rounded-md bg-white cursor-pointer">
                {selectedCardStatistic === "cases" && (
                  <div className="bg-red-500 h-3 rounded-t-md" />
                )}

                <div className="px-4 py-3">
                  <h4 className="text-gray-600 mb-1">Confirmed Cases (today)</h4>
                  <h3 className="font-medium text-2xl text-red-600 mb-2">
                    <CountUp 
                      end={cardStatistics.today_cases} 
                      prefix={cardStatistics.today_cases === 0 ? "" : "+"} 
                      duration={3} 
                    />
                  </h3>
                  <h5 className="font-medium text-sm">
                    <CountUp 
                      end={cardStatistics.total_cases} 
                      duration={3} 
                      suffix=" Total"
                    />
                  </h5>
                </div>
              </div>

              <div aria-label="Click for death statistics" onClick={() => setSelectedCardStatistic("deaths")} className="flex-1 flex-col items-center border rounded-md bg-white cursor-pointer">
                {selectedCardStatistic === "deaths" && (
                  <div className="bg-gray-500 h-3 rounded-t-md" />
                )}

                <div className="px-4 py-3">
                  <h4 className="text-gray-600 mb-1">Confirmed Deaths (today)</h4>
                  <h3 className="font-medium text-2xl text-gray-600 mb-2">
                    <CountUp 
                      end={cardStatistics.today_deaths} 
                      prefix={cardStatistics.today_deaths === 0 ? "" : "+"} 
                      duration={3} 
                    />
                  </h3>
                  <h5 className="font-medium text-sm">
                    <CountUp 
                      end={cardStatistics.total_deaths} 
                      duration={3} 
                      suffix=" Total"
                    />
                  </h5>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-[500px] lg:h-full bg-white border rounded-md">
              <div className="flex md:flex-col justify-center mb-4 md:mb-0 px-5 py-3 gap-10 md:gap-6 border-b md:border-r md:border-b-0">
                <button onClick={() => setStatisticsType("chart")} className={`flex flex-col items-center text-sm ${statisticsType === "chart" ? "text-blue-500 font-medium" : "text-gray-500"} transition-all`}>
                  <SolidSvg src="/icons/chart.svg" color={statisticsType === "chart" ? "#3b82f6" : "#9e9e9e"} width={20} height={20} />
                  Chart
                </button>
                <button onClick={() => setStatisticsType("map")} className={`flex flex-col items-center text-sm ${statisticsType === "map" ? "text-blue-500 font-medium" : "text-gray-500"} transition-all`}>
                  <SolidSvg src="/icons/earth.svg" color={statisticsType === "map" ? "#3b82f6" : "#9e9e9e"} width={20} height={20} />
                  Map
                </button>
                <button onClick={() => setStatisticsType("table")} className={`flex flex-col items-center text-sm ${statisticsType === "table" ? "text-blue-500 font-medium" : "text-gray-500"} transition-all`}>
                  <SolidSvg src="/icons/table.svg" color={statisticsType === "table" ? "#3b82f6" : "#9e9e9e"} width={20} height={20} />
                  Table
                </button>
              </div>
              
              <div ref={statisticsContainerRef} className="flex flex-col justify-between overflow-hidden relative flex-1 p-4">
                {statisticsType === "chart" ? (
                  <Line
                    className="mb-4"
                    options={chartOptions}
                    data={chartData}
                    redraw
                  />
                ) : statisticsType === "map" ? (
                  <GoogleChart
                    chartType="GeoChart"
                    width="100%"
                    height="500px"
                    data={geoMapData}
                    options={{
                      colors: ["#ffc9bb", "#c61a09"]
                    }}
                  />
                ) : statisticsType === "table" ? (
                  <div className="max-h-[500px] styled-scrollbar overflow-y-auto">
                    <SortableTable 
                      data={tableData}
                      columns={[
                        {
                          label: "Country/area",
                          accessor: "country",
                          sortable: true
                        },
                        {
                          label: new Date(statisticsTimeSpan.from).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
                          accessor: "startCount",
                          sortable: true
                        },
                        {
                          label: new Date(statisticsTimeSpan.to).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
                          accessor: "endCount",
                          sortable: true
                        },
                        {
                          label: "Absolute Change",
                          accessor: "absoluteChange",
                          sortable: true,
                          format: (val) => `${val >= 0 ? "+" : ""}${val}`
                        },
                        {
                          label: "Relative Change",
                          accessor: "relativeChange",
                          sortable: true,
                          format: (val) => `${val.toFixed(2)}%`
                        },
                      ]}
                    />
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2 justify-between items-center text-sm text-gray-600 mt-4">
                  <div>
                    <p><strong>Data source: </strong>World Health Organization</p>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <label htmlFor="statistic-from__date-picker">From</label>
                    <DatePicker
                      id="statistic-from__date-picker"
                      selected={statisticsTimeSpan.from}
                      onChange={(date) => setStatisticsTimeSpan(prev => ({ ...prev, from: date.getTime() }))}
                      selectsStart
                      dateFormat="MMM d, yyyy"
                      startDate={statisticsTimeSpan.from}
                      endDate={statisticsTimeSpan.to}
                      maxDate={new Date()}
                      className="outline-none bg-gray-100 hover:bg-gray-200 transition-all rounded-md px-2 py-1 cursor-pointer w-28 mr-4"
                    />
                    <label htmlFor="statistic-to__date-picker">To</label>
                    <DatePicker
                      id="statistic-to__date-picker"
                      selected={statisticsTimeSpan.to}
                      onChange={(date) => setStatisticsTimeSpan(prev => ({ ...prev, to: date.getTime() }))}
                      selectsEnd
                      dateFormat="MMM d, yyyy"
                      startDate={statisticsTimeSpan.from}
                      endDate={statisticsTimeSpan.to}
                      minDate={statisticsTimeSpan.from}
                      maxDate={new Date()}
                      className="outline-none bg-gray-100 hover:bg-gray-200 transition-all rounded-md px-2 py-1 cursor-pointer w-28"
                    />
                    <button onClick={saveStatisticsAsPng} className="flex items-center gap-2 outline-none bg-gray-100 hover:bg-gray-200 transition-all rounded-md px-2 py-1 screenshot-ignore">
                      <Image src="/icons/download.svg" width={15} height={15} alt="" />
                      Download
                    </button>
                    <button onClick={() => navigator.share({ title: document.title, url: window?.location })} className="flex items-center gap-2 outline-none bg-gray-100 hover:bg-gray-200 transition-all rounded-md px-2 py-1 screenshot-ignore">
                      <Image src="/icons/share.svg" width={12} height={12} alt="" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative   max-h-[500px] lg:max-h-none lg:w-[20%] border bg-white rounded-md px-4 pt-3 overflow-y-auto styled-scrollbar">
            <h3 className="font-semibold mb-3">{capitalizeFirstLetter(selectedCardStatistic)} by countries</h3>
            <div className="space-y-1 text-sm">
              {sortedRanking.length === 0 && (
                <p className="text-red-500">No data was found. Please try again later or contact me.</p>
              )}
              {sortedRanking.map((r, i) => (
                <button key={i} disabled={statisticsLoading} onClick={() => handleCountryClick(r.country)} className={`w-full flex cursor-pointer disabled:cursor-default gap-2 items-center px-2 py-1 ${selectedCountries.includes(r.country) ? "bg-blue-50" : (i === 0 || i % 2 === 0) ? "bg-gray-100 hover:bg-gray-50" : "hover:bg-gray-50"}`}>
                  <input type="checkbox" checked={selectedCountries.includes(r.country)} readOnly />
                  <div className="flex flex-1 justify-between items-center gap-2">
                    <p>{r.country}</p>
                    <p>{selectedCardStatistic === "cases" ? r.total_cases : r.total_deaths}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className={`sticky left-0 right-0 bottom-0`}>
              <div className="h-6 bg-gradient-to-t from-white to-white/0" />
              <div className="bg-white py-2 pl-2">
                <button onClick={() => setSelectedCountries(["World"])} className="text-sm text-gray-500">Clear selection { (selectedCountries.length === 1 && selectedCountries[0] === "World") ? "" : `(${selectedCountries.length})`}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-80 lg:w-[80%]">
          <h1 className="text-3xl font-bold mb-3">What is MPOX?</h1>
          <p className="text-gray-500 mb-6">
            Mpox is an illness caused by the monkeypox virus. It is a viral infection which can spread between people, mainly through close contact, and occasionally from the environment to people via things and surfaces that have been touched by a person with mpox. In settings where the monkeypox virus is present among some wild animals, it can also be transmitted from infected animals to people who have contact with them.
          </p>

          <Faq />
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const worldStatisticsResponse = await fetch(`${process.env.INTERNAL_BACKEND_URL}/diseases/monkeypox?countries=World`)
    const worldStatisticsData = await worldStatisticsResponse.json()

    const rankingResponse = await fetch(`${process.env.INTERNAL_BACKEND_URL}/diseases/monkeypox/ranking`)
    const rankingData = await rankingResponse.json()
   
    return {
      props: {
        ranking: rankingData.statistics,
        worldStatistics: worldStatisticsData.statistics
      },
      revalidate: 300, // 5 minutes
    }
  } catch (error) {
    console.error("Something went wrong while fetching the ranking: ", error)

    return {
      props: {
        ranking: [],
        worldStatistics: {}
      },
      revalidate: 10, // 10 seconds
    }
  }
}
