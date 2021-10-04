import React from 'react';
import CountUp from 'react-countup';
import'./OnlineLesson.css';

const OnlineLesson = () => {
    return (
        <div className="online-study">
            <h1>online <span>lesson</span></h1>
            <div className="section-container">
                <div className="section-text">
                <h3>Find Best</h3>
                <h2>Tutors Anywhere</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi mollitia aspernatur optio libero saepe numquam ipsum sapiente sed, aut praesentium, consectetur illum eum eos modi accusantium ab totam beatae! Molestiae quam reiciendis deleniti iure blanditiis nostrum, accusamus ad facere, doloremque voluptatem autem, quisquam sed fuga. Inventore necessitatibus cumque iusto obcaecati adipisci dolore quos provident minima numquam quasi excepturi unde magni cum ipsam corporis culpa eius, eos explicabo quaerat doloremque incidunt atque totam? Adipisci perspiciatis vel nesciunt modi, vitae delectus possimus libero unde iure nemo est, eligendi sint? Vero qui aliquam molestiae nesciunt, blanditiis consequatur consequuntur laudantium beatae, eum voluptate veritatis! Nam, fugiat dicta omnis doloribus eos ullam quaerat repellendus est corporis quis, architecto culpa eaque? At corrupti deleniti tempora officiis atque sint mollitia neque id cupiditate quam maiores, nihil similique molestias natus commodi nisi necessitatibus quasi ducimus rem nam sed architecto. Voluptate nemo commodi ea maxime vitae facere modi.</p>
                </div>
                <div className="campus-popultion">
                    <div style={{textAlign:"center"}} className="tutor">
                        <div className="counting-number">
                            <CountUp end={712} duration = {2} />
                        </div>
                        <h3 className="person-title">Great Tutors</h3>
                    </div>
                    <div style={{textAlign:"center"}} className="students">
                    <div className="counting-number">
                            <CountUp end={2730} duration = {2} />
                        </div>
                        <h3 className="person-title">Clever Students</h3>
                    </div>
                    <div style={{textAlign:"center"}} className="staff">
                    <div className="counting-number">
                            <CountUp end={550} duration = {2} />
                        </div>
                        <h3 className="person-title">Helpful Staff</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineLesson;