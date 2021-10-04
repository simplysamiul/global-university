import React from 'react';
import success from '../../../resource/images/success.jpeg';
import SuccessChart from '../SuccessChart/SuccessChart';
import './SuccessBody.css';

const SuccessBody = () => {
    return (
        <div>
            <div className="success-header">
                <img src={success} alt="" />
            </div>
            <div className="success-body">
                <h3>Failure - History</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi adipisci commodi est fuga eaque, voluptate cum doloremque nobis, sapiente aut animi aliquid modi nulla necessitatibus saepe. Illo tempore minima voluptatibus qui doloremque voluptate id magnam ea dolores nisi, maiores dicta minus debitis et. Autem quisquam, quae deleniti placeat maxime consequuntur fugiat sequi adipisci aut rerum enim obcaecati perspiciatis voluptates eaque beatae ad cupiditate neque eum incidunt sint asperiores modi aliquid repellat quia. Ad maiores assumenda facere qui delectus illo sint exercitationem fugiat alias, minima, molestiae quibusdam eum quis, consequuntur excepturi id? Perferendis, corrupti ullam. Optio expedita nobis cum eligendi deserunt!</p>
                <SuccessChart />
            </div>
        </div>
    );
};

export default SuccessBody;