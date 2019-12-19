import React from "react";

import { SquareLoader } from 'react-spinners';

function Loading() {
    return (
        <div className="text-center" style={{ width: '100%' }}>
            <SquareLoader
                sizeUnit={"px"}
                size={35}
                color={'#6f42c1'}
                loading={true}
            />
        </div>
    );
}

export default Loading;