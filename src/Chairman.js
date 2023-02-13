import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Chart from "react-apexcharts";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import "./Chairman.css";
function Chairman() {
  const [apidata, setapidata] = useState([]);
  const [apidata3, setapidata3] = useState([]);
  const [apidata4, setapidata4] = useState([]);
  const [apidata8, setapidata8] = useState([]);
  //Expense Revenue
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  //Hiring Firing
  const [category1, setCategory1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  //Sale Purchase
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  //Cash Paid, Bank Paid, Total Paid
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/apidata")
      .then((res) => {
        console.log(res);
        setapidata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const month = [];
    const expense = [];
    const revenue = [];
    axios
      .get("http://localhost:3000/apidata2")
      .then((res) => {
        console.log(res);
        res.data.map((item) => {
          return (
            month.push(item.month),
            expense.push(item.expense),
            revenue.push(item.revenue)
          );
        });
        console.log("month", month);
        console.log("expense", expense);
        console.log("revenue", revenue);
        setCategory(month);
        setData(revenue);
        setData1(expense);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/apidata3")
      .then((res) => {
        console.log(res);
        setapidata3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/apidata4")
      .then((res) => {
        console.log(res);
        setapidata4(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const month = [];
    const hiring = [];
    const firing = [];

    axios
      .get("http://localhost:3000/apidata5")
      .then((res) => {
        console.log(res);
        res.data.map((item) => {
          return (
            month.push(item.month),
            hiring.push(item.hiring),
            firing.push(item.firing)
          );
        });
        console.log("month", month);
        console.log("hiring", hiring);
        console.log("firing", firing);

        setCategory1(month);
        setData2(hiring);
        setData3(firing);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const month = [];
    const sale = [];
    const purchase = [];

    axios
      .get("http://localhost:3000/apidata6")
      .then((res) => {
        console.log(res);
        res.data.map((item) => {
          return (
            month.push(item.month),
            sale.push(item.sale),
            purchase.push(item.purchase)
          );
        });
        console.log("month", month);
        console.log("sale", sale);
        console.log("purchase", purchase);

        setCategory1(month);
        setData4(sale);
        setData5(purchase);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const month = [];
    const cashpaid = [];
    const bankpaid = [];
    const totalpaid = [];
    axios
      .get("http://localhost:3000/apidata7")
      .then((res) => {
        console.log(res);
        res.data.map((item) => {
          return (
            month.push(item.month),
            cashpaid.push(item.cashpaid),
            bankpaid.push(item.bankpaid),
            totalpaid.push(item.totalpaid)
          );
        });
        console.log("month", month);
        console.log("cashpaid", cashpaid);
        console.log("bankpaid", bankpaid);
        console.log("totalpaid", totalpaid);

        setCategory1(month);
        setData6(cashpaid);
        setData7(bankpaid);
        setData8(totalpaid);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/apidata8")
      .then((res) => {
        console.log(res);
        setapidata8(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const unique = apidata.filter((item) => {
    return item.attendance === "P";
  });
  const unique1 = apidata.filter((item) => {
    return item.attendance === "A";
  });
  const unique2 = apidata.filter((item) => {
    return item.attendance === "L";
  });
  const unique3 = apidata.filter((item) => {
    return item.department === "SA System";
  });
  const unique4 = apidata.filter((item) => {
    return item.department === "GVT Construction";
  });
  const unique5 = apidata.filter((item) => {
    return item.department === "Watts & Luxes";
  });
  const unique55 = apidata.filter((item) => {
    return item.department === "Ethernet";
  });
  const unique66 = apidata.filter((item) => {
    return item.department === "Marketing";
  });

  const unique6 = apidata.filter((item) => {
    return item.department === "Watts & Luxes" && item.attendance === "P";
  });
  const unique7 = apidata.filter((item) => {
    return item.department === "Watts & Luxes" && item.attendance === "A";
  });
  const unique8 = apidata.filter((item) => {
    return item.department === "Watts & Luxes" && item.attendance === "L";
  });
  const unique9 = apidata.filter((item) => {
    return item.department === "SA System" && item.attendance === "P";
  });
  const unique10 = apidata.filter((item) => {
    return item.department === "SA System" && item.attendance === "A";
  });
  const unique11 = apidata.filter((item) => {
    return item.department === "SA System" && item.attendance === "L";
  });
  const unique12 = apidata.filter((item) => {
    return item.department === "GVT Construction" && item.attendance === "P";
  });
  const unique13 = apidata.filter((item) => {
    return item.department === "GVT Construction" && item.attendance === "A";
  });
  const unique14 = apidata.filter((item) => {
    return item.department === "GVT Construction" && item.attendance === "L";
  });
  const unique121 = apidata.filter((item) => {
    return item.department === "Ethernet" && item.attendance === "P";
  });
  const unique131 = apidata.filter((item) => {
    return item.department === "Ethernet" && item.attendance === "A";
  });
  const unique141 = apidata.filter((item) => {
    return item.department === "Ethernet" && item.attendance === "L";
  });
  const unique122 = apidata.filter((item) => {
    return item.department === "Marketing" && item.attendance === "P";
  });
  const unique132 = apidata.filter((item) => {
    return item.department === "Marketing" && item.attendance === "A";
  });
  const unique142 = apidata.filter((item) => {
    return item.department === "Marketing" && item.attendance === "L";
  });
  const dep = [
    ...new Set(
      apidata.map((curdep) => {
        return curdep.department;
      })
    ),
  ];
  console.log(dep);

  let treceivable = 0;
  let x = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    treceivable += item.receivable + x;
  });

  let tincome = 0;
  let x1 = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    tincome += item.income + x1;
  });

  let tpayable = 0;
  let x2 = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    tpayable += item.payable + x2;
  });

  let toverdue = 0;
  let x3 = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    toverdue += item.overdue + x3;
  });

  let texpense = 0;
  let x4 = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    texpense += item.expense + x4;
  });

  let tcash = 0;
  let x5 = Math.floor(Math.random() * 10);
  apidata3.forEach((item) => {
    tcash += item.cash + x5;
  });

  let tprofit = 0;
  apidata4.forEach((item) => {
    tprofit += item.profit;
  });
  console.log("Total Profit", tprofit);

  let tlayzoo = 0;
  apidata8.forEach((item) => {
    tlayzoo += item.layzoo;
  });
  console.log("Total layzoo", tlayzoo);

  let tnightblink = 0;
  apidata8.forEach((item) => {
    tnightblink += item.nightblink;
  });
  console.log("Total Night Blink", tnightblink);

  let tlcyflame = 0;
  apidata8.forEach((item) => {
    tlcyflame += item.lcyflame;
  });
  console.log("Total Lcyflame", tlcyflame);

  let tfeelopie = 0;
  apidata8.forEach((item) => {
    tfeelopie += item.feelopie;
  });
  console.log("Total Feelopie", tfeelopie);

  let tgrofler = 0;
  apidata8.forEach((item) => {
    tgrofler += item.grofler;
  });
  console.log("Total Grofler", tgrofler);

  var j = 0;
  function divchange() {
    var divtag = document.getElementById("divi");
    var textcolor = ["red", "purple", "rgb(78, 77, 77)", "brown", "green"];
    divtag.style.color = textcolor[j];
    j = (j + 1) % textcolor.length;
  }
  setInterval(divchange, 3000);

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const markers = [
    {
      markerOffset: -15,
      name: "Lahore",
      coordinates: [14.235, 51.9253],
    },
    {
      markerOffset: 25,
      name: "Sheikhupura",
      coordinates: [33.9391, 67.71],
    },
    {
      markerOffset: -25,
      name: "Karachi",
      coordinates: [23.685, 90.3563],
    },
    {
      markerOffset: 15,
      name: "Faislabad",
      coordinates: [40.0691, 45.0382],
    },
  ];
  const [theme, settheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      settheme("light-theme");
    } else {
      settheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="bot">
      <header className="vv">
        <Container>
          <Row>
            <Col>
              <span className="i2 mmm">
                <i className="fa-solid fa-house-chimney i1"></i>
              </span>
            </Col>
            <Col>
              <span className="ttt mmm">CHAIRMAN</span>
            </Col>
            <Col>
              <span className="ttt mmm">DASHBOARD</span>
            </Col>
            <Col>
              <form className="item">
                <input
                  className="search mmm"
                  type="search"
                  placeholder="Search"
                />
              </form>
            </Col>
            <Col>
              <Link to="d" className="i3 mmmm">
                <span>
                  <i className="fa-solid fa-moon i4"></i>
                </span>
              </Link>
            </Col>
            <Col>
              <span className="i3 mmmm">
                <i className="fa-sharp fa-solid fa-bell i4"></i>
              </span>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="bot1">
        <Container>
          <Row className="tg">
            <Col>
              <div className="con2">
                <i className="fa-solid fa-users i"></i>
                <div className="font11">
                  Total Employees
                  <div className="font12">{apidata.length}</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="con6">
                <i className="fa-solid fa-check-double i"></i>
                <div className="font11">
                  Total Presents
                  <div className="font12">{unique.length}</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="con4">
                <i className="fa-solid fa-xmark i"></i>
                <div className="font11">
                  Total Absents
                  <div className="font12">{unique1.length}</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="con5">
                <i className="fa-sharp fa-solid fa-clock i"></i>
                <div className="font11">
                  Total Late<div className="font12">{unique2.length}</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Row>
        <Col>
          <Container>
            <Table striped bordered hover size="sm" className="bot14">
              <thead className="th1">
                <tr>
                  <td>Department</td>
                  <td>Employees</td>
                  <td>Present</td>
                  <td>Absent</td>
                  <td>Late</td>
                </tr>
              </thead>
              <tbody className="tbbb">
                <tr>
                  <td>{dep[0]}</td>
                  <td>{unique3.length}</td>
                  <td>{unique9.length}</td>
                  <td>{unique10.length}</td>
                  <td>{unique11.length}</td>
                </tr>
                <tr>
                  <td>{dep[1]}</td>
                  <td>{unique4.length}</td>
                  <td>{unique12.length}</td>
                  <td>{unique13.length}</td>
                  <td>{unique14.length}</td>
                </tr>
                <tr>
                  <td>{dep[2]}</td>
                  <td>{unique5.length}</td>
                  <td>{unique6.length}</td>
                  <td>{unique7.length}</td>
                  <td>{unique8.length}</td>
                </tr>
                <tr>
                  <td>{dep[3]}</td>
                  <td>{unique55.length}</td>
                  <td>{unique121.length}</td>
                  <td>{unique131.length}</td>
                  <td>{unique141.length}</td>
                </tr>
                <tr>
                  <td>{dep[4]}</td>
                  <td>{unique66.length}</td>
                  <td>{unique122.length}</td>
                  <td>{unique132.length}</td>
                  <td>{unique142.length}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="box61">
              <div className="box7">
                <span className="fff">Expense Revenue Chart</span>
                <Chart
                  options={{
                    chart: {
                      id: "basic-bar",
                    },
                    fill: {
                      colors: ["#0000ff", "#00acc1", "#9C27B0"],
                    },
                    xaxis: {
                      categories: category,
                    },
                  }}
                  series={[
                    {
                      color: "#0000ff",
                      name: "Expense",
                      data: data1,
                    },
                    {
                      color: "#00acc1",
                      name: "Revenue",
                      data: data,
                    },
                  ]}
                  type="line"
                />
              </div>
            </div>
          </Col>

          <Col>
            <div className="bb" id="divi">
              <Col className="box4" colSpan={10}>
                <span className="boxx">Overall Year Sale Summary</span>
              </Col>

              <br></br>
              <Row>
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {treceivable} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text3"></i>
                    <div className="text2">Account Receivable</div>
                  </span>
                </Col>
                &nbsp;
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {tincome} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text4"></i>
                    <div className="text2">Total Income</div>
                  </span>
                </Col>
                &nbsp;
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {tpayable} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text3"></i>
                    <div className="text2">Total Payable</div>
                  </span>
                </Col>
              </Row>

              <br></br>
              <br></br>
              <Row>
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {toverdue} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text5"></i>
                    <div className="text2">Overdue PO</div>
                  </span>
                </Col>
                &nbsp;
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {texpense} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text4"></i>
                    <div className="text2">Expense</div>
                  </span>
                </Col>
                &nbsp;
                <Col className="box5">
                  <span className="text">
                    <span className="ff"> Rs. {tcash} </span>
                    <br></br>
                    <i class="fa-sharp fa-solid fa-briefcase text5"></i>
                    <div className="text2">Cash In Hand</div>
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="box61">
              <span className="fff">Product Summary Chart</span>
              <div className="box7">
                <div className="hhh">
                  <Chart
                    type="donut"
                    series={[1881, 12829, 301]}
                    options={{
                      labels: [
                        "Total Products: 1881",
                        "Stock Summary: 12829",
                        "Available Products: 301",
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="box61">
              <div className="box7">
                <span className="fff">Salary Chart</span>
                <Chart
                  options={{
                    chart: {
                      id: "basic-bar",
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: "smooth",
                    },
                    fill: {
                      colors: ["#0000ff", "#00acc1", "#9C27B0"],
                    },
                    xaxis: {
                      categories: category1,
                    },
                  }}
                  series={[
                    {
                      color: "#0000ff",
                      name: "Cash Paid",
                      data: data6,
                    },
                    {
                      color: "#00acc1",
                      name: "Bank Paid",
                      data: data7,
                    },
                    {
                      color: "#9C27B0",
                      name: "Total Paid",
                      data: data8,
                    },
                  ]}
                  type="area"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>
          <Container>
            <Table striped bordered hover size="sm" className="bot14">
              <thead className="th1">
                <tr>
                  <td>Location</td>
                  <td>City</td>
                  <td>Profit</td>
                </tr>
              </thead>
              <tbody>
                {apidata4.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.location}</td>
                      <td>{item.city}</td>
                      <td>{item.profit}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={2}>Total</td>
                  <td>{tprofit}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
        <Col>
          <div className="box61">
            <div className="box7">
              <div className="map">
                <Container>
                  <ComposableMap>
                    <ZoomableGroup zoom={1}>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                          ))
                        }
                      </Geographies>
                      {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                          <circle
                            r={10}
                            fill="#f00"
                            stroke="#fff"
                            strokeWidth={2}
                          />
                          <text
                            textAnchor="middle"
                            y={markerOffset}
                            style={{ fontFamily: "georgia", fill: "#5D5A6D" }}
                          >
                            {name}
                          </text>
                        </Marker>
                      ))}
                    </ZoomableGroup>
                  </ComposableMap>
                </Container>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Container>
        <Row>
          <Col>
            <div className="box61">
              <div className="box7">
                <span className="fff">Sale Purchase Chart</span>
                <Chart
                  options={{
                    chart: {
                      id: "basic-bar",
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: "stepline",
                    },
                    fill: {
                      colors: ["#0000ff", "#00acc1", "#9C27B0"],
                    },
                    xaxis: {
                      categories: category1,
                    },
                  }}
                  series={[
                    {
                      color: "#0000ff",
                      name: "Sale",
                      data: data4,
                    },
                    {
                      color: "#00acc1",
                      name: "Purchase",
                      data: data5,
                    },
                  ]}
                  type="area"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="box61">
              <div className="box7">
                <span className="fff">Hiring Firing Chart</span>
                <Chart
                  options={{
                    chart: {
                      id: "basic-bar",
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    fill: {
                      colors: ["#0000ff", "#00acc1", "#9C27B0"],
                    },
                    xaxis: {
                      categories: category1,
                    },
                  }}
                  series={[
                    {
                      color: "#0000ff",
                      name: "Hiring",
                      data: data2,
                    },
                    {
                      color: "#00acc1",
                      name: "Firing",
                      data: data3,
                    },
                  ]}
                  type="bar"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="box61">
              <div className="box7">
                <span className="fff">Sectors Holding In This Online Fund</span>
                <Table striped bordered hover size="sm" className="bot14">
                  <tbody>
                    <tr>
                      <td>Layzoo Ltd</td>
                      <td>
                        {" "}
                        <div
                          className="progress"
                          style={{ width: "150px", height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "94.11%" }}
                            aria-valuenow="94.11%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            94.11%
                          </div>
                        </div>
                      </td>
                      <td>Rs{tlayzoo}</td>
                    </tr>
                    <tr>
                      <td>NightBlink Ltd</td>
                      <td>
                        {" "}
                        <div
                          className="progress"
                          style={{ width: "150px", height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "98.91%" }}
                            aria-valuenow="98.91%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            98.91%
                          </div>
                        </div>
                      </td>
                      <td>Rs{tnightblink}</td>
                    </tr>
                    <tr>
                      <td>Lcyflame Ltd</td>
                      <td>
                        {" "}
                        <div
                          className="progress"
                          style={{ width: "150px", height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "77.96%" }}
                            aria-valuenow="77.96%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            77.96%
                          </div>
                        </div>
                      </td>
                      <td>Rs{tlcyflame}</td>
                    </tr>
                    <tr>
                      <td>Feelopie Services Ltd</td>
                      <td>
                        {" "}
                        <div
                          className="progress"
                          style={{ width: "150px", height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "86.40%" }}
                            aria-valuenow="86.40%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            86.40%
                          </div>
                        </div>
                      </td>
                      <td>Rs{tfeelopie}</td>
                    </tr>
                    <tr>
                      <td>Grofler Ltd</td>
                      <td>
                        {" "}
                        <div
                          className="progress"
                          style={{ width: "150px", height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "67.22%" }}
                            aria-valuenow="67.22%"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            67.22%
                          </div>
                        </div>
                      </td>
                      <td>Rs{tgrofler}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
          <Col>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Chairman;
