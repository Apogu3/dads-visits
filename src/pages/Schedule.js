import React from 'react';
import Calendar from  "../components/calendar/Calendar";
import Sidebar from "../components/sidebar/Sidebar";

const Schedule = () => {
  return (
    <>
    <div className="container-fluid box-content">
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <Sidebar />
                        <Calendar />
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
  );
};

export default Schedule;