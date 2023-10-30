import { useParams, useNavigate } from "react-router-dom";
import { timeSheets } from "../jsonData/timeSheet";
import dayJs from "dayjs"
import { useEffect, useState } from "react";


function TimeSheet() {
    const { id } = useParams()
    const navigate = useNavigate();


    const [selectedMonth, setSelectedMonth] = useState<string>()
    const month:{ label: string; value: string }[]  = [{
        label: "January",
        value: "01"
    }, {
        label: "February",
        value: "02"
    }, {
        label: "March",
        value: "03"
    }, {
        label: "April",
        value: "04"
    }, {
        label: "May",
        value: "05"
    }, {
        label: "June",
        value: "06"
    }, {
        label: "July",
        value: "07"
    }, {
        label: "August",
        value: "08"
    }, {
        label: "September",
        value: "09"
    }, {
        label: "October",
        value: "10"
    }, {
        label: "November",
        value: "11"
    }, {
        label: "December",
        value: "12"
    },]

    const onSelect = (e: string) => {
        setSelectedMonth(e);
    }

    const result = timeSheets.filter((item) => item?.userId === id)



    return <>
        <div className="container p-4">
            <div className="row p-2"><div className="col-lg-5"><h5>Time-Sheet</h5></div>
                <div className="col-lg-2">  <select className="form-select" onChange={(e) => { onSelect(e.target.value) }}>
                    <option value="">Select Month</option>
                    {month?.map((item, index) => <option value={item?.value} key={index}>{item?.label}</option>)}

                </select></div>
                <div className="col-lg-5 text-lg-end"><button onClick={() => { navigate(-1) }} className="btn btn-primary">Back</button>

                </div></div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Assessment</th>
                        <th scope="col">Break Minutes</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Note</th>
                        <th scope="col">Status</th>
                        <th scope="col">Location Checked</th>
                        <th scope="col">Approval Person ID</th>
                        <th scope="col">Company ID</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedMonth ? 
                        result?.map((timeSheet, index) => {
                            if (selectedMonth === dayJs(timeSheet.startTime).format("MM")) {
                                return (<><tr>
                                    <td>{timeSheet.userId || "-"}</td>
                                    <td>{timeSheet.assessment || "-"}</td>
                                    <td>{timeSheet.breakMinutes || "00:00"}</td>
                                    <td>{timeSheet.minutes || "00"}</td>
                                    <td>{dayJs(timeSheet.startTime).format('DD-MM-YYYY HH:mm:ss') || "00:00"}</td>
                                    <td>{dayJs(timeSheet.endTime).format('DD-MM-YYYY HH:mm:ss') || "00:00"}</td>
                                    <td>{timeSheet.note || "-"}</td>
                                    <td>{timeSheet.status || "-"}</td>
                                    <td>{timeSheet.locationChecked || "-"}</td>
                                    <td>{timeSheet.approvalPersonId || "-"}</td>
                                    <td>{timeSheet.companyId || "-"}</td>
                                </tr></>)
                            }
                        }) : result?.map((timeSheet, index) => 
                            (<><tr>
                                    <td>{timeSheet.userId || "-"}</td>
                                    <td>{timeSheet.assessment || "-"}</td>
                                    <td>{timeSheet.breakMinutes || "00:00"}</td>
                                    <td>{timeSheet.minutes || "00"}</td>
                                    <td>{dayJs(timeSheet.startTime).format('DD-MM-YYYY HH:mm:ss') || "00:00"}</td>
                                    <td>{dayJs(timeSheet.endTime).format('DD-MM-YYYY HH:mm:ss') || "00:00"}</td>
                                    <td>{timeSheet.note || "-"}</td>
                                    <td>{timeSheet.status || "-"}</td>
                                    <td>{timeSheet.locationChecked || "-"}</td>
                                    <td>{timeSheet.approvalPersonId || "-"}</td>
                                    <td>{timeSheet.companyId || "-"}</td>
                                </tr></>)
                            
                        )
                    }
                </tbody>
            </table>
        </div>
    </>

}
export default TimeSheet;